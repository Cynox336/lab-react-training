import './Greetings.css';

export default function BoxColor(props) {
  let colorRGB = `rgb(${props.r}, ${props.g}, ${props.b})`;

  function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(red, green, blue) {
    return (
      '#' + ColorToHex(props.r) + ColorToHex(props.g) + ColorToHex(props.b)
    );
  }

  const hexColor = ConvertRGBtoHex(props.r, props.g, props.b);

  return (
    <div
      style={{
        backgroundColor: colorRGB,
        display: 'flex',
        flexDirection: 'column',
        color: `${hexColor === '#ff0000' ? 'white' : 'black'}`,
      }}
      className="textBoxColor"
    >
      <p style={{ margin: '0' }}>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p style={{ margin: '0' }}>{hexColor}</p>
    </div>
  );
}
