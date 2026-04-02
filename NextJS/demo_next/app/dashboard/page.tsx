// app/dashboard/page.js
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LogoutButton from "../../components/Logout"

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn) {
      router.push("/")
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard ✅</h1>

      <p>Welcome, Admin</p>

      <LogoutButton />
    </div>
  )
}