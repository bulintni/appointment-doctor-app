import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';

function Topbar() {
  return (
    <div className='flex justify-between w-full p-4'>
      <div>
        <h1 className='font-bold text-4xl'>วันที่ 30 ม.ค. 2564</h1>
      </div>
      <div className='flex'>
        <div className='bg-gray-400 px-5 py-2 rounded-md mr-2'>
          <p className='text-red-500'>รายได้ทั้งหมด 0.00 บาท</p>
        </div>
        <button className='border-2 border-orange-300 px-2 text-orange-500 rounded-md'><ReplayIcon /></button>
      </div>
      
    </div>
  )
}

export default Topbar