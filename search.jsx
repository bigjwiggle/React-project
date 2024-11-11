import React , { useState }from "react";
import { Link } from "react-router-dom";
// import styles from './search.module.css'
import { List } from './listdispo'
import './search.css'
import backgroundImage from './2257bea537b28e6.jpg'



export const Questions = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
        
        setInputs({ location: '', jobs: '' });

    }

    return (
        
        <div className="view" >
        
        
        
        {/* <div className={styles.content_container}>
            <div className={styles.form_container}> */}
                <div className="container">
                    <div className="headercontainer">
                        <h2 className="header">Career Finder</h2>
                    </div>
                        <div className="something">
                            <form onSubmit={handlesubmit} className="formcontainer">
                                <label className="location">Enter your location:
                                <input type="text" name="location" 
                                placeholder="Richmond, VA, United States" 
                                value={inputs.location || ""} 
                                onChange={handleChange}
                                />
                                </label>

                                <label className="jobs">Enter the job field:
                                <input type="text" name="jobs" 
                                 placeholder="tech jobs"
                                value={inputs.jobs || ""} 
                                onChange={handleChange}
                                />
                                </label>
                    
                                <input type="submit" />
                            </form>

                            

                            </div>
                        </div> 
            {/* </div>
            
        </div> */}

        <div className="list_area">
            <List/>
        </div>

       
        
        
        </div>
        
    )

}
    
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Questions />);
export default Questions;