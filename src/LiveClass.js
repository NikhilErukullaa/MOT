
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';  
// import './TutorDashboard.css';

// function LiveClass() {
//   const [formData, setFormData] = useState({
//     userId: '',
//     link: '',
//     courseName: '',
//     date: '',
//   });
//   const [error, setError] = useState('');
//   const [submittedData, setSubmittedData] = useState([]);
  
//   useEffect(() => {
//     // Fetch submitted data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/messages/get');
//       setSubmittedData(response.data);
//     } catch (error) {
//       console.error('Error while fetching data', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Validate form data
//       if (!formData.userId.trim() || !formData.link.trim() || !formData.courseName.trim() || !formData.date.trim()) {
//         setError('All fields are required');
//         return;
//       }

//       // Clear previous error messages
//       setError('');

//       // Make a POST request to the backend endpoint
//       const response = await axios.post('http://localhost:8080/api/messages/post', formData);

//       setSubmittedData([...submittedData, response.data]);

//       // Clear form data after successful submission
//       setFormData({
//         userId: '',
//         link: '',
//         courseName: '',
//         date: '',
//       });

//       window.alert('Form submitted successfully');
//     } catch (error) {
//       console.error('Error while submitting data', error);
//     }
//   };

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       {/* <div className="header">
//         <h2>My Online Tutor</h2>
//       </div> */}
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
//         <h2>LiveClass</h2>
//         <div className="row col-12 d-flex" >
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> User Id </label>  
//             <input 
//               type="text" 
//               id="userId" 
//               className="inputReg form-control" 
//               placeholder="Enter User Id" 
//               value={formData.userId}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> Link </label>  
//             <input 
//               type="text" 
//               id="link" 
//               className="inputReg form-control" 
//               placeholder="Enter Link" 
//               value={formData.link}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}>CourseName</label>  
//             <input 
//               type="text" 
//               id="courseName" 
//               className="inputReg form-control" 
//               placeholder="Enter Course" 
//               value={formData.courseName}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}} >Date</label>  
//             <input 
//               type="date" 
//               id="date" 
//               className="inputReg form-control" 
//               placeholder="Enter User Id" 
//               value={formData.date}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <button 
//             className="btn btn-primary buttonClass" 
//             style={{ width: '113px', marginLeft: '300px'}}
//             onClick={handleSubmit}
//           >
//             Send
//           </button>
//           {error && <p style={{ color: "black" }}>{error}</p>}
//           {submittedData.length > 0 && (
//             <div>
//               <h3>Submitted Data:</h3>
//               <table className="submitted-data-table">
//                 <thead>
//                   <tr>
//                     <th>User Id</th>
//                     <th>Tutor ID</th>
//                     <th>Link</th>
//                     <th>Course Name</th>
//                     <th>Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {submittedData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.userId}</td>
//                       <td>{data.link}</td>
//                       <td>{data.courseName}</td>
//                       <td>{data.date}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default LiveClass;

















// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';  
// import './TutorDashboard.css';

// function LiveClass() {
//   const [formData, setFormData] = useState({
//     userId: '',
//     tutorId: '', // Added tutorId field
//     liveLink: '', // Changed from 'link' to 'liveLink' to match backend
//     courseName: '',
//     time: '', // Changed from 'date' to 'time' to match backend
//   });
//   const [error, setError] = useState('');
//   const [submittedData, setSubmittedData] = useState([]);
  
//   useEffect(() => {
//     // Fetch submitted data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/messages/get');
//       setSubmittedData(response.data);
//     } catch (error) {
//       console.error('Error while fetching data', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Validate form data
//       if (!formData.userId.trim() || !formData.tutorId.trim() || !formData.liveLink.trim() || !formData.courseName.trim() || !formData.time.trim()) {
//         setError('All fields are required');
//         return;
//       }

//       // Clear previous error messages
//       setError('');

//       // Make a POST request to the backend endpoint
//       const response = await axios.post('http://localhost:8080/api/messages/post', formData);

//       setSubmittedData([...submittedData, response.data]);

//       // Clear form data after successful submission
//       setFormData({
//         userId: '',
//         tutorId: '',
//         liveLink: '',
//         courseName: '',
//         time: '',
//       });

