import React, { useState } from 'react';
import { useDoctorContext } from '../context/DoctorContext';

function DoctorDropdown() {
  const { selectedDoctor, setSelectedDoctor, doctors } = useDoctorContext(); // ใช้ context
  console.log('Select Dropdown', selectedDoctor)
  return (
    <div className="flex items-center w-full">
      <select
        id="doctor"
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        <option value="" disabled>เลือกหมอ...</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.name}>
            {doctor.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DoctorDropdown;