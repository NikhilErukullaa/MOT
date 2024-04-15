
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import './TutorDashboard.css';

// function TutorHelp() {
//   const [helpMessage, setHelpMessage] = useState('');
//   const [senderName, setSenderName] = useState(''); 
//   const [helpMessages, setHelpMessages] = useState([]);
//   const [error, setError] = useState('');

//   const sendHelpMessage = async () => {
//     if (!helpMessage.trim() || !senderName.trim()) {
//       setError('Please fill in both fields before sending the message');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/help/help1', {
//         content: helpMessage,
//         sender: senderName, 
//       });

//       setHelpMessages([...helpMessages, response.data]);
//       setHelpMessage('');
//       setSenderName('');
//       setError('');
//     } catch (error) {
//       console.error('Error sending help message', error);
//     }
//   };

//   const getAllHelpMessages = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/help/Support'); 
//       setHelpMessages(response.data);
//     } catch (error) {
//       alert('Error fetching help messages', error);
//     }
//   };

//   useEffect(() => {
//     getAllHelpMessages();
//   }, []);

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
//         <div className="box">
//           <h1>Help Center</h1>
//           <input
//             type="text"
//             placeholder="Type your help message"
//             required
//             value={helpMessage}
//             onChange={(e) => setHelpMessage(e.target.value)}
//           />
//           <label style={{fontSize:"20px"}}>Your Name:</label>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             required
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//           /><br></br><br></br>
//           <button onClick={sendHelpMessage}>Send</button>

//           {error && <p style={{ color: 'Black' }}>{error}</p>}
//           <ul>
//             {helpMessages.length > 0 ? (
//               helpMessages.map((message) => (
//                 <li key={message.id}>
//                   <strong>{message.sender}:</strong> {message.content}
//                 </li>
//               ))
//             ) : (
//               <li>No help messages available</li>
//             )}
//           </ul>
//         </div>
//       </div>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default TutorHelp;

// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from "axios";
// // import './Homepage.css';

// function TutorHelp() {
//   const [helpMessage, setHelpMessage] = useState('');
//   const [senderName, setSenderName] = useState(''); 
//   const [tutorData, setTutorData] = useState(null);
//   const id = 1;
//   const [helpMessages, setHelpMessages] = useState([]);
//   const [error, setError] = useState('');

//   const sendHelpMessage = async () => {
//     if (!helpMessage.trim() || !senderName.trim()) {
//       setError('Please fill in both fields before sending the message');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/help/help1', {
//         content: helpMessage,
//         sender: senderName, 
//       });

//       setHelpMessages([...helpMessages, response.data]);
//       setHelpMessage('');
//       setSenderName('');
//       setError('');
//     } catch (error) {
//       console.error('Error sending help message', error);
//     }
//   };

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

//   const getAllHelpMessages = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/help/Support'); 
//       setHelpMessages(response.data);
//     } catch (error) {
//       alert('Error fetching help messages', error);
//     }
//   };

//   useEffect(() => {
//     getAllHelpMessages();
//   }, []);

//   return (
//     <>
//       <div className="header">
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
//       <nav className="sidebar">
//         <ul>
//           <li><Link to='/Homepage'><label>Home</label></Link></li>
//           <li><Link to='/LiveClass'><label>Live Classes</label></Link></li>
//           <li><Link to='/Task'><label>Tasks</label></Link></li>
//           <li><Link to='/UserList'><label>UserList</label></Link></li>
//           <li><Link to='/MyDiscussion'><label>My Discussion</label></Link></li>
//           <li><Link to='/StudyMaterials'><label>StudyMaterials</label></Link></li>
//           <li><Link to='/Settings'><label>Settings</label></Link></li>
//         </ul>
//       </nav>

//       <div className="main-content">
//         <div className="box">
//           <h2>Help Center</h2>
//           <input
//             type="text"
//             placeholder="Type your help message"
//             required
//             value={helpMessage}
//             onChange={(e) => setHelpMessage(e.target.value)}
//           />
//           <label style={{fontSize:"20px"}}>Your Name:</label>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             required
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//           /><br></br><br></br>
//           <button onClick={sendHelpMessage}>Send</button>
//           {error && <p style={{ color: 'Black' }}>{error}</p>}
//           <ul>
//             {helpMessages.length > 0 ? (
//               helpMessages.map((message) => (
//                 <li key={message.id}>
//                   <strong>{message.sender}:</strong> {message.content}
//                 </li>
//               ))
//             ) : (
//               <li>No help messages available</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TutorHelp;


import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import './TutorDashboard.css';

function TutorHelp() {
  const [helpMessage, setHelpMessage] = useState('');
  const [senderName, setSenderName] = useState(''); 
  const [tutorData, setTutorData] = useState(null);
  const id = 1;
  const [helpMessages, setHelpMessages] = useState([]);
  const [error, setError] = useState('');

  const sendHelpMessage = async () => {
    if (!helpMessage.trim() || !senderName.trim()) {
      setError('Please fill in both fields before sending the message');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/help/help1', {
        content: helpMessage,
        sender: senderName, 
      });

      setHelpMessages([...helpMessages, response.data]);
      setHelpMessage('');
      setSenderName('');
      setError('');
    } catch (error) {
      console.error('Error sending help message', error);
    }
  };

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

  const getAllHelpMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/help/Support'); 
      setHelpMessages(response.data);
    } catch (error) {
      alert('Error fetching help messages', error);
    }
  };

  useEffect(() => {
    getAllHelpMessages();
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
        <div className="box">
          <h1>Help Center</h1>
          <input
            type="text"
            placeholder="Type your help message"
            required
            value={helpMessage}
            onChange={(e) => setHelpMessage(e.target.value)}
          />
          <label style={{fontSize:"20px"}}>Your Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            // value={tutorData ? `${tutorData.firstName} ${tutorData.lastName}` : ''}
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          /><br></br><br></br>
          <button onClick={sendHelpMessage} style={{marginRight:"30px"}}>Send</button>
          <Link to='/TutorSetting'><button className="back-button">Back</button></Link>
          {error && <p style={{ color: 'Black' }}>{error}</p>}
          <ul>
            {helpMessages.length > 0 ? (
              helpMessages.map((message) => (
                <li key={message.id}>
                  <strong>{message.sender}:</strong> {message.content}
                </li>
              ))
            ) : (
              <li>No help messages available</li>
            )}
          </ul>
        </div>
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default TutorHelp;
