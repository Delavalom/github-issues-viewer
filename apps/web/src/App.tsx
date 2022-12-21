import { useState } from 'react'
import { PrismaClient } from 'database'

const prisma = new PrismaClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app"></main>
  )
}

export default App
