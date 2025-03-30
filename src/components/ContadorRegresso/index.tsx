"use client"; // Para habilitar o useState e useEffect no Next.js

import React, { useState, useEffect } from "react";
import styles from './cintador.module.css'
import { time } from "console";

interface CountdownTimerProps{
    eventData:string;
}


const CountdownTimer : React.FC<CountdownTimerProps> = ({ eventData }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const eventTime = new Date(eventData).getTime();
    const difference = eventTime - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      
    } else {
      return null; // Evento já ocorreu
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className={styles.container}>
      {timeLeft ? (
        <h1 className={styles.timer}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h1>
      ) : (
        <h1 className={styles.finished}>O evento já começou!</h1>
      )}
    </div>
  );
};

export default CountdownTimer;
