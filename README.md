# Job Link — Online Job Application Portal

**Job Link** is a full-stack web application designed to simplify the hiring process by connecting job seekers and recruiters through a secure, intuitive, and interactive platform. What started as a basic CRUD idea evolved into a complete, role-based job management system.

---

## Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Key Learnings](#key-learnings)
- [Team](#team)

---

## Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- Bootstrap

**Backend:**
- Spring Boot
- Spring MVC
- Hibernate/JPA

**Database:**
- MySQL

**API Testing:**
- Postman
- Swagger UI

---

## Features

**For Job Seekers:**
- Role-based access and secure login/signup with validations
- Search and filter jobs by role, type, and category
- Apply for jobs and track application status

**For Recruiters:**
- Create and manage job postings (Full CRUD)
- View applicants and shortlist candidates
- Dashboard for analytics: total jobs, applicants, and hires

**Common:**
- Fully integrated REST APIs
- Clean, responsive UI using React-Bootstrap
- API testing via Postman & Swagger

---

## Architecture

```
React Frontend <-> Spring Boot REST APIs <-> MySQL Database
```

- Role-based authentication and authorization implemented using Spring Security
- Frontend-backend communication via Axios and RESTful APIs
- Database managed through Hibernate/JPA with MySQL

---

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/job-link.git
cd job-link
```

2. **Backend Setup**
- Navigate to `backend/` folder
- Install dependencies and build using Maven
- Configure MySQL database in `application.properties`
- Run Spring Boot application:
```bash
mvn spring-boot:run
```

3. **Frontend Setup**
- Navigate to `frontend/` folder
- Install dependencies:
```bash
npm install
```
- Start the React app:
```bash
npm start
```

---

## Usage

1. Open the frontend application in your browser.
2. Register as a Job Seeker or Recruiter.
3. Job Seekers can browse and apply for jobs.
4. Recruiters can create job posts, view applicants, and manage hiring.
5. Dashboard provides quick analytics and job management features.

---

## Key Learnings

- Implementing secure authentication and role-based authorization
- Structuring scalable backend services with Spring Boot
- Integrating frontend with backend APIs
- Writing clean, modular, and production-ready code
- Role-based routing and UI flow management

---

## Team
- Rutuja Gholap
- Pranali Mahadik
- Deepa Jadhav
