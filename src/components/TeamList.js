// TeamList.js
import React from 'react';

const TeamList = ({ team, removeEmployee, averageAge }) => {
  return (
    <div className="list-container">
      <h3>Team Members</h3>
      <p>Average Age: {averageAge}</p>
      <ul className="list">
        {team.map((employee) => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} - {employee.age} years
            <button onClick={() => removeEmployee(employee)}>REMOVE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
