import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";

const ListEmployeesComponent = () => {
  const [employeeArr, setEmployeeArr] = useState([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  // function
  const getAllEmployee = () => {
    EmployeeService.getAllEmployee()
      .then((res) => {
        setEmployeeArr(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  // function to delete
  const deleteEmp = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then(() => getAllEmployee())
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <Link to={"add-employee"} className="btn btn-primary mb-2 mt-3" href="">
        Add Employee
      </Link>
      <h2 className="text-center mb-4">List Employees</h2>
      <table className="table table-bordered table striped">
        <thead>
          <th> Employee ID </th>
          <th> First Name</th>
          <th> Last Name</th>
          <th> Email </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {employeeArr.map((emp) => (
            <tr id={emp.id}>
              <td>{emp.id} </td>
              <td>{emp.firstName} </td>
              <td>{emp.lastName} </td>
              <td>{emp.email} </td>
              <td>
                <Link
                  to={`/add-employee/${emp.id}`}
                  className="btn btn-info"
                  href=""
                >
                  update
                </Link>{" "}
                <a
                  onClick={(e) => deleteEmp(e, emp.id)}
                  className="btn btn-danger"
                  href=""
                >
                  delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeesComponent;
