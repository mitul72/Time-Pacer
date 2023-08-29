import React from "react";

export default function Table() {
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

  return (
    <table>
      <thead>
        <tr>
          <th>Time Slot</th>
          <th>Task</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{times[0]}</td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>text1.3</td>
        </tr>
        <tr>
          <td>text2.1</td>
          <td>text2.2</td>
          <td>text2.3</td>
        </tr>
        <tr>
          <td>text3.1</td>
          <td>text3.2</td>
          <td>text3.3</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
}
