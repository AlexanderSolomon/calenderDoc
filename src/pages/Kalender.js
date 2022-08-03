//rafc
import React, { useState, useEffect } from 'react'
import { ViewState, EditingState, IntegratedEditing, } from '@devexpress/dx-react-scheduler';
import {Scheduler, WeekView, Appointments, AppointmentForm,MonthView, ViewSwitcher,Toolbar, DateNavigator } from  '@devexpress/dx-react-scheduler-material-ui';
import Create from '../components/CRUD/Create'
import './Kalender.css'

//dummy data
const schedulerData = [
{startDate: '2022-08-05T10:00', endDate: '2022-08-05T12:00', title: 'doc1' }
];
//calback function
const saveAppointment =(data) => {
  // axios.post(`https://62e9890401787ec712197e2f.mockapi.io/DateTime`, {
            // title,
            // comments,
            // startDate,
            // endDate,
            // checkbox
        // })
  console.log('apointment saved');
  console.log(data);
  
};
const Calender =()=> {
const [Appointments, setAppointments] =useState([]);
};





export const Kalender = () => {
  return (
<div className='main'>
<Create/>
<div>  
 <createform/>

</div>
  <Scheduler data={schedulerData}>
    <ViewState />
    <EditingState onCommitChanges={saveAppointment}/>
    <IntegratedEditing/>
    <Toolbar/>
    <ViewSwitcher/>
    <DateNavigator/>
    <MonthView />
    <WeekView startDayHour={8} endDayHour={20}/>
    <Appointments/>
    <AppointmentForm />
  </Scheduler>
</div>
  )
}
