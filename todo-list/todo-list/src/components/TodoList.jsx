import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TasksList from './TasksList';
import * as tasksActions from '../tasks/tasks.actions';
import { sortedTasksListSelector } from '../tasks/tasks.selectors';

const TodoList = ({ tasks, getTasksList, updateTasksList, deleteTaskFromList, createNewTask }) => {
  useEffect(() => {
    async function fetchData() {
      await getTasksList();
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="title">Todo LIst</h1>
      <TasksList
        tasks={tasks}
        handleTaskStatusChange={updateTasksList}
        handleTaskDelete={deleteTaskFromList}
        createNewTask={createNewTask}
      />
    </>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTasksList: PropTypes.func.isRequired,
  updateTasksList: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  deleteTaskFromList: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTasksList: tasksActions.updateTasksList,
  deleteTaskFromList: tasksActions.deleteTaskFromList,
  createNewTask: tasksActions.createNewTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
