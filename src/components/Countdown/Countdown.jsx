import PropTypes from "prop-types";
import { useEffect, useState } from "react";

Countdown.propTypes = {
  time: PropTypes.number.isRequired,
  onTimeUp: PropTypes.func.isRequired,
};

function Countdown({ time, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          onTimeUp();
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [onTimeUp, timeLeft]);

  return <div>Time left: {timeLeft}</div>;
}

export { Countdown };
