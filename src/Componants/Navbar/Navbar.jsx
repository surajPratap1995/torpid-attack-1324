import React from 'react'
import styles from "./navbar.module.css";
import {useNavigate} from "react-router-dom"
import { Link  } from 'react-router-dom';
import {BiSearchAlt2} from "react-icons/bi"
import {BsCartCheckFill} from "react-icons/bs";

import Login from '../Login/Login'

const Navbar = () => {
    const navigate = useNavigate();
    const GoToHomePage = () => {
        navigate("/")
    }
  return (
    
         <div className={styles.navbar} style={{backgroundColor:"rgb(255,255,255)",position:"sticky", top:"0px",zIndex:"1"}}>
            <div className={styles.imageDiv}>
                <img style={{cursor:"pointer"}} onClick={GoToHomePage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XbnIfBe7Apois52u_vH51dpElhu2KgTEsA&usqp=CAU" alt="" 
                />
            </div>
            <div className={styles.links1}>
                
                <a href='New' className={styles.mainLink}>New</a>
                <a href='Women' className={styles.mainLink}>Women</a>
                <Link to="/Men" className={styles.mainLink}>Men</Link>
                <a href='Kids' className={styles.mainLink}>Kids</a>
                <a href='Cashmere' className={styles.mainLink}>Cashmere</a>
                <a href='Home' className={styles.mainLink}>Home</a>
                <a href='Stories' className={styles.mainLink}>Stories</a>
                <a href='Sale' className={styles.mainLink}>Sale</a>
            </div>
           
            <div className={styles.inputDiv}>
                <button className={styles.searchIcon}><BiSearchAlt2/></button>
                <input  className={styles.inputSection} type="text" placeholder='Search J.Crew' />
                
            </div>

                 <div className={styles.links2}>
                    
                <Login/>

                </div>
                <div className={styles.links2Icons} >

                    <BsCartCheckFill style={{fontSize:"18px"
                    
                    }}/>
                  
                </div>
        </div>
       
    
    
    
  )
}

export default Navbar