// EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees, addEmployee }) => {
  return (
    <div className="list-container">
      <h3>Employees List</h3>
      <ul className="list">
        {employees.map((employee) => (
          <li key={employee.id} className={employee.added ? 'disabled' : ''}>
            {employee.first_name} {employee.last_name} - {employee.age} years
            {!employee.added && <button onClick={() => addEmployee(employee)}>ADD</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
