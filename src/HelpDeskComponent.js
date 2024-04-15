
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HelpDeskComponent.css';
import AdminDashboard from './AdminDashboard';

function HelpDeskComponent() {
  const [helpMessage, setHelpMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [helpMessages, setHelpMessages] = useState([]);
  const [error, setError] = useState('');

  const sendHelpMessage = async () => {
    if (!helpMessage || !senderName) {
      setError('Please fill out both fields.');
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
      console.error('Error sending help message:', error);
    }
  };

  const getAllHelpMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/help/Support');

      console.log('Help messages:', response.data);
      setHelpMessages(response.data);
    } catch (error) {
      console.error('Error fetching help messages:', error);
    }
  };

  useEffect(() => {
    getAllHelpMessages();
  }, []);

  return (
    <>
    <AdminDashboard/>
      {/* <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div> */}
      <div className="help-desk-container" style={{marginTop:'-50%'}}>
        <div className="main-content">
          <div className="box">
            <h2>Help Center</h2>
            <input
              type="text"
              placeholder="Type your help message"
              value={helpMessage}
              onChange={(e) => setHelpMessage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <button onClick={sendHelpMessage}>Send</button>
            {error && <p className="error">{error}</p>}
           

            {/* Display all help messages */}
            <ul>
              {helpMessages.map((message, index) => (
                <li key={index}>
                  <strong>{message.sender}:</strong> {message.content}
                </li>
              ))}
            </ul>
          </div>
          {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
        </div>
      </div>
    </>
  );
}

export default HelpDeskComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HelpDeskComponent.css';

// function HelpDeskComponent() {
//   const [questions, setQuestions] = useState([]);
//   const [selectedQuestion, setSelectedQuestion] = useState(null);
//   const [answer, setAnswer] = useState('');
//   const [useful, setUseful] = useState(false);

//   useEffect(() => {
//     // Fetch questions from API
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://localhost:8082/api/help/questions');
//         setQuestions(response.data);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleQuestionClick = async (questionId) => {
//     try {
//       const response = await axios.get(`http://localhost:8082/api/help/answer/${questionId}`);
//       setAnswer(response.data.answer);
//       setSelectedQuestion(questionId);
//       setUseful(false); // Reset useful state when a new question is selected
//     } catch (error) {
//       console.error('Error fetching answer:', error);
//     }
//   };

//   const handleUsefulClick = () => {
//     // Send useful status to backend API
//     setUseful(true);
//     // You can send the feedback to backend here if needed
//   };

//   return (
//     <div className="help-desk-container">
//       <div className="main-content">
//         <div className="questions">
//           <h2>Help Center</h2>
//           <ul>
//             {questions.map((question) => (
//               <li key={question.id} onClick={() => handleQuestionClick(question.id)}>
//                 {question.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="answer">
//           {selectedQuestion && (
//             <>
//               <h3>Answer:</h3>
//               <p>{answer}</p>
//               {!useful && (
//                 <button onClick={handleUsefulClick}>Was this answer useful?</button>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HelpDeskComponent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HelpDeskComponent.css';

// function HelpDeskComponent() {
//   const [questions, setQuestions] = useState([]);
//   const [selectedQuestion, setSelectedQuestion] = useState(null);
//   const [answer, setAnswer] = useState('');
//   const [useful, setUseful] = useState(false);
//   const [newQuestion, setNewQuestion] = useState('');
//   const [newAnswer, setNewAnswer] = useState(''); // New state for posting answers
//   const [isLoading, setIsLoading] = useState(false);
//   const [notifications, setNotifications] = useState(0);

//   // URLs for backend API endpoints
//   const GET_QUESTIONS_URL = 'http://localhost:8082/api/support/questions';
//   const GET_ANSWER_URL = (questionId) => `http://localhost:8082/api/help/answers/${questionId}`;
//   const CREATE_QUESTION_URL = 'http://localhost:8082/api/help/addquestions';
//   const CREATE_ANSWER_URL = 'http://localhost:8082/api/help/addanswer'; // New endpoint for adding answers
//   const SEND_FEEDBACK_URL = 'http://localhost:8080/api/helpdesk/feedback';

//   useEffect(() => {
//     // Fetch questions on component mount
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get(GET_QUESTIONS_URL);
//       setQuestions(response.data);
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   };

//   const handleQuestionClick = async (questionId) => {
//     try {
//       const response = await axios.get(GET_ANSWER_URL(questionId));
//       setAnswer(response.data.answer);
//       setSelectedQuestion(questionId);
//       setUseful(false);
//     } catch (error) {
//       console.error('Error fetching answer:', error);
//     }
//   };

//   const handleUsefulClick = async () => {
//     try {
//       const response = await axios.post(SEND_FEEDBACK_URL, {
//         questionId: selectedQuestion,
//         useful: useful,
//       });
//       console.log('Feedback sent successfully', response.data);
//     } catch (error) {
//       console.error('Error sending feedback:', error);
//     }
//   };

//   const handleQuestionSubmit = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(CREATE_QUESTION_URL, {
//         title: newQuestion,
//       });
//       setQuestions([response.data, ...questions]);
//       setNewQuestion('');
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error posting question:', error);
//       setIsLoading(false);
//     }
//   };

//   const handleAnswerSubmit = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(CREATE_ANSWER_URL, {
//         questionId: selectedQuestion,
//         answer: newAnswer,
//       });
//       setAnswer(response.data.answer); // Update displayed answer
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error posting answer:', error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="help-desk-container">
//       <div className="main-content">
//         <div className="questions">
//           <h2>Help Center</h2>
//           <ul>
//             {questions.map((question) => (
//               <li key={question.id} onClick={() => handleQuestionClick(question.id)}>
//                 {question.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="answer">
//           <h3>Post a Question:</h3>
//           <input
//             type="text"
//             value={newQuestion}
//             onChange={(e) => setNewQuestion(e.target.value)}
//             placeholder="Type your question here"
//             disabled={isLoading}
//           />
//           <button onClick={handleQuestionSubmit} disabled={isLoading}>
//             {isLoading ? 'Submitting...' : 'Submit'}
//           </button>
//           {selectedQuestion && (
//             <>
//               <h3>Answer:</h3>
//               <p>{answer}</p>
//               {!answer && (
//                 <>
//                   <input
//                     type="text"
//                     value={newAnswer}
//                     onChange={(e) => setNewAnswer(e.target.value)}
//                     placeholder="Type your answer here"
//                     disabled={isLoading}
//                   />
//                   <button onClick={handleAnswerSubmit} disabled={isLoading}>
//                     {isLoading ? 'Submitting...' : 'Submit Answer'}
//                   </button>
//                 </>
//               )}
//               {!useful && answer && (
//                 <button onClick={handleUsefulClick}>Was this useful?</button>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//       {notifications > 0 && (
//         <div className="notification">
//           You have {notifications} new {notifications === 1 ? 'answer' : 'answers'}.
//         </div>
//       )}
//     </div>
//   );
// }

// export default HelpDeskComponent;

