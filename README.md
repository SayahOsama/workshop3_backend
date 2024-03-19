# WSP (236369) - Workshop 3 Backend

## Introduction

Welcome to the workshop 3!

In this workshop assignment you will implement a basic comments API using NodeJS and MongoDB.

You may find the frontend part here - [Workshop 3 Frontend](https://github.com/pws236369/Workshop-3-2024-Frontend)

## Getting Started

To start with the assignment, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/pws236369/Workshop-3-2024.git
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```
## Building and Running the Application

After installing the dependencies, you can build and run the application using the following commands:

1. **Build:**

     ```bash
     npm run build
     ```

   This command generates a production-ready build in the `dist` folder.

2. **Run Development Server:**

     ```bash
     npm run dev
     ```

## API Routes

Your API should support the following endpoints:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST    | /api/login | Login with username and password |
| POST    | /api/logout | Logout |
| POST    | /api/signup | Sign up a new user with username and password |
| GET     | /api/username | Gets the username of the current user |


## Task

In order to complete the assignment, you need to do the following.

Backend:
1. Deploy a DB using [MongoDB Atlas](https://www.mongodb.com/atlas/database) (if you have'nt already).
1. Fill in all 5 "TODO"s in this repository.
1. Upload your solution to a private GitHub repository and add the staff acount ([pws236369](https://github.com/pws236369)) as a collaborator.
1. Deploy your solution to [Render](https://render.com).

Frontend:
1. Go to the [Workshop 3 Frontend](https://github.com/pws236369/Workshop-3-2024-Frontend) to find frontend task source code template.
1. Read the user stories required for this task.
1. Fill in all "TODO's" in the source code.
1. Deploy your solution to GitHub Pages (same as Homework 2).

## Testing Your Solution

We recommend using Thunder Client VSCode extension to test your backend solution. Try to send requests (correct and faulty ones) to your server and see if it behaves as expected.

We also expect you to test your frontend before submitting it. Make sure to test all the user stories and edge cases.

## Submission

After completing the assignment requirements, submit a single text file via Webcourse containing:
- Your ID.
- URL of your backend Render deployment.
- URL of your frontend GitHub Pages deployment.
- URLs of both GitHub repository.

## Notes
- Submission deadline: Tuesday 20.03 at 23:55.
- Submitting after the deadline wouldn’t be possible.
- Submission in singles only.