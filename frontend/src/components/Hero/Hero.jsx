import React, { useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(!showForm);
  };
  const handleCloseClick = () => {
    setShowForm(false);
  };
  return (
    <div className="Hero">
      <div className="left">
        <h1>Task Manager</h1>
        <button className="btn" onClick={handleAddClick}>
          Add
        </button>
        {showForm && (
          <div className="form-container">
            <button className="close-btn" onClick={handleCloseClick}>
              &times;
            </button>
            <form className="task-form">
              <h2>Add Task</h2>
              <label>
                Task Name:
                <input type="text" name="taskName" />
              </label>
              <label>
                Description:
                <textarea name="description"></textarea>
              </label>
              <label>
                Due Date:
                <input type="date" name="dueDate" />
              </label>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="right">
        <Header/>
      </div>
    </div>
  );
};

export default Hero;
