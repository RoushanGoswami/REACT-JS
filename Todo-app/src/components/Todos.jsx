import { useState } from "react";
const Todos = () => {
  const [todos, setTodos] = useState([{ title: "Gym 5Am" }]);
  const [title, setTitle] = useState("");
  const [hide, setHide] = useState(true);
  const [index, setIndex] = useState(0);
  //local Storage
  const setIntoLS = () => {
    localStorage.setItem("Todo", JSON.stringify(data));
  };
  // hey
  const getFromLS = () => {};
  return (
    <>
      <section className="container d-flex justify-content-center align-items-center flex-column">
        <h2>Your Todo Manager</h2>

        <div className="d-flex col-6">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="text"
            className="form-control me-2"
            placeholder="Gym , work , reading ..."
          ></input>

          <button
            onClick={() => {
              setTodos([...todos, { title }]);
            }}
            type="button"
            className={"btn btn-primary " + (title === "" ? "disabled" : "")}
          >
            Add
          </button>

          {/* edit btn */}
          <button
            onClick={() => {
              const temp = [...todos];
              temp[index].title = title;
              setTodos(temp);
              setHide(true);
              setTitle("");
            }}
            type="button"
            className={"btn btn-warning mx-1 " + (hide ? "d-none" : "")}
          >
            Update
          </button>
        </div>
      </section>
      <section className="container d-flex justify-content-center align-items-center flex-column ">
        <div className="">
          {todos.map((todo, i) => (
            <div key={i} className="">
              <p className="rounded shadow p-2 fs-5 mt-3">
                {todo.title}
                <i
                  onClick={() => {
                    setTodos(todos.filter((t, ti) => i != ti)); // here i is not equal to ti means filter will return a array
                    // where condition is true

                    // const temp = [...todos];
                    // temp.splice(i, 1);
                    // setTodos(temp);
                  }}
                  className="ri-close-circle-fill fs-4 ms-3 text-danger"
                ></i>
                <i
                  onClick={() => {
                    setTitle(todos[i].title);
                    setHide(false);
                    setIndex(i); // jispe click kiya uska index chala jayega Index(state)
                  }}
                  className="ri-edit-circle-fill fs-4 ms-3 text-success"
                ></i>
              </p>
                    </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Todos;
// hello
