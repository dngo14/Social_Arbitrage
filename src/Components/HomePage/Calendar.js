import React from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

function MyCalendar({ earningsCalendar }) {
  // Format earnings calendar data into events array
  const events = earningsCalendar.earningsCalendar.map(event => ({
    title: `${event.symbol} Earnings`, // Event title
    start: new Date(event.date), // Event start date
    end: new Date(event.date), // Event end date (optional)
  }));

  return (
    <div style={{marginBottom: "15px"}}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 1200 }}
        views={['month']} // Only show the month view
        defaultView="month" // Default view to show
        popup={true}
        handleDragStart={() => {}}
        tooltipAccessor={event => `${event.title} - ${event.start}`}
      />
    </div>
  );
}

export default MyCalendar;
