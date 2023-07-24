import React, { useEffect, useState } from "react";

const MyElement = () => {
  let [timerInSeconds, setTimerInSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerInSeconds(prevSeconds => {
        console.log('prevSeconds', prevSeconds);
        
        return  prevSeconds + 1
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <p>Here is running timer {timerInSeconds} Seconds</p>
  )
}

export default MyElement;