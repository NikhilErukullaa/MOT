// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import './TutorDashboard.css';
// import axios from 'axios';

// const StudyMaterials = () => {
//   const [fileEntity, setFileEntity] = useState({
//     fileName: '',
//     tutorName: '',
//     tutorId: '',
//     courseName: '',
//     date: '',
//     fileLink: '',
//     userId: '',
//   });
//   const [studyMaterials, setStudyMaterials] = useState([]);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFileEntity((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateInputs = () => {
//     if (
//       !fileEntity.fileLink ||
//       !fileEntity.tutorName ||
//       !fileEntity.tutorId ||
//       !fileEntity.courseName ||
//       !fileEntity.date ||
//       !fileEntity.userId
//     ) {
//       alert('All fields are required');
//       return false;
//     }
//     alert('Submited Successfully');
//     return true;
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     try {
//       const response = await axios.post('http://localhost:8080/api/files/upload', fileEntity);
//       if (response.status === 200) {
//         alert('File uploaded successfully!');
//         // After uploading, fetch the updated study materials
//         fetchStudyMaterials();
//       }
//     } catch (error) {
//       alert('Error uploading file:', error.message);
//     }
//   };

//   const fetchStudyMaterials = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/files/show');
//       setStudyMaterials(response.data);
//     } catch (error) {
//       alert('Error fetching study materials', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchStudyMaterials();
//   }, []);


//   return (
//     <>
//      <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       {/* <div className="header">
//          <label> <h2>My Online Tutor</h2></label>
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
//         <div>
//           <h2>Upload File</h2>
//           <form onSubmit={handleFileUpload}>
//             {/* <label style={{ fontSize: 'large' }}>
//               File:
//               <input
//                 type="file"
//                 id="uploadFile"
//                 name="fileLink"
//                 className="inputReg form-control"
//                 placeholder="Enter FileLink"
//                 value={fileEntity.fileLink}
//                 onChange={handleChange}
//               />
//             </label> */}
//             <label style={{ fontSize: 'large' }}>
//               Tutor Name:
//               <input
//                 type="text"
//                 name="tutorName"
//                 className="inputReg form-control"
//                 placeholder="Enter TutorName"
//                 value={fileEntity.tutorName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Tutor ID:
//               <input
//                 type="text"
//                 name="tutorId"
//                 className="inputReg form-control"
//                 placeholder="Enter ID"
//                 value={fileEntity.tutorId}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Course Name:
//               <input
//                 type="text"
//                 name="courseName"
//                 className="inputReg form-control"
//                 placeholder="Enter CourseName"
//                 value={fileEntity.courseName}
//                 onChange={handleChange}
//               />
//             </label>
//             <br></br>
//             <label style={{ fontSize: 'large' }}>
//               Date:
//               <input
//                 type="date"
//                 name="date"
//                 className="inputReg form-control"
//                 placeholder="Enter Date"
//                 value={fileEntity.date}
//                 onChange={handleChange}
//               />
//             </label>
//             <br></br>
//             <label style={{ fontSize: 'large' }}>
//               User ID:
//               <input
//                 type="text"
//                 name="userId"
//                 className="inputReg form-control"
//                 placeholder="Enter ID"
//                 value={fileEntity.userId}
//                 onChange={handleChange}
//               />
//             </label><br></br>
//               <button>Upload File</button>
//           </form>
//         </div>
//         <div>
//           <h2>Study Materials</h2>
//           <table className="study-materials-table">
//             <thead>
//               <tr>
//                 <th>File Link</th>
//                 <th>Tutor Name</th>
//                 <th>Tutor ID</th>
//                 <th>Course Name</th>
//                 <th>Date</th>
//                 <th>User ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {studyMaterials.map((material) => (
//                 <tr key={material.id}>
//                   <td>{material.fileLink}</td>
//                   <td>{material.tutorName}</td>
//                   <td>{material.tutorId}</td>
//                   <td>{material.courseName}</td>
//                   <td>{material.date}</td>
//                   <td>{material.userId}</td>
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
// };

// export default StudyMaterials;


















// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import './TutorDashboard.css';
// import axios from 'axios';

// const StudyMaterials = () => {
//   const [fileEntity, setFileEntity] = useState({
//     fileName: '',
//     tutorName: '',
//     tutorId: '',
//     courseName: '',
//     date: '',
//     fileLink: '',
//     userId: '',
//   });
//   const [studyMaterials, setStudyMaterials] = useState([]);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFileEntity((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateInputs = () => {
//     if (
//       !fileEntity.fileName ||
//       !fileEntity.fileLink ||
//       !fileEntity.tutorName ||
//       !fileEntity.tutorId ||
//       !fileEntity.courseName ||
//       !fileEntity.date ||
//       !fileEntity.userId
//     ) {
//       alert('All fields are required');
//       return false;
//     }
//     alert('Submitted Successfully');
//     return true;
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     try {
//       const response = await axios.post('http://localhost:8080/api/files/upload', fileEntity);
//       if (response.status === 200) {
//         alert('File uploaded successfully!');
//         // After uploading, fetch the updated study materials
//         fetchStudyMaterials();
//       }
//     } catch (error) {
//       alert('Error uploading file:', error.message);
//     }
//   };

//   const fetchStudyMaterials = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/files/show');
//       setStudyMaterials(response.data);
//     } catch (error) {
//       alert('Error fetching study materials', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchStudyMaterials();
//   }, []);


//   return (
//     <>
//      <div className="header1">
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
//         <div>
//           <h2>Upload File</h2>
//           <form onSubmit={handleFileUpload}>
//             <label style={{ fontSize: 'large' }}>
//               File Name:
//               <input
//                 type="text"
//                 name="fileName"
//                 className="inputReg form-control"
//                 placeholder="Enter File Name"
//                 value={fileEntity.fileName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               File Link:
//               <input
//                 type="text"
//                 name="fileLink"
//                 className="inputReg form-control"
//                 placeholder="Enter File Link"
//                 value={fileEntity.fileLink}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Tutor Name:
//               <input
//                 type="text"
//                 name="tutorName"
//                 className="inputReg form-control"
//                 placeholder="Enter Tutor Name"
//                 value={fileEntity.tutorName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Tutor ID:
//               <input
//                 type="text"
//                 name="tutorId"
//                 className="inputReg form-control"
//                 placeholder="Enter Tutor ID"
//                 value={fileEntity.tutorId}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Course Name:
//               <input
//                 type="text"
//                 name="courseName"
//                 className="inputReg form-control"
//                 placeholder="Enter Course Name"
//                 value={fileEntity.courseName}
//                 onChange={handleChange}
//               />
//             </label>
//             <br></br>
//             <label style={{ fontSize: 'large' }}>
//               Date:
//               <input
//                 type="date"
//                 name="date"
//                 className="inputReg form-control"
//                 placeholder="Enter Date"
//                 value={fileEntity.date}
//                 onChange={handleChange}
//               />
//             </label>
//             <br></br>
//             <label style={{ fontSize: 'large' }}>
//               User ID:
//               <input
//                 type="text"
//                 name="userId"
//                 className="inputReg form-control"
//                 placeholder="Enter User ID"
//                 value={fileEntity.userId}
//                 onChange={handleChange}
//               />
//             </label><br></br>
//               <button>Upload File</button>
//           </form>
//         </div>
//         <div>
//           <h2>Study Materials</h2>
//           <table className="study-materials-table">
//             <thead>
//               <tr>
//                 <th>File Name</th>
//                 <th>File Link</th>
//                 <th>Tutor Name</th>
//                 <th>Tutor ID</th>
//                 <th>Course Name</th>
//                 <th>Date</th>
//                 <th>User ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {studyMaterials.map((material) => (
//                 <tr key={material.id}>
//                   <td>{material.fileName}</td>
//                   <td>{material.fileLink}</td>
//                   <td>{material.tutorName}</td>
//                   <td>{material.tutorId}</td>
//                   <td>{material.courseName}</td>
//                   <td>{material.date}</td>
//                   <td>{material.userId}</td>
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
// };

// export default StudyMaterials;







// import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import './TutorDashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const StudyMaterials = () => {
//   const [fileEntity, setFileEntity] = useState({
//     fileName: '',
//     tutorName: '',
//     tutorId: '',
//     tutorcourse: '', // Provide a default value here
//     date: '',
//     file: '',
//     userId: '',
//   });
//   const [studyMaterials, setStudyMaterials] = useState([]);
//   const [tutorData, setTutorData] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const id = 1;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFileEntity((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api-v1/${id}`)
//       .then(response => {
//         setTutorData(response.data);
//         // Set initial course name if available in tutor data
//         if (response.data.courseName) {
//           setFileEntity((prevData) => ({
//             ...prevData,
//             course: response.data.courseName,
//           }));
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [id]);

//   const validateInputs = () => {
//     if (
//       !fileEntity.file ||
//       !fileEntity.tutorName ||
//       !fileEntity.tutorId ||
//       (!tutorData || !tutorData.course) || // Check if tutorData or tutorData.course is null or undefined
//       !fileEntity.date ||
//       !fileEntity.userId
//     ) {
//       alert('All fields are required');
//       return false;
//     }
//     alert('Submitted Successfully');
//     return true;
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     try {
//       const response = await axios.post('http://localhost:8080/api/files/upload', fileEntity);
//       if (response.status === 200) {
//         alert('File uploaded successfully!');
//         fetchStudyMaterials();
//       }
//     } catch (error) {
//       alert('Error uploading file:', error.message);
//     }
//   };

//   const fetchStudyMaterials = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/files/show');
//       setStudyMaterials(response.data);
//     } catch (error) {
//       console.error('Error fetching study materials:', error);
//     }
//   };

//   useEffect(() => {
//     fetchStudyMaterials();
//   }, []);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/courses')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching courses:', error);
//       });
//   }, []);


//   return (
//     <>
//      <div className="header1">
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
//         <div>
//           <h2>Upload File</h2>
//           <form onSubmit={handleFileUpload}>
//             <label style={{ fontSize: 'large' }}>
//               File Name:
//               <input
//                 type="text"
//                 name="fileName"
//                 className="inputReg form-control"
//                 placeholder="Enter File Name"
//                 value={fileEntity.fileName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               File Link:
//               <input
//                 type="text"
//                 name="fileLink"
//                 className="inputReg form-control"
//                 placeholder="Enter File Link"
//                 value={fileEntity.fileLink}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Tutor Name:
//               <input
//                 type="text"
//                 name="tutorName"
//                 className="inputReg form-control"
//                 placeholder="Enter Tutor Name"
//                 value={tutorData ? `${tutorData.firstName} ${tutorData.lastName}` : ''}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Tutor ID:
//               <input
//                 type="text"
//                 name="tutorId"
//                 className="inputReg form-control"
//                 placeholder="Enter Tutor ID"
//                 value={tutorData ? tutorData.id : ''}
//                 onChange={handleChange}
//               />
//             </label>
//             <label style={{ fontSize: 'large' }}>
//               Course Name:
//               <input
//                 type="text"
//                 name="courseName"
//                 className="inputReg form-control"
//                 placeholder="Enter Course Name"
//                 value={tutorData ? tutorData.course : ''}
//                 onChange={handleChange}
//               />
//             </label>
//             <br></br>
//             <label style={{ fontSize: 'large' }}>
//               Date:
//               <input
//                 type="date"
//                 name="date"
//                 className="inputReg form-control"
//                 placeholder="Enter Date"
//                 value={fileEntity.date}
//                 onChange={handleChange}
//               />
//             </label>
//             <br></br>
//             <label style={{ fontSize: 'large' }}>
//               User ID:
//               <input
//                 type="text"
//                 name="userId"
//                 className="inputReg form-control"
//                 placeholder="Enter User ID"
//                 value={fileEntity.userId}
//                 onChange={handleChange}
//               />
//             </label><br></br>
//               <button>Upload File</button>
//           </form>
//         </div>
//         <div>
//           <h2>Study Materials</h2>
//           <table className="study-materials-table">
//             <thead>
//               <tr>
//                 <th>File Name</th>
//                 <th>File Link</th>
//                 <th>Tutor Name</th>
//                 <th>Tutor ID</th>
//                 <th>Course Name</th>
//                 <th>Date</th>
//                 <th>User ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {studyMaterials.map((material) => (
//                 <tr key={material.id}>
//                   <td>{material.fileName}</td>
//                   <td>{material.fileLink}</td>
//                   <td>{material.tutorName}</td>
//                   <td>{material.tutorId}</td>
//                   <td>{material.courseName}</td>
//                   <td>{material.date}</td>
//                   <td>{material.userId}</td>
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
// };

// export default StudyMaterials;





















import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './TutorDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const StudyMaterials = () => {
  const [fileEntity, setFileEntity] = useState({
    fileName: '',
    fileLink: '',
    tutorName: '',
    tutorId: '',
    courseName: '',
    date: '',
    userId: '',
  });
  const [studyMaterials, setStudyMaterials] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const [courses, setCourses] = useState([]);
  const id = 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFileEntity((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api-v1/${id}`)
      .then(response => {
        setTutorData(response.data);
        // Set initial course name if available in tutor data
        if (response.data.courseName) {
          setFileEntity((prevData) => ({
            ...prevData,
            courseName: response.data.courseName,
          }));
        }
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/files/upload', fileEntity);
      if (response.status === 200) {
        alert('File uploaded successfully!');
        fetchStudyMaterials();
      }
    } catch (error) {
      alert('Error uploading file:', error.message);
    }
  };

  const fetchStudyMaterials = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/files/show');
      setStudyMaterials(response.data);
    } catch (error) {
      console.error('Error fetching study materials:', error);
    }
  };

  useEffect(() => {
    fetchStudyMaterials();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
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
          <li><Link to='/UserList'><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/TutorSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main" style={{marginLeft: "27%", marginTop: "7%"}}>
        <div>
          {/* <h2>Upload File</h2> */}
          {/* <div>
            <Link to='/CreateFile'><button>Create File</button></Link>
          </div>
          <div>
            <Link to='/CreateVideo'><button>Create Video</button></Link>
          </div> */}
          <div className="app" id='landingpage'> <br/>
        <section className="home-section" style={{marginLeft: "3%"}}>
          <Link to="/CreateFile" className="course-link">
            <div className="course-item">
              <img
                src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
                alt=""
                className="course-image"
              />
              <h2> File</h2>
            </div>
          </Link>

          <Link to="/CreateVideo" className="course-link" style={{marginLeft: "5%"}}>
            <div className="course-item">
              <img
                src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
                alt=""
                className="course-image"
              />
              <h2> Video</h2>
            </div>
          </Link>
        </section>
        </div>

          {/* <form onSubmit={handleFileUpload}>
            <label style={{ fontSize: 'large' }}>
              File Name:
              <input
                type="text"
                name="fileName"
                className="inputReg form-control"
                placeholder="Enter File Name"
                value={fileEntity.fileName}
                onChange={handleChange}
              />
            </label>
            <label style={{ fontSize: 'large' }}>
              File Link:
              <input
                type="text"
                name="fileLink"
                className="inputReg form-control"
                placeholder="Enter File Link"
                value={fileEntity.fileLink}
                onChange={handleChange}
              />
            </label>
            <label style={{ fontSize: 'large' }}>
              Tutor Name:
              <input
                type="text"
                name="tutorName"
                className="inputReg form-control"
                placeholder="Enter Tutor Name"
             
             value={fileEntity.tutorName}

                onChange={handleChange}
              />
            </label>
            <label style={{ fontSize: 'large' }}>
              Tutor ID:
              <input
                type="text"
                name="tutorId"
                className="inputReg form-control"
                placeholder="Enter Tutor ID"
                // value={tutorData ? tutorData.id : ''}
                value={fileEntity.tutorId}
                onChange={handleChange}
              />
            </label>
            <label style={{ fontSize: 'large' }}>
              Course Name:
              <input
                type="text"
                name="courseName"
                className="inputReg form-control"
                placeholder="Enter Course Name"
                // value={tutorData ? tutorData.courseName : ''}
                value={fileEntity.courseName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label style={{ fontSize: 'large' }}>
              Date:
              <input
                type="date"
                name="date"
                className="inputReg form-control"
                placeholder="Enter Date"
                value={fileEntity.date}
                onChange={handleChange}
              />
            </label>
            <br />
            <label style={{ fontSize: 'large' }}>
              User ID:
              <input
                type="text"
                name="userId"
                className="inputReg form-control"
                placeholder="Enter User ID"
                value={fileEntity.userId}
                onChange={handleChange}
              />
            </label><br /> 
            <button className="btn btn-primary buttonClass">Upload File</button>
          </form>*/}
        {/* </div>
        <div>
          <h2>Study Materials</h2>
          <table className="study-materials-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>File Link</th>
                <th>Tutor Name</th>
                <th>Tutor ID</th>
                <th>Course Name</th>
                <th>Date</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {studyMaterials.map((material) => (
                <tr key={material.id}>
                  <td>{material.fileName}</td>
                  <td>{material.fileLink}</td>
                  <td>{material.tutorName}</td>
                  <td>{material.tutorId}</td>
                  <td>{material.courseName}</td>
                  <td>{material.date}</td>
                  <td>{material.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>*/}
        </div>
      </div> 
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
};

export default StudyMaterials;
