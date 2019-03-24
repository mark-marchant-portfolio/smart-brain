# Smart Brain

[Click here to see the live app](https://smart-brain12345.herokuapp.com/)
![alt text](/proofs/smart-brain.png)

## Table of Contents

- About
- Requirements
- Configuration
- Postgres Sql DB
- Maintaining

<h2>About:</h2>
This is a full-stack facial recognition application. Users may submit url images and detect face locations. This is a proof of concept project

<h2>Requirements:</h2>
Internet connection and computer (for Desktop) or smart phone (for Mobile).

<h2>Configuration:</h2>
Privacy settings available in the profile settings

<h2>Postgres Sql DB</h2>
User's information is stored in Postgres Sql. I made this is a relational database because all fields are related and using a NoSql didn't make sense.

Postgres Sql provides us with a scalable, elational (Sql) database, which contains collections of documents to serve as a blueprint for each of the items in our database. Our database is structured with 2 tables(users, login). User table has 5 columns of (Id, Name, Email, Entries and Joined). Login table has 3 columns of (Id, Hash, and Email). Users can register their infomation through Name, Email, Password.

<h2>Maintaining:</h2>
This Application runs React on the front end, and handles hosting through Heroku .

This full stack-application was developed and is currently maintained by [Mark](https://github.com/mark-marchant-portfolio).
