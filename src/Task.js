


// import React, { useState ,useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Task.css';


// function Task() {
//   const [task, setTask] = useState({
//     userId: '',
//     taskName: '',
//     startDate: '',
//     endDate: '',
//     // reamrks:'bad boy'
//   });
//   const [tasks, setTasks] = useState([]);
//   const [validationError, setValidationError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Get the current date in the format YYYY-MM-DD
//     const currentDate = new Date().toISOString().split('T')[0];

//     // Check if the start date is not less than the current date
//     if (name === 'startDate' && value < currentDate) {
//       setValidationError('Start date must be the current date or later');
//     } else {
//       setValidationError('');
//     }

//     setTask({
//       ...task,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if the end date is after the start date
//     if (new Date(task.endDate) < new Date(task.startDate)) {
//       setValidationError('End date must be after start date');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/taskApi/task/create', task);
//       alert('Task created successfully:', response.data);
//       setTask({
//         userId: '',
//         taskName: '',
//         startDate: '',
//         endDate: '',
//       });
//       // Fetch and update the list of tasks
//       fetchTasks();
//     } 
//     catch (error) {
//       alert('Error creating task:', error);
//     }
//   };
//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/taskApi/tasks');
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []); // Fetch tasks on component mount

//   return (
//     <>
//     {/* //   <div className="header1">
//     //     <div className="logo">Tutor Interface</div>
//     //   </div>
//     //   <nav className="sidebar1">
//     //     <ul>
//     //       <li>Home</li><br />
//     //       <li> Live Classes</li><br />
//     //       <li> Task</li><br />
//     //       <li> User List</li><br />
//     //       <li> My Discussion</li><br />
//     //       <li> Profile</li><br />
//     //       <li> StudyMaterials</li><br />
//     //       <li> Settings</li><br />
//     //     </ul>
//     //   </nav> */}
//       <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//   </div>
//   <nav className="sidebarT">
//     <ul>
//       <li><Link to='/TutorDashboard'><label>Home</label></Link></li>
//       <li><Link to='/LiveClass'><label>Live Classes</label></Link></li>
//       <li><Link to='/Task'><label>Tasks</label></Link></li>
//       <li><Link to='/UserList'><label>UserList</label></Link></li>
//       <li><Link to='/MyDiscussion'><label>My Discussion</label></Link></li>
//       <li><Link to='/StudyMaterials'><label>StudyMaterials</label></Link></li>
//       <li><Link to='/TutorSetting'><label>Settings</label></Link></li>
//     </ul>
//   </nav>
//       <div className="main-content">
//         <h1 className="taskH1">Task From</h1>
//         {validationError && <div className="error-message">{validationError}</div>}
//         <form onSubmit={handleSubmit} className='from23'>
//           <label>
//             User Id:
//             <input type="number" name="userId" className='taskInput' value={task.userId} onChange={handleChange} />
//           </label >
//           <label >
//             Task Name:
//             <input type="text" name="taskName" className='taskInput' value={task.taskName} onChange={handleChange} /> 
//           </label>
//           <label >
//             Start Date:
//             <input type="date" name="startDate" className='taskInput' value={task.startDate} onChange={handleChange} />
//           </label>
//           <label >
//             End Date:
//             <input type="date" name="endDate" className='taskInput' value={task.endDate} onChange={handleChange} />
//           </label>
//           {/* <hr></hr>
//           <label>
//             Remarks:
//             <input type="text" name="remarks" value={task.reamrks} onChange={handleChange} />
//           </label> */}
//           <br></br>
//           <button type="submit" className='tutorButton'>Create Task</button>
//         </form>
//         <h2 className='taskH2'>Task List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Task Name</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.userId}</td>
//                 <td>{task.taskName}</td>
//                 <td>{task.startDate}</td>
//                 <td>{task.endDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* <div className="footer1">hello @123</div> */}
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Task;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Task.css';

function Task() {
  const [task, setTask] = useState({
    userId: '',
    taskName: '',
    startDate: '',
    endDate: '',
  });
  const [tasks, setTasks] = useState([]);
  const [validationError, setValidationError] = useState('');
  const [tutorData, setTutorData] = useState(null); // Define tutorData state variable
  const id = 1;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const currentDate = new Date().toISOString().split('T')[0];

    if (name === 'startDate' && value < currentDate) {
      setValidationError('Start date must be the current date or later');
    } else {
      setValidationError('');
    }

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (new Date(task.endDate) < new Date(task.startDate)) {
      setValidationError('End date must be after start date');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/taskApi/task/create', task);
      alert('Task created successfully:', response.data);
      setTask({
        userId: '',
        taskName: '',
        startDate: '',
        endDate: '',
      });
      fetchTasks();
    } catch (error) {
      alert('Error creating task:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/taskApi/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api-v1/${id}`)
      .then(response => {
        setTutorData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
        <div className="Tutor">
          {tutorData && (
            <>
              <div>Tutor ID: {tutorData.id}</div>
              <div>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div>
            </>
          )}
        </div>
      </div>
      <nav className="sidebarT">
        <ul>
          <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <h1 className="taskH1">Task Form</h1>
        {validationError && <div className="error-message">{validationError}</div>}
        <form onSubmit={handleSubmit} className='from23'>
          <label>
            User Id:
            <input type="number" name="userId" className='taskInput' value={task.userId} onChange={handleChange} />
          </label >
          <label >
            Task Name:
            <input type="text" name="taskName" className='taskInput' value={task.taskName} onChange={handleChange} /> 
          </label>
          <label >
            Start Date:
            <input type="date" name="startDate" className='taskInput' value={task.startDate} onChange={handleChange} />
          </label>
          <label >
            End Date:
            <input type="date" name="endDate" className='taskInput' value={task.endDate} onChange={handleChange} />
          </label>
          <br></br>
          <button type="submit" className='tutorButton'>Create Task</button>
        </form>
        <h2 className='taskH2'>Task List</h2>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.userId}</td>
                <td>{task.taskName}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default Task;







