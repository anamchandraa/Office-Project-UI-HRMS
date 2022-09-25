import React from 'react';
import Calendar from 'calendar-reactjs'

const EventCalendar = () => {
  return (
    <Calendar
      onCellClick={(val) => console.log(val)}
      month={{
        date: "2022-09-01",
        days: [
          { date: "2022-09-01", status: "vacation" },
          { date: "2022-09-02", status: "vacation" },
          { date: "2022-09-03", status: "present" },
          { date: "2022-09-04", status: "present" },
          
          { date: "2022-09-09", status: "present" },
          { date: "2022-09-06", status: "present" },
          { date: "2022-09-07", status: "present" },
          { date: "2022-09-08", status: "vacation" },
          { date: "2022-09-09", status: "vacation" },
          { date: "2022-09-10", status: "present" },
          { date: "2022-09-11", status: "present" },
          { date: "2022-09-12", status: "present" },
          { date: "2022-09-13", status: "present" },
          { date: "2022-09-14", status: "present" },
          { date: "2022-09-15", status: "vacation" },
          { date: "2022-09-16", status: "vacation" },
          { date: "2022-09-17", status: "absent" },
          { date: "2022-09-18", status: "leave" },
          { date: "2022-09-19", status: "leave" },
          { date: "2022-09-20", status: "leave" },
          { date: "2022-09-21", status: "leave" },
          { date: "2022-09-22", status: "vacation" },
          { date: "2022-09-23", status: "vacation" },
          { date: "2022-09-24", status: "present" },
          { date: "2022-09-25", status: "present" },
          { date: "2022-09-26", status: "present" },
          { date: "2022-09-27", status: "present" },
          { date: "2022-09-28", status: "present" },
          { date: "2022-09-29", status: "vacation" },
          { date: "2022-09-30", status: "vacation" },
          { date: "2022-09-31", status: "present" }
        ]
      }}
      emptyCellStyle={{ backgroundColor: 'white' }}
      status={
        {
          "present": {
            labelStyle: { backgroundColor: 'green', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          },
          "absent": {
            labelStyle: { backgroundColor: 'red', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          },
          "vacation": {
            labelStyle: { backgroundColor: 'yellow', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          },
          "leave": {
            labelStyle: { backgroundColor: 'orange', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          }
        }
      }
    />
  );
}

export default EventCalendar;