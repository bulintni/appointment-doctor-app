import React, { useEffect } from 'react';
import DoctorDropdown from './DoctorDropdown';
import { useDoctorContext } from '../context/DoctorContext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AppointCalendar from './AppointCalendar';
import doctorAvata from '../assets/doctor.png'
import Topbar from './Topbar';
import RoomCard from './RoomCard';

function TableAppointment() {
  const { selectedDoctor, doctors, appointments } = useDoctorContext();

  const selectDoctorInfo = doctors.find(doctor => doctor.name === selectedDoctor)
  const selectedDoctorId = selectDoctorInfo ? selectDoctorInfo.id : null;
  console.log("SelectDoctor", selectedDoctorId)
  const selectedDoctorName = selectDoctorInfo ? selectDoctorInfo.name : null;

  //กรองการนัดหมาย
  const filteredAppointments = appointments.filter(appointment => appointment.doctorId === selectedDoctorId)
  console.log("คนที่อยู่ในการนัด", filteredAppointments)

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-[2] p-4 border-r-2 justify-start flex-col items-center">
        <DoctorDropdown />
        <div className='w-full mt-4 bg-slate-600 px-4 py-4 rounded-md flex justify-between items-center'>
          <h1 className='text-xl text-white'>ทันตแพทย์</h1>
          <span className='bg-white rounded-full  overflow-hidden'><img src={doctorAvata} alt="doctor-avata" className='w-10' /></span>
        </div>
        {selectDoctorInfo && (
          <div className='w-full'>
            <div className='w-full bg-light-green px-1 py-1 flex justify-center items-center'>
              <AccessTimeIcon className='text-white mr-2' />
              <h3 className='text-white font-semibold'>{selectDoctorInfo.intime}</h3>
            </div>

            {/* ตารางนัด */}
            <AppointCalendar filteredAppointments={filteredAppointments} />

          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex flex-[3] p-4 justify-start items-center flex-col w-full">
        <div className='flex justify-between w-full'>
          <Topbar />
        </div>
        <RoomCard/>

      </div>
    </div>
  )
}

export default TableAppointment