

// import React, { useState } from "react";
// import axios from "axios";
// import './Announcement.css';

// function Announcement() {
//   const [title, setTitle] = useState("");
//   const [announcement, setAnnouncement] = useState("");

//   const handleAddAnnouncement = async (recipientType) => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/admin/add-announcement", {
//         title: title, // Send the title in the request
//         message: announcement,
//         recipientType: recipientType,
//       });

//       if (response.status === 200) {
//         // Announcement added successfully
//         alert("Announcement added successfully");
//         // Reset the form
//         setTitle("");
//         setAnnouncement("");
//       } else {
//         // Handle error
//         console.error("Failed to add announcement");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <div className="add-announcement-page">
//         <h1>Add New Announcement</h1>

//         <form>
//           <label className="Boxa">Title</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          
//           <label className="Boxa">Announcement Message:</label>
//           <textarea value={announcement} onChange={(e) => setAnnouncement(e.target.value)}></textarea>

//           <button type="button" onClick={() => handleAddAnnouncement("users")}>
//             Send to Users
//           </button>

//           <button type="button" onClick={() => handleAddAnnouncement("tutors")}>
//             Send to Tutors
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Announcement;

// import React, { useState } from "react";
// import axios from "axios";
// import './Announcement.css';

// function Announcement() {
//   const [title, setTitle] = useState("");
//   const [announcement, setAnnouncement] = useState("");
//   const [error, setError] = useState("");

//   const handleAddAnnouncement = async (recipientType) => {
//     try {
//       if (!title.trim()) {
//         setError("Title cannot be empty");
//         return;
//       }

//       if (!announcement.trim()) {
//         setError("Announcement message cannot be empty");
//         return;
//       }

//       const response = await axios.post("http://localhost:8080/api/admin/add-announcement", {
//         title: title.trim(), // Send the trimmed title in the request
//         message: announcement.trim(), // Send the trimmed message in the request
//         recipientType: recipientType,
//       });

//       if (response.status === 200) {
//         // Announcement added successfully
//         alert("Announcement added successfully");
//         // Reset the form
//         setTitle("");
//         setAnnouncement("");
//         setError("");
//       } else {
//         // Handle error
//         console.error("Failed to add announcement");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <div className="add-announcement-page">
//         <h1>Add New Announcement</h1>

//         <form>
//           <label className="Boxa">Title{error && <span style={{ color: 'red' }}> - {error}</span>}</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          
//           <label className="Boxa">Announcement Message{error && <span style={{ color: 'red' }}> - {error}</span>}:</label>
//           <textarea value={announcement} onChange={(e) => setAnnouncement(e.target.value)}></textarea>

//           <button type="button" onClick={() => handleAddAnnouncement("users")}>
//             Send to Users
//           </button>

//           <button type="button" onClick={() => handleAddAnnouncement("tutors")}>
//             Send to Tutors
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Announcement;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import './Announcement.css';

// function Announcement() {
//   const [title, setTitle] = useState("");
//   const [announcement, setAnnouncement] = useState("");
//   const [error, setError] = useState("");
//   const [recipientType, setRecipientType] = useState("");
//   const [recipientId, setRecipientId] = useState("");
//   const [userIds, setUserIds] = useState([]);
//   const [tutorIds, setTutorIds] = useState([]);

//   useEffect(() => {
//     fetchUserIds();
//     fetchTutorIds();
//   }, []);

//   const fetchUserIds = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/users/users/ids");
//       setUserIds(response.data);
//     } catch (error) {
//       console.error("Error fetching user IDs:", error);
//     }
//   };

//   const fetchTutorIds = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api-v1/tutors/ids");
//       setTutorIds(response.data);
//     } catch (error) {
//       console.error("Error fetching tutor IDs:", error);
//     }
//   };

//   const handleAddAnnouncement = async () => {
//     try {
//       if (!title.trim() || !announcement.trim() || !recipientType || !recipientId) {
//         setError("Please fill in all fields");
//         return;
//       }

//       const response = await axios.post("http://localhost:8080/api/admin/add-announcement", {
//         title: title.trim(),
//         message: announcement.trim(),
//         recipientType: recipientType,
//         recipientId: recipientId
//       });

//       if (response.status === 200) {
//         alert("Announcement added successfully");
//         setTitle("");
//         setAnnouncement("");
//         setError("");
//       } else {
//         console.error("Failed to add announcement");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       
//       <div className="add-announcement-page" id="announcement">
//         <h1>Add New Announcement</h1>

//         <form className="formAnnouncement">
//           <label className="Boxa">Title{error && <span style={{ color: 'red' }}> - {error}</span>}</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          
//           <label className="Boxa">Announcement Message{error && <span style={{ color: 'red' }}> - {error}</span>}:</label>
//           <textarea value={announcement} onChange={(e) => setAnnouncement(e.target.value)}></textarea>

//           <div className="dropdown">
//             <label>Select Recipient Type:</label>
//             <select onChange={(e) => setRecipientType(e.target.value)}>
//               <option value="">Select Type</option>
//               <option value="user">User</option>
//               <option value="tutor">Tutor</option>
//             </select>
//           </div>

