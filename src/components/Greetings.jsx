import "./Greetings.css";

export default function Greetings({ lang, children }) {
  let saludo;

  if (lang === 'de') {
    saludo = 'Hallo ';
  } else if (lang === 'fr') {
    saludo = 'Bonjour ';
  } else if (lang === 'es') {
    saludo = 'Hola ';
  } else if (lang === 'en') {
    saludo = 'Hello ';
  }

  return (
    <div className="boxGreetings">
      <p>
        {saludo}
        {children}
      </p>
    </div>
  );
}
