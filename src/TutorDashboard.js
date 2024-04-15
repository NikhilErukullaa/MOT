
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './TutorDashboard.css';

// const initialSchedule = [
//   { id: 1, day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'Maths' },
//   { id: 2, day: 'Wednesday', time: '2:00 PM - 3:00 PM', subject: 'Science' },
// ];

// function TutorDashboard() {
//   const [schedule, setSchedule] = useState(initialSchedule);
//   const [formData, setFormData] = useState({
//     id: null,
//     day: '',
//     time: '',
//     subject: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.id !== null) {
//       const updatedSchedule = schedule.map((item) =>
//         item.id === formData.id ? formData : item
//       );
//       setSchedule(updatedSchedule);
//     } else {
//       const newClass = {
//         id: schedule.length + 1,
//         ...formData,
//       };
//       setSchedule([...schedule, newClass]);
//     }

//     setFormData({
//       id: null,
//       day: '',
//       time: '',
//       subject: '',
//     });
//   };

//   const handleEdit = (item) => {
//     setFormData(item);
//   };

//   const handleDelete = (id) => {
//     const updatedSchedule = schedule.filter((item) => item.id !== id);
//     setSchedule(updatedSchedule);
//   };

//   return (
//     <>
//       <div className="headerT">
//         <label ><h2 style={{color:'white'}}>My Online Tutor</h2></label>
//       </div>
//       <nav className="sidebarT">
//         <ul>
//           <li><Link to='/TutorDashboard'><label>Home</label></Link></li>
//           <li><Link to='/LiveClass'><label>Live Classes</label></Link></li>
//           <li><Link to='/Task'><label>Tasks</label></Link></li>
//           <li><Link to='/UserList'><label>UserList</label></Link></li>
//           <li><Link to='/MyDiscussion'><label>My Discussion</label></Link></li>
//           <li><Link to='/StudyMaterials'><label>StudyMaterials</label></Link></li>
//           <li><Link to='/TutorSetting'><label>Settings</label></Link></li>
//         </ul>
//       </nav>
//       <div className="main-content">
//         <div className="App">
//           <h1>Welcom to Tutor Dashboard</h1>
//            <img src='https://www.sageeducation.ae/admin/blog/online-tutoring.jpg' alt="Course Image" className="course-image" />
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default TutorDashboard;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import './TutorDashboard.css';

// function TutorDashboard() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [tutorData, setTutorData] = useState(null);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);
//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api-v1/${id}`)
//       .then(response => {
//         setTutorData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [id]);
  
//   return (
//     <>
//       <div className="header1">
//         <label><h1 style={{color:'white'}}>My Online Tutor</h1></label>
//         <div className="Tutor1">
//         <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
//           {tutorData && (
//             <>
//               <div>Tutor ID: {tutorData.id}</div>
//               <div>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div>
//             </>
//           )}
//         </div>
//       </div>
//       <nav className="sidebarT">
//         <ul>
//         <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
//           <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>
//       <div className="main-content">
//         <div className="App">
//           <h1>Welcom to Tutor Dashboard</h1>
//            <img src='https://www.sageeducation.ae/admin/blog/online-tutoring.jpg' alt="Online Tutoring" className="course-image" />
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default TutorDashboard;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers,faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';

function TutorDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tutorData, setTutorData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Fetch tutor details when the component mounts
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      axios.get(`http://localhost:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tutorId');
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <>
      <div className="header1">
        <label><h1 style={{color:'white'}}>My Online Tutor</h1></label>
        <div className="Tutor1">
          <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
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
          <li><Link to='/Attendance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li style={{marginLeft: "10%"}}><button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
        </ul>
      </nav>
      <div className="main">
        <div className="App"> <br/>
          <h2 style={{marginLeft:  "35%", fontSize: "2.3rem"}}>Welcome to Tutor Dashboard</h2>
          <img src='https://www.sageeducation.ae/admin/blog/online-tutoring.jpg' alt="Online Tutoring" className="course-image" style={{marginLeft: "5%", borderRadius: "2rem"}}/>
        </div>
      </div>
      {/* <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div> */}
    </>
  );
}

export default TutorDashboard;
