CREATE TABLE Users(
	id int not null primary key auto_increment,
	name varchar(100) not null,
	lastname varchar(100),
	email varchar(150),
	password varchar(150)
)

CREATE TABLE Librarys(
	id int not null primary key auto_increment,
	name varchar(100) not null,
	location varchar(100),
	telefono varchar(150),
	active boolean
)

CREATE TABLE Books(
	id int not null primary key auto_increment,
	isbn int not null,
	title varchar(100) not null,
	author varchar(100),
	year varchar(150),
	library int not null,
	active boolean
)