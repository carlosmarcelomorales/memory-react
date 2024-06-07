import PropTypes from "prop-types";
import { useEffect, useState } from "react";

Countdown.propTypes = {
  time: PropTypes.number.isRequired,
};

function Countdown({ time }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return <div>Time left: {timeLeft}</div>;
}

export { Countdown };
