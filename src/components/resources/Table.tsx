import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { key } from "localforage";

type TableProps = {
  rows: number;
  day: string;
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
let passwords = localStorage.getItem("passwords");
type rowProps = {
  id: number;
};
function GetRows(props: rowProps) {
  const [Time, setTime] = useState("12:00AM - 01:00AM");
  const [Star, setStar] = useState(false);
  const [Task, setTask] = useState("");
  let times = getInvervals();
  useEffect(() => {
    if (passwords == null) {
      let json = [];
      json.push({ time: Time, task: Task, star: Star, key: props.id });
      localStorage.setItem("passwords", JSON.stringify(json));
    } else {
      let json = JSON.parse(localStorage.getItem("passwords"));
      json.push({ time: Time, task: Task, star: Star, key: props.id });
      localStorage.setItem("passwords", JSON.stringify(json));
    }
  }, [Time, Task]);

  return (
    <tr>
      <td>
        <div className="select-container">
          <select
            className="dropdown"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
          >
            {times}
          </select>
          <FontAwesomeIcon className="down-icon" icon={faCaretDown} />
        </div>
      </td>
      <td>
        <input
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          name=""
          id="task"
        />
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
    rows.push(<GetRows id={i + 1} key={i + 1} />);
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
