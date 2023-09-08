import Table from "react-bootstrap/Table";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
type DropDownProps = {
  day: string;
  setDay: any;
};
export default function Dropdown(props: DropDownProps) {
  const d = new Date();
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const displayDays = [];

  // Add days to display days array
  for (let key in days) {
    // Set current day as selected
    if (key === d.getDay().toString()) {
      useEffect(() => {
        props.setDay(days[parseInt(key) as keyof typeof days]);
      }, []);

      displayDays.push(
        <option selected value={key}>
          {days[parseInt(key) as keyof typeof days]}
        </option>
      );
    } else
      displayDays.push(
        <option value={key}>{days[parseInt(key) as keyof typeof days]}</option>
      );
  }
  return (
    <div className="select-container">
      <select
        className="dropdown"
        onChange={(e) =>
          props.setDay(days[parseInt(e.target.value) as keyof typeof days])
        }
      >
        {displayDays}
      </select>
      <FontAwesomeIcon className="down-icon" icon={faCaretDown} />
    </div>
  );
}
