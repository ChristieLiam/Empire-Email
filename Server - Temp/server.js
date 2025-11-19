const fs = require("fs");
const crypto = require('crypto');
const express = require('express');
const session = require('express-session');

// Load database module
const db = require("./db");

// Load HTML templates
const main_page = fs.readFileSync(`views/index.html`, "utf-8");
const login_page = fs.readFileSync(`views/login_page.html`, "utf-8");
const welcome_page = fs.readFileSync(`views/welcome_page.html`, "utf-8");
const register_page = fs.readFileSync(`views/register_page.html`, "utf-8");
const error_page = fs.readFileSync(`views/error.html`, "utf-8");
const send_email_page = fs.readFileSync(`views/send_email.html`, "utf-8");

// Create Express app
const app = express();

// Configure session middleware
app.use(session({
    secret: 'Figure This Out', // TODO: Replace with secure secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Note: secure should be true if using HTTPS
}));

// Parse incoming JSON
app.use(express.json());

// Set server details
const port = 8000;
const host = "localhost";

// Connect to the database
db.db_connect();

// Route for user registration
app.post('/register', (req, res) => {
    let { fname, lname, email, phone, dob, pswd } = req.body;

    // Hash the password using SHA-256
    const hash = crypto.createHash('sha256');
    hash.update(pswd);
    const pswdHash = hash.digest('hex');

    // Add user to the database
    db.db_adduser(fname, lname, email, phone, dob, pswdHash);

    res.status(200).json({ message: 'Registration successful!' });
});

// Route for user login
app.post('/login', (req, res) => {
    let { email, pswd } = req.body;

    // Hash the provided password
    const hash = crypto.createHash('sha256');
    hash.update(pswd);
    const pswdHash = hash.digest('hex');

    // Verify login credentials
    db.db_verifyLogin(email, pswdHash).then(async isValid => {
        if (isValid) {
            const loginTime = new Date().toLocaleString();

            // Store session info
            req.session.loggedIn = true;
            req.session.user_email = email;
            req.session.last_login = loginTime;

            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(400).json({ message: 'Incorrect username or password.' });
        }
    }).catch(() => {
        res.status(400).json({ message: 'Error during login' });
    });
});

// Route for logging out
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error logging out.' });
        }

        res.status(200).json({ message: 'Logout successful.' });
    });
});

// Route to send an email
app.post('/home/send', async (req, res) => {
    let { recipient_email, subject, body } = req.body;
    let sender_email = req.session.user_email;

    // Retrieve sender and recipient IDs
    const sender_id = await db.get_id(sender_email);
    const recipient_id = await db.get_id(recipient_email);

    // Check if both sender and recipient exist in the system
    if (!sender_id) {
        return res.status(400).json({ message: 'Sender Email Is Not Within Company Database.' });
    } else if (!recipient_id) {
        return res.status(400).json({ message: 'Recipient Email Is Not Within Company Database.' });
    } else {
        db.send_email(sender_id, recipient_id, subject, body);
    }

    res.status(200).json({ message: 'Sending email...' });
});

// Helper function to check if user is logged in
const isLoggedIn = (req) => req.session.loggedIn;

// Homepage route
app.get('/', (req, res) => {
    if (isLoggedIn(req)) {
        res.send(main_page);
    } else {
        res.send(welcome_page);
    }
});

// Login page route
app.get('/login', (req, res) => {
    res.send(login_page);
});

// Registration page route
app.get('/register', (req, res) => {
    res.send(register_page);
});

// Authenticated user's home dashboard
app.get('/home', async (req, res) => {
    if (isLoggedIn(req)) {
        const innerHTML = `
            <h1 id="welcome-message">Welcome to Your Email</h1>
            <p id="last-login-message">You last logged in on: ${req.session.last_login}</p>
            <br><br>
            <h4>This platform is for intra-company communication only (i.e., you can only communicate with those who serve the empire). All email addresses must be in our database; otherwise, you will not be able to send an email.</h4>
        `;

        let updated_main_page = main_page.replace(`<div id="switchMeOut"></div>`, innerHTML);
        res.send(updated_main_page);
    } else {
        res.send(welcome_page);
    }
});

// Inbox view
app.get('/home/inbox', (req, res) => {
    if (!isLoggedIn(req)) {
        return res.send(welcome_page);
    }

    const email = req.session.user_email;

    // Fetch emails received by user
    db.get_sent_emails(email, (err, emails) => {
        if (err) {
            console.error('Error fetching emails:', err);
            return res.status(500).json({ message: 'Error fetching emails.' });
        }

        let innerHTML = `
            <h2 class="text-primary">Inbox</h2>
            <table class="table table-hover table-striped align-middle rounded-3 overflow-hidden" style="border: 1px solid #dee2e6; border-collapse: separate; border-spacing: 0;">
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Recipient</th>
                        <th>Subject</th>
                        <th>Body</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>`;

        emails.forEach(email => {
            innerHTML += `
                <tr>
                    <td>${email.sender_fname} (${email.sender_email})</td>
                    <td>${email.recipient_fname} (${email.recipient_email})</td>
                    <td>${email.subject}</td>
                    <td>${email.message}</td>
                    <td>${email.timestamp}</td>
                </tr>`;
        });

        innerHTML += `</tbody></table>`;

        let updated_main_page = main_page.replace(`<div id="switchMeOut"></div>`, innerHTML);
        res.send(updated_main_page);
    });
});

// Sent emails view
app.get('/home/sent', (req, res) => {
    if (!isLoggedIn(req)) {
        return res.send(welcome_page);
    }

    const email = req.session.user_email;

    // Fetch emails sent by user
    db.get_received_emails(email, (err, emails) => {
        if (err) {
            console.error('Error fetching emails:', err);
            return res.status(500).json({ message: 'Error fetching emails.' });
        }

        let innerHTML = `
            <h2 class="text-primary">Sent Emails</h2>
            <table class="table table-hover table-striped align-middle text-center rounded-3 overflow-hidden" style="border: 1px solid #dee2e6; border-collapse: separate; border-spacing: 0;">
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Recipient</th>
                        <th>Subject</th>
                        <th>Body</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>`;

        emails.forEach(email => {
            innerHTML += `
                <tr>
                    <td>${email.sender_fname} (${email.sender_email})</td>
                    <td>${email.recipient_fname} (${email.recipient_email})</td>
                    <td>${email.subject}</td>
                    <td>${email.message}</td>
                    <td>${email.timestamp}</td>
                </tr>`;
        });

        innerHTML += `</tbody></table>`;

        let updated_main_page = main_page.replace(`<div id="switchMeOut"></div>`, innerHTML);
        res.send(updated_main_page);
    });
});

// Compose email page
app.get('/home/send', (req, res) => {
    if (!isLoggedIn(req)) {
        return res.send(welcome_page);
    }

    let updated_main_page = main_page.replace(
        `<div id="switchMeOut"></div>`, send_email_page
    );
    res.send(updated_main_page);
});

// Catch-all 404 error handler
app.use((req, res) => {
    res.status(404).send(error_page);
});

// Start the server
app.listen(port, host, () => {
    console.log(`Listening on port http://${host}:${port}`);
});

// Gracefully handle shutdown
process.on('SIGINT', () => {
    db.db_disconnect();
    process.exit();
});
