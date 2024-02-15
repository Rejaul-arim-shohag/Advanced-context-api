import { useState, useEffect } from "react";

const useFormattedCurrentDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatCurrentDate = () => {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const currentDate = new Date();
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();

      const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
      setFormattedDate(formattedDate);
    };

    // Call the function to set the initial formatted date
    formatCurrentDate();

    // Set up an interval to update the formatted date every minute (adjust as needed)
    const intervalId = setInterval(formatCurrentDate, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return formattedDate;
};

export default useFormattedCurrentDate;