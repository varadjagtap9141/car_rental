import React, { useState, useEffect, useRef } from 'react';

function CounterTest({ nthNumber }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const intervalId = setInterval(() => {
            if (count < nthNumber) {
              setCount(count + 1);
            } else {
              clearInterval(intervalId);
            }
          }, 10); // Adjust the interval as needed
        }
      },
      { rootMargin: '0px 0px -100px 0px' } // Adjust the root margin as needed
    );

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, [nthNumber]);

  return (
    <div ref={counterRef}>
      <p>Count: {count}</p>
    </div>
  );
}

export default CounterTest;