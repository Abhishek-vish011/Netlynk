import { BASE_URL } from '@/config'
import { getAllUsers } from '@/config/redux/action/authAction'
import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./index.module.css"
import { useRouter } from 'next/navigation'

function DiscoverPage() {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  // Track connection status per userId
  const [connectedUsers, setConnectedUsers] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch all users once
  useEffect(() => {
    if (!authState.all_profiles_fetched) {
      dispatch(getAllUsers())
    }
  }, [authState.all_profiles_fetched, dispatch])

  // Toggle connection for a specific userId
  const toggleConnection = (userId) => {
    setConnectedUsers((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }))
  }

  // Filter users by search query
  const filteredUsers = authState.all_profiles_fetched
    ? authState.all_users.filter((user) =>
        user.userId?.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <UserLayout>
      <DashboardLayout>
        <div>
          <div className={styles.discoverHead}>
            <h1>Meet New People</h1>

            <div className={styles.playUser}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Who are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => console.log("Searching:", searchQuery)}>
              Search
            </button>
          </div>

          {/* User List */}
          <div className={styles.allUserProfile}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => {
                const isConnected = connectedUsers[user.userId._id] || false

                return (
                  <div key={user.userId._id} className={styles.userCard}>
                    {/* Clickable profile */}
                    <div
                      onClick={() =>
                        router.push(`/view_profile/${user.userId.username}`)
                      }
                      style={{ display: "flex", alignItems: "center", flex: 1 }}
                    >
                      <img
                        className={styles.userCard_image}
                        src={`${BASE_URL}/${user.userId.profilePicture}`}
                        alt="profile"
                      />
                      <div className={styles.nameData}>
                        <h3>{user.userId.name}</h3>
                        <p style={{ color: "gray" }}>@{user.userId.username}</p>
                      </div>
                    </div>

                    {/* Connect / Disconnect toggle */}
                    <div
                      onClick={() => toggleConnection(user.userId._id)}
                      className={styles.connect}
                    >
                      {isConnected ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="green"
                          width="24"
                          height="24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="black"
                          width="24"
                          height="24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                )
              })
            ) : (
              <p style={{ color: "gray", marginTop: "1rem" }}>No users found</p>
            )}
          </div>
        </div>
      </DashboardLayout>
    </UserLayout>
  )
}

export default DiscoverPage
