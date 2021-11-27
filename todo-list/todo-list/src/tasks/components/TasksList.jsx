import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete, sortedList, createNewTask }) => {
  return (
    <div className="todo-list">
      <CreateTaskInput onCreate={createNewTask} />
      <ul className="list">
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            onChange={handleTaskStatusChange}
            onDelete={handleTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
};

export default TasksList;
