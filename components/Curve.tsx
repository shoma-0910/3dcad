import React from "react";

const Curve = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <path
        d="M0 80 Q25 50, 50 80 T100 80"
        stroke="peachpuff"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M0 90 Q35 40, 70 90 T100 90"
        stroke="mistyrose"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M0 70 Q15 20, 30 70 T60 70 T90 70 T100 70"
        stroke="lavenderblush"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M0 60 Q50 0, 100 60"
        stroke="linen"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
};

export default Curve;

