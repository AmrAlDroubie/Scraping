# Student Data Processor

This project is a web-based script using JavaScript (for client-side operations) and PHP (for server-side data handling) to scrap and store student data into a MySQL database. It retrieves data from an external website, parses the HTML content, extracts the required student information, and posts it to a PHP server for database insertion.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Fetches student data from an external API.
- Parses HTML content to extract student information and marks.
- Inserts student data into a MySQL database.
- Computes `netTotal` by adjusting for language scores (English and French).

## Technologies Used

- **JavaScript**: Client-side operations, data fetching, parsing HTML.
- **PHP**: Server-side processing and database insertion.
- **MySQL**: Database for storing student data.
- **PDO**: PHP Data Objects for secure database connection.

## Prerequisites

Before running this project, ensure you have the following installed:

- PHP 7.x or higher
- MySQL Server
- Apache Server (or any other server supporting PHP)
- Node.js (for JavaScript execution, if needed)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-data-processor.git
cd student-data-processor
```

### 2. Set Up MySQL Database

Create a MySQL database named `students` and a table named `khaled` with the following structure:

```sql
CREATE TABLE khaled (
  id INT PRIMARY KEY,
  certificate VARCHAR(255),
  year VARCHAR(4),
  city VARCHAR(100),
  fullName VARCHAR(255),
  motherName VARCHAR(255),
  school VARCHAR(255),
  result VARCHAR(50),
  arabic INT,
  english INT,
  france INT,
  national INT,
  math INT,
  phisics INT,
  chemistry INT,
  sciense INT,
  total INT,
  islam INT,
  grandTotal INT,
  netTotal INT
);
```

### 3. Set Up PHP

Ensure you have a working PHP environment with PDO support for MySQL. Update your PHP configuration to point to the correct database if needed.

### 4. Start the Server

You can use Apache, Nginx, or any other web server to host your PHP files. For example, with PHP’s built-in server:

```bash
php -S localhost:8000
```

### 5. Install Dependencies (if needed)

If there are additional JavaScript dependencies, install them by running:

```bash
npm install
```

## Usage

1. The script fetches data from an external API based on a range of `studentID`s.
2. The data is parsed and sent to the server (via a POST request) to store in the MySQL database.
3. The `App()` function iterates over a range of `studentID`s and sends data to the server for each student.

### Steps:

- **Run the script**: The JavaScript will iterate through the `studentID` range (from 11483 to 11812) and fetch data.
- **Store the data**: Once fetched, it will be posted to the PHP endpoint (`api.php`) and inserted into the MySQL database.

## Project Structure

```plaintext
├── index.html          # Main HTML page (optional for rendering output)
├── api.php             # PHP script for handling POST requests and inserting data into the database
└── script.js           # JavaScript for fetching, parsing, and posting data to the server
```
