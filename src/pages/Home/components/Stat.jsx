import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export const Stat = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const LoadValue = keyframes`
    from {
      width: 0%;
    }
    to {
      width: ${isVisible ? data.value : 0}%;
    }
  `;
  const Value = styled.div`
    animation: ${LoadValue} 500ms;
    width: ${isVisible ? data.value : 0}%;
    height: 100%;
    background:rgba(72, 99, 255, 0.62);
    border-radius: 999px;
  `;
  const statRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <div className="reg" key={data.icon} ref={statRef}>
      <div className="icon">{data.icon}</div>
      <div className="wrapper">
        <Value />
      </div>
    </div>
  );
};

