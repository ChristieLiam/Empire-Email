CREATE DATABASE IF NOT EXISTS email_service; USE email_service;

CREATE TABLE IF NOT EXISTS user_info (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(15) NULL,
    date_of_birth DATE NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS login (
    login_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user_info(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS emails(
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    recipient_id INT NOT NULL,
    subject TEXT NOT NULL,
    body  TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(sender_id) REFERENCES user_info(user_id) ON DELETE CASCADE,
    FOREIGN KEY(recipient_id) REFERENCES user_info(user_id) ON DELETE CASCADE
);

-- Insert Star Wars character accounts into the user_info table

INSERT INTO user_info (first_name, last_name, email, phone_number, date_of_birth) VALUES
                                                                                      ('Luke', 'Skywalker', 'luke.skywalker@starwars.com', '123-456-7890', '19 BBY'),
                                                                                      ('Leia', 'Organa', 'leia.organa@starwars.com', '123-456-7891', '19 BBY'),
                                                                                      ('Han', 'Solo', 'han.solo@starwars.com', '123-456-7892', '29 BBY'),
                                                                                      ('Chewbacca', 'Wookiee', 'chewbacca@starwars.com', '123-456-7893', '200 BBY'),
                                                                                      ('Obi-Wan', 'Kenobi', 'obiwan.kenobi@starwars.com', '123-456-7894', '57 BBY'),
                                                                                      ('Anakin', 'Skywalker', 'anakin.skywalker@starwars.com', '123-456-7895', '41 BBY'),
                                                                                      ('C-3PO', 'Protocol', 'c3po@starwars.com', '123-456-7898', '32 BBY'),
                                                                                      ('R2-D2', 'Astromech', 'r2d2@starwars.com', '123-456-7897', '33 BBY'),
                                                                                      ('Darth', 'Vader', 'darth.vader@starwars.com', '123-456-7899', '41 BBY'),
                                                                                      ('Palpatine', 'Emperor', 'palpatine@starwars.com', '123-456-7800', '84 BBY'),
                                                                                      ('Boba', 'Fett', 'boba.fett@starwars.com', '123-456-7801', '31 BBY'),
                                                                                      ('Lando', 'Calrissian', 'lando.calrissian@starwars.com', '123-456-7802', '31 BBY'),
                                                                                      ('Mace', 'Windu', 'mace.windu@starwars.com', '123-456-7803', '72 BBY'),
                                                                                      ('Yoda', 'Jedi', 'yoda@starwars.com', '123-456-7896', '896 BBY'),
                                                                                      ('Qui-Gon', 'Jinn', 'quigon.jinn@starwars.com', '123-456-7804', '92 BBY');

-- Insert sample emails between Star Wars characters
INSERT INTO emails (sender_id, recipient_id, subject, body) VALUES
                                                                (1, 2, 'Help with the Death Star', 'Leia, I need your help to destroy the Death Star. It\'s our only hope. - Luke'),
                                                                (2, 1, 'Re: Help with the Death Star', 'Luke, I\'m on it. We\'ll take down the Empire together. - Leia'),
                                                                (3, 4, 'Thank You for Your Help', 'Chewie, thanks for rescuing me from Jabba. Let\'s make sure we stay out of trouble. - Han'),
                                                                (4, 3, 'Re: Thank You for Your Help', 'Han, it was nothing. Always happy to help. - Chewie'),
                                                                (5, 6, 'The Chosen One', 'Anakin, the council believes you may be the Chosen One. Be mindful of the Force. - Obi-Wan'),
                                                                (6, 5, 'Re: The Chosen One', 'Obi-Wan, I will do whatever it takes to protect the Republic. - Anakin'),
                                                                (7, 8, 'New Mission', 'R2, I need you to help me with the coordinates for the mission. I\'ll meet you at the hangar. - C-3PO'),
                                                                (8, 7, 'Re: New Mission', 'C-3PO, I will be ready for our mission. Don\'t forget the coordinates. - R2-D2'),
                                                                (10, 9, 'New Orders', 'Darth Vader, the Emperor has given new orders. Proceed with caution. - Palpatine'),
                                                                (9, 10, 'Re: New Orders', 'Palpatine, I will carry out your orders without question. - Darth Vader'),
                                                                (11, 12, 'Greetings from Tatooine', 'Lando, I trust you are doing well. The situation on Tatooine is volatile. - Boba Fett'),
                                                                (12, 11, 'Re: Greetings from Tatooine', 'Boba Fett, I\'m keeping an eye on things. We need to act fast. - Lando'),
                                                                (15, 13, 'A Jedi’s Duty', 'Mace, we must discuss the plans for the battle against the Sith. - Qui-Gon'),
                                                                (13, 15, 'Re: A Jedi’s Duty', 'Qui-Gon, I am ready. The Sith will not win. - Mace Windu'),
                                                                (1, 4, 'Need Help with Han Solo', 'Chewie, Han is being reckless again. Can you talk some sense into him? - Luke'),
                                                                (4, 1, 'Re: Need Help with Han Solo', 'Luke, don\'t worry. Han and I have everything under control. - Chewie'),
                                                                (6, 8, 'Your Assistance is Needed', 'R2, I need your help to escape from the Clone Wars. Meet me at the coordinates. - Anakin'),
                                                                (8, 6, 'Re: Your Assistance is Needed', 'Anakin, I\'ll be there shortly. Stay safe. - R2-D2'),
                                                                (5, 9, 'The Dark Side\'s Influence', 'Darth Vader, be cautious of the Dark Side. Do not fall into its trap. - Obi-Wan'),
                                                                (9, 5, 'Re: The Dark Side\'s Influence', 'Obi-Wan, I\'ve already embraced the Dark Side. You cannot stop me. - Darth Vader'),
                                                                (1, 14, 'Seeking Wisdom', 'Master Yoda, I need your guidance. The path ahead is unclear, and I must learn to control the Force. - Luke'),
                                                                (14, 1, 'Re: Seeking Wisdom', 'Luke, patience you must have. The Force will guide you, but first, learn to listen to it. - Yoda'),
                                                                (13, 14, 'The Jedi Council', 'Mace, we must be cautious. The Dark Side grows stronger, and the Republic is in danger. - Yoda'),
                                                                (14, 13, 'Re: The Jedi Council', 'Yoda, I sense it too. The Council will convene soon. We must prepare for the battle ahead. - Mace Windu');

-- Insert passwords for accounts
INSERT INTO `login` (`login_id`, `user_id`, `password`) VALUES
    (1, 1, '2d3d37ddb1492ae9b8171bbda70a69755eaab0286bfdcd15aa8abc6b12b1214f'),
    (2, 2, 'dfa0e5e7d644dcfa9a5f2e4d5f25a978ce2faac70f6600e53313a5af8d9a2c90'),
    (3, 3, 'a397aa7abf2b5fc009be4baba0a849b05920305ea82cc245f249665459b83502'),
    (4, 4, '9364273f93e87e4462df85c98ad6a10bff9b05f9fb161030a93d77b861743bda'),
    (5, 5, 'baa78c8cede50072768fda3bda104040054eb7f814230a5c007ed522796a9a4e'),
    (6, 6, '18bb697ba6a5e6d7dbb1759b77d3cdf0603c0574e20f1943b80c15365f7cfc36'),
    (7, 7, '08a34cef7bb8aa040b34ba08fed214be32dffda968752aa5596372423f3b4847'),
    (8, 8, '6794a9c1db0e725bc9e9df29cbf9845b2edaa1bd49ce0d5174007b2b30502cd6'),
    (9, 9, '18bb697ba6a5e6d7dbb1759b77d3cdf0603c0574e20f1943b80c15365f7cfc36'),
    (10, 10, '624f44ba039b9838f12514914c8490646ea06f032e61433f9bb8c640b5fad58e'),
    (11, 11, 'bbd70fee3c52dd587e5ea482bf4333afdc7e4c164fa39c8d348dafbf592718ab'),
    (12, 12, '7fa222eeda61b5eda3e6a773783b983477ab52435a17fd3aede26fee8bb41741'),
    (13, 13, '9ec22818d1d2ec08399d8d54e652b1c8e086003614eb2a03ea2389c3fb2e804a'),
    (14, 14, '500731696040bffff3d63d936bdbf0a27f9d143cb6a635a93c20e9b9c661f38b'),
    (15, 15, 'c193f6e8fc9eadba9dc2f7beae755adb95406745401f72bf659c490b27020592');