# JobVistaAPI - Complete Backend Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Database Design](#database-design)
5. [API Endpoints](#api-endpoints)
6. [Security Implementation](#security-implementation)
7. [File Analysis](#file-analysis)
8. [Setup Instructions](#setup-instructions)
9. [Testing Guide](#testing-guide)

---

## 🎯 Project Overview

**JobVistaAPI** is a comprehensive REST API backend for a job portal system built with Spring Boot. It provides complete functionality for job seekers and recruiters including user management, job posting, application tracking, and secure authentication.

### Key Features
- ✅ User Registration & Authentication (Job Seekers & Recruiters)
- ✅ **Admin Panel with Complete Management System**
- ✅ JWT-based Security with Role-based Access Control
- ✅ Job Posting & Management
- ✅ Job Application Tracking
- ✅ File Upload (Resume, Profile Photos, Company Logos)
- ✅ **Admin Dashboard with Statistics**
- ✅ **User Management (View, Delete, Verify)**
- ✅ Comprehensive Search & Filtering
- ✅ RESTful API Design
- ✅ Swagger Documentation

---

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Framework** | Spring Boot | 2.7.18 |
| **Language** | Java | 11 |
| **Database** | MySQL | 8.0 |
| **ORM** | JPA/Hibernate | - |
| **Security** | Spring Security + JWT | - |
| **Build Tool** | Maven | - |
| **Documentation** | Swagger/OpenAPI | 1.7.0 |
| **Testing** | JUnit | - |

### Dependencies
```xml
<!-- Core Spring Boot -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- JWT -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>

<!-- Database -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>

<!-- Utilities -->
<dependency>
    <groupId>org.modelmapper</groupId>
    <artifactId>modelmapper</artifactId>
    <version>3.0.0</version>
</dependency>
```

---

## 📁 Project Structure

```
JobVistaAPI/
├── src/main/java/com/jobvista/
│   ├── Application.java                 # Main Spring Boot Application
│   ├── controllers/                     # REST Controllers
│   │   ├── JobSeekerController.java
│   │   ├── RecruiterController.java
│   │   ├── JobController.java
│   │   └── JobApplicationController.java
│   ├── entities/                        # JPA Entities
│   │   ├── JobSeeker.java
│   │   ├── Recruiter.java
│   │   ├── Job.java
│   │   ├── JobApplication.java
│   │   ├── Address.java
│   │   ├── Experience.java
│   │   ├── JobCategory.java
│   │   └── Education entities/
│   ├── repositories/                    # Data Access Layer
│   │   ├── JobSeekerRepository.java
│   │   ├── RecruiterRepository.java
│   │   └── Other repositories/
│   ├── service/                         # Business Logic Layer
│   │   ├── JobSeekerService.java
│   │   ├── JobSeekerServiceImpl.java
│   │   └── Other services/
│   ├── security/                        # Security Configuration
│   │   ├── SecurityConfiguration.java
│   │   ├── JwtRequestFilter.java
│   │   ├── CustomUserServiceImpl.java
│   │   └── CorsConfig.java
│   ├── requestDTO/                      # Request Data Transfer Objects
│   ├── responseDTO/                     # Response Data Transfer Objects
│   ├── exception/                       # Exception Handling
│   └── utils/                          # Utility Classes
├── src/main/resources/
│   └── application.properties          # Configuration
├── pom.xml                            # Maven Configuration
└── README.md
```

---

## 🗄️ Database Design

### Entity Relationship Diagram
```
JobSeeker (1) ←→ (1) Address
    ↓ (1:1)
    ├── SscEducation
    ├── HscEducation  
    ├── GraduationEducation
    ├── (1:N) Experience
    └── (1:N) JobApplication ←→ (N:1) Job ←→ (N:1) Recruiter
                                    ↓ (N:1)
                                JobCategory
```

### Database Tables

#### Core User Tables
| Table | Purpose | Key Fields |
|-------|---------|------------|
| `job_seeker_dtls` | Job seeker information | js_id, js_email, js_username, js_password |
| `recruiter_dtls` | Recruiter/Company info | rc_id, rc_email, rc_company_name |

#### Profile Tables
| Table | Purpose | Key Fields |
|-------|---------|------------|
| `js_address_dtls` | Address information | js_id, addr_city, addr_state |
| `ssc_education_dtls` | SSC education details | js_id, ssc_board, ssc_percentage |
| `hsc_education_dtls` | HSC education details | js_id, hsc_board, hsc_percentage |
| `graduation_education_dtls` | Graduation details | js_id, grad_university, grad_degree |
| `experience_dtls` | Work experience | js_id, exp_company, exp_role |

#### Job Tables
| Table | Purpose | Key Fields |
|-------|---------|------------|
| `job_category` | Job categories | jc_id, jc_name |
| `job_dtls` | Job postings | job_id, job_rec_id, job_jc_id, job_role |
| `job_application_dtls` | Applications | ja_id, ja_js_id, ja_j_id, ja_status |

---

## 🌐 API Endpoints

### Authentication Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/jobseeker/authenticate` | Job seeker login | Public |
| POST | `/recruiter/authenticate` | Recruiter login | Public |
| POST | `/admin/authenticate` | **Admin login** | Public |

### Job Seeker Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/jobseeker` | Register job seeker | Public |
| GET | `/jobseeker` | Get profile | JOBSEEKER |
| DELETE | `/jobseeker` | Delete account | JOBSEEKER |
| POST | `/jobseeker/files/{id}` | Upload files | Public |
| GET | `/jobseeker/resume/{email}` | Get resume | Public |

### Recruiter Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/recruiter` | Register recruiter | Public |
| GET | `/recruiter` | Get profile | RECRUITER |
| DELETE | `/recruiter` | Delete account | RECRUITER |
| POST | `/recruiter/image/{id}` | Upload logo | Public |

### Job Management Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/jobs` | List all jobs | Public |
| GET | `/jobs/job/{id}` | Get job details | Public |
| POST | `/jobs/job` | Create job | RECRUITER |
| DELETE | `/jobs/job/{id}` | Delete job | RECRUITER |
| GET | `/jobs/applicants/{jobId}` | View applicants | RECRUITER |

### Job Application Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/job-application/{jobId}` | Apply for job | JOBSEEKER |
| GET | `/job-application/{jobSeekerId}` | Get applications | JOBSEEKER |

### **🔥 NEW: Admin Management Endpoints**
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/admin/dashboard` | **Dashboard statistics** | ADMIN |
| GET | `/admin/jobseekers` | **List all job seekers** | ADMIN |
| GET | `/admin/recruiters` | **List all recruiters** | ADMIN |
| DELETE | `/admin/jobseekers/{id}` | **Delete job seeker** | ADMIN |
| DELETE | `/admin/recruiters/{id}` | **Delete recruiter** | ADMIN |
| PUT | `/admin/recruiters/{id}/verify` | **Verify company** | ADMIN |
| PUT | `/admin/recruiters/{id}/unverify` | **Unverify company** | ADMIN |

---

## 🔐 Security Implementation

### JWT Authentication Flow
```
1. User Login → Credentials Validation → JWT Token Generation
2. Client Request → JWT Token in Header → Token Validation → Access Granted
```

### Security Configuration
```java
// Public Endpoints
.antMatchers(HttpMethod.GET, "/swagger*/**", "/v3/api-docs/**").permitAll()
.antMatchers(HttpMethod.POST, "/*/authenticate", "/recruiter", "/jobseeker").permitAll()

// Role-based Access
.antMatchers(HttpMethod.POST, "/jobs/job").hasRole("RECRUITER")
.antMatchers(HttpMethod.GET, "/jobseeker").hasRole("JOBSEEKER")
```

### JWT Token Structure
```json
{
  "sub": "user@example.com",
  "authorities": "ROLE_JOBSEEKER",
  "iat": 1640995200,
  "exp": 1641081600
}
```

---

## 📄 File Analysis

### 1. Configuration Files

#### **pom.xml**
- **Purpose**: Maven build configuration and dependency management
- **Key Dependencies**: Spring Boot, Security, JPA, JWT, MySQL
- **Operations**: Build automation, dependency resolution

#### **application.properties**
```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/jobvista
spring.datasource.username=root
spring.datasource.password=cdac

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT Configuration
SECRET_KEY=<base64-encoded-secret>
EXP_TIMEOUT=86400000
```

### 2. Main Application Class

#### **Application.java**
- **Purpose**: Spring Boot entry point and configuration
- **Operations**: 
  - Application bootstrap
  - ModelMapper bean configuration
  - Component scanning enablement

### 3. Entity Layer

#### **JobSeeker.java**
- **Purpose**: Job seeker user entity with complete profile information
- **Key Features**:
  - Personal information (name, email, contact)
  - File storage (profile photo, resume as BLOB)
  - Skills and portfolio links
  - Relationships with address, education, experience
- **Operations**: User registration, profile management, file uploads

#### **Recruiter.java**
- **Purpose**: Recruiter and company information entity
- **Key Features**:
  - Personal recruiter details
  - Company information (name, address, logo)
  - Relationship with posted jobs
- **Operations**: Company registration, job posting management

#### **Job.java**
- **Purpose**: Job posting entity with comprehensive job details
- **Key Features**:
  - Job specifications (role, description, requirements)
  - Location and salary information
  - Application tracking
  - View counting and status management
- **Operations**: Job creation, application management, search filtering

#### **JobApplication.java**
- **Purpose**: Bridge entity linking job seekers to jobs
- **Key Features**:
  - Application status tracking
  - Date management
  - Duplicate prevention logic
- **Operations**: Application submission, status updates, tracking

### 4. Repository Layer

#### **JobSeekerRepository.java**
```java
public interface JobSeekerRepository extends JpaRepository<JobSeeker, Integer> {
    Optional<JobSeeker> findByEmail(String email);
    boolean existsJobSeekerByEmail(String email);
    boolean existsJobSeekerByUsername(String username);
}
```
- **Purpose**: Data access abstraction for job seekers
- **Operations**: CRUD operations, custom queries, validation checks

### 5. Service Layer

#### **JobSeekerServiceImpl.java**
- **Purpose**: Business logic implementation for job seeker operations
- **Key Operations**:
  - User registration with complex entity mapping
  - File upload processing
  - Profile retrieval with DTO conversion
  - Authentication support
- **Business Rules**:
  - Email/username uniqueness validation
  - Bidirectional relationship management
  - Transaction management for data consistency

### 6. Controller Layer

#### **JobSeekerController.java**
- **Purpose**: REST API endpoints for job seeker operations
- **Key Endpoints**:
  - Registration: `POST /jobseeker`
  - Authentication: `POST /jobseeker/authenticate`
  - Profile: `GET /jobseeker` (JWT protected)
  - File Upload: `POST /jobseeker/files/{id}`
- **Operations**: HTTP request handling, JWT token generation, response formatting

### 7. Security Layer

#### **SecurityConfiguration.java**
- **Purpose**: Spring Security configuration with JWT integration
- **Key Features**:
  - URL-based authorization rules
  - Role-based access control (RECRUITER/JOBSEEKER)
  - CORS configuration
  - Stateless session management
- **Operations**: Request authorization, JWT filter integration, exception handling

#### **JwtUtils.java**
- **Purpose**: JWT token operations utility
- **Key Operations**:
  - Token generation with user details and roles
  - Token validation and claim extraction
  - Authority conversion between Spring Security and JWT
- **Security Features**: HMAC-SHA512 signing, configurable expiration

#### **JwtRequestFilter.java**
- **Purpose**: Request filter for JWT authentication
- **Operations**:
  - Extract JWT from Authorization header
  - Validate token and extract user information
  - Set Spring Security authentication context
- **Flow**: Every request → JWT validation → Security context setup

### 8. DTO Layer

#### **Request DTOs**
- **JobSeekerRequestDTO**: Complex nested structure for registration
  - PersonalDetailsDTO: Basic user information
  - AddressRequestDTO: Address information
  - EducationRequestDTO: Educational qualifications
  - ExperienceDTO: Work experience list

#### **Response DTOs**
- **JobSeekerResponseDTO**: Formatted user profile data
- **JwtResponeDTO**: Authentication token response
- **AppliedJobResponseDTO**: Job application details

### 9. Exception Handling

#### **ApiCustomException.java**
- **Purpose**: Custom business exception for application-specific errors
- **Usage**: Validation failures, business rule violations

#### **ApiExceptionHandler.java**
- **Purpose**: Global exception handler for consistent error responses
- **Operations**: Exception mapping, error formatting, HTTP status codes

---

## ⚙️ Setup Instructions

### Prerequisites
- Java 11 or higher
- MySQL 8.0
- Maven 3.6+
- IDE (IntelliJ IDEA/Eclipse)

### Database Setup
```sql
-- Create database
CREATE DATABASE jobvista;

-- Create user (optional)
CREATE USER 'jobvista_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON jobvista.* TO 'jobvista_user'@'localhost';
```

### Application Setup
1. **Clone/Download Project**
2. **Configure Database**
   ```properties
   # Update application.properties
   spring.datasource.url=jdbc:mysql://localhost:3306/jobvista
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. **Build Project**
   ```bash
   mvn clean install
   ```

4. **Run Application**
   ```bash
   mvn spring-boot:run
   # OR
   java -jar target/JobVistaAPI-0.0.1.jar
   ```

5. **Access Application**
   - API Base URL: `http://localhost:8080`
   - Swagger UI: `http://localhost:8080/swagger-ui.html`

---

## 🧪 Testing Guide

### API Testing with Postman

#### 1. Job Seeker Registration
```http
POST http://localhost:8080/jobseeker
Content-Type: application/json

{
  "personal": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "username": "johndoe",
    "password": "password123",
    "contactNumber": "9876543210",
    "gender": "Male",
    "skills": "Java, Spring Boot, MySQL"
  },
  "address": {
    "lane1": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "pincode": "400001"
  },
  "education": {
    "ssc": {
      "board": "Maharashtra Board",
      "percentage": 85.5
    },
    "hsc": {
      "board": "Maharashtra Board",
      "percentage": 88.0
    },
    "graduation": {
      "university": "Mumbai University",
      "degree": "Computer Science",
      "percentage": 75.0
    }
  },
  "experiences": [
    {
      "company": "Tech Corp",
      "role": "Software Developer",
      "duration": "2 years"
    }
  ]
}
```

#### 2. Authentication
```http
POST http://localhost:8080/jobseeker/authenticate
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### 3. Protected Resource Access
```http
GET http://localhost:8080/jobseeker
Authorization: Bearer <jwt_token>
```

### Testing Checklist
- ✅ User Registration (Job Seeker & Recruiter)
- ✅ Authentication & JWT Token Generation
- ✅ Protected Endpoint Access
- ✅ File Upload Functionality
- ✅ Job Creation & Management
- ✅ Job Application Process
- ✅ Role-based Access Control
- ✅ Error Handling & Validation

---

## 🚀 Deployment Considerations

### Production Configuration
```properties
# Production Database
spring.datasource.url=jdbc:mysql://prod-server:3306/jobvista
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false

# Security
SECRET_KEY=<strong-production-secret>
server.port=8080

# Logging
logging.level.com.jobvista=INFO
logging.file.name=logs/jobvista.log
```

### Docker Deployment
```dockerfile
FROM openjdk:11-jre-slim
COPY target/JobVistaAPI-0.0.1.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

---

## 📊 Performance Optimization

### Database Optimization
- **Indexing**: Add indexes on frequently queried columns (email, username)
- **Connection Pooling**: Configure HikariCP for optimal performance
- **Query Optimization**: Use @Query annotations for complex queries

### Caching Strategy
- **Redis Integration**: Cache frequently accessed data
- **Application-level Caching**: Use @Cacheable annotations
- **Database Query Caching**: Enable Hibernate second-level cache

### Security Enhancements
- **Rate Limiting**: Implement request rate limiting
- **Input Validation**: Comprehensive validation on all inputs
- **SQL Injection Prevention**: Use parameterized queries
- **XSS Protection**: Sanitize user inputs

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Database Connection Issues
```
Error: Could not create connection to database server
Solution: Check MySQL service, credentials, and network connectivity
```

#### 2. JWT Token Issues
```
Error: JWT signature does not match locally computed signature
Solution: Verify SECRET_KEY configuration and token format
```

#### 3. File Upload Issues
```
Error: Maximum upload size exceeded
Solution: Configure spring.servlet.multipart.max-file-size
```

### Debug Configuration
```properties
# Enable debug logging
logging.level.com.jobvista=DEBUG
logging.level.org.springframework.security=DEBUG
logging.level.org.hibernate.SQL=DEBUG
```

---

## 📈 Future Enhancements

### Planned Features
- [ ] Email Notifications
- [ ] Advanced Search & Filtering
- [ ] Real-time Chat System
- [ ] Mobile App API Support
- [ ] Analytics Dashboard
- [ ] Payment Integration
- [ ] Social Media Integration
- [ ] AI-based Job Matching

### Scalability Improvements
- [ ] Microservices Architecture
- [ ] Event-driven Architecture
- [ ] Distributed Caching
- [ ] Load Balancing
- [ ] Database Sharding

---

## 📞 Support & Contact

For technical support or questions:
- **Email**: support@jobvista.com
- **Documentation**: [API Documentation](http://localhost:8080/swagger-ui.html)
- **Issue Tracking**: GitHub Issues

---

**© 2024 JobVistaAPI - All Rights Reserved**