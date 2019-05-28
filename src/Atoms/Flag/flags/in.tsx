import React from 'react';

export default function FlagIn() {
  return (
    <>
      <g transform="scale(2.84)">
        <path fill="#f93" d="M0 0h225v150H0z" />
        <path fill="#fff" d="M0 50h225v50H0z" />
        <path fill="#128807" d="M0 100h225v50H0z" />
        <g transform="translate(113 75)">
          <circle r="20" fill="#008" />
          <circle r="18" fill="#fff" />
          <circle r="4" fill="#008" />
          <g id="d">
            <g id="c">
              <g id="b">
                <g id="a" fill="#008">
                  <circle r="1" transform="rotate(8 -9 133)" />
                  <path d="M0 18L1 7 0 2l-1 5 1 11z" />
                </g>
                <use xlinkHref="#a" transform="rotate(15)" />
              </g>
              <use xlinkHref="#b" transform="rotate(30)" />
            </g>
            <use xlinkHref="#c" transform="rotate(60)" />
          </g>
          <use xlinkHref="#d" transform="rotate(120)" />
          <use xlinkHref="#d" transform="rotate(-120)" />
        </g>
      </g>

      <title>India</title>
    </>
  );
}
