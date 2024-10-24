import React, { createContext, useContext, useState } from 'react';

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [Rooms] = useState([
    {id:1, roomName: 'ห้องพิเศษ present'},
    {id:2, roomName: 'แอดมิน'},
    {id:3, roomName: 'จุดชำระเงิน'},
  ]);
  const [patients] = useState([
    {id: 1, patientName: 'นายสมชาย', patientId: '666234', dateCount: 8, roomId: 2, queue: 3},
    {id: 2, patientName: 'นางสมหญิง', patientId: '666234', dateCount: 8, roomId: 3, queue: 4},
    {id: 3, patientName: 'นางสาวสมหยุด', patientId: '666234', dateCount: 8, roomId: 2, queue: 5},
    {id: 4, patientName: 'นายดีย์', patientId: '666234', dateCount: 8, roomId: 1, queue: 7},
  ])

  return (
    <RoomContext.Provider value={{ selectedRoom, setSelectedRoom, Rooms, patients }}>
      {children}
    </RoomContext.Provider>
  );

}

export const useRoomContext = () => {
  return useContext(RoomContext);
};