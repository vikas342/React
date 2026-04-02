// components/LogoutButton.js
"use client"

import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/")
  }

  return (
    <button onClick={handleLogout}  className="mt-5 btn btn-secondary border-4 w-25">
      Logout
    </button>
  )
}