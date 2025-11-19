# Empire Email — Full-Stack Webmail Client

## This Version Of The Email Service Is Being Overhauled  |  Site may not be fully functional.

#### What to expecet...

* Updated Design
* New Pages
* New Options
* New Menus
* Esseantily a Full Redsign and more

  I will add more features as I develop them. (They will come to mind)


---

Anything Below this point may be changed on the fly... site may not be fully functional upon use.

## Features

### Secure User Authentication
- Full registration and login system  
- Passwords hashed using Node.js crypto module (SHA-256)

### Session Management
- Persistent, secure login state using express-session

### Email Functionality
- Compose and send emails to other registered users  
- Inbox and Sent Items pages  
- Database-validated email storage and retrieval

### Database-Driven Architecture
- MySQL relational database storing:
  - Users
  - Login credentials
  - Email messages

### Modular Codebase
- db.js for all database operations  
- server.js for routing and server setup  
- views/ for all HTML files (login, register, dashboard, etc.)

---

## Technologies Used

| Layer | Technologies |
|-------|--------------|
| Back-End | Node.js, Express, MySQL |
| Front-End | HTML5, Bootstrap, Vanilla JavaScript (Fetch API) |
| Authentication | Express-Session, Node.js Crypto (SHA-256) |

---

## Setup & Installation

### Prerequisites
- Node.js (LTS recommended)  
- MySQL server running locally  

---

## Steps to Run Locally

### Step 1: Clone the repository

    git clone https://github.com/ChristieLiam/Empire-Email.git

### Step 2: Navigate into the project directory

    cd Empire-Email

### Step 3: Install dependencies

    npm install

This installs express, mysql, express-session, and other required packages.

### Step 4: Configure the MySQL database

1. Make sure MySQL is running.  
2. Create a new database:

        CREATE DATABASE email_service;

3. Update the MySQL connection details in db.js (host, user, password).  
4. Import the provided SQL dump located at:

        assets/bootstrap/sql/db_dump.sql

This file creates all required tables (user_info, login, emails) and inserts demo accounts.

### Step 5: Start the server

    node server.js

### Step 6: Open the application
Visit in your browser:

    http://localhost:8000

---

## Demo Accounts

These accounts are included in the SQL dump for testing:

| Email | Password |
|-------|----------|
| luke.skywalker@starwars.com | farmB0y$ |
| leia.organa@starwars.com | H3!pMe0b1Wan |
| han.solo@starwars.com | N3v3rT3llM3Th30dds |
| chewbacca@starwars.com | R0@rrrRgh! |
| obiwan.kenobi@starwars.com | H1ghGr0und123 |
| anakin.skywalker@starwars.com | 1Hat3$and |
| c3po@starwars.com | 0v3r9000F0rm$ |
| r2d2@starwars.com | b333pB0o0P$ |
| darth.vader@starwars.com | 1Hat3$and |
| palpatine@starwars.com | Unl!mt3dP0w3r |
| boba.fett@starwars.com | F3@rl3$$Hunt3r |
| lando.calrissian@starwars.com | Sm00thC@rdD34l3r |
| mace.windu@starwars.com | Purpl3S@b3r! |
| yoda@starwars.com | D0orD0N0t_Th3r3!sN0Try |
| quigon.jinn@starwars.com | 0n3W1thTh3FOrc3 |

(Note: Anakin and Vader share the same password.)

---

## File Structure

    Empire-Email/
    ├── assets/
    │   └── bootstrap/
    │       └── sql/
    │            ├── db_dump.sql
    │            └── db_dump_sql.zip
    ├── views/
    │   ├── error.html
    │   ├── index.html
    │   ├── login_page.html
    │   ├── register_page.html
    │   └── welcome_page.html
    ├── db.js
    ├── server.js
    └── README.md

---

## Explanation of Structure

- views/ – HTML pages used by the application (login, register, home, error, etc.)  
- assets/ – Bootstrap and SQL directories for styling and database setup  
- db.js – MySQL connection and all database methods  
- server.js – Express server configuration and routing  
- README.md – Project documentation  

This file structure ensures clean separation of concerns, strong organization, and easy maintenance.

---

## Future Improvements

- Password reset functionality  
- SMTP integration for real outbound email  
- User settings page  
- Search and filtering of emails  
- Optional dark mode  
