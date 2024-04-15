// Notifications.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Notification.css';
// import { Link } from "react-router-dom";

// function Notifications() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Fetch notifications from the server when the component mounts
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/admin/announcements/tutors");
//         if (response.status === 200) {
//           setNotifications(response.data);
//         } else {
//           console.error("Failed to fetch notifications");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
// //localhost:8080/api/admin/announcements
//     fetchNotifications();
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <>
//       <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//   </div>
//   <nav className="sidebarT">
//         <ul>
//         <li><Link to='/TutorDashboard'><label>Home</label></Link></li>
//           <li><Link to='/LiveClass'><label>Live Classes</label></Link></li>
//           <li><Link to='/Task'><label>Tasks</label></Link></li>
//           <li><Link to='/UserList'><label>UserList</label></Link></li>
//            <li><Link to='/MyDiscussion'><label>My Discussion</label></Link></li>
//           <li><Link to='/StudyMaterials'><label>StudyMaterials</label></Link></li>
//           <li><Link to='/TutorSetting'><label>Settings</label></Link></li>
//         </ul>
//       </nav>
    
//          <div className="main-content8">
//         <div className="notifications-page course-item8">
//           <h1>Notifications</h1>

//           <table className="notification-table ">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Message</th>
//                 {/* <th>Date</th> */}
//                 {/* <th>User ID</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {notifications.map((notification) => (
//                 <tr key={notification.id} className="notification-row">
//                   <td>{notification.title}</td>
//                   <td>{notification.message}</td>
//                   {/* <td>{notification.date}</td> */}
//                   {/* <td>{notification.userId}</td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Notifications;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Notification.css';
import { Link } from "react-router-dom";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const id = 1;
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api-v1/${id}`)
      .then(response => {
        setTutorData(response.data);
        // Set initial course name if available in tutor data
        if (response.data.courseName) {
          // Replace setFileEntity with the appropriate state variable or function
          // setFileEntity((prevData) => ({
          //   ...prevData,
          //   course: response.data.courseName,
          // }));
        }
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  useEffect(() => {
    // Fetch notifications from the server when the component mounts
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/admin/announcements/tutors");
        if (response.status === 200) {
          setNotifications(response.data);
        } else {
          console.error("Failed to fetch notifications");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array ensures the effect runs only once

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
          <li><Link to='/UserList'><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/TutorSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>

      <div className="main-content8">
        <div className="notifications-page course-item8">
          <h1>Notifications</h1>

          <table className="notification-table ">
            <thead>
              <tr>
                <th>Title</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification.id} className="notification-row">
                  <td>{notification.title}</td>
                  <td>{notification.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default Notifications;