//           <div className="dropdown">
//             <label>Select Recipient ID:</label>
//             <select onChange={(e) => setRecipientId(e.target.value)}>
//               <option value="">Select ID</option>
//               {recipientType === "user" && userIds.map(id => (
//                 <option key={id} value={id}>{id}</option>
//               ))}
//               {recipientType === "tutor" && tutorIds.map(id => (
//                 <option key={id} value={id}>{id}</option>
//               ))}
//             </select>
//           </div>

//           <button type="button" onClick={handleAddAnnouncement}>
//             Send Announcement
//           </button>
//           
//         </form>
//       </div>
//     </>
//   );
// }

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Announcement() {
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [recipientType, setRecipientType] = useState("");
//   const [recipientId, setRecipientId] = useState("");
//   const [userIds, setUserIds] = useState([]);
//   const [tutorIds, setTutorIds] = useState([]);

//   useEffect(() => {
//     fetchUserIds();
//     fetchTutorIds();
//   }, []);

//   const fetchUserIds = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/users/users/ids");
//       setUserIds(response.data);
//     } catch (error) {
//       console.error("Error fetching user IDs:", error);
//     }
//   };

//   const fetchTutorIds = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api-v1/tutors/ids");
//       setTutorIds(response.data);
//     } catch (error) {
//       console.error("Error fetching tutor IDs:", error);
//     }
//   };

//   const handleSendAnnouncement = async () => {
//     try {
//       if (!title.trim() || !message.trim() || !recipientType || !recipientId) {
//         console.error("Please fill in all fields");
//         return;
//       }

//       const response = await axios.post("http://localhost:8080/api/admin/add-announcement", {
//         title,
//         message,
//         recipientType,
//         recipientId,
//         userId: recipientId // Ensure userId is set to recipientId
        
//       });
//       console.log("Announcement sent:", response.data);
//       // Reset form fields after successful submission
//       setTitle("");
//       setMessage("");
//       setRecipientType("");
//       setRecipientId("");
//     } catch (error) {
//       console.error("Error sending announcement:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Add New Announcement</h1>
//       <label>Title:</label>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
//       <label>Message:</label>
//       <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

//       <label>Select Recipient Type:</label>
//       <select value={recipientType} onChange={(e) => setRecipientType(e.target.value)}>
//         <option value="">Select Type</option>
//         <option value="user">User</option>
//         <option value="tutor">Tutor</option>
//       </select>

//       {recipientType === "user" && (
//         <div>
//           <label>Select User ID:</label>
//           <select value={recipientId} onChange={(e) => setRecipientId(e.target.value)}>
//             <option value="">Select ID</option>
//             {userIds.map(id => (
//               <option key={id} value={id}>{id}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {recipientType === "tutor" && (
//         <div>
//           <label>Select Tutor ID:</label>
//           <select value={recipientId} onChange={(e) => setRecipientId(e.target.value)}>
//             <option value="">Select ID</option>
//             {tutorIds.map(id => (
//               <option key={id} value={id}>{id}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       <button onClick={handleSendAnnouncement}>Send Announcement</button>
//     </div>
//   );
// }

// export default Announcement;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Announcement.css'; // Import the CSS file
import AdminDashboard from "./AdminDashboard";

function Announcement() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [userIds, setUserIds] = useState([]);
  const [tutorIds, setTutorIds] = useState([]);

  useEffect(() => {
    fetchUserIds();
    fetchTutorIds();
  }, []);

  const fetchUserIds = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/users/ids");
      setUserIds(response.data);
    } catch (error) {
      console.error("Error fetching user IDs:", error);
    }
  };

  const fetchTutorIds = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api-v1/tutors/ids");
      setTutorIds(response.data);
    } catch (error) {
      console.error("Error fetching tutor IDs:", error);
    }
  };

  const handleSendAnnouncement = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/admin/add-announcement", {
        title,
        message,
        recipientType,
        recipientId,
        userId: recipientId
      });
      console.log("Announcement sent:", response.data);
      // Reset form fields after successful submission
      setTitle("");
      setMessage("");
      setRecipientType("");
      setRecipientId("");
    } catch (error) {
      console.error("Error sending announcement:", error);
    }
  };

  return (
    <>
    <AdminDashboard/>
    <div id="announcement" className="add-announcement-page" style={{marginTop: "-48%", marginLeft: "30%"}}>
      <h1>Add New Announcement</h1>
      <form className="formAnnouncement">
        <label className="Boxa">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        
        <label className="Boxa">Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        <div className="dropdown">
          <label>Select Recipient Type:</label>
          <select value={recipientType} onChange={(e) => setRecipientType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="user">User</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>

        {recipientType === "user" && (
          <div className="dropdown">
            <label>Select User ID:</label>
            <select value={recipientId} onChange={(e) => setRecipientId(e.target.value)}>
              <option value="">Select ID</option>
              {userIds.map(id => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </div>
        )}

        {recipientType === "tutor" && (
          <div className="dropdown">
            <label>Select Tutor ID:</label>
            <select value={recipientId} onChange={(e) => setRecipientId(e.target.value)}>
              <option value="">Select ID</option>
              {tutorIds.map(id => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </div>
        )}

        <button className=" btn btn-primary" onClick={handleSendAnnouncement} style={{width:'6cm',marginLeft:"6cm"}} >Send Announcement</button>
      </form>
    </div>
    </>
  );
}

export default Announcement;
