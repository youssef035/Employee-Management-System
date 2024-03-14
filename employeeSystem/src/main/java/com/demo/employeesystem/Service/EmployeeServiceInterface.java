package com.demo.employeesystem.Service;

import com.demo.employeesystem.Model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeServiceInterface {
    public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeebyId(int id);
    List<Employee> getAllEmployees();
    Employee updateEmployee(int id, Employee employee);
    void DeleteEmployee(int id);
}
