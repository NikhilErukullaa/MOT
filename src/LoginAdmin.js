// import React, { useState } from "react";
// import {  useNavigate } from 'react-router-dom';
// // import './Login.css';
// import './LoginUser.css';
// import { Link } from "react-router-dom";

// function LoginAdmin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   function verifyLogin(e) {
//     e.preventDefault();

//     if (email === "methukuarjun54@gmail.com" && password === "arjun@07") {
//       alert("Welcome to Admin Dashboard.");
//       navigate('/AdminDashboard');
//     } else {
//       setErrorMessage("Invalid email or password. Please try again.");
//     }
//   }

//   return (
//     <div className="login-user-container">
//         <div className="login-card">
//       <h2 >Admin Login</h2>
//       <form>
//       <label><strong>Email:</strong></label>
//       <input
//         type="text"
//         id="email"
//         placeholder="Enter your Email"
//         value={email}
//         required
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label><strong>Password:</strong></label>
//       <input
//         type="password"
//         id="password"
//         placeholder="Enter your Password"
//        required
//         onChange={(e) => setPassword(e.target.value)}
//       />

   
//       <button type="submit" className="login-btn" onClick={verifyLogin} >Login</button>
//       <Link to="/ForgotPassword"><a className="forgot">Forgot password</a></Link>

//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </form>
//       </div>
//     </div>
//   )
// }

// export default LoginAdmin;







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
// import './LoginUser.css';

// function LoginAdmin() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/admin/loginadmin', formData);

//       console.log(response.data);

//       if (response && response.data === 'login success') {
//         alert('Login successful!', response.data);
//         // Navigate to the dashboard after successful login
//         navigate('/AdminDashboard');
//       } else {
//         alert('Login failed! Invalid email or password:', response);
//       }
//     } catch (error) {
//       alert('Login failed!', error);
//     }
//   };

//   return (
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2> Admin Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">E-Mail:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="login-btn">Login</button>
//           <Link to="/OtpValidationTwo"><a className="forgot">Forgot password</a></Link>
          
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginAdmin;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginUser.css';

function LoginAdmin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/admin/loginadmin', formData);

  //     console.log(response.data);

  //     if (response && response.data === 'login success') {
  //       // Store admin data in session storage
  //       sessionStorage.setItem('adminData', JSON.stringify(formData));

  //       alert('Login successful!', response.data);
  //       // Navigate to the dashboard after successful login
  //       navigate('/AdminLandingPage');
  //     } else {
  //       alert('Login failed! Invalid email or password:', response);
  //     }
  //   } catch (error) {
  //     alert('Login failed!', error);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/admin/loginadmin', formData);
  
      console.log(response.data);
  
      if (response && response.status === 200) {
        const adminId = response.data;
        if (adminId) {
          localStorage.setItem('adminId', adminId);
  
          alert('Login successful!');
          navigate('/AdminLandingPage');
        } else {
          alert('Login failed! Invalid email or password');
        }
      } else {
        alert('Login failed! Server responded with error');
      }
    } catch (error) {
      alert('Login failed! Please try again later.');
      console.error('Login error:', error);
    }
  };
  
  

  return ( 
    <div className="login-user-container">
      <div className="login-card">
        <h2> Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <Link to="/OtpValidationTwo"><a className="forgot">Forgot password</a></Link>
          
        </form>
      </div>
    </div>
  );
}
 
export default LoginAdmin;
