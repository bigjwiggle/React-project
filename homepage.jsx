import { useState } from "react";
import {React} from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './homepage.module.css'
// import navBar from "../nav/nav";


// function Questions() {

//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     }

//     const handlesubmit = (event) => {
//         event.preventDefault();
//         alert(JSON.stringify(inputs));
        
//         setInputs({ location: '', jobs: '' });

//     }

//     return (

        

//         <div className={styles.content_container}>
//             <div className={styles.form_container}>
//                 <div className={styles.container}>
//                     <div className={styles.headercontainer}>
//                         <h2 className={styles.header}>Career Finder</h2>
//                     </div>
//                         <div className={styles.something}>
//                             <form onSubmit={handlesubmit} className={styles.formcontainer}>
//                                 <label>Enter your location:
//                                 <input type="text" name="location" 
//                                 placeholder="Richmond, VA, United States" 
//                                 value={inputs.location || ""} 
//                                 onChange={handleChange}
//                                 />
//                                 </label>

//                                 <label>Enter the job field:
//                                 <input type="text" name="jobs" 
//                                  placeholder="tech jobs"
//                                 value={inputs.jobs || ""} 
//                                 onChange={handleChange}
//                                 />
//                                 </label>
                    
//                                 <input type="submit" />
//                             </form>

//                             <div className={styles.list_area}>

//                             </div>
//                         </div> 
//                 </div>
//             </div>
//         </div> 
        
           
//     )

// }
    
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Questions />);
// export default Questions;

export const Home = () =>   {

    return (
        <>
    <section className="hero">
        <div className="hero-content">
            <h1>Find Your Perfect Career Path</h1>
            <p>Explore job opportunities tailored to your skills and interests.</p>
            <button>
                <NavLink to='/search'>Get Started</NavLink>
            </button>
        </div>
    </section>
    
    <section className="how-it-works">
    <h2>How It Works</h2>
    <div className="steps">
      <div className="step">
        <i className="icon-profile"></i>
        <h3>Create a Profile</h3>
        <p>Tell us about your skills and experiences.</p>
      </div>
      <div className="step">
        <i className="icon-match"></i>
        <h3>Get Matched</h3>
        <p>We’ll find job opportunities tailored to you.</p>
      </div>
      <div className="step">
        <i className="icon-apply"></i>
        <h3>Apply</h3>
        <p>Submit your application to your dream job.</p>
      </div>
    </div>
  </section>

  </>
    )
}

// export default Home;