---
title: "Database Fundamentals"
description: "Demistifying Database Fundamentals"
date: "2025-03-11"
---

## A. What is Database?
Database comes from 2 words: **Data** and **Base**. Data is information that represents the real world facts. Base is a place to store and retrieve that information. So, database can be defined as a place to store and retrieve data.

However, it is not as simply as storing data. The main goal of a database is to be able to manage, select, collect, and organize data in a structured way.

## B. DB Operations
The main operations of a database are:
- **Create**  : Add new data to the database
- **Read**    : Retrieve data from the database
- **Update**  : Modify existing data
- **Delete**  : Remove data from the database

## C. Goals of Database
- **Speed**       : To retrieve data quickly
- **Space**       : To store data efficiently
- **Accuracy**    : To ensure data accuracy
- **Availability**: To ensure data availability
- **Completeness**: To ensure data completeness
- **Security**    : To protect data from unauthorized access
- **Shareability**: To enable sharing of data between multiple users

## D. Database Management System (DBMS)
DBMS is a software that is used to manage the storage and organization of data in a database. It is responsible for creating, updating, and deleting data in a database.

## E. Data Definition Language (DDL)
DDL is a subset of SQL that is used to **define the structure of a database**. It is responsible for **creating, modifying, and deleting** tables, views, and other database objects.

## F. Data Manipulation Language (DML)
DML is a subset of SQL that is used to **manipulate the data in a database**. It is responsible for **inserting, updating, and deleting** data in tables.

## G. Data Model
A data model is a way of representing the structure of data in a database. It is used to define the relationships between tables and their attributes. A data model can be visualized as a diagram that shows the structure of the database. One of the most common data models is the **Entity-Relationship Model (ERD)**.

## H. Entity-Relationship Diagram (ERD)
The Entity-Relationship Diagram (ERD) is a diagram that shows the structure of a database. In ERD, real-world data is represented as entities. Each entity has its own attributes and relationships with other entities.

![Base Components](/blog/databases/erd-components.png)

### H.1. Entity
Entity is a way of representing real-world data in a database. When identifying entities, we should consider the **scope/context** of the data and its **importance to the business**.

For example, Person can be considered as an entity. However, in the context of Hospital, a person can be considered as a patient or doctor. Hence, it is better to define Doctor and Patient as entities instead of just Person.

### H.2. Attribute
An attribute is a characteristic or property of an entity. It is a column in a table that stores the data for that entity.

When identifying attributes for an entity, we should consider the **scope/context** of the data and its **importance to the business**.

For example, we may add the patient's ID number, name, address, etc. However, we may not unrelevant attributes such as the patient's hobby, favorite food, etc.

In each entity, we should have a **unique attribute that can be used to identify the entity** (i.e. the **primary key**). For example, the patient's ID number is a unique attribute.

### H.3. Relationship
A relationship is a way of representing the **connections** between entities in a database. It is a way of representing the **dependencies** between entities in a database.

In ERD, a relationship is represented by a line that connects two entities. The line can be **one-to-one**, **one-to-many**, or **many-to-many**.

For example, a patient may have one doctor, but a doctor may have many patients. The doctor takes care of the patient, and the patient is treated by the doctor.

## G. Creating an ERD
Let's practice creating an ERD for an online store.

### G.1. Define Entities
There could be a lot of entities in an online store. However, we need to define only the key important entities in this first step.

- **Product** : The product that is being sold
- **Seller**  : The seller of the product
- **Buyer**   : The buyer of the product

![Entities](/blog/databases/01-entities.png)


### G.2. Define Attributes
Each entity should have a unique attribute that can be used to identify the entity.

- **Product ID** : The unique identifier for the product
- **Seller Email**  : The email address of the seller
- **Buyer Email**   : The email address of the buyer

![Key Attributes](/blog/databases/02-key-attributes.png)

After defining the key attributes, we need to define other important attributes for each entity.

![Complete Attributes](/blog/databases/02-complete-attributes.png)

#### G.2.1. Product
- **Product ID** : The unique identifier for the product
- **Product Name** : The name of the product
- **Product Price** : The price of the product

#### G.2.2. Seller
- **Seller Email** : The email address of the seller
- **Seller Name** : The name of the seller

#### G.2.3. Buyer
- **Buyer Email** : The email address of the buyer
- **Buyer Name** : The name of the buyer
- **Buyer Address**: The address of the buyer

### G.3. Translate Entities & Attributes into Tables
