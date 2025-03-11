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

### B.1. Rooms

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| room_id | Integer | Unique identifier for each room (PK) | |   | Yes |
| room_name | Varchar(50) | Name of the room |  |   | Yes |
| description | Varchar(255) | Description of the room |  |   |  |
| capacity | Integer | Maximum number of players allowed in the room |  |   |  |
| price | Decimal | Price of the room per session (e.g. "$50.25") |  |   |  |
| time_limit | Integer | Time limit for each session in minutes |  |   |  |
| available | Boolean | Whether the room is currently available | Yes | True |  |
| theme | Selection | Theme of the room (e.g., "Adventure", "Mystery", "Sci-Fi") |  |   |  |

### B.2. Customers

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| customer_id | Integer | Unique identifier for each customer (PK) | |   | Yes |
| name | Varchar(50) | Name of the customer | |   |  |
| email | Varchar(100) | Email address of the customer | |   |  |
| phone | Varchar(20) | Phone number of the customer | |   |  |
| loyalty_points | Integer | Loyalty points of the customer | Yes | 0 |  |

### B.3. Staffs

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| staff_id | Integer | Unique identifier for each staff (PK) | |   | Yes |
| name | Varchar(50) | Name of the staff | |   |  |
| email | Varchar(100) | Email address of the staff | |   |  |
| phone | Varchar(20) | Phone number of the staff | |   |  |
| hire_date | Date | Hire date of the staff (e.g. "2022-01-20") | |   |  |

### B.4. Bookings

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

## D. Step 4: Solve Business Challenges
In addition to designing the database, answer the following problem-solving questions:

### D.1. Data Integrity & Constraints

#### D.1.1. How would you prevent a customer from booking a room that has already been reserved at the same time?

**Assumption:**
- The question is asking how to prevent a customer from booking a room that has already been reserved at the same time (_i.e. same `Bookings.session_time`_).
- It is NOT asking how to ensure multiple customer cannot book the same room at the same time (_i.e. same `Bookings.booking_date`_).

**Answer**
There should be a mechanism when executing any operation on the `bookings` table, to ensure that a room cannot be reserved for multiple sessions at the same time. This could be done by using a `UNIQUE` constraint on the `session_time` and `room_id` columns.

However, I believe the solution above is not enough. In this context, a room has a time limit for each session. Hence, it will be more accurate if we also consider the `time_limit` column. This way, we need to **make sure there won't be a new session that will start before the previous session has ended** by calculating the `Bookings.session_time` + `Rooms.time_limit`.

I am not sure if we can do such calculation in SQL. If it is not possible, we can do the calculation in the application layer (_i.e. in the backend code_).

#### D.1.2. What constraints should be added to ensure valid bookings?

1. Ensure there is no more than one booking for the same session start time for a room.
   - **Solution**: Add a `UNIQUE` constraint on `Bookings.session_time` and `Bookings.room_id`.
2. Ensure the booking date & session start time is not in the past.
   - **Solution**: Add a check constraint on `Bookings.booking_date` and `Bookings.session_time` to ensure they are not in the past.
3. Ensure the number of participants does not exceed the capacity of the room.
   - **Solution**:
     - Honestly I am not sure how can we do that. As far as I know, a CHECK contraint limited to validating conditions within a single table.
     - If we can do it, it will be a good solution. Otherwise, we can do it in the application layer (_i.e. in the backend code_).

### D.2. Handling Many-to-Many Relationships

#### D.2.1. Question
If a booking allows **multiple customers to join the same session** (e.g., public bookings), how would you modify the database to support this?

#### D.2.2. Solution
In this case, we can create a new table `BookingCustomers` to represent the many-to-many relationship between `Bookings` and `Customers`. This table will have the following columns:

| Attribute | Data Type | Description | Null | Default | Unique |
| --- | --- | --- | --- | --- | --- |
| booking_id | Integer | FK to booking_id | |   |  |
| customer_id | Integer | FK to customer_id | |   |  |

We will also need to remove the `customer_id` column from the `Bookings` table as it will be stored in the `BookingCustomers` table.

### D.3. Business Rule Enforcement

#### D.3.1. Question
How would you ensure that a **staff member is not assigned to two rooms at the same time**?

#### D.3.2. Solution
In this case, we can add a UNIQUE contraint on the `staff_id` column in the `Bookings` table, together with `session_time` and `room_id` columns. By having adding this contraint to those 3 columns, we can make sure there won't be multiple entries/instances of `Bookings` table with the same values in those 3 columns. Hence, it will be impossible for a staff member to be assigned to two rooms at the same time.