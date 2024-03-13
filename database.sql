-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR NOT NULL,
    "first_name" VARCHAR (100) NOT NULL
);

CREATE TABLE "recipient"(
	"id" SERIAL PRIMARY KEY,
	"recipient_fullname" VARCHAR UNIQUE NOT NULL,
	"phone_number" VARCHAR,
	"email" VARCHAR,
	"address" VARCHAR,
	"recipient_notes" VARCHAR,
	"user_id" INTEGER NOT NULL
	);
	
	
CREATE TABLE "occasion"(
	"id" SERIAL PRIMARY KEY,
	"occasion_name" VARCHAR UNIQUE NOT NULL,
	"occasion_notes" VARCHAR,
	"user_id" INTEGER NOT NULL
	);
	

CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"occasion_name" VARCHAR NOT NULL,
	"occasion_date" DATE NOT NULL,
	"recipient_fullname" VARCHAR NOT NULL,
	"action" VARCHAR NOT NULL,
	"action_date" DATE NOT NULL
	);
	
	
INSERT INTO "recipient" ("recipient_fullname", "phone_number", "email", "address", "recipient_notes", "user_id")
VALUES 
('Debbie Hickman', '651-867-5309', 'mom@gmail.com', '10 Pine Street OurTown, MN 55123', 'Birthday: 05/18/54', '1');

INSERT INTO "occasion" ("occasion_name", "occasion_notes", "user_id")
	Values
	('Anniversary', '', '1'),
	('Birthday', '', '1');
	

INSERT INTO "tasks" ("occasion_name", "occasion_date", "recipient_fullname", "action", "action_date")
VALUES
('Anniversary', '09-18-2024', 'Debbie Hickman', 'card', '09-15-24'),
('Anniversary', '09-18-2024', 'Debbie Hickman', 'gift', '09-08-24');

