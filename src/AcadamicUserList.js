
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import './ProfessionalUserList.css';

// function AcadamicUserList() {
//   const { courseType } = useParams();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8081/api/students/byCourse/Academic`)
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error(`Error fetching ${courseType} course users:`, error);
//       });
//   }, [courseType]);

//   return (
//     <>
//        <header><h2>My Online Tutor</h2></header>
//     <div className="user-list-page">
//       <h1>{`${courseType} Course Users`}</h1>
//       {users.length > 0 ? (
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Confirm Password</th>
//               <th>Qualification</th>
//               <th>Higher Qualification</th>
//               <th>Course</th>
//               <th>Address</th>
//               <th>Gender</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.userId}>
//                 <td>{user.userId}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.password}</td>
//                 <td>{user.confirmPassword}</td>
//                 <td>{user.qualification}</td>
//                 <td>{user.higherQualification}</td>
//                 <td>{user.course}</td>
//                 <td>{user.address}</td>
//                 <td>{user.gender}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found for the given course type.</p>
//       )}
//     </div>
//     </>
//   );
// }

// export default AcadamicUserList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ProfessionalUserList.css';

function AcademicUserList() {
  const { courseType } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/byCourse/Professional - Music`)
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
    </div>
      <div className="user-list-page">
        <h1>{`${courseType} Course Users`}</h1>
        {users.length > 0 ? (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                {/* <th>Confirm Password</th> */}
                <th>Phone Number</th>
                <th>Course</th>
                <th>Address</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.password}</td> */}
                  {/* <td>{user.confirmPassword}</td> */}
                  <td>{user.phoneNumber}</td>
                  <td>{user.course}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found for the given course type.</p>
        )}
      </div>
      <div className="AppFooter" style={{color:'white',  backgroundColor:' #4b7ec6'}}>Footer</div>
    </>
  );
}

export default AcademicUserList;
