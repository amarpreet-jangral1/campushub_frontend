import axios from "axios"
export const BASE_URL = "http://localhost:9000/"

class ApiServices {
    getToken() {
        let obj = {
            authorization: sessionStorage.getItem('token')
        }
        return obj
    }

    Login(data) {
        return axios.post(BASE_URL + "apis/user/login", data)
    }

    Dashboard(data) {
        return axios.post(BASE_URL + "apis/dashboard", data, { headers: this.getToken() });
    }

    addDepartment(data) {
        return axios.post(BASE_URL + "apis/dept/add", data, { headers: this.getToken() });
    }

    manageDepartment(data) {
        return axios.post(BASE_URL + "apis/dept/getall", data);
    }

    deleteDepartment(data) {
        return axios.post(BASE_URL + "apis/dept/statusUpdate", data, { headers: this.getToken() });
    }

    getSingleDepartment(data) {
        return axios.post(BASE_URL + "apis/dept/getsingle", data, { headers: this.getToken() });
    }

    updateDepartment(data) {
        return axios.post(BASE_URL + "apis/dept/update", data, { headers: this.getToken() });
    }

    addCourse(data) {
        return axios.post(BASE_URL + "apis/course/add", data, { headers: this.getToken() });
    }

    manageCourse(data) {
        return axios.post(BASE_URL + "apis/course/getall", data);
    }

    deleteCourse(data) {
        return axios.post(BASE_URL + "apis/course/statusUpdate", data, { headers: this.getToken() });
    }

    getSingleCourse(data) {
        return axios.post(BASE_URL + "apis/course/getsingle", data, { headers: this.getToken() });
    }

    updateCourse(data) {
        return axios.post(BASE_URL + "apis/course/update", data, { headers: this.getToken() });
    }

    addStudent(data) {
        return axios.post(BASE_URL + "apis/students/add", data, { headers: this.getToken() });
    }

    manageStudent(data) {
        return axios.post(BASE_URL + "apis/students/getall", data, { headers: this.getToken() });
    }

    deleteStudent(data) {
        return axios.post(BASE_URL + "apis/students/statusUpdate", data, { headers: this.getToken() });
    }

    getSingleStudent(data) {
        return axios.post(BASE_URL + "apis/students/getsingle", data, { headers: this.getToken() });
    }

    updateStudent(data) {
        return axios.post(BASE_URL + "apis/students/update", data, { headers: this.getToken() });
    }

    addHod(data) {
        return axios.post(BASE_URL + "apis/hod/add", data, { headers: this.getToken() });
    }

    manageHod(data) {
        return axios.post(BASE_URL + "apis/hod/getall", data, { headers: this.getToken() });
    }

    deleteHod(data) {
        return axios.post(BASE_URL + "apis/hod/statusUpdate", data, { headers: this.getToken() });
    }

    getSingleHod(data) {
        return axios.post(BASE_URL + "apis/hod/getsingle", data, { headers: this.getToken() });
    }

    updateHod(data) {
        return axios.post(BASE_URL + "apis/hod/update", data, { headers: this.getToken() });
    }

    addComplaint(data) {
        return axios.post(BASE_URL + "apis/complaint/add", data, { headers: this.getToken() });
    }

    manageComplaint(data) {
        return axios.post(BASE_URL + "apis/complaint/getall", data, { headers: this.getToken() });
    }

    getSingleComplaint(data) {
        return axios.post(BASE_URL + "apis/complaint/getsingle", data, { headers: this.getToken() });
    }

    updateComplaint(data) {
        return axios.post(BASE_URL + "apis/complaint/update", data, { headers: this.getToken() });
    }

    addTask(data) {
        return axios.post(BASE_URL + "apis/tasks/add", data, { headers: this.getToken() });
    }

    manageTask(data) {
        return axios.post(BASE_URL + "apis/tasks/getall", data, { headers: this.getToken() });
    }

    getSingleTask(data) {
        return axios.post(BASE_URL + "apis/tasks/getsingle", data, { headers: this.getToken() });
    }

    updateTask(data) {
        return axios.post(BASE_URL + "apis/tasks/update", data, { headers: this.getToken() });
    }

    addCertificate(data) {
        return axios.post(BASE_URL + "apis/certificate/add", data, { headers: this.getToken() });
    }

    // manageCertificate(data) {
    //     return axios.post(BASE_URL + "apis/certificate/getall", data, { headers: this.getToken() });
    // }
    manageCertificate(data) {
        return axios.post(BASE_URL + "apis/certificate/getall", data, { headers: this.getToken() });
    }

    getSingleCertificate(data) {
        return axios.post(BASE_URL + "apis/certificate/getsingle", data, { headers: this.getToken() });
    }

    updateCertificate(data) {
        return axios.post(BASE_URL + "apis/certificate/update", data, { headers: this.getToken() });
    }
    
    addGatepass(data) {
        return axios.post(BASE_URL + "apis/gatepass/add", data, { headers: this.getToken() });
    }

    manageGatepass(data) {
        return axios.post(BASE_URL + "apis/gatepass/getall", data, { headers: this.getToken() });
    }

    getSingleGatepass(data) {
        return axios.post(BASE_URL + "apis/gatepass/getsingle", data, { headers: this.getToken() });
    }

    updateGatepass(data) {
        return axios.post(BASE_URL + "apis/gatepass/update", data, { headers: this.getToken() });
    }
    
    adminProfile(data) {
        return axios.post(BASE_URL + "apis/adminProfile", data, { headers: this.getToken() });
    }
    
    studentProfile(data) {
        return axios.post(BASE_URL + "apis/studentProfile", data, { headers: this.getToken() });
    }
    
    hodProfile(data) {
        return axios.post(BASE_URL + "apis/hodProfile", data, { headers: this.getToken() });
    }

    changePassword(data){
        return axios.post(BASE_URL + "apis/user/changepassword", data, { headers: this.getToken() });
    }
    

    //payments
    payment(data){
        return axios.post(BASE_URL + "apis/payment/pay", data, { headers: this.getToken() });
    }
    studentbyuserid(data){
        return axios.post(BASE_URL + "apis/students/getStudentByUserId", data, { headers: this.getToken() });
    }
    allpayment(){
        return axios.post(BASE_URL + "apis/payment/getall", {},{ headers: this.getToken() });
    }
}

export default new ApiServices;