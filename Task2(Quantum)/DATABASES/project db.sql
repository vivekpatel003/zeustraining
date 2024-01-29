-- create schema internship;
use internship;

create table userdata 
(srno int,email varchar(20), password varchar(20),isAdmin boolean);

create table jobCard 
(srno int,
jobTitle varchar(100),
dateandtime datetime, location varchar(20),job_id int);

create table job_details 
(job_id int,
job_roles varchar(100),
job_icons varchar(200));

alter table job_details
rename column hob_role_id to job_role_id;

alter table jobcard
rename column job_id to job_role_id;

alter table job_details rename to job_role_details;

create table personal_Information
(email varchar(20),
first_Name varchar(10),
last_Name varchar(10),
phone_Number varchar(15),
resume_String varchar(50),
portfolio_Url varchar(50),
job_role_id int,
employee_Reffered varchar(20),
is_Email_Notification boolean);

alter table personal_information;

create table selected_Jobs
(email varchar(20),
job_role_id int);

create table jobCard_roles
(jobNumber int,
job_role_id int); 

alter table jobcard
drop column job_role_id;

create table Education_Qualification_Data
(email varchar(20),
percentage double,
passing_Year int,
q_id int,
s_id int,
c_id int,
college_location varchar(30),
college_name varchar(100)); 

create table experienced_professional_qualification
(email varchar(20),
years_of_experience int,
current_CTC int,
expected_CTC int,
on_notice_period boolean,
other_technologies varchar(80),
end_date date,
duration varchar(30),
test_appeared boolean,
role_applied varchar(30)
); 

create table fresher_professional_qualification
(email varchar(20),
other_technologies varchar(80),
test_appeared boolean,
role_applied varchar(30)
);

create table qualification
(q_id int,
qualification_name varchar(80)
); 

create table stream_table
(s_id int,
stream_name varchar(80)
); 

create table college_table
(c_id int,
college_name varchar(80)
); 

create table technology_expertise
(email varchar(20),
tech_id int
); 

create table technology_familiar
(email varchar(20),
tech_id int
); 

create table technology
(
tech_id int,
technology varchar(80)
); 

show tables;
use internship;
explain select * from college_table;
ALTER TABLE 
college_table change column table_created dt_created datetime default CURRENT_TIMESTAMP;
ALTER TABLE
college_table CHANGE COLUMN table_modified dt_modified datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE
user_has_preferences
ADD COLUMN dt_created datetime
DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE
user_has_preferences
ADD COLUMN dt_modified datetime
DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP;


-- add constraints 
ALTER TABLE
technology_familiar
ADD CONSTRAINT FOREIGN KEY (email) REFERENCES fresher_professional_qualification(email);

ALTER TABLE
technology_familiar
ADD CONSTRAINT FOREIGN KEY (tech_id) REFERENCES technology(tech_id);

ALTER TABLE
education_qualification_data
ADD CONSTRAINT FOREIGN KEY (c_id) REFERENCES college_table(c_id);

alter table
job_role_details add column
requirement TEXT;



-- create tables
 
create table job_has_timeslot
(
	id int NOT NULL auto_increment primary key ,
	time_slot_id int not null ,
    job_number int NOT NULL,
    foreign key (time_slot_id) references time_slot_table(time_slot_id) ON DELETE CASCADE,
    foreign key (job_number) references jobcard(srno) ON DELETE CASCADE
);

create table job_has_preferences
(
	id int NOT NULL auto_increment primary key ,
	job_role_id int not null ,
    job_number int NOT NULL,
    foreign key (job_role_id) references job_role_details(job_role_id) ON DELETE CASCADE,
    foreign key (job_number) references jobcard(srno) ON DELETE CASCADE
);

create table user_has_preferences
(
	email varchar(20) NOT NULL  primary key ,
	job_role_id int not null ,
    foreign key (email) references userdata(email) ON DELETE CASCADE,
    foreign key (job_role_id) references job_role_details(job_role_id) ON DELETE CASCADE
);

create table user_job_details
(
	email varchar(20) NOT NULL  primary key ,
    job_id int not null ,
	time_slot_id int not null ,
    resume varchar(100) NOT NULL,
    foreign key (job_id) references jobcard(srno) ON DELETE CASCADE
);

insert into college_table(c_id,college_name) values
-- (1,'Indian Institute of Technology (IIT), Bombay',NOW(),now());
-- (2,'Delhi University, Delhi');
(3,'All India Institute of Medical Sciences (AIIMS), New Delhi'),
(4,'Jawaharlal Nehru University (JNU), Delhi'),
(5,'St. Stephen\'s College, Delhi'),
(6,'Xavier\'s College, Mumbai'),
(7,'National Institute of Fashion Technology (NIFT), Delhi'),
(8,'Indian Statistical Institute (ISI), Kolkata'),
(9,'Lady Shri Ram College for Women (LSR), Delhi'),
(10,'Christ University, Bangalore');

insert into qualification(q_id,qualification_name)
values
(1,'Bachelor of Science (B.Sc.) in Computer Science'),
(2,'Master of Business Administration (MBA) in Finance'),
(3,'Doctor of Medicine (MD) in Internal Medicine'),
(4,'Bachelor of Arts (B.A.) in English Literature'),
(5,'Certified Public Accountant (CPA)');

insert into stream_table(s_id,stream_name)
values
(1,'Institute of Technology'),
(2,'Institute of Business Administration'),
(3,'Institute of Medicine'),
(4,'Institute of Arts and Sciences'),
(5,'Institute of Education and Psychology');

insert into technology(tech_id,technology)
values
(1,'Javascript'),
(2,'Angular JS'),
(3,'React'),
(4,'Node JS');

