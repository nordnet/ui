import React from 'react';

export default function FlagZa() {
  return (
    <>
      <g transform="scale(72.84)">
        <clipPath id="Z">
          <path d="M0,0 4.5,3 0,6" id="X" />
        </clipPath>
        <clipPath id="A">
          <path d="M0,0H9V6H0z" />
        </clipPath>
        <g clipPath="url(#A)">
          <path d="M0,0V6H9V0z" fill="#002395" />
          <path d="M0,0V3H9V0z" fill="#de3831" />
          <g strokeWidth="2" stroke="#fff">
            <path d="M0,0 4.5,3 0,6M4.5,3H9" id="W" />
            <use xlinkHref="#X" stroke="#ffb612" clipPath="url(#Z)" />
          </g>
          <use xlinkHref="#W" fill="none" stroke="#007a4d" strokeWidth="1.2" />
        </g>
      </g>
      <title>South Africa</title>
    </>
  );
}
