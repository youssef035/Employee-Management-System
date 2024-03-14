import React, { useEffect, useState } from "react";
import EmployeeService from "../Service/EmployeeService";
import {
  Link,
  createMemoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const employeeData = { firstName, lastName, email };
  //   console.log(employeeData);

  //method to save the data into the db
  const saveEmployee = (e) => {
    e.preventDefault();
    if (id) {
      EmployeeService.updateEmployee(employeeData)
        .then(() => navigate("/employee"))
        .catch((e) => console.log(e));
    } else {
      EmployeeService.saveEmployee(employeeData)
        .then(() => navigate("/employee"))
        .catch((e) => console.log(e));
    }
  };

  const tile = () => {
    if (id) {
      return "update employee";
    } else {
      return "add employee";
    }
  };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFirstname(res.data.firstName);
          setLastname(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{tile()} </h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter first name "
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <input
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter Last Name"
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter Email"
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveEmployee(e)}
                >
                  Save
                </button>
                {""}
                <Link to={"/employee"} className="btn btn-danger" href="">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
