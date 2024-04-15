
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers,faUserCheck } from '@fortawesome/free-solid-svg-icons';

function CreateFile() {
    const [currentTime, setCurrentTime] = useState(new Date());
  const [tutorData, setTutorData] = useState(null);

    const [formData, setFormData] = useState({
        userId: '',
        courseName: '',
        topicName: '',
        tutorId: '',
        document: null,
        tutorName: '',
        date: ''
    });

    const handleLogout = () => {
        localStorage.removeItem('tutorId');
        window.location.href = '/'; // Redirect to login page
      };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleFileChange = (e) => {
        const { id, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await axios.post(`http://localhost:8061s /api/file/addFile`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            toast.success("File send successfully!", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return ( 
        <> <br/> 
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
          <li><Link to='/Attendance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li style={{marginLeft: "10%"}}><button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
        </ul>
      </nav>
        <div style={{backgroundColor: "white", width: "42%", marginLeft: "30%", borderRadius: "2rem"}}>
            <ToastContainer />
            <div className="card-tutor">
                <div className="card-body"> <br/>
                    <h2 className="card-title" style={{marginLeft: "37%", fontSize: "2.3rem"}}>Send a File</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{display: 'flex'}}>
                        <div className="form-group">
                            <label htmlFor="userId" className="form-label">User ID:</label><br></br>
                            <input type="number" className="form-control" id="userId" placeholder="User ID" onChange={handleChange} style={{width: "150%"}}/>
                        </div>
                        <div className="form-group" style={{marginLeft: "20%"}}>
                            <label htmlFor="courseName" className="form-label">Course Name:</label><br></br>
                            <input type="text" className="form-control" id="courseName" placeholder="Course Name" onChange={handleChange} style={{width: "150%"}}/>
                        </div>
                        </div>
                        <div style={{display: "flex"}}>
                        <div className="form-group">
                            <label htmlFor="topicName" className="form-label">Topic Name:</label><br></br>
                            <input type="text" className="form-control" id="topicName" placeholder="Topic Name" onChange={handleChange} style={{width: "150%"}}/>
                        </div>
                        <div className="form-group" style={{marginLeft: "20%"}}>
                            <label htmlFor="tutorId" className="form-label">Tutor Id:</label><br></br>
                            <input type="number" className="form-control" id="tutorId" placeholder="Tutor Id" onChange={handleChange} style={{width: "150%"}}/>
                        </div>
                        </div>
                        <div style={{display: "flex"}}>
                        <div className="form-group">
                            <label htmlFor="document" className="form-label">File:</label><br></br>
                            <input type="file" className="form-control" id="document" onChange={handleFileChange} style={{width: "163%", marginTop: "-3%"}}/>
                        </div>
                        <div className="form-group" style={{marginLeft: "20%"}}>
                            <label htmlFor="tutorName" className="form-label">Tutor Name:</label><br></br>
                            <input type="text" className="form-control" id="tutorName" placeholder="Tutor Name" onChange={handleChange} style={{width: "150%"}}/>
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" className="form-label">Date:</label><br></br>
                            <input type="date" className="form-control" id="date" onChange={handleChange} style={{width: "120%"}}/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width: "30%", marginLeft: "30%"}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateFile;
