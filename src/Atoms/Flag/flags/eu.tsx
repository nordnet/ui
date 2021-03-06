import React from 'react';

// This one will fail the same way as spinner did
// Chrome, put 2 on page, hide first -> second will become hidden
// FIXME: do it without defs
export default function FlagEu() {
  return (
    <>
      <defs>
        <g id="eu_d">
          <g id="eu_b">
            <path d="M0-1l-.31.95.477.156z" id="eu_a" />
            <use transform="scale(-1 1)" xlinkHref="#eu_a" />
          </g>
          <g id="eu_c">
            <use transform="rotate(72)" xlinkHref="#eu_b" />
            <use transform="rotate(144)" xlinkHref="#eu_b" />
          </g>
          <use transform="scale(-1 1)" xlinkHref="#eu_c" />
        </g>
      </defs>
      <path fill="#039" d="M0 0h640v480H0z" />
      <g transform="translate(320 242.263) scale(23.7037)" fill="#fc0">
        <use height="100%" width="100%" xlinkHref="#eu_d" y="-6" />
        <use height="100%" width="100%" xlinkHref="#eu_d" y="6" />
        <g id="eu_e">
          <use height="100%" width="100%" xlinkHref="#eu_d" x="-6" />
          <use height="100%" width="100%" xlinkHref="#eu_d" transform="rotate(-144 -2.344 -2.11)" />
          <use height="100%" width="100%" xlinkHref="#eu_d" transform="rotate(144 -2.11 -2.344)" />
          <use height="100%" width="100%" xlinkHref="#eu_d" transform="rotate(72 -4.663 -2.076)" />
          <use height="100%" width="100%" xlinkHref="#eu_d" transform="rotate(72 -5.076 .534)" />
        </g>
        <use height="100%" width="100%" xlinkHref="#eu_e" transform="scale(-1 1)" />
      </g>
      <title>EU</title>
    </>
  );
}
