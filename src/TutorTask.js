
import React, { useState } from 'react';
import axios from 'axios';
// import './TutorTask.css';

function TutorTask() {
  const [task, setTask] = useState({
    userId: '',
    taskName: '',
    startDate: '',
    endDate: '',
  });

  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the end date is after the start date
    if (new Date(task.endDate) < new Date(task.startDate)) {
      setValidationError('End date must be after start date');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/taskApi/task/create', task);
      alert('Task created successfully:', response.data);
    } catch (error) {
      alert('Error creating task:', error);
    }
  };

  return (
    <>
         <header><h2>My Online Tutor</h2></header>
      <nav className="sidebar1">
        <ul>
          <li>Home</li><br />
          <li> Live Classes</li><br />
          <li> Task</li><br />
          <li> User List</li><br />
          <li> My Discussion</li><br />
          <li> Profile</li><br />
          <li> StudyMaterials</li><br />
          <li> Settings</li><br />
        </ul>
      </nav>
      <div className="main-content">
        <h1 className="taskH1">Task From</h1>
        {/ Display validation error message /}
        {validationError && <div className="error-message">{validationError}</div>}
        <form onSubmit={handleSubmit} className='from1'>
          <label>
            User Id:
            <input type="number" name="userId" value={task.userId} onChange={handleChange} />
          </label>
          <label>
            Task Name:
            <input type="text" name="taskName" value={task.taskName} onChange={handleChange} />
          </label>
          <label>
            Start Date:
            <input type="date" name="startDate" value={task.startDate} onChange={handleChange} />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" value={task.endDate} onChange={handleChange} />
          </label><br></br>
          <button type="submit" className='tutorButton'>Create Task</button>
        </form>
      </div>
      <div className="footer1">hello @123</div>
    </>
  );
}

export default TutorTask;

