import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Task = (props) => {
  const [editValue, setEditValue] = React.useState(props.todo);

  function handleSave() {
    props.onUpdate(editValue, props.index);
  }

  function deleteValue() {
    props.onDelete(props.index);
  }
  return (
    <div className="task-part">
      <p className="task">{props.todo}</p>
      <div className="buttons">
        <button className="task-btn" onClick={deleteValue}>
          Delete
        </button>
        <Popup
          trigger={<button className="task-btn">Edit</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <h3>Edit Task</h3>
                <input
                  type="text"
                  name="editInput"
                  onChange={(e) => setEditValue(e.target.value)}
                />
              </div>
              <div className="edit-btns">
                <button onClick={handleSave} className="edit-btn">Save</button>
                <button onClick={() => close()} className="edit-btn">Close</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Task;
