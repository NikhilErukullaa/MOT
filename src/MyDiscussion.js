import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';

function MyDiscussion() {
  const [discussionsList, setDiscussionsList] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const id = 1;
  const [discussionFormData, setDiscussionFormData] = useState({
    tutorName: '',
    userName: '',
    userId: 0,
    message: ''
  });

  useEffect(() => {
    // Fetch user details when the component mounts
    axios.get(`http://localhost:8080/api-v1/${id}`)
      .then(response => {
        setTutorData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiscussionFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!discussionFormData.tutorName || !discussionFormData.userName || !discussionFormData.userId || !discussionFormData.message) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/discussion/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(discussionFormData)
      });

      if (response.ok) {
        alert('Discussion saved successfully');
        fetchDiscussions();
        setDiscussionFormData({
          tutorName: '',
          userName: '',
          userId: 0,
          message: ''
        });
      } else {
        alert('Failed to save discussion');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  const fetchDiscussions = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/discussion/getAll');
      if (response.ok) {
        const discussions = await response.json();
        setDiscussionsList(discussions);
      } else {
        alert('Failed to fetch discussions');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  useEffect(() => {
    fetchDiscussions();
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
        <form onSubmit={handleSubmit}>
          <h2>MyDiscussion</h2>
          <div className="label-input-group">
            <label>Tutor Name:</label>
            <input
              type="text"
              className="inputReg form-control"
              placeholder="Enter Name"
              value={tutorData ? `${tutorData.firstName} ${tutorData.lastName}` : ''}
              onChange={handleChange}
              name="tutorName"
            />
          </div>
          <div className="label-input-group">
            <label>User Name:</label>
            <input
              type="text"
              className="inputReg form-control"
              placeholder="Enter Name"
              value={discussionFormData.userName}
              onChange={handleChange}
              name="userName"
            />
          </div>
          <div className="label-input-group">
            <label>User ID:</label>
            <input
              type="number"
              className="inputReg form-control"
              placeholder="Enter UserId"
              value={discussionFormData.userId}
              onChange={handleChange}
              name="userId"
            />
          </div>
          <div className="label-input-group">
            <label>Message:</label>
            <textarea
              className="inputReg form-control"
              placeholder="Enter Message"
              value={discussionFormData.message}
              onChange={handleChange}
              name="message"
            />
          </div><br></br>
          <button className="btn btn-primary buttonClass" type="submit" style={{ width: '90px', marginLeft: '70px' }}>Send</button>
        </form>
        <div className="discussions-container">
          <h2>Discussions</h2>
          <table className="discussions-table">
            <thead>
              <tr>
                <th>Tutor Name</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {discussionsList.map((discussion, index) => (
                <tr key={index}>
                  <td>{discussion.tutorName}</td>
                  <td>{discussion.userName}</td>
                  <td>{discussion.userId}</td>
                  <td>{discussion.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default MyDiscussion;
