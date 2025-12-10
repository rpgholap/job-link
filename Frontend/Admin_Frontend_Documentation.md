# JobVista Admin Frontend Documentation

## 🎯 Admin Module Overview

The admin frontend module provides a comprehensive management interface for the JobVista platform, allowing administrators to manage users, monitor system statistics, and perform administrative tasks.

## 📁 Admin Components Structure

```
src/components/Admin/
├── AdminLogin.js              # Admin authentication component
├── AdminDashboard.js          # Main admin dashboard with tabs
├── AdminProtectedRoute.js     # Route protection for admin access
└── (Additional components as needed)

src/service/
└── AdminService.js           # API service for admin operations
```

## 🔐 Admin Authentication

### Default Admin Credentials
```
Email: admin@jobvista.com
Password: admin123
```

### Login Process
1. Navigate to `/admin/login`
2. Enter admin credentials
3. JWT token stored in localStorage as 'adminToken'
4. Redirect to admin dashboard

## 🎛️ Admin Dashboard Features

### 1. **Dashboard Statistics**
- Total Job Seekers count
- Total Recruiters count  
- Total Jobs posted
- Total Applications submitted
- Real-time data updates

### 2. **Job Seekers Management**
- View all registered job seekers
- Display user details (ID, Name, Email, Registration Date)
- Delete job seeker accounts
- User status monitoring

### 3. **Recruiters Management**
- View all registered recruiters/companies
- Display company information
- Verify/Unverify company status
- Delete recruiter accounts
- Company verification system

### 4. **Navigation Tabs**
- Dashboard (Statistics overview)
- Job Seekers (User management)
- Recruiters (Company management)
- Logout functionality

## 🌐 Admin API Integration

### Authentication Endpoint
```javascript
POST /admin/authenticate
Body: { email, password }
Response: { jwtToken }
```

### Dashboard Endpoints
```javascript
GET /admin/dashboard          // Statistics
GET /admin/jobseekers        // All job seekers
GET /admin/recruiters        // All recruiters
DELETE /admin/jobseekers/:id // Delete job seeker
DELETE /admin/recruiters/:id // Delete recruiter
PUT /admin/recruiters/:id/verify   // Verify company
PUT /admin/recruiters/:id/unverify // Unverify company
```

## 🔒 Security Implementation

### Protected Routes
- Admin dashboard requires valid JWT token
- Role-based access control (ADMIN role required)
- Automatic redirect to login if unauthorized

### Token Management
```javascript
// Store admin token
localStorage.setItem('adminToken', token);
localStorage.setItem('userRole', 'ADMIN');

// Include in API requests
headers: {
    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
}
```

## 🎨 UI Components Used

### Bootstrap Components
- Container, Row, Col (Layout)
- Card (Content containers)
- Table (Data display)
- Button (Actions)
- Badge (Status indicators)
- Form (Input forms)
- Alert (Notifications)

### React Icons
- FaUsers (Job seekers icon)
- FaBuilding (Recruiters icon)
- FaBriefcase (Jobs icon)
- FaFileAlt (Applications icon)
- FaTrash (Delete action)
- FaCheck (Verify action)

## 📱 Responsive Design

### Mobile-First Approach
- Responsive tables with horizontal scroll
- Collapsible sidebar navigation
- Mobile-optimized button layouts
- Touch-friendly interface elements

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🚀 Setup Instructions

### 1. Backend Setup
```bash
# Ensure admin module is added to backend
# Run SQL script to create default admin
# Start Spring Boot application
```

### 2. Frontend Integration
```bash
# Admin components already created
# Routes added to App.js
# Navigation link added to Header.js
# No additional dependencies required
```

### 3. Access Admin Panel
```
1. Start React application: npm start
2. Navigate to: http://localhost:3000/admin/login
3. Login with default credentials
4. Access dashboard at: http://localhost:3000/admin/dashboard
```

## 🔧 Component Details

### AdminLogin.js
```javascript
Features:
- Form validation
- Loading states
- Error handling
- JWT token storage
- Automatic redirect
- Default credentials display
```

### AdminDashboard.js
```javascript
Features:
- Statistics cards
- Tabbed navigation
- Data tables
- Action buttons
- Confirmation dialogs
- Real-time updates
- Responsive layout
```

### AdminService.js
```javascript
Methods:
- authenticateAdmin()
- getDashboardStats()
- getAllJobSeekers()
- getAllRecruiters()
- deleteJobSeeker()
- deleteRecruiter()
- verifyRecruiter()
- unverifyRecruiter()
```

## 🎯 Usage Examples

### Admin Login
```javascript
// Navigate to admin login
<Link to="/admin/login">Admin Panel</Link>

// Login form submission
const handleSubmit = async (e) => {
    const response = await axios.post('/admin/authenticate', credentials);
    localStorage.setItem('adminToken', response.data.jwtToken);
    navigate('/admin/dashboard');
};
```

### Delete User
```javascript
const deleteJobSeeker = async (id) => {
    if (window.confirm('Delete this user?')) {
        await axios.delete(`/admin/jobseekers/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        // Refresh data
    }
};
```

### Verify Company
```javascript
const verifyRecruiter = async (id) => {
    await axios.put(`/admin/recruiters/${id}/verify`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    toast.success('Company verified successfully');
};
```

## 🎨 Styling Guidelines

### Color Scheme
- Primary: Blue (#007bff)
- Success: Green (#28a745)
- Warning: Yellow (#ffc107)
- Danger: Red (#dc3545)
- Info: Light Blue (#17a2b8)

### Admin-Specific Styling
- Admin navigation link: Red color with bold font
- Dashboard cards: Color-coded by data type
- Action buttons: Consistent sizing and spacing
- Status badges: Color-coded by status type

## 🔄 Data Flow

### Authentication Flow
```
1. User enters credentials
2. Frontend sends POST to /admin/authenticate
3. Backend validates and returns JWT
4. Frontend stores token and redirects
5. Protected routes check token validity
```

### Dashboard Data Flow
```
1. Component mounts
2. Fetch dashboard statistics
3. Fetch user lists (job seekers, recruiters)
4. Display data in tables and cards
5. Handle user actions (delete, verify)
6. Refresh data after actions
```

## 🚨 Error Handling

### API Errors
- Network errors: Display connection message
- Authentication errors: Redirect to login
- Authorization errors: Show access denied
- Validation errors: Display field-specific messages

### User Feedback
- Success messages: Green toast notifications
- Error messages: Red toast notifications
- Loading states: Disabled buttons with spinner
- Confirmation dialogs: Before destructive actions

## 📊 Performance Considerations

### Optimization Techniques
- Lazy loading of admin components
- Efficient state management
- Minimal re-renders
- Optimized API calls
- Cached authentication tokens

### Best Practices
- Component separation of concerns
- Reusable service functions
- Consistent error handling
- Responsive design patterns
- Accessibility compliance

## 🔮 Future Enhancements

### Planned Features
- [ ] Advanced filtering and search
- [ ] Export data functionality
- [ ] Bulk operations
- [ ] Activity logs
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Role-based permissions
- [ ] System settings management

### Technical Improvements
- [ ] Real-time updates with WebSocket
- [ ] Pagination for large datasets
- [ ] Advanced data visualization
- [ ] Mobile app support
- [ ] Multi-language support

---

**The admin frontend module is now fully integrated with the JobVista platform, providing comprehensive administrative capabilities through an intuitive and responsive interface.**