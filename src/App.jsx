import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DoctorProvider } from './context/DoctorContext'
import TableAppointment from './component/TableAppointment'
import { RoomProvider } from './context/RoomContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RoomProvider>
      <DoctorProvider>
        <TableAppointment />
      </DoctorProvider>
    </RoomProvider>
  )
}

export default App
