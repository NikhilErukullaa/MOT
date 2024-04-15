

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./ProfessionalUserList.css"; 

// function UserList(){
//   const { courseType } = useParams();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/users/by-course/Technical - Java`)
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error(`Error fetching ${courseType} course users:`, error);
//       });
//   }, [courseType]);

//   return (
//     <>
//          <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//     </div>
//       <div>
//         <h2>{`${courseType} Tutors Skill List`}</h2>
//       </div>
//       {users.length > 0 ? (
//         <div className="AcademicList_table">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 {/* <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Confirm Password</th> */}
//                 {/* <th>Qualification</th>
//                 <th>Higher Qualification</th> */}
//                 <th>Course</th>
//                 {/* <th>Address</th>
//                 <th>Gender</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.firstName}</td>
//                   {/* <td>{user.lastName}</td> */}
//                   {/* <td>{user.email}</td>
//                   <td>{user.password}</td>
//                   <td>{user.confirmPassword}</td> */}
//                   {/* <td>{user.qualification}</td>
//                   <td>{user.higherQualification}</td> */}
//                   <td>{user.courses}</td>
//                   {/* <td>{user.address}</td>
//                   <td>{user.gender}</td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="ErrorMessage">
//           <p>No users found for the given course type.</p>
//         </div>
//       )}
//            <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}>Footer</div>
//     </>
//   );
// }

// export default UserList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UserList.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUser, faQuestionCircle, faChartBar, faBell} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function UserList(){
  const { courseType } = useParams();
  const [users, setUsers] = useState([]);
  const [tutorData, setTutorData] = useState(null);
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
      })
      .catch(error => {
        console.error(`Error fetching ${courseType} course users:`, error);
      });
  }, [courseType]);

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
    <div>
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
    </div>
    <div style={{marginTop: "0%"}}>
      <div>
        <h2 style={{marginLeft: "40%", fontSize: "2.3rem"}}>User List</h2>
      </div>
      {users.length > 0 ? (
        <div className="AcademicList">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                {/* <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th> */}
                {/* <th>Qualification</th>
                <th>Higher Qualification</th> */}
                <th>Course</th>
                {/* <th>Address</th>
                <th>Gender</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  {/* { <td>{user.lastName}</td> } */}
                  {/* <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmPassword}</td> */}
                  {/* <td>{user.qualification}</td>
                  <td>{user.higherQualification}</td> */}
                  <td>{user.courses}</td>
                  {/* <td>{user.address}</td>
                  <td>{user.gender}</td> */}
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
           <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}>Footer</div>
           </div>
    </>
  );
}

export default UserList;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = ({ courseName }) => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         // Fetch users when the component mounts or the courseName changes
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/users/by-course/Technical - Java`);
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('There was an error fetching the users:', error);
//             }
//         };

//         fetchUsers();
//     }, [courseName]);

//     const markAttendance = async (userId, isPresent) => {
//         try {
//             await axios.post('http://localhost:8080/api/attendance', {
//                 userId,
//                 date: new Date().toISOString().slice(0, 10), // Format as YYYY-MM-DD
//                 isPresent
//             });
//             console.log(`Attendance for user ID ${userId} marked as ${isPresent ? 'present' : 'absent'}.`);
//         } catch (error) {
//             console.error('Error marking attendance:', error);
//         }
//     };

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th style={{color:'black'}}>User ID</th>
//                     <th>Name</th>
//                     <th>Attendance</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map(user => (
//                     <tr key={user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.firstName} {/* Assuming 'name' includes the first name or is the field you're interested in. If you have a specific 'firstName' field, use it here. */}</td>
//                         <td>
//                             <button onClick={() => markAttendance(user.id, true)}>Present</button>
//                             <button onClick={() => markAttendance(user.id, false)}>Absent</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default UserList;
