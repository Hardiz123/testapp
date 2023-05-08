export const Item = ({ name, isDone, toggleIsDone, id, changeText,deleteItem }) => {
    return (
      <>
          <li>
            <input
              onChange={(e) => changeText(e.target.value, id)}
              type="text"
              value={name}
            />
            <button onClick={() => toggleIsDone(id)}>
              {isDone ? "Done" : "Not done"}
            </button>
            <button onClick={() => deleteItem(id)}>
                Delete
            </button>
          </li>
      </>
    );
  };
  