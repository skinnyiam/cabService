import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateTimePicker() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    return (
      <div className="mt-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Choose date and time"
          className="w-64 p-2 border rounded"
        />
      </div>
    );
  }
  
  export default DateTimePicker;
  