//       window.alert('Form submitted successfully');
//     } catch (error) {
//       console.error('Error while submitting data', error);
//     }
//   };

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       {/* <div className="header">
//         <h2>My Online Tutor</h2>
//       </div> */}
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
//         <h2>LiveClass</h2>
//         <div className="row col-12 d-flex" >
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> User Id </label>  
//             <input 
//               type="text" 
//               id="userId" 
//               className="inputReg form-control" 
//               placeholder="Enter User Id" 
//               value={formData.userId}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> Tutor Id </label>  
//             <input 
//               type="text" 
//               id="tutorId" 
//               className="inputReg form-control" 
//               placeholder="Enter Tutor Id" 
//               value={formData.tutorId}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> Live Link </label>  
//             <input 
//               type="text" 
//               id="liveLink" 
//               className="inputReg form-control" 
//               placeholder="Enter Live Link" 
//               value={formData.liveLink}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}>CourseName</label>  
//             <input 
//               type="text" 
//               id="courseName" 
//               className="inputReg form-control" 
//               placeholder="Enter Course" 
//               value={formData.courseName}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}} >Time</label>  
//             <input 
//               type="datetime-local" 
//               id="time" 
//               className="inputReg form-control" 
//               value={formData.time}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <button 
//             className="btn btn-primary buttonClass" 
//             style={{ width: '113px', marginLeft: '300px'}}
//             onClick={handleSubmit}
//           >
//             Send
//           </button>
//           {error && <p style={{ color: "black" }}>{error}</p>}
//           {submittedData.length > 0 && (
//             <div>
//               <h3>Submitted Data:</h3>
//               <table className="submitted-data-table">
//                 <thead>
//                   <tr>
//                     <th>User Id</th>
//                     <th>Tutor ID</th>
//                     <th>Link</th>
//                     <th>Course Name</th>
//                     <th>Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {submittedData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.userId}</td>
//                       <td>{data.tutorId}</td>
//                       <td>{data.liveLink}</td>
//                       <td>{data.courseName}</td>
//                       <td>{data.time}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default LiveClass;







// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';  
// import './TutorDashboard.css';

// function LiveClass() {
//   const [formData, setFormData] = useState({
//     userId: '',
//     link: '',
//     courseName: '',
//     date: '',
//   });
//   const [error, setError] = useState('');
//   const [submittedData, setSubmittedData] = useState([]);
//   const [tutorData, setTutorData] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const id = 1; 
  
//   useEffect(() => {
//     fetchData();
//     fetchTutorData(id); // Fetch tutor data by ID
//     fetchCourses(); // Fetch available courses
//   }, []);

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api-v1/${id}`)
//       .then(response => {
//         setTutorData(response.data);
//         // Initialize edited data with fetched data
//         // setEditedData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/messages/get');
//       setSubmittedData(response.data);
//     } catch (error) {
//       console.error('Error while fetching data', error);
//     }
//   };

//   const fetchTutorData = async (id) => { // Accept tutorId as a parameter
//     try {
//       const response = await axios.get(`http://localhost:8080/api/users/${id}`); // Use tutorId in the URL
//       setTutorData(response.data); // Update state with tutor data
//     } catch (error) {
//       console.error('Error while fetching tutor data', error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/courses');
//       setCourses(response.data);
//     } catch (error) {
//       console.error('Error while fetching courses', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       if (!formData.userId.trim() || !formData.trim() || !formData.courseName.trim() || !formData.date.trim()) {
//         setError('All fields are required');
//         return;
//       }

//       setError('');
//       const response = await axios.post('http://localhost:8080/api/messages/post', formData);

//       setSubmittedData([...submittedData, response.data]);

//       setFormData({
//         userId: '',
//         link: '',
//         courseName: '',
//         date: '',
//       });

//       window.alert('Form submitted successfully');
//     } catch (error) {
//       console.error('Error while submitting data', error);
//     }
//   };
//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//         <div className="Tutor">
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
//         <h2>LiveClass</h2>
//         <div className="row col-12 d-flex" >
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> User Id </label>  
//             <input 
//               type="text" 
//               id="userId" 
//               className="inputReg form-control" 
//               placeholder="Enter User Id" 
//               value={formData.userId}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> Tutor Id </label>  
//             <input 
//               type="text" 
//               id="tutorId" 
//               className="inputReg form-control" 
//               placeholder="Enter Tutor Id" 
//               value={tutorData ? tutorData.id : ''}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}> Live Link </label>  
//             <input 
//               type="text" 
//               id="liveLink" 
//               className="inputReg form-control" 
//               placeholder="Enter Live Link" 
//               value={formData.liveLink}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}}>CourseName</label>  
//             <input 
//               type="text" 
//               id="courseName" 
//               className="inputReg form-control" 
//               placeholder="Enter Course" 
//               value={tutorData ? tutorData.course : ''} 
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <div className="col-3">
//             <label style={{fontSize:"25px"}} >Time</label>  
//             <input 
//               type="datetime-local" 
//               id="time" 
//               className="inputReg form-control" 
//               value={formData.time}
//               onChange={handleChange}
//             />
//             <br/> 
//           </div>
//           <button 
//             className="btn btn-primary buttonClass" 
//             style={{ width: '113px', marginLeft: '300px'}}
//             onClick={handleSubmit}
//           >
//             Send
//           </button>
//           {error && <p style={{ color: "black" }}>{error}</p>}
//           {submittedData.length > 0 && (
//             <div>
//               <h3>Submitted Data:</h3>
//               <table className="submitted-data-table">
//                 <thead>
//                   <tr>
//                     <th>User Id</th>
//                     <th>Tutor ID</th>
//                     <th>Link</th>
//                     <th>Course Name</th>
//                     <th>Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {submittedData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.userId}</td>
//                       <td>{data.tutorId}</td>
//                       <td>{data.liveLink}</td>
//                       <td>{data.courseName}</td>
//                       <td>{data.time}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default LiveClass;



















