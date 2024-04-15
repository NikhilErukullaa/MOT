
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown';
// import './UserRegistration.css';

// function SaveCourseForm({ currentUser }) {
//   const [course, setCourse] = useState('');
//   const [message, setMessage] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [formErrors, setFormErrors] = useState({});
//   const navigate = useNavigate();
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//         .then(response => {
//           setUserDetails(response.data[0]); // Assuming the API returns a single user
//         })
//         .catch(error => {
//           console.error('Error fetching user details:', error);
//         });
//     }
//   }, [currentUser]);

//   const save = async (event) => {
//     event.preventDefault();



//     const validateForm = () => {
//       // Add validation logic here
//       return true; // Placeholder, replace with actual validation logic
//   };

//     if (validateForm()) {
//       try {
//         const selectedCourses = [];
//         if (selectedMainOption && selectedSubOption) {
//           selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
//         }

//         const response = await axios.post('http://localhost:8080/api/users/saveCourse', {
//           id: userDetails.id, // Use the current user's ID
//           courses: selectedCourses,
//         });

//         console.log(response)
//         setMessage(response.data); // Assuming the backend returns a message
//       } catch (error) {
//         setMessage('Failed to save course');
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="header2">
//         <label>
//           <h1>My Online Tutor</h1>
//         </label>

//         {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>

//       <div className="currentdate">
//         <h3> {currentTime}</h3>
//       </div>

//       <div className="container mt-4" id='userRegistration' style={{ width: "60%", marginLeft: "20%" }}>
//         <h1 style={{ paddingTop: '30px' }}>Enroll For Another Course</h1>
//         <form onSubmit={save}>
//           <div className="form-group" style={{ marginLeft: "-30%" }}>
         
//           </div>

//           <div className="form-group" style={{ marginLeft: "30%" }}>
//             <Dropdown
//               onChange={(main, sub) => {
//                 setSelectedMainOption(main);
//                 setSelectedSubOption(sub);
//               }}
//             />
//             {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//           </div>
//           <button type="submit">Enroll</button>
//         </form>
//       </div>

     
    
//       <p>{message}</p>
//     </div>
//   );
// };

// export default SaveCourseForm;















import React, { useState, useEffect } from "react";
import axios from 'axios';
import Dropdown from './Dropdown';
import './UserRegistration.css';

function SaveCourseForm({ currentUser, history }) {
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [userDetails, setUserDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  const save = async (event) => {
    event.preventDefault();

    const validateForm = () => {
      // Add validation logic here
      return true; // Placeholder, replace with actual validation logic
    };

    if (validateForm()) {
      try {
        const selectedCourses = [];
        if (selectedMainOption && selectedSubOption) {
          selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
        }

        const response = await axios.post('http://localhost:8080/api/users/saveCourse', {
          id: userDetails.id, // Use the current user's ID
          courses: selectedCourses,
        });

        setMessage(response.data); // Assuming the backend returns a message
        window.alert(response.data);
        history.push('/UserDashboard'); // Navigate to user dashboard
      } catch (error) {
        // setMessage('Failed to save course');
      }
    }
  };

  return (
    <div>
      <div className="header2">
        <label>
          <h1>My Online Tutor</h1>
        </label>

        {userDetails ? (
          <div className="user-details">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>

      <div className="currentdate">
        <h3> {currentTime}</h3>
      </div>

      <div className="container mt-4" id='userRegistration' style={{ width: "60%", marginLeft: "20%" }}>
        <h1 style={{ paddingTop: '30px' }}>Enroll For Another Course</h1>
        <form onSubmit={save}>
          <div className="form-group" style={{ marginLeft: "-30%" }}>
         
          </div>

          <div className="form-group" style={{ marginLeft: "30%" }}>
            <Dropdown
              onChange={(main, sub) => {
                setSelectedMainOption(main);
                setSelectedSubOption(sub);
              }}
            />
            {formErrors.courses && <span className="error">{formErrors.courses}</span>}
          </div>
          <button type="submit">Enroll</button>
        </form>
      </div>

     
    
      <p>{message}</p>
    </div>
  );
};

export default SaveCourseForm;
