import profiles from "../data/berlin.json";
import styles from "./Facebook.module.css";

export default function Facebook() {
  const listAllCountries = profiles.map((profile) => profile.country);
  console.log(listAllCountries);

  const listCountries = listAllCountries.filter((item, index) => {
    return listAllCountries.indexOf(item) === index;
  });

  console.log(listCountries);

  const buttons = listCountries.map((country) => <button>{country}</button>);

  const listItems = profiles.map((profile) => (
    <>
      <div>
        <li className={styles.container}>
          <img
            className={styles.imagen}
            src={profile.img}
            alt={profile.firstName}
          />
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>First Name:</span>{" "}
              {profile.firstName}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Last Name:</span>{" "}
              {profile.lastName}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Country</span>{" "}
              {profile.country}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Type:</span>{" "}
              {profile.isStudent ? "Student" : "Teacher"}
            </p>
          </div>
        </li>
      </div>
    </>
  ));
  return (
    <div>
      {buttons}
      <ul>{listItems}</ul>
    </div>
  );
}
