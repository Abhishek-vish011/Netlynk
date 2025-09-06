import React, { useEffect } from 'react'
import styles from "../DashboardLayout/index.module.css"
import { useRouter } from 'next/router'
import { setTokenIsThere } from '@/config/redux/reducer/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '@/config';

function DashboardLayout({children}) {
    const router = useRouter();
    const dispath = useDispatch();
    const authState = useSelector((state)=> state.auth)

    console.log(authState)

    useEffect(()=>{
        if(localStorage.getItem('token') === null){
            router.push("/login")
        }

        dispath(setTokenIsThere())
    }, [])


  return (
    <div>
       <div className={styles.container}>
             <div className={styles.homeContainer}>
                   <div className={styles.homeContainer_leftBar}>

                    <div className={styles.userCardProfile}>
                      <div className={styles.userInfo}>
                          {authState?.user?.userId?.profilePicture ? (
      <img 
        className={styles.userProfile} 
        src={`${BASE_URL}/${authState.user.userId.profilePicture}`} 
        alt="User Profile" 
      />
    ) : (
      <img 
        className={styles.userProfile} 
        src="./Images/imagesSystem.png" // fallback image
        alt="Default Profile" 
      />
    )}
                             {/* <img className={styles.userProfile} src={`${BASE_URL}/${authState.user.userId.profilePicture}`} alt="" /> */}
                  {/* <img src="./Images/imagesSystem.png" alt="User Profile" /> */}
                  <h3>{authState?.user?.userId?.name || "Guest User"}</h3>
<p className={styles.username}>
  @{authState?.user?.userId?.username || "username"}
</p>
<p className={styles.bio}>
  {authState?.user?.bio || "No bio available"}
</p>

              <div className={styles.follower}>
               <div className={styles.following}>
                <h2>133</h2>
                <p>Connection</p>
               </div>
               <div className={styles.following}>
                <h2>56</h2>
                <p>Views</p>
               </div>

              </div>
            </div>
         </div>

                    <div className={styles.pathWay}>
                      <h3>Feed</h3>
                    
                     <div onClick={()=>{
                        router.push("/dashboard")
                     }} className={styles.sideBarOption}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                       <p>Explore</p>
                     </div>

                     <div onClick={()=>{
                        router.push("/discovers")
                     }} className={styles.sideBarOption}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                       <p>Discover</p>
                     </div>

                      <div onClick={()=>{
                        router.push("my_connections")
                      }} className={styles.sideBarOption}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                       <p>Associates</p>
                     </div>

            
                    </div>

                   <div className={styles.sideBottom}>
                    <h2>Logout         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg></h2>            
                   </div>
                 </div>
                   

                  <div className={styles.homeContainer_feedContainer}>
                   {children}
                </div>
                 <div className={styles.homeContainer_extraContainer}>
                     <h3>People you may know</h3>
                     <div className={styles.peopleList}>
                     {authState.all_profiles_fetched && authState.all_users && authState.all_users.map((profile) => {
                        if (!profile?.userId?.profilePicture) return null;
                        return (
                            <div 
                                key={profile._id} 
                                className={styles.extraContainer_profile}
                                onClick={() => router.push(`/view_profile/${profile.userId.username}`)}
                            >
                               <div className={styles.profileImageWrapper}>
                                   <img 
                                       className={styles.userProfile} 
                                       src={`${BASE_URL}/${profile.userId.profilePicture}`} 
                                       alt={profile.userId.name || "User"} 
                                   />
                               </div>
                               <div className={styles.profileInfo}>
                                   <p className={styles.userName}>{profile.userId.name}</p>
                                   <p className={styles.userHandle}>@{profile.userId.username}</p>
                               </div>
                            </div>
                        )
                     })}
                     </div>
                </div>


             </div>

         <div className={styles.mobileNavbar}>
            <div  onClick={()=>{
                        router.push("/dashboard")
                }}  className={styles.singleNavItemHolder_mobileView}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div  onClick={()=>{
                        router.push("/discovers")
                }}  className={styles.singleNavItemHolder_mobileView}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
            </div>
            <div  onClick={()=>{
                        router.push("my_connections")
                      }}  className={styles.singleNavItemHolder_mobileView}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
               </svg>
            </div>
           
         </div>
             
          </div>
    </div>
  )
}

export default DashboardLayout
