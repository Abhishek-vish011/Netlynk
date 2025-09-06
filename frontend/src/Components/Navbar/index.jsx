import React from 'react'
import styles from "./style.module.css"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/config/redux/reducer/authReducer';

export default function NavbarComponent() {
    const router = useRouter();
    const dispath = useDispatch();
    const authState = useSelector((state) => state.auth);
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img  onClick={()=>{
            router.push("/")
        }} src="/Images/logoNetwork.png" alt="" />
             {!authState.profileFetched && <div className={styles.routess}>
                <ul className={styles.ul}>
                  <li onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} className={styles.li}>Home</li>
                  <li  onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })} id='#' className={styles.li}>About</li>
                  <li onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} className={styles.li}>Service</li>
                  <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className={styles.li}>Contact</li>
                </ul>
            </div>}

        <div className={styles.navbarOptionContainer}>
          {authState.profileFetched && <div>
           <div style={{display: "flex", gap: "1.2rem"}}>
            <p>{authState.profileFetched}</p>
            <p className={styles.fixBtn} onClick={()=>{
              router.push("/profile")
            }} style={{fontWeight: "bold", cursor: "pointer", color: "black"}}>Profile</p>
            <p className={styles.outBtn} onClick={()=>{
              localStorage.removeItem("token")
              router.push("/login")
              dispath(reset())
            }} style={{fontWeight: "bold", cursor: "pointer", color: "white"}}>Log Out</p>
           </div>
            </div>}


          {!authState.profileFetched && <div onClick={()=>{
                router.push("/login")
            }} className={styles.buttonJoin}>
                <p>Let’s Connect</p>
            </div>}
        </div>
      </nav>
    </div>
  )
}
