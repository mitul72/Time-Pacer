// import {useState} from 'react'
import Tasks from "./resources/Tasks";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  const zeroTask = true;
  // const [zeroTask, setzeroTask] = useState(true)
  return (
    <div className="Home">
      <h1 className="text-4xl mt-5 font-bold">TIME PACER</h1>
      <section>
        <h2 className="text-2xl my-10 font-semibold">Tasks</h2>
        <div className="tasks">
          {zeroTask ? (
            <div className="daily-text">
              <span id="daily-text">Daily tasks show up here</span>
              <Link to="build">
                <Button className="rounded-lg button bg-sky-700 w-28 h-10 text-rose-50 text-base hover:bg-sky-600 active:bg-sky-800">
                  Add Task
                </Button>
              </Link>
            </div>
          ) : (
            <Tasks />
          )}
          <Tasks />
        </div>
      </section>
    </div>
  );
}
