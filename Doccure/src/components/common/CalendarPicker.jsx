import React, { useState } from "react";
import { CalendarDays } from "lucide-react";

const CalendarPicker = () => {
  const [date, setDate] = useState("");

  return (
    <div className="relative w-full sm:w-[250px]">
      {/* Icon */}
      <CalendarDays
        size={18}
        className="absolute left-3   top-1/2 -translate-y-1/2 text-gray-500"
      />

      {/* Date Input */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-purple-500 text-gray-600"
      />
    </div>
  );
};

export default CalendarPicker;