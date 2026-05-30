# File Upload System using Node.js, Express & Multer

This project is a simple file upload application built using Node.js, Express.js, EJS, and Multer middleware. It allows users to upload image files through a web form and stores them inside the uploads folder on the server.

## Features

* Single image upload functionality
* File type validation (JPG, JPEG, PNG)
* File size limit validation
* Dynamic file naming using timestamps
* EJS templating support
* Multer middleware integration
* Express.js backend server

## Technologies Used

* Node.js
* Express.js
* Multer
* EJS
* HTML
* JavaScript

## Project Structure

```bash
project-folder/
│
├── uploads/
├── views/
│   └── signup.ejs
├── index.js
├── package.json
```

## Installation

Clone the repository:

```bash
git clone <your-github-repo-link>
```

Install dependencies:

```bash
npm install
```

## Run the Project

Start the server:

```bash
node index.js
```

or using Nodemon:

```bash
npm run dev
```

Open browser:

```bash
http://localhost:8080
```

## File Upload Validation

The application supports only:

* JPG
* JPEG
* PNG

Maximum upload size:

```bash
10 MB
```

## Learning Outcomes

Through this project, I learned:

* Handling file uploads in Node.js
* Using Multer middleware
* Validating file types and file size
* Working with Express routes
* Rendering pages using EJS
* Managing multipart/form-data requests

## Future Improvements

* Multiple file upload support
* Database integration with MongoDB
* Cloud storage integration
* User authentication
* Drag and drop upload UI

## Author

B. Niranjan
