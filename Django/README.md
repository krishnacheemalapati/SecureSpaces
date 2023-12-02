# Secure Spaces - Backend

Welcome to the Backend directory of Secure Spaces! This directory contains the code for the Django server-side application that manages the security system and handles communication between the frontend and hardware components.

## Overview

The backend plays a crucial role in coordinating the functionalities of Secure Spaces. It handles user authentication, manages the connection between the mobile app and the alarm mat, and processes requests related to locking, unlocking, and alarm events.

## Helpful Commands

# Create virtual environment
python3 -m venv venv
# Activate virtual environment
source venv/bin/activate 
# Start new app (in outer petpal folder with venv activated)
python3 ./manage.py startapp pets
# Install package requirments (in outer petpal folder)
pip3 install -r requirements.txt
# Commit model changes to database (in outer petpal folder)
python3 ./manage.py makemigrations
# Push model changes to database (in outer petpal folder)
python3 ./manage.py migrate
# Run server (AFTER migrations are applied)
python3 ./manage.py runserver
# Create a user
python3 ./manage.py createsuperuser --email admin@example.com --username admin
# View database schemas (in outer petpal folder)
python3 ./manage.py dbshell
.schema accounts_user
.quit
# Save database into json
python3 ./manage.py dumpdata > mock_data.json
# Load data from json into database
python3 ./manage.py loaddata mock_data.json

## Setup Instructions

To set up the backend of Secure Spaces, follow these steps:

1. Clone this repository to your local machine.
    ```bash
    git clone [repository_url]
    ```

2. Navigate to the backend directory.
    ```bash
    cd backend
    ```

3. Install dependencies using pip.
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Django development server.
    ```bash
    python manage.py runserver
    ```

    The backend should now be running locally. Ensure it is accessible to the frontend and hardware components.

## Folder Structure

- `src`: Contains the source code for the Django application.
- `api`: Defines API endpoints for communication with the frontend and hardware.
- `authentication`: Manages user authentication and authorization.
- `models`: Includes Django models representing the data structure of the system.

## Dependencies

The backend relies on several dependencies, including Django and other Python libraries. Ensure all dependencies are installed before running the server.

## Contribution

Feel free to contribute to the development of the backend. Create a branch, make your changes, and submit a pull request for review.

Thank you for contributing to Secure Spaces backend!