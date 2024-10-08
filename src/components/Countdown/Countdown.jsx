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
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return <div>Time left: {timeLeft}</div>;
}

export { Countdown };
