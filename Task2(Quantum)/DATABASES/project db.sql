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

show tables;