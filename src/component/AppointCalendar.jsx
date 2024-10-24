import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Popover } from 'react-tiny-popover'
import { useDoctorContext } from '../context/DoctorContext';
import PersonIcon from '@mui/icons-material/Person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ModeIcon from '@mui/icons-material/Mode';
import doctorAvata from '../assets/doctor.png'
import CloseIcon from '@mui/icons-material/Close';

function createData(
  intime,
) {
  return { intime };
}

const times = [
  '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
];

function AppointCalendar({ filteredAppointments }) {
  const { selectedDoctor } = useDoctorContext();
  console.log("SelectDoctor in Calendar", selectedDoctor)
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const handleOpen = (event, appointment) => {
    setAnchorEl(event.currentTarget);
    setSelectedAppointment(appointment); // เก็บข้อมูลที่เลือก
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedAppointment(null); // รีเซ็ตข้อมูลที่เลือก
  };

  const open = Boolean(anchorEl);
  console.log("Props data", filteredAppointments)

  return (
    <TableContainer component={Paper} className='h-screen'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='h-full'>
        <TableBody>
          {times.map((time, index) => (
            <TableRow
              key={time}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ width: '10%' }} style={{ backgroundColor: index % 2 === 0 ? 'lightgray' : 'white' }}
              >
                {time}
              </TableCell>
              {/* ตรวจสอบชื่อ และแสดงค่าในคอลัมน์อื่น ๆ หรือปล่อยว่าง */}
              {filteredAppointments.map((filteredAppointment) => (
                <TableCell align="left" sx={{ width: '70%', padding: '0', backgroundColor: index % 2 === 0 ? 'lightgray' : 'white' }}>{time === filteredAppointment.intime ?
                  <Popover
                    isOpen={open}
                    onClickOutside={handleClose}
                    content={
                      <div className='bg-white rounded-sm drop-shadow-lg border-gray-700 pt-[0.1rem] w-[350px]'>
                        <div className='m-2 flex justify-between items-center'>
                          <div>
                            <h4 className='text-text-green-light'>นัดหมาย</h4>
                            <h4 className='text-text-green-light'>{selectedDoctor}</h4>
                          </div>
                          <div className='flex items-start'>
                            <span className='bg-white overflow-hidden rounded-full'><img src={doctorAvata} alt="#" className='w-10'/></span>
                            <button onClick={handleClose} className='text-text-green-light'><CloseIcon/></button>
                          </div>
                          
                        </div>
                        <div className='border-l-[1.00rem] rounded-md pr-8 flex justify-between p-2'>
                          <div>
                            <div className='flex'><PersonIcon className='mr-2 text-text-green-light' /><p>{filteredAppointment.patientId} | {filteredAppointment.patientName}</p></div>
                            <div className='flex'><FontAwesomeIcon className='text-text-green-light text-xl mr-3 ml-1' icon={faTooth} /><p>{filteredAppointment.action}</p></div>
                            <div className='flex'><LocalPhoneIcon className='mr-2 text-text-green-light' /><p>{filteredAppointment.phonenumber}</p></div>
                            <div>
                              <p>ประเมินค่าใช้จ่าย 0.00</p>
                            </div>
                            <div className='flex'><AccessTimeFilledIcon className='mr-2 text-text-green-light' /><p>{filteredAppointment.intime}-{filteredAppointment.outtime}</p></div>
                          </div>
                          <div className='flex items-end justify-end'>
                            <a href="#"><LocalPrintshopIcon className='text-text-green-light ml-3'/></a>
                            <a href="#"><ModeIcon className='text-text-green-light ml-3'/></a>
                          </div>
                        </div>
                      </div>
                    }
                    positions={['top', 'right']}
                    anchor={anchorEl}
                  >
                    <p
                      style={{ width: '100%', height: '100%', margin: 0 }}
                      className={time === filteredAppointment.intime ? 'bg-orange-400 flex items-center p-2 cursor-pointer' : ''}
                      onClick={(event) => handleOpen(event, filteredAppointment)}
                    >
                      {filteredAppointment.patientName} | {filteredAppointment.action} | {filteredAppointment.patientId} | {filteredAppointment.phonenumber} | {filteredAppointment.intime}-{filteredAppointment.outtime} น.
                    </p>
                  </Popover>
                  : ''}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointCalendar