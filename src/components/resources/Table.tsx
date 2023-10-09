import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useState } from "react";
import Connection from "../../lib/Data";

// Specifying type for the Table component
type TableProps = {
  rows: number;
  day: string;
  setRows: any;
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

// Returns the time slots in option tags and formats it
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
type rowProps = {
  id: number;
  day: string;
};

const con: Connection = new Connection();

function GetRows(props: rowProps) {
  let times = getInvervals();
  useLayoutEffect(() => {
    const db_con = async () => {
      try {
        await con.init();
        con.create(props.day);
        con
          .select_with_id(props.day, props.id)
          .then((i) => {
            if (i.length > 0) {
              setTask(i[0].task);
              setTime(i[0].time);
              setStar(i[0].star);
            }
          })
          .catch((e) => {
            console.error(e);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    db_con();
  }, [props.day]);
  const [Time, setTime] = useState("12:00AM - 01:00AM");
  const [Star, setStar] = useState(false);
  const [Task, setTask] = useState("");

  useLayoutEffect(() => {
    const db_con = async () => {
      try {
        await con.init();
        con.create(props.day);
        con.insert_values(props.day, props.id, Time, Task, Star);
        if (Task) con.update_value(props.day, props.id, Time, Task, Star);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    db_con();
  }, [Time, Task, Star]);

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
  useLayoutEffect(() => {
    const db_con = async () => {
      try {
        await con.init();
        con.create(props.day);
        con.count_day(props.day).then((i) => {
          props.setRows(i[0].count || 1);
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    db_con();
  }, [props.day]);

  for (let i = 0; i < props.rows; i++) {
    rows.push(<GetRows id={i + 1} day={props.day} key={i + 1} />);
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
