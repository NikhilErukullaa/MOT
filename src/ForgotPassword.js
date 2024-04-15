// Number.js

// import React, { useState } from 'react';
// import './ForgotPassword.css';

// function ForgotPassword() {
//   const [generatedNumber, setGeneratedNumber] = useState('');
//   const [inputValue, setInputValue] = useState('');
//   const [email, setEmail] = useState('');
//   const [validationMessage, setValidationMessage] = useState('');
//   const [validationSuccess, setValidationSuccess] = useState(false);
//   const [showPasswordBox, setShowPasswordBox] = useState(false);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordMatch, setPasswordMatch] = useState(false);
//   const [passwordChanged, setPasswordChanged] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');

//   const validateEmail = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const generateNumber = () => {
//     const newNumber = Math.floor(Math.random() * 9000) + 1000;
//     setGeneratedNumber(newNumber.toString());
//     if (validateEmail()) {
//       setValidationSuccess(false);
//       setShowPasswordBox(false);
//       setPasswordChanged(false);
//       setValidationMessage('');
//       alert(`Generated Number: ${newNumber}`);
//     } else {
//       setValidationMessage('Please enter a valid email');
//       alert(`Please enter the valid email\nGenerated Number: ${newNumber}`);
//     }
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     setValidationMessage('');
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setValidationMessage('');
//   };

//   const validateNumber = () => {
//     if (inputValue === generatedNumber) {
//       setValidationMessage('Validation successful!');
//       setValidationSuccess(true);
//       setShowPasswordBox(true);
//     } else {
//       setValidationMessage('Validation failed. Try again.');
//     }
//   };

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//     setPasswordMatch(e.target.value === confirmPassword);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setPasswordMatch(e.target.value === newPassword);
//   };

//   const handleSubmit = () => {
//     if (passwordMatch) {
//       // Add your logic for submitting the new password here
//       setPasswordChanged(true);
//       setSubmitSuccess(true);
//       setSubmitError('');
//     } else {
//       setSubmitError('Password mismatch. Please check and try again.');
//       setSubmitSuccess(false);
//     }
//   };

//   const renderPopup = () => {
//     if (submitSuccess) {
//       return alert('Form submitted successfully!');
//     } else if (submitError) {
//       return alert(submitError);
//     }
//     return null;
//   };

//   const renderForgotPassword = () => {
//     if (validationSuccess) {
//       return (
//         <div>
          
//         </div>
//       );
//     }
//     return null;
//   };

//   const renderPasswordBox = () => {
//     if (showPasswordBox) {
//       return (
//         <div>
//           <h2>Create New Password</h2>
//           <label className="forgot">
//             <h5 className="form-groupv"> New Password:</h5>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={handleNewPasswordChange}
//               className="input-field"
//             />
//           </label>
//           <label className="forgot">
//             <h5 className="form-groupv"> Confirm Password:</h5>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               className="input-field"
//             />
//           </label>
//           <button className="submit-button" onClick={handleSubmit} disabled={!passwordMatch}>
//             Submit
//           </button>
//           {passwordChanged && <p className="success-message">Password changed successfully!</p>}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="container" id='forgotPassward'>
//       {renderPopup()}
//       <h1>Forgot Password</h1>
//       <label className="input-label">
//         Enter your email:
//         <input type="email" value={email} onChange={handleEmailChange} className="input-field" />
//       </label>
//       <button className="submit-button" onClick={generateNumber}>Send OTP</button>
//       <p>OTP Number: {generatedNumber}</p>
//       <label className="input-label">
//         Enter the OTP:
//         <input type="text" value={inputValue} onChange={handleInputChange} className="input-field" />
//       </label>
//       <button className="submit-button" onClick={validateNumber}>Submit</button>
//       <p className="error-message">{validationMessage}</p>

//       {renderForgotPassword()}
//       {renderPasswordBox()}
//     </div>
//   );
// }

// export default ForgotPassword;

import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const updatePassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/update-password', {
        email,
        password,
        confirmPassword
      });
      console.log(response.data); // Log the response to see if it contains any useful information
      setMessage(response.data);
    } catch (error) {
      console.error('Failed to update password:', error);
      setError('Failed to update password. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>New Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button onClick={updatePassword}>Update Password</button>

      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
