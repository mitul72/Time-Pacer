import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./resources/Dropdown";
import Table from "./resources/Table";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Builder() {
  const [RemoveLast, setRemoveLast] = useState(false);
  const [Count, setCount] = useState(1);
  const [Day, setDay] = useState("");
  return (
    <div className="Builder">
      <h1>SCHEDULE</h1>
      <h2>Select Day</h2>
      <div className="schedule-button add-row">
        <Dropdown day={Day} setDay={setDay} />
        <div className="buttons">
          <button
            onClick={() => {
              setCount(Count + 1);
            }}
            className="button"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => {
              if (Count > 1) {
                setCount(Count - 1);
                setRemoveLast(true);
              }
            }}
            className="button minus"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
      <Table
        rows={Count}
        day={Day}
        setRemoveLast={setRemoveLast}
        removeLast={RemoveLast}
      />
    </div>
  );
}
