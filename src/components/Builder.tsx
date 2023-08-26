import Dropdown from "./resources/Dropdown";
import Table from "./resources/Table";

export default function Builder() {
  return (
    <div className="Builder">
      <h1>SCHEDULE</h1>
      <h2>Select Day</h2>
      <Dropdown />
      <Table />
    </div>
  );
}