import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';  
import './TutorDashboard.css';

function LiveClass() {
  const [formData, setFormData] = useState({
    userId: '',
    tutorId: '',
    liveLink: '',
    courseName: '',
    time: '',
  });
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const [courses, setCourses] = useState([]);
  const id = 1; 
  
  useEffect(() => {
    fetchData();
    fetchTutorData(id); // Fetch tutor data by ID
    fetchCourses(); // Fetch available courses
  }, []);

  useEffect(() => {
    // Fetch user details when the component mounts
    axios.get(`http://localhost:8080/api-v1/${id}`)
      .then(response => {
        setTutorData(response.data);
        // Initialize edited data with fetched data
        // setEditedData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/messages/get');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error while fetching data', error);
    }
  };

  const fetchTutorData = async (id) => { // Accept tutorId as a parameter
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${id}`); // Use tutorId in the URL
      setTutorData(response.data); // Update state with tutor data
    } catch (error) {
      console.error('Error while fetching tutor data', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error while fetching courses', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (!formData.userId.trim() || !formData.tutorId.trim() || !formData.liveLink.trim() || !formData.courseName.trim() || !formData.time.trim()) {
        setError('All fields are required');
        return;
      }

      setError('');
      const response = await axios.post('http://localhost:8080/api/messages/post', formData);

      setSubmittedData([...submittedData, response.data]);

      setFormData({
        userId: '',
        tutorId: '',
        liveLink: '',
        courseName: '',
        time: '',
      });

      window.alert('Form submitted successfully');
    } catch (error) {
      console.error('Error while submitting data', error);
    }
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
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <h2>LiveClass</h2>
        <div className="row col-12 d-flex" >
          <div className="col-3">
            <label style={{fontSize:"25px"}}> User Id </label>  
            <input 
              type="text" 
              id="userId" 
              className="inputReg form-control" 
              placeholder="Enter User Id" 
              value={formData.userId}
              onChange={handleChange}
            />
            <br/> 
          </div>
          <div className="col-3">
            <label style={{fontSize:"25px"}}> Tutor Id </label>  
            <input 
              type="text" 
              id="tutorId" 
              className="inputReg form-control" 
              placeholder="Enter Tutor Id" 
              value={formData.tutorId}
              onChange={handleChange}
            />
            <br/> 
          </div>
          <div className="col-3">
            <label style={{fontSize:"25px"}}> Live Link </label>  
            <input 
              type="text" 
              id="liveLink" 
              className="inputReg form-control" 
              placeholder="Enter Live Link" 
              value={formData.liveLink}
              onChange={handleChange}
            />
            <br/> 
          </div>
          <div className="col-3">
            <label style={{fontSize:"25px"}}> Course Name </label>  
            <input 
              type="text" 
              id="courseName" 
              className="inputReg form-control" 
              placeholder="Enter Course Name" 
              value={tutorData ? tutorData.course : ''} 
              onChange={handleChange}
            />
            <br/> 
          </div>
          <div className="col-3">
            <label style={{fontSize:"25px"}} >Time</label>  
            <input 
              type="datetime-local" 
              id="time" 
              className="inputReg form-control" 
              value={formData.time}
              onChange={handleChange}
            />
            <br/> 
          </div>
          <button 
            className="btn btn-primary buttonClass" 
            style={{ width: '113px', marginLeft: '300px'}}
            onClick={handleSubmit}
          >
            Send
          </button>
          {error && <p style={{ color: "black" }}>{error}</p>}
          {submittedData.length > 0 && (
            <div>
              <h3>Submitted Data:</h3>
              <table className="submitted-data-table">
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>Tutor Id</th>
                    <th>Live Link</th>
                    <th>Course Name</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.userId}</td>
                      <td>{data.tutorId}</td>
                      <td>{data.liveLink}</td>
                      <td>{data.courseName}</td>
                      <td>{data.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default LiveClass;







