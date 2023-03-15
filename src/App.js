import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState("");
  const [toDo, setTodo] = useState([]);

  const handleDelete = (id) => {
      if(window.confirm("Are you sure to continue")){
        const newTodo = toDo.filter((item, index) => index !== id);
        localStorage.setItem('todo', JSON.stringify(newTodo))
        setTodo(newTodo);
      }
    
  };
  const handleSubmit = () =>{
    setTodo([...toDo, { text: values, status: false }]);
    localStorage.setItem('todo', JSON.stringify([...toDo, { text: values, status: false }]))
    setValues("")
  }
  const inputFocus=useRef()
  useEffect(() => {
    console.log(inputFocus.current)
    inputFocus.current.focus()
    if(localStorage.getItem('todo')){
      setTodo(JSON.parse(localStorage.getItem('todo')))
    }
  
  }, [])


  return (
    <div>
      <div className="todo">

        <div className="list">
          <h1>Todo List </h1>
          <div className="form">
            <input
              value={values}
              ref={inputFocus}
              type="text"
              placeholder="Add a task...."
              onChange={(e) => setValues(e.target.value)}
            />
            <button onClick={handleSubmit} disabled={values.trim()===""}>Add</button>
          </div>
          {toDo.map((item, index) => {
            return (
              <div className="todoItems" key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setTodo(
                      toDo.filter((obj) => {
                        if (obj.id === item.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  value={item.status}
                  className="checkbox"
                  name=""
                  id=""
                />
                <b style={{ color: item.status ? "Green" : "Black" }}>
                  {item.text}
                </b>
                <div className="delete">
                  <i
                    className="ri-delete-bin-6-line"
                    onClick={() => handleDelete(index)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
