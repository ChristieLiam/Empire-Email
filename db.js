const mysql = require('mysql');

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'email_service',
});

/**
 * Establish a connection to the database
 */
function db_connect() {
    db.connect((connectErr) => {
        if (connectErr) throw connectErr;
        console.log('Connected successfully.');
    });
}

/**
 * Add a new user to the system
 * - Inserts user info into `user_info` table
 * - Then inserts the hashed password into `login` table using the generated user ID
 */
function db_adduser(fname, lname, email, phone, dob, pswdHash) {
    let query = 'INSERT INTO user_info (first_name, last_name, email, phone_number, date_of_birth) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [fname, lname, email, phone, dob], (err, results) => {
        if (err) {
            console.error('Error inserting user info:', err.stack);
            return;
        }

        let userID = results.insertId;

        query = 'INSERT INTO login (user_id, password) VALUES (?, ?)';
        db.query(query, [userID, pswdHash], (err) => {
            if (err) {
                console.error('Error inserting login data:', err.stack);
            }
        });
    });
}

/**
 * Check if login credentials are valid
 * - Retrieves user ID using email
 * - Then checks if the hashed password matches what's stored in `login` table
 * @returns {Promise<boolean>}
 */
function db_verifyLogin(email, pswdHash) {
    return new Promise((resolve, reject) => {
        let query = 'SELECT user_id FROM user_info WHERE email = ?';

        db.query(query, [email], (err, results) => {
            if (err) {
                console.error('Error getting user id', err.stack);
                reject(false);
                return;
            }
            if (results.length === 0) {
                resolve(false);
                return;
            }

            let userID = results[0].user_id;

            query = 'SELECT password FROM login WHERE user_id = ?';
            db.query(query, [userID], (err, results) => {
                if (err) {
                    console.error('Error getting password', err.stack);
                    reject(false);
                    return;
                }

                if (results.length === 0) {
                    reject(false);
                    return;
                }

                resolve(results[0].password === pswdHash);
            });
        });
    });
}

/**
 * Cleanly disconnect from the database
 */
function db_disconnect() {
    db.end((err) => {
        if (err) {
            console.error('Error ending the connection:', err.stack);
            return;
        }
        console.log('Connection closed');
    });
}

/**
 * Get the user ID from their email
 * @returns {Promise<number|null>}
 */
function get_id(email) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT user_id FROM user_info WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) {
                console.error('Error fetching user ID:', err.stack);
                reject(null);
            } else if (results.length > 0) {
                resolve(results[0].user_id);
            } else {
                resolve(null);
            }
        });
    });
}

/**
 * Get emails received by the user
 * (i.e., where the user is the *recipient*)
 * @param email User's email
 * @param callback Function to handle results
 */
function get_sent_emails(email, callback) {
    let query = 'SELECT user_id FROM user_info WHERE email = ?';

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error fetching user ID:', err.stack);
            return callback(err, null);
        }

        if (!results || results.length === 0) {
            return callback(new Error("User not found"), null);
        }

        let userID = results[0].user_id;

        query = `SELECT e.id AS email_id,
                        u1.first_name AS sender_fname,
                        u1.email AS sender_email,
                        u2.first_name AS recipient_fname,
                        u2.email AS recipient_email,
                        e.subject,
                        e.body AS message,
                        e.timestamp
                 FROM emails e
                          JOIN user_info u1 ON e.sender_id = u1.user_id
                          JOIN user_info u2 ON e.recipient_id = u2.user_id
                 WHERE e.recipient_id = ?;`;

        db.query(query, [userID], (err, emailResults) => {
            if (err) {
                console.error('Error fetching emails:', err.stack);
                return callback(err, null);
            }
            return callback(null, emailResults);
        });
    });
}

/**
 * Get emails sent *by* the user
 * (i.e., where the user is the *sender*)
 * @param email User's email
 * @param callback Function to handle results
 */
function get_received_emails(email, callback) {
    let query = 'SELECT user_id FROM user_info WHERE email = ?';

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error fetching user ID:', err.stack);
            return callback(err, null);
        }

        if (!results || results.length === 0) {
            return callback(new Error("User not found"), null);
        }

        let userID = results[0].user_id;

        query = `SELECT e.id AS email_id,
                        u1.first_name AS sender_fname,
                        u1.email AS sender_email,
                        u2.first_name AS recipient_fname,
                        u2.email AS recipient_email,
                        e.subject,
                        e.body AS message,
                        e.timestamp
                 FROM emails e
                          JOIN user_info u1 ON e.sender_id = u1.user_id
                          JOIN user_info u2 ON e.recipient_id = u2.user_id
                 WHERE e.sender_id = ?;`;

        db.query(query, [userID], (err, emailResults) => {
            if (err) {
                console.error('Error fetching emails:', err.stack);
                return callback(err, null);
            }
            return callback(null, emailResults);
        });
    });
}

/**
 * Send an email from one user to another
 * @param sender Sender's user_id
 * @param recipient Recipient's user_id
 * @param subject Email subject
 * @param message Email message body
 */
async function send_email(sender, recipient, subject, message) {
    try {
        const query = 'INSERT INTO emails (sender_id, recipient_id, subject, body) VALUES (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [sender, recipient, subject, message], (err, results) => {
                if (err) {
                    console.error('Error sending email:', err.stack);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    } catch (error) {
        console.error("Error in send_email:", error);
        throw error;
    }
}

// Export all functions to be used in other files
module.exports = {
    db_connect,
    db_adduser,
    db_verifyLogin,
    db_disconnect,
    get_sent_emails,
    get_received_emails,
    send_email,
    get_id
};
