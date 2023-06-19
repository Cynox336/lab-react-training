import React, { useState } from 'react';

export default function SingleColorPicker({ color, intensity, onColorChange }) {
  let bgColor;

  if (color === 'r') {
    bgColor = `rgb(${intensity}, 0, 0)`;
  } else if (color === 'g') {
    bgColor = `rgb(0, ${intensity}, 0)`;
  } else if (color === 'b') {
    bgColor = `rgb(0, 0, ${intensity})`;
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '2px solid black',
          marginRight: '5px',
          backgroundColor: bgColor,
        }}
      >
        Color
      </div>
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <label style={{ textTransform: 'uppercase' }} htmlFor="Name">
          {color}:
        </label>
        <input
          type="number"
          min={0}
          max={255}
          value={intensity}
          onChange={onColorChange}
        />
      </div>
    </div>
  );
}