INSERT INTO education_qualification_data (email, percentage, passing_Year, q_id, s_id, c_id, college_location, college_name)
VALUES 
('abc@gmail.com', 85.5, 2022, 1, 1, 1, 'pune', 'CollegeName'),
('def@gmail.com', 85.5, 2022, 2, 2, 2, 'pune', 'CollegeName'),
('ghi@gmail.com', 85.5, 2022, 3, 3, 8, 'pune', 'CollegeName'),
('jkl@gmail.com', 85.5, 2022, 4, 4, 9, 'pune', 'CollegeName'),
('mno@gmail.com', 85.5, 2022, 5, 1, 10, 'pune', 'CollegeName');

INSERT INTO experienced_professional_qualification (email, years_of_experience , current_CTC , expected_CTC , on_notice_period, other_technologies , end_date , duration , test_appeared , role_applied)
VALUES 
('abc@gmail.com', 1 , 500000 , 1000000 , 1 , 'python', '2024-01-02', '2 months',0,''),
('def@gmail.com', 2 , 500000 , 2100000 , 0 ,  'python', '2024-01-02', '2 months',0,''),
('ghi@gmail.com', 3 , 500000 , 3100000 , 0 ,  'python', '2024-01-02', '2 months',1,'software developer'),
('jkl@gmail.com', 4 , 500000 , 4100000 , 1 , 'python', '2024-01-02', '2 months',0,''),
('mno@gmail.com', 5 , 500000 , 5100000 , 0 ,  'python', '2024-01-02', '2 months',1,'software developer');

INSERT INTO fresher_professional_qualification (email,  other_technologies , test_appeared , role_applied)
VALUES 
('abc@gmail.com', 1 , 500000 , 1000000 , 1 , 'python', '2024-01-02', '2 months',0,''),
('def@gmail.com', 2 , 500000 , 2100000 , 0 ,  'python', '2024-01-02', '2 months',0,''),
('ghi@gmail.com', 3 , 500000 , 3100000 , 0 ,  'python', '2024-01-02', '2 months',1,'software developer'),
('jkl@gmail.com', 4 , 500000 , 4100000 , 1 , 'python', '2024-01-02', '2 months',0,''),
('mno@gmail.com', 5 , 500000 , 5100000 , 0 ,  'python', '2024-01-02', '2 months',1,'software developer');


insert into userdata(email,password,isAdmin)
values
('abc@gmail.com','123456789',0),
('def@gmail.com','abc123',0),
('ghi@gmail.com','ilove',0),
('jkl@gmail.com','hello',0),
('mno@gmail.com','password123',0);

insert into personal_information(email , first_Name , last_Name , phone_Number , resume_String , portfolio_Url , employee_Reffered , is_Email_Notification)
values
('abc@gmail.com','vivek','patel','9313020876','./image/1.png','www.html.com','vikas',0),
('def@gmail.com','vivek','patel','9313020876','./image/1.png','www.html.com','vikas',0),
('ghi@gmail.com','vivek','patel','9313020876','./image/1.png','www.html.com','vikas',0),
('jkl@gmail.com','vivek','patel','9313020876','./image/1.png','www.html.com','vikas',0),
('mno@gmail.com','vivek','patel','9313020876','./image/1.png','www.html.com','vikas',0);

insert into jobcard_roles(jobNumber,job_role_id)
values
(1,1),
(2,1),
(2,2),
(2,3),
(3,1),
(3,2);

insert into job_role_details(job_role_id , job_roles , job_icons , gross_compensation , role_description , requirement)
values
(1,'Instructional Designer','image/1.png',500000,'Generate highly interactive and innovative instructional strategies for e-learning solutions',' Experience in creating instructional plans and course maps.'),
(2,'Software Engineer','image/2.png',600000,'Generate highly interactive and innovative instructional strategies for e-learning solutions',' Experience in creating instructional plans and course maps.'),
(3,'Software Quality Engineer','image/3.png',700000,'Generate highly interactive and innovative instructional strategies for e-learning solutions',' Experience in creating instructional plans and course maps.');


insert into jobcard(jobTitle , dateandtime , location , general_instruction , instructions , system_requirement , process_info)
values
('Walk In for Designer Job Role',
'10-Jul-2021 to 11-Jul-2021',
'Mumbai',
'- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates. - Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.',
'- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.
 - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. - Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. - Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.
 - Candidates cannot use an iOS system/device for this exam.',
 '- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). - The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. - Do not use a MacBook or iPad for the proctored exam.',
 '- Every round is an elimination round. Candidates need to clear all rounds to get selected. Round I : 4th August, 2018 Aptitude Test : 25 Questions Round II (Interview) : 4th August, 2018.'),
('Walk In for Multiple Job Roles',
'03-Jul-2021 to 04-Jul-2021',
'Mumbai',
'- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates. - Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.',
'- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.
 - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. - Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. - Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.
 - Candidates cannot use an iOS system/device for this exam.',
 '- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). - The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. - Do not use a MacBook or iPad for the proctored exam.
 ',
 '- Every round is an elimination round. Candidates need to clear all rounds to get selected. Round I : 4th August, 2018 Aptitude Test : 25 Questions Round II (Interview) : 4th August, 2018.'),

('Walk In for Multiple Job Roles',
'03-Jul-2021 to 04-Jul-2021',
'Mumbai',
'- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates. - Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.',
'- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.
 - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. - Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. - Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.
 - Candidates cannot use an iOS system/device for this exam.',
 '- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). - The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. - Do not use a MacBook or iPad for the proctored exam.',
 '- Every round is an elimination round. Candidates need to clear all rounds to get selected. Round I : 4th August, 2018 Aptitude Test : 25 Questions Round II (Interview) : 4th August, 2018.');

 

