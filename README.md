# Login Documentation

## Overview
This project implements a simple login functionality using an API. The login form validates user input before sending a request to authenticate with the server.

## Prerequisites
- A web browser
- An internet connection

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ahmadfaqih796/nextsoft-test.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project-directory
   ```
3. Open `login.html` in your preferred browser.

## Login Credentials
Use the following credentials to log in:
- **Username**: `emilys`
- **Password**: `emilyspass`

## API Endpoint
The authentication request is sent to the following endpoint:
```
POST https://api.escuelajs.co/api/v1/auth/login
```

## Request Format
```json
{
  "username": "emilys",
  "password": "emilyspass"
}
```

## Response Format
```json
{
  "access_token": "your_token_here",
  "refresh_token": "your_refresh_token_here"
}
```

