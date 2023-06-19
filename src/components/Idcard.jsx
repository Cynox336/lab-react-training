import './Idcard.css';

export default function Idcard(props) {
  const day = props.birth.toLocaleString('en-us', { weekday: 'short' });
  const month = props.birth.toLocaleString('en-us', { month: 'short' });
  const dayOfBirth = props.birth.getDate();
  const yearOfBirth = props.birth.getFullYear();

  const fullDate = `${day} ${month} ${dayOfBirth} ${yearOfBirth}`;

  return (
    <>
      <div className="boxIdcard">
        <img src={props.picture} alt="Imagen persona" />
        <div className="description">
          <p>
            <span style={{ fontWeight: 'bold' }}>First Name:</span>
            {props.firstName}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Last Name:</span>
            {props.lastName}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Gender:</span> {props.gender}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Height:</span>{' '}
            {props.height / 100 + 'm'}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Birth: </span> {fullDate}
          </p>
        </div>
      </div>
    </>
  );
}
