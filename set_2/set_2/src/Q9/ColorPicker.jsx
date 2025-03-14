/*

Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for
that color, just below each button.

DATA:

const red = '#EE4B2B'
const blue = '#89CFF0'
const green = '#7FFFD4'


*/

import { useState } from "react";

function ColorPicker() {
  const [Color, setColor] = useState("");

  return (
    <div>
      <button onClick={() => setColor("#EE4B2B")}>red</button>
      {Color === "#EE4B2B" && <h2>HEX: {Color}</h2>}

      <button onClick={() => setColor("#89CFF0")}>blue</button>
      {Color === "#89CFF0" && <h2>HEX: {Color}</h2>}

      <button onClick={() => setColor("#7FFFD4")}>green</button>
      {Color === "#7FFFD4" && <h2>HEX: {Color}</h2>}
    </div>
  );
}
export default ColorPicker;
