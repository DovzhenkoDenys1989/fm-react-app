import React from 'react';

export default function WindowSizes () {
  return (
    <div>
      <button
        onClick={() => {
          window.open('https://wikipedia.org');
        }}
      >
        Open wiki
      </button>
      <button
        onClick={() => {
          window.location.assign('https://wikipedia.org');
        }}
      >
        Assign
      </button>
      <button
        onClick={() => {
          window.location.replace('https://wikipedia.org');
        }}
      >
        Replace
      </button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
    </div>
  );
}
