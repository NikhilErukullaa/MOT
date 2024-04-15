import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css"
import { Link, useParams } from "react-router-dom"; // Add this line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChalkboard, faUsers, faTasks, faBook, faComments, faCog, faSignOutAlt, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import "./ProfessionalUserList.css";
import './Attendance.css'

function Attendance() {
  const { courseType } = useParams();
  const [users, setUsers] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const id = 1;

  useEffect(() => {
    // Fetch user details when the component mounts
    axios.get(`http://localhost:8080/api-v1/${id}`)
      .then(response => {
        setTutorData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  useEffect(() => {
      axios.get(`http://localhost:8080/api/users/by-course/Technical - Java`)
      .then(response => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(`Error fetching ${courseType} course users:`, error);
      });
  }, [courseType]);


  const handleAbsent = (userId) => {
    // Handle marking user as absent
    console.log(`User ${userId} marked as absent`);
    const status="absent"
    // Send data to backend
    const usersdata= axios.get(`http://localhost:8080/api/users/${userId}`)
      .then(response => {
        var fname =response.data.firstName
        var lname=response.data.lastName
        sendDataToBackend(userId, status,fname,lname);

      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });

    
  };

  
  const handlePresent = (userId) => {
    // Handle marking user as present
    const usersdata= axios.get(`http://localhost:8080/api/users/${userId}`)
      .then(response => {
        var fname =response.data.firstName
        var lname=response.data.lastName
        sendDataToBackend(userId, status,fname,lname);

      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });

    console.log(`User ${userId} marked as present`);
    const status ='present'

  };


  const sendDataToBackend = (userId, status,fname,lname) => {
    console.log('Sending data to backend:', userId, status,fname);
    const formattedDate = new Date().toISOString().split('T')[0];
    axios.post('http://localhost:8080/user/createAttendance', {
      userID: userId,
      status: status,
      firstName:fname,
      lastName:lname,
      
      date: formattedDate // Sending the current date along with data
    })
    .then(response => {
      console.log('Data sent successfully:', response.data);
      alert(response.data)
      // If you need to update some state upon successful data submission, you can do it here
    })
    .catch(error => {
      console.error('Error sending data to backend:', error);
    });
  };
  

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
          <li><Link to='/Attedance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/UserAttedance' ><FontAwesomeIcon icon={faUserCheck} />User Attendance</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div>
        <h2 style={{ fontSize: "2.3rem", marginLeft: "40%"}}> Attendance for {currentDate}</h2>
      </div>
      <div >
      {users.length > 0 ? (
        <div className="AcademicListdata">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>                 
                  <td>{user.courses}</td>
                  <td>
                    <button style={{marginRight:"10px"}} onClick={() => handlePresent(user.id)}>Present</button>
                    <button onClick={() => handleAbsent(user.id)}>Absent</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="ErrorMessage">
          <p>No users found for the given course type.</p>
        </div>
      )}
      </div>
      {/* <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}> 2024 My Online Tutor. All rights reserved</div> */}
    </>
  );
}

export default Attendance;
