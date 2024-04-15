
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './TutorDashboard.css';

// function TutorProfile() {
//   const [tutorData, setTutorData] = useState({
//     TutorName: "",
//     TutorId: "",
//     profileImage: "https://tse2.mm.bing.net/th?id=OIP.xth0aPNWM25v25Qffuw0qwHaHd&pid=Api&P=0&h=180",
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     qualification: "",
//     higherQualification: "",
//     course: "",
//     address: "",
//     gender: ""
//   });

//   useEffect(() => {
//     // Fetch tutor data from the backend when the component mounts
//     fetchTutorData();
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   const fetchTutorData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api-v1/1');
//       const data = response.data;

//       // Update state with the fetched data
//       setTutorData({
//         TutorName: `${data.firstName} ${data.lastName}`,
//         TutorId: data.id,
//         profileImage: data.profileImage,  // Make sure your API response includes the profileImage property
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         // password: data.password,
//         qualification: data.qualification,
//         higherQualification: data.higherQualification,
//         course: data.course,
//         address: data.address,
//         gender: data.gender
//       });
//     } catch (error) {
//       console.error('Error fetching tutor data:', error);
//     }
//   };

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
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
//         <h1>Profile</h1>
//         <div className="profile-info   course-item26">
//           <div className="Tutor-details  profile-details  ">
//             <p>First Name: {tutorData.firstName}</p>
//             <p>Last Name: {tutorData.lastName}</p>
//             <p>Email: {tutorData.email}</p>
//             {/* {/ <p>Password: {tutorData.password}</p> /} */}
//             <p>Qualification: {tutorData.qualification}</p>
//             <p>HigherQualification: {tutorData.higherQualification}</p>
//             <p>Course: {tutorData.course}</p>
//             <p>Address: {tutorData.address}</p>
//             <p>Gender: {tutorData.gender}</p>
//             </div>
//           </div>
//         </div>
//         <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default TutorProfile;

    
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TutorProfile() {
  const [tutorData, setTutorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to control edit mode
  const [editedData, setEditedData] = useState(null); // State to hold edited data
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      // Fetch tutor details based on the stored tutor ID
      axios.get(`http://localhost:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
          // Initialize edited data with fetched data
          setEditedData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Function to handle input change while editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    // Update the backend with edited data
    axios.put(`http://localhost:8080/api-v1/${tutorData.id}`, editedData)
      .then(response => {
        // Update the local state with the updated data
        setTutorData(editedData);
        setIsEditing(false);
        // Show success toast
        toast.success("Profile updated successfully");
      })
      .catch(error => {
        console.error('Error updating tutor details:', error);
        // Show error toast
        toast.error("Failed to update profile. Please try again later.");
      });
  };


  return (
    <div>
            <ToastContainer />
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
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <h2 style={{fontSize: "2.3rem"}}>Profile</h2>
        {tutorData ? (
          <div className="tutor-details">
            <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1703916472~exp=1703917072~hmac=1176b5bbdf99831939c02ac78bec49aeaa8893cc388dcc6322197708ba6c669c" alt="Profile" className='profile-image5' />
            {isEditing ? (
              <div className="profile-details">
                <input type="text" name="firstName" value={editedData.firstName} onChange={handleInputChange} />
                <input type="text" name="lastName" value={editedData.lastName} onChange={handleInputChange} />
                <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
                <input type="qualification" name="qualification" value={editedData.qualification} onChange={handleInputChange} />
                <input type="higherQualification" name="higherQualification" value={editedData.higherQualification} onChange={handleInputChange} />
                <input type="course" name="course" value={editedData.course} onChange={handleInputChange} />
                <input type="address" name="address" value={editedData.address} onChange={handleInputChange} />
                <input type="gender" name="gender" value={editedData.gender} onChange={handleInputChange} />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div className="profile-details">
                <p>TutorID: {tutorData.id}</p>
                <p>First Name: {tutorData.firstName}</p>
                <p>Last Name: {tutorData.lastName}</p>
                <p>Email: {tutorData.email}</p>
                <p>Qualification: {tutorData.qualification}</p>
                <p>HigherQualification: {tutorData.higherQualification}</p>
                <p>Course: {tutorData.course}</p>
                <p>Address: {tutorData.address}</p>
                <p>Gender: {tutorData.gender}</p> <br/>
                <button onClick={handleEditClick} style={{ marginRight: "30px" }}>Edit</button>
                {/* <Link to='/TutorSetting'><button className="back-button">Back</button></Link> */}
              </div>
            )}
          </div>
        ) : (
          <p>Loading Tutor details...</p>
        )}
      </div>
    </div>
  );
}

export default TutorProfile;
