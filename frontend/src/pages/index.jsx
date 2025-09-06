import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/UserLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  return (
    <UserLayout>
     <div id="home" className={styles.container}>
  <div className={styles.mainContainer}>
     <div className={styles.connectivity}>
        <img src="/Images/imageA.avif" alt="User 1" />
        <img src="/Images/imageB.webp" alt="User 2" />
        <img src="/Images/imageC.jpg" alt="User 3" />
        <img src="/Images/imageD.avif" alt="User 4" />
        <p>Growing your circle every day</p>
     </div>

    <p>Connect with Friends without Exaggeration</p>

    <p className={styles.typingtext}>
      <span style={{ color: "#c34f5e" }}>A True social media platform,</span> with stories no blufs !
    </p>

    <div
      onClick={() => {
        router.push("/login");
      }}
      className={styles.buttonJoin}
    >
      <p>Join Now</p>
    </div>
    <div className={styles.perform}>
      <p>100K <br /> <span style={{fontSize:"1.5rem", fontWeight: "200"}}>Connection</span></p>
      <p>100% <br /> <span style={{fontSize:"1.5rem", fontWeight: "200"}}>Free</span></p>
     <p>24/7 <br /> <span style={{fontSize:"1.5rem", fontWeight: "200"}}>Support</span></p>
    </div>
  <div className={styles.logoSet}>
    <img className={styles.img} src="/Images/Platform1.png" alt="logo" />
    <img className={styles.img} src="/Images/Platform2.png" alt="logo" />
  </div>
  </div>
</div>
      <div className={styles.headWanner}>
         <div className={styles.Wanner}>
          <img src="/Images/Connect.jpg" alt="" />
         </div>
     </div>


     
   <div id="about" className={styles.work}>
  <h2>How It Works</h2>
  <div className={styles.workCards}>
    
    <div className={styles.workCard}>
      <div className={styles.icon}>👥</div>
      <h3>1. Create Your Profile</h3>
      <p>Sign up and set up your profile to start building your personal network.</p>
    </div>

    <div className={styles.workCard}>
      <div className={styles.icon}>📝</div>
      <h3>2. Share Your Posts</h3>
      <p>Write posts, share updates, and let people know your thoughts and ideas.</p>
    </div>

    <div className={styles.workCard}>
      <div className={styles.icon}>💬</div>
      <h3>3. Connect & Engage</h3>
      <p>Comment, like, and interact with posts to grow meaningful connections.</p>
    </div>

    <div className={styles.workCard}>
      <div className={styles.icon}>🌐</div>
      <h3>4. Grow Your Network</h3>
      <p>Expand your circle, meet new people, and build lasting relationships.</p>
    </div>

  </div>
</div>
         <div className={styles.secondSet}>
          <div className={styles.secondSetUp}>
             <h2>Welcome to Networx! We’re glad you’re here.</h2>
             <p>Join a thriving community where opportunities and people align with you</p>
             <p>Create your profile and get discovered by like-minded collaborators.</p>
             </div>
              <div onClick={()=>{
               router.push("/login")
            }} className={styles.buttonJoin}>
              <p>Create Your Profile</p>
            </div>
   </div>         


  <div id="services" className={styles.viewPanel}>
   
    <div className={styles.view}>
      <img src="/Images/NetImage.avif" alt="img1"/>
      <img src="/Images/NetImage2.avif" alt="img2"/>
      <img src="/Images/NetImage3.jpeg" alt="img3"/>
      <img src="/Images/NetImage4.jpeg" alt="img4"/>
    </div>


<div className={styles.textView}>
  <h2>Why Choose Us?</h2>
  <ul className={styles.highlights}>
    <li>Secure and trusted platform</li>
    <li>Connect with global communities</li>
    <li>Share ideas and grow your network</li>
    <li>Tools to boost career opportunities</li>
  </ul>

  <h2>Start Your Journey</h2>
  <p>
    Take the first step toward building strong, lasting connections. 
    Join today and empower your future through networking.
  </p>

  <button onClick={()=>{
               router.push("/login")
            }} >Get Started</button>
</div>


  </div>



<div id="contact" className={styles.future}>
  <h2>Future Developments & Integrations</h2>
  <div className={styles.futureCards}>

    <div className={styles.futureCard}>
      <div className={styles.icon}>🤖</div>
      <h3>AI Recommendations</h3>
      <p>Personalized content feed powered by AI to show posts you’ll love.</p>
    </div>

    <div className={styles.futureCard}>
      <div className={styles.icon}>🎥</div>
      <h3>Video Sharing</h3>
      <p>Post and engage with short videos, bringing content to life.</p>
    </div>

    <div className={styles.futureCard}>
      <div className={styles.icon}>🌍</div>
      <h3>Global Communities</h3>
      <p>Join topic-based groups and connect with like-minded people worldwide.</p>
    </div>

    <div className={styles.futureCard}>
      <div className={styles.icon}>💼</div>
      <h3>Job Networking</h3>
      <p>Find career opportunities and grow professionally with your network.</p>
    </div>

  </div>
</div>





     <div className={styles.footer}>
        <div className={styles.footerContainer}>
    <div className={styles.footerLogo}>
      <img src="/Images/logoNetwork.png" alt="" />
      <p>Connect. Collaborate. Grow.</p>

      <div style={{marginTop: "1.2rem"}}>
        <h4>Contact Us</h4>
        <p>+91-7470379217</p>
        <p>aviVishw1@gmail.com</p>
      </div>
      <div style={{marginTop: "1.2rem"}}>
        Lunch By:- Abhishek Vishwakarma
      </div>

      <div style={{marginTop: "2.2rem"}}>
       <p>Enjoy a smooth, high-speed experience with advanced <br /> functionality throughout the application.</p>
      </div>
    </div>

    <div className={styles.footerLinks}>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>

      <div>
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h4>Connect</h4>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className={styles.footerBottom}>
    <p>&copy; {new Date().getFullYear()} Networx. All rights reserved.  </p>
  </div>
     </div>

    </UserLayout>
  );
}
