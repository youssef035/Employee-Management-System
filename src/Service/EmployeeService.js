import axios from "axios";

const base_URL = "http://localhost:8080/employee";
class EmployeeService {
  // method to call all our employees

  getAllEmployee() {
    return axios.get(base_URL);
  }

  saveEmployee(employeeData) {
    return axios.post(base_URL, employeeData);
  }

  updateEmployee(id, employeeData) {
    return axios.put(`${base_URL}/${id}`, employeeData);
  }

  getEmployeeById(id) {
    return axios.get(`${base_URL}/${id}`);
  }

  deleteEmployee(id) {
    return axios.delete(`${base_URL}/${id}`);
  }
}

export default new EmployeeService();
