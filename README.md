# Assignment 4 - Email Application CSCI2170

**Name:** Liam Christie  
**Banner-ID:** B00968728  
**Date:** March 28, 2025  
**Version** Final Version

## Application Name and Description

**Application Name:** EMPIRE EMAIL

**Description:** 
Empire Email is a simple yet powerful email management application designed for seamless communication and easy access to email services. 
Whether you're looking to send, receive, or manage emails, this application offers an intuitive and user-friendly interface to enhance your email experience.


---

## Steps to Set Up and Run the Application

#### Step 1: Register An Account by navigating to the register button on the welcome page.
#### Step 2: After successfully creating an account you will be sent to the login page, please enter the email and password that you choose when you created your account
#### Step 3: After logging in you will be sent to the home page from there you can navigate to: Inbox, Sent Emails, Send A Email
#### Inbox:   Shows you all the messages you have received 
#### Sent:  Shows you all the emails you sent.
#### Send:  Send email is where you go to send an email.

#### Important Note: you can only send emails to other people in the database meaning they must have an account w Empire Email to send emails to them.

---

## Demo Created Accounts

### Explanation
I created these demo accounts for testing purposes.
Along with the accounts I have included sets of emails between certain accounts.
These are all in the db_dump.sql and will be ready for use upon setup.

Feel free to check some of them out!

### Accounts

* **Email:** ```luke.skywalker@starwars.com``` **Password:** ``` farmB0y$ ```
* **Email:** ```leia.organa@starwars.com``` **Password:** ``` H3!pMe0b1Wan ```
* **Email:** ```han.solo@starwars.com``` **Password:** ``` N3v3rT3llM3Th30dds ```
* **Email:** ```chewbacca@starwars.com``` **Password:** ``` R0@rrrRgh! ```
* **Email:** ```obiwan.kenobi@starwars.com``` **Password:** ``` H1ghGr0und123 ```
* **Email:** ```anakin.skywalker@starwars.com``` **Password:** ``` 1Hat3$and ```
* **Email:** ```c3po@starwars.com``` **Password:** ``` 0v3r9000F0rm$ ```
* **Email:** ```r2d2@starwars.com``` **Password:** ``` b333pB0o0P$ ```
* **Email:** ```darth.vader@starwars.com``` **Password:** ``` 1Hat3$and ```
* **Email:** ```palpatine@starwars.com``` **Password:** ``` Unl!mt3dP0w3r ```
* **Email:** ```boba.fett@starwars.com``` **Password:** ``` F3@rl3$$Hunt3r ```
* **Email:** ```lando.calrissian@starwars.com``` **Password:** ``` Sm00thC@rdD34l3r ```
* **Email:** ```mace.windu@starwars.com``` **Password:** ``` Purpl3S@b3r! ```
* **Email:** ```yoda@starwars.com``` **Password:** ``` D0orD0N0t_Th3r3!sN0Try ```
* **Email:** ```quigon.jinn@starwars.com```**Password:** ``` 0n3W1thTh3FOrc3 ```

That's odd Anakin and Vader have the same password..... wonder why!?

---

## File Structure
```
lchristie/
├── assets/
│   └── bootstrap/
│       └──  sql/
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
```
The chosen file structure for the Empire Email application is designed to maintain organization, scalability, and clarity. 
The views/ folder houses all the HTML files for different pages, making it easy to manage and update specific views like the login, registration, and home pages. 
The assets/ folder organizes external libraries, including Bootstrap, and stores database-related files like SQL dumps in a dedicated db/ subfolder, ensuring clear separation between code, resources, and data. 
The db.js file handles database interactions, allowing for a modular and maintainable backend, while server.js serves as the entry point for the Node.js server, managing routes and server configurations. Lastly, the README.md provides essential documentation for developers and users, enhancing project understanding and collaboration. 
This structure ensures the project remains well-organized, easy to navigate, and adaptable for future updates or extensions.








