// import {useState} from 'react'
import Tasks from "./resources/Tasks";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const zeroTask = true;
  // const [zeroTask, setzeroTask] = useState(true)
  return (
    <div className="Home">
      <h1>TIME PACER</h1>
      <section>
        <h2>Tasks</h2>
        <div className="tasks">
          {zeroTask ? (
            <div className="daily-text">
              <span id="daily-text">Daily tasks show up here</span>
              <Link to="build">
                <Button className="button">Add Task</Button>
              </Link>
            </div>
          ) : (
            <Tasks />
          )}
        </div>
      </section>
    </div>
  );
}
