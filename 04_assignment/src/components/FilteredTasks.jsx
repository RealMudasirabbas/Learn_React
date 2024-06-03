import React from 'react'

function FilteredTasks() {
  const tasks = [
      { id: 1, title: "Write report", done: true },
      { id: 2, title: "Study for exam", done: false },
      { id: 3, title: "Do laundry", done: true },
      { id: 4, title: "Buy groceries", done: false },
      { id: 5, title: "Exercise", done: false },
  ];

const filteredTasks = tasks.filter(task => !task.done)

const mappedTasks = filteredTasks.map((task) => (
    <>
        <li key={`${task.title}-${task.id}`}>
            Title of the Task: <strong>{task.title}</strong>
        </li>
        <li key={`${task.title}-${task.id}`}>
            Status of the Task:{" "}
            <strong>{task.done ? "Completed" : "Incompleted"}</strong>
        </li>
        <br />
    </>
));


  return (
    <div>
      <h2>Incomplete Tasks</h2>
      <ul>
        {mappedTasks}
      </ul>
    </div>
  )
}

export default FilteredTasks