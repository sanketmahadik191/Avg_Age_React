// App.js
import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';
import './App.css';
import employeeData from './data.json';

const App = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setAllEmployees(employeeData.map(emp => ({ ...emp, added: false })));
  }, []);

  const addEmployee = (employee) => {
    const updatedEmployees = allEmployees.map((emp) =>
      emp.id === employee.id ? { ...emp, added: true } : emp
    );
    setAllEmployees(updatedEmployees);
    setTeam([...team, employee]);
  };

  const removeEmployee = (employee) => {
    const updatedEmployees = allEmployees.map((emp) =>
      emp.id === employee.id ? { ...emp, added: false } : emp
    );
    setAllEmployees(updatedEmployees);
    setTeam(team.filter((emp) => emp.id !== employee.id));
  };

  const averageAge = team.length > 0 ? Math.round(team.reduce((acc, curr) => acc + curr.age, 0) / team.length) : 0;

  const sortEmployeesByAge = () => {
    const sortedEmployees = [...team].sort((a, b) => a.age - b.age);
    setTeam(sortedEmployees);
  };

  return (
    <div className="App">
      <EmployeeList employees={allEmployees} addEmployee={addEmployee} />
      <TeamList team={team} removeEmployee={removeEmployee} averageAge={averageAge} />
      <button className="sort-btn" onClick={sortEmployeesByAge}>SORT BY AGE</button>
    </div>
  );
};

export default App;
