DROP DATABASE IF EXISTS job;

CREATE database job;

USE job;

CREATE TABLE app(
	item_id INT(4) NOT NULL,
	date_enter DATE NOT NULL,
	company_name VARCHAR(100) NOT NULL,
	type_status VARCHAR(100) NOT NULL,
		PRIMARY KEY (item_id)
);

Select * FROM app;

INSERT INTO app (item_id, date_enter, company_name) 
VALUES (DATE, "", "winter", 9.99, 10);

INSERT INTO app (item_id, date_enter, company_name) 
VALUES (212, "hat", "summer", 7.99, 20);

INSERT INTO app (item_id, date_enter, company_name)  
VALUES (313, "boots", "fall", 23.99, 5);

INSERT INTO app (item_id, date_enter, company_name)  
VALUES (420, "jacket", "winter", 59.99, 12);


