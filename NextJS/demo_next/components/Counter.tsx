"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button className="mt-5 btn btn-primary  border-4 w-25" onClick={() => setCount(prev=> prev + 1)}>
      Count: {count}
    </button>
  )
}