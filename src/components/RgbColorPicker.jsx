import SingleColorPicker from './SingleColorPicker';
import React, { useState } from 'react';

export default function RgbColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(150);
  const [blue, setBlue] = useState(150);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '5px',
      }}
    >
      <SingleColorPicker
        color="r"
        intensity={red}
        onColorChange={(e) => setRed(e.target.value)}
      />
      <SingleColorPicker
        color="g"
        intensity={green}
        onColorChange={(e) => setGreen(e.target.value)}
      />
      <SingleColorPicker
        color="b"
        intensity={blue}
        onColorChange={(e) => setBlue(e.target.value)}
      />
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '2px solid black',
          marginRight: '5px',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      >
        Color Final
      </div>
      {`rgb(${red}, ${green}, ${blue})`}
    </div>
  );
}
