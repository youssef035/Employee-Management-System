package com.demo.employeesystem.Service;

import com.demo.employeesystem.Model.Employee;
import com.demo.employeesystem.Repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService implements EmployeeServiceInterface{

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee saveEmployee(Employee employee) {
      return  employeeRepo.save(employee);
    }

    @Override
    public Optional<Employee> getEmployeebyId(int id) {
        return employeeRepo.findById(id);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) {
        Employee employeeToUpdate = employeeRepo.findById(id).orElseThrow();

        employeeToUpdate.setEmail(employee.getEmail());
        employeeToUpdate.setFirstName(employee.getFirstName());
        employeeToUpdate.setLastName(employee.getLastName());
        employeeToUpdate.setID(employee.getID());

        return employeeRepo.save(employeeToUpdate);
    }

    @Override
    public void DeleteEmployee(int id) {
        employeeRepo.deleteById(id);
    }
}
