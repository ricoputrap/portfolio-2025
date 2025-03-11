---
title: "Data Modelling an Escape Room Business"
description: "A data modelling exercise to model an escape room business."
date: "2025-03-11"
---

## A. Case
An escape room business offers immersive puzzle-solving experiences where groups of players must solve challenges to "escape" within a time limit. The business has **multiple themed rooms**, and customers **book sessions** in advance. Each room requires a **staff member** to oversee the game.

You need to design a database schema that efficiently organizes this data.

## B. Step 1: Identify Objects (Models) and Attributes

Define at least **four models** that represent key aspects of the business. Each model must have:
- A **primary key (PK)** to uniquely identify records.
- At least **five attributes** with appropriate **data types**.

### B.2. Rooms

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| room_id | Integer | Unique identifier for each room (PK) | |   | Yes |
| room_name | String | Name of the room |  |   | Yes |
| description | String | Description of the room |  |   |  |
| capacity | Integer | Maximum number of players allowed in the room |  |   |  |
| price | Decimal | Price of the room per session (e.g. "$50.25") |  |   |  |
| time_limit | Integer | Time limit for each session in minutes |  |   |  |
| available | Boolean | Whether the room is currently available | Yes | True |  |
| theme | Selection | Theme of the room (e.g., "Adventure", "Mystery", "Sci-Fi") |  |   |  |

### B.3. Customers

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| customer_id | Integer | Unique identifier for each customer (PK) | |   | Yes |
| name | Varchar(50) | Name of the customer | |   |  |
| email | Varchar(100) | Email address of the customer | |   |  |
| phone | Varchar(20) | Phone number of the customer | |   |  |
| loyalty_points | Integer | Loyalty points of the customer | Yes | 0 |  |

### B.4. Staffs

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| staff_id | Integer | Unique identifier for each staff (PK) | |   | Yes |
| name | Varchar(50) | Name of the staff | |   |  |
| email | Varchar(100) | Email address of the staff | |   |  |
| phone | Varchar(20) | Phone number of the staff | |   |  |
| position | Selection | Position of the staff (e.g., "Manager", "Assistant Manager") | |   |  |
| hire_date | Date | Hire date of the staff (e.g. "2022-01-20") | |   |  |

### B.5. Bookings

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| booking_id | Integer | Unique identifier for each booking (PK) | |   | Yes |
| customer_id | Integer | FK to customer_id | |   |  |
| room_id | Integer | FK to room_id | |   |  |
| staff_id | Integer | FK to staff_id | |   |  |
| booking_date | Date | Date of the booking/order (e.g. "2022-01-20") | |   |  |
| session_time | Integer | Start time of the session in unix timestamp format (e.g. "1642705800" for "2022-01-20 19:30:00") | |   |  |
| participants | Integer | Number of participants in the session | |   |  |

## C. Step 2: Establish Relationships between Models

Define **relationships** between models to represent **dependencies** between them.

### C.1. Rooms and Bookings

- **Cardinality**: One-to-Many
- **Description**: A room can have many bookings, but a booking is associated with only one room.
- **Relationship**: Composition (A booking belongs to a room. It won't exist if the room doesn't exist.)

### C.2. Customers and Bookings

- **Cardinality**: One-to-Many
- **Description**: A customer can have many bookings, but a booking is associated with only one customer.
- **Relationship**: Composition (A booking belongs to a customer. It won't exist if the customer doesn't exist.)

### C.3. Staffs and Bookings

- **Cardinality**: One-to-Many
- **Description**: A staff can have many bookings, but a booking is associated with only one staff.
- **Relationship**: Composition (A booking belongs to a staff. It won't exist if the staff doesn't exist.)