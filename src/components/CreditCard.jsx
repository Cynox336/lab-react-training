import './CreditCard.css';

import VisaCard from '../assets/images/visa.png';
import MasterCard from '../assets/images/MasterCard.png';

export default function CreditCard(props) {
  const lastFourDigits = props.number.slice(-4);

  const hiddenNumber = props.number
    .slice(0, -4)
    .replace(/[0-9]/g, '·')
    .match(/.{1,4}/g)
    .join(' ');

  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        margin: '0 auto',
      }}
      className="container"
    >
      <img src={props.type === 'Visa' ? VisaCard : MasterCard} alt="imagen" />
      <p className="numberCard">{hiddenNumber + ' ' + lastFourDigits}</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          marginLeft: '20px',
        }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <p>
            {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>{props.bank}</p>
        </div>
        <p style={{ marginTop: '0px' }}>{props.owner}</p>
      </div>
    </div>
  );
}
