import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRoomContext } from '../context/RoomContext';

function CardPatients({patientFiltered}) {
  const { selectedRoom, setSelectedRoom, Rooms, patients } = useRoomContext();
  console.log('Props',patientFiltered)

  return (
    <div className='bg-white drop-shadow-md rounded-lg w-full h-[120px] flex overflow-hidden mb-4'>
      <div className='flex flex-col h-full flex-[1]'>
        <div className='bg-text-green-light flex justify-center items-center px-6 py-1 rounded-br-[50px]'><p className='font-bold text-white'>{patientFiltered.roomId}</p></div>
        <div className='h-full flex items-center justify-center rounded-full overflow-hidden'>
          <FontAwesomeIcon className='h-[50px] text-gray-300' icon={faUser} />
        </div>
      </div>
      <div className='flex flex-col flex-[3] h-full'>
        <div className='text-lg m-2 '>
          <p className=''>{patientFiltered.patientName}</p>
          <p className=''>{patientFiltered.patientId}</p>
        </div>
        <div className='flex items-end justify-center h-full'>
          <p className='font-light'>{patientFiltered.dateCount} วัน</p>
        </div>
      </div>
      <div className='flex flex-col flex-[1] m-2'>
        <div className='flex justify-end'>
          <div className='bg-gray-700 p-2 rounded-tr-lg'>
            <p className='text-white'>{patientFiltered.queue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPatients