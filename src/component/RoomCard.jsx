import React from 'react'
import { useRoomContext } from '../context/RoomContext'
import CardPatients from './CardPatients';

function RoomCard() {
  const { selectedRoom, setSelectedRoom, Rooms, patients } = useRoomContext();
  const specialRoom = patients.filter((patient) => patient.roomId === 1)
  const adminRoom = patients.filter((patient) => patient.roomId === 2)
  const CashRoom = patients.filter((patient) => patient.roomId === 3)

  const getRoomPatientCount = (roomName) => {
    if (roomName === "ห้องพิเศษ present") {
      return specialRoom.length;
    } else if (roomName === "แอดมิน") {
      return adminRoom.length;
    } else if (roomName === "จุดชำระเงิน") {
      return CashRoom.length;
    } else {
      return 0;
    }
  };


  return (
    <div className='flex h-screen justify-between w-full'>
      {Rooms.map((room, index) => (
        <div key={index} className={`flex-1 mx-2 drop-shadow-lg rounded-lg ${room.roomName === "จุดชำระเงิน" ? `bg-green-100` : `bg-gray-200`}`}>
          <div className='flex justify-center bg-text-green-light py-4 rounded-t-lg'>
            <h1 className='text-lg text-white'>{room.roomName} ({getRoomPatientCount(room.roomName)})</h1>
          </div>
          <div className='p-4'>
            {patients.filter((patient)=> patient.roomId === room.id).map((filteredPatient)=>(
              filteredPatient ? 
              <CardPatients 
                patientFiltered={filteredPatient}
              /> : ''
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoomCard