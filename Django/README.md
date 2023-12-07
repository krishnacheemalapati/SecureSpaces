# Secure Spaces - Backend

Welcome to the Backend directory of Secure Spaces! This directory contains the code for the Django server-side application that manages the security system and handles communication between the frontend and hardware components.

## Overview

The backend plays a crucial role in coordinating the functionalities of Secure Spaces. It handles user authentication, manages the connection between the mobile app and the alarm mat, and processes requests related to locking, unlocking, and alarm events.

## Helpful Commands

Before we begin, let's go over some helpful commands that you'll need to run during the installation process:

- Activate virtual environment:
    ```bash
    source venv/bin/activate
    ```

- Commit model changes to the database (in the outer folder):
    ```bash
    python3 ./manage.py makemigrations
    ```

- Push model changes to the database (in the outer folder):
    ```bash
    python3 ./manage.py migrate
    ```

- Run the server (after migrations are applied):
    ```bash
    python3 ./manage.py runserver
    ```

- Create a user:
    ```bash
    python3 ./manage.py createsuperuser --email admin@example.com --username admin
    ```

- View database schemas (in the outer petpal folder):
    ```bash
    python3 ./manage.py dbshell
    .schema accounts_user
    .quit
    ```

- Save the database into JSON:
    ```bash
    python3 ./manage.py dumpdata > mock_data.json
    ```

- Load data from JSON into the database:
    ```bash
    python3 ./manage.py loaddata mock_data.json
    ```

## Setup Instructions

To set up the backend of Secure Spaces, follow these steps (you can type these into your command line or terminal):

1. Clone this repository to your local machine:
     ```bash
     git clone https://github.com/krishnacheemalapati/SecureSpaces.git
     ```

2. Navigate to the backend directory:
     ```bash
     cd /Django/secureSpaces/
     ```

3. Install dependencies using pip:
     ```bash
     pip install -r requirements.txt
     ```

4. Run the Django development server:
     ```bash
     python manage.py runserver
     ```

     The backend should now be running locally. Make sure it is accessible to the frontend and hardware components.

## Folder Structure

The backend directory has the following structure:

- `src`: Contains the source code for the Django application.
- `api`: Defines API endpoints for communication with the frontend and hardware.
- `authentication`: Manages user authentication and authorization.
- `models`: Includes Django models representing the data structure of the system.

## Dependencies

The backend relies on several dependencies, including Django and other Python libraries. Before running the server, ensure that all dependencies are installed.

## Contribution

If you'd like to contribute to the development of the backend, follow these steps:

1. Create a branch.
2. Make your changes.
3. Submit a pull request for review.

Thank you for contributing to Secure Spaces backend!