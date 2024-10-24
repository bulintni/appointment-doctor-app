import React, { createContext, useContext, useState } from 'react';

// สร้าง context
const DoctorContext = createContext();

// สร้าง provider
export const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [doctors] = useState([
    { id: 1, name: 'คุณหมอสมชาย' ,position: "ทันตแพทย์", intime: "เวลาเข้าทำงาน 09.00 - 19.00น."},
    { id: 2, name: 'คุณหมอหญิง' ,position: "ศัลยแพทย์", intime: "เวลาเข้าทำงาน 08.00 - 18.00น."},
    { id: 3, name: 'คุณหมอเฉลิม' ,position: "อายุรกรรม", intime: "เวลาเข้าทำงาน 05.00 - 15.00น."},
  ]);
  const [appointments] = useState([
    { id: 1, doctorId: 1, patientId: '666234', patientName: 'นายสมชาย', date: '2024-10-30', intime: '10:00', outtime: '11:00', phonenumber: '093-3330000', action: 'ครอบฟัน'},
    { id: 2, doctorId: 2, patientId: '666235', patientName: 'นางสาวหญิง', date: '2024-10-30', intime: '11:00', outtime: '11:30', phonenumber: '093-3330000', action: 'อุดฟัน'},
    { id: 3, doctorId: 3, patientId: '666236', patientName: 'นายนรชัย', date: '2024-10-31', intime: '09:30', outtime: '14:30', phonenumber: '093-3330000', action: 'ขูดหินปูน'},
  ])

  return (
    <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor, doctors, appointments }}>
      {children}
    </DoctorContext.Provider>
  );
};

// สร้าง hook สำหรับใช้ context
export const useDoctorContext = () => {
  return useContext(DoctorContext);
};