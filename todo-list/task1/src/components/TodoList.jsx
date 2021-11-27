import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import * as tasksActions from '../tasks/tasks.actions';
import { sortedTasksListSelector } from '../tasks/tasks.selectors';

const TodoList = ({ tasks, getTasksList, updateTask, deleteTask, createNewTask }) => {
  useEffect(() => {
    async function fetchData() {
      await getTasksList();
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="title">Todo LIst</h1>
      <div className="todo-list">
        <CreateTaskInput onCreate={createNewTask} />
        <TasksList
          tasks={tasks}
          handleTaskStatusChange={updateTask}
          handleTaskDelete={deleteTask}
        />
      </div>
    </>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createNewTask: tasksActions.createNewTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
