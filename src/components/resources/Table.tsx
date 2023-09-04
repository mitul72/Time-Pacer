import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type TableProps = {
  rows: number;
};

function getTimeSlots() {
  let x = 60; //minutes interval
  let times = []; // time array
  let tt = 0; // start time
  let ap = ["AM", "PM"]; // AM-PM

  //loop to increment the time and push results in array
  for (let i = 0; tt < 24 * 60; i++) {
    let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    let mm = tt % 60; // getting minutes of the hour in 0-55 format
    let hh12 = hh % 12;
    if (hh12 === 0) {
      hh12 = 12;
    }
    times[i] =
      ("0" + hh12).slice(-2) +
      ":" +
      ("0" + mm).slice(-2) +
      ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
  }
  return times;
}
function getInvervals() {
  let times = getTimeSlots();
  let slots = [];
  for (let i = 0; i < times.length; i++) {
    if (i == times.length - 1) {
      slots[i] = (
        <option>
          {times[i]} - {times[0]}
        </option>
      );
      return slots;
    }
    slots[i] = (
      <option>
        {times[i]} - {times[i + 1]}
      </option>
    );
  }
}
function GetRows() {
  const [Star, setStar] = useState(false);
  let times = getInvervals();
  return (
    <tr>
      <td>
        <div className="select-container">
          <select className="dropdown">{times}</select>
          <FontAwesomeIcon className="down-icon" icon={faCaretDown} />
        </div>
      </td>
      <td>
        <input type="text" name="" id="task" />
      </td>
      <td className="star priority">
        {Star ? (
          <AiFillStar
            onClick={() => {
              setStar(false);
            }}
            size={25}
          />
        ) : (
          <AiOutlineStar
            onClick={() => {
              setStar(true);
            }}
            size={25}
          />
        )}
      </td>
    </tr>
  );
}

export default function Table(props: TableProps) {
  let rows = [];
  for (let i = 0; i < props.rows; i++) {
    rows.push(<GetRows />);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Time Slot</th>
          <th>Task</th>
          <th className="priority">Priority</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
