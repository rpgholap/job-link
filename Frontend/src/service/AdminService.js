import axios from 'axios';

const BASE_URL = 'http://localhost:8080/admin';

class AdminService {
    
    // Admin Authentication
    authenticateAdmin(credentials) {
        return axios.post(`${BASE_URL}/authenticate`, credentials);
    }

    // Get Dashboard Statistics
    getDashboardStats() {
        return axios.get(`${BASE_URL}/dashboard`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }

    // Get All Job Seekers
    getAllJobSeekers() {
        return axios.get(`${BASE_URL}/jobseekers`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }

    // Get All Recruiters
    getAllRecruiters() {
        return axios.get(`${BASE_URL}/recruiters`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }

    // Delete Job Seeker
    deleteJobSeeker(id) {
        return axios.delete(`${BASE_URL}/jobseekers/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }

    // Delete Recruiter
    deleteRecruiter(id) {
        return axios.delete(`${BASE_URL}/recruiters/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }

    // Verify Recruiter
    verifyRecruiter(id) {
        return axios.put(`${BASE_URL}/recruiters/${id}/verify`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }

    // Unverify Recruiter
    unverifyRecruiter(id) {
        return axios.put(`${BASE_URL}/recruiters/${id}/unverify`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
            }
        });
    }
}

export default new AdminService();