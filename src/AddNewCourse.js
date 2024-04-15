

import React, { useState } from "react";
import axios from "axios";
import './AddNewCourse.css';
import AdminDashboard from "./AdminDashboard";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AddNewCourse() {
  const [courses, setCourses] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(""); // Changed from duration to price
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddCourse = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/admin/add-course", {
        courses,
        description,
        price,
      });

      if (response.status === 200) {
        // Course added successfully
        console.log("Course added successfully");
        toast.success("Course added successfully"); // Display success toast
        // You may want to reset the form or clear the state here
        setCourses("");
        setDescription("");
        setPrice("");
      } else {
        toast.success("Course added successfully"); // Display success toast
        console.log("Course added successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the course. Please try again later.");
    }
  };


  return (
    <>
      <AdminDashboard/> <br/> <br/>
      <div className="add-course-page" style={{marginTop: "-48%", marginLeft: "30%"}}>
        <h2 style={{fontSize: "2.5rem", marginLeft: "25%"}}>Add New Course</h2> <br/>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form>
          <label>Course Name:</label>
          <input type="text" value={courses} onChange={(e) => setCourses(e.target.value)} />

          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

          <label>Price:</label> {/* Changed from Duration to Price */}
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="price-input"
          />

          <button type="button" onClick={handleAddCourse} style={{width: "30%"}}>
            Add Course
          </button>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
}

export default AddNewCourse;



// import React, { useState } from "react";
// import axios from "axios";
// import './AddNewCourse.css';

// const defaultMainCourses = [
//   { id: 1, name: "Academic" },
//   { id: 2, name: "Technical" },
//   { id: 3, name: "Professional" }
// ];

// function AddNewCourse() {
//   const [subCourseName, setSubCourseName] = useState("");
//   const [selectedMainCourse, setSelectedMainCourse] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleAddSubCourse = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/admin/add-sub-course", {
//         mainCourseId: selectedMainCourse,
//         subCourseName: subCourseName,
//       });

//       if (response.status === 200) {
//         // Sub course added successfully
//         console.log("Sub course added successfully");
//         // You may want to clear the state here
//         setSubCourseName("");
//         setSelectedMainCourse("");
//       } else {
//         // Handle error
//         console.error("Failed to add sub course");
//         // setErrorMessage("Failed to add sub course. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setErrorMessage("An error occurred while adding the sub course. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <div className="add-course-page">
//         <h1>Add New Sub Course</h1>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form>
//           <label>Main Course:</label>
//           <select value={selectedMainCourse} onChange={(e) => setSelectedMainCourse(e.target.value)}>
//             <option value="">Select Main Course</option>
//             {defaultMainCourses.map(course => (
//               <option key={course.id} value={course.id}>{course.name}</option>
//             ))}
//           </select>

//           <label>Sub Course Name:</label>
//           <input
//             type="text"
//             value={subCourseName}
//             onChange={(e) => setSubCourseName(e.target.value)}
//             className="sub-course-input"
//           />

//           <button type="button" onClick={handleAddSubCourse}>
//             Add Sub Course
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default AddNewCourse;

// import React, { useState } from 'react';

// const AddNewCourse = () => {
//     const [mainCourse, setMainCourse] = useState('Academic');
//     const [subCourse, setSubCourse] = useState('');

//     const handleMainCourseChange = (event) => {
//         setMainCourse(event.target.value);
//     };

//     const handleSubCourseChange = (event) => {
//         setSubCourse(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Send POST request to backend to add new course
//         const courseData = { mainCourse, subCourse };
//         fetch('htpp://localhost:8080/api/admin/api/courses/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(courseData)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to add course');
//             }
//             return response.json();
//         })
//         .then(data => {
//             alert('Course added successfully:', data);
//             // Optionally, show a success message or redirect to another page
//         })
//         .catch(error => {
//             console.error('Error adding course:', error);
//             // Optionally, show an error message to the user
//         });
//     };

//     return (
//         <div>
//             <h1>Add New Course</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Main Course:</label>
//                 <select value={mainCourse} onChange={handleMainCourseChange}>
//                     <option value="Academic">Academic</option>
//                     <option value="Technical">Technical</option>
//                     <option value="Professional">Professional</option>
//                 </select>
//                 <br />
//                 <label>Sub Course:</label>
//                 <input type="text" value={subCourse} onChange={handleSubCourseChange} required />
//                 <br />
//                 <button type="submit">Add Course</button>
//             </form>
//         </div>
//     );
// };

// export default AddNewCourse ;

