import { useState } from "react";

const ToDoList = () => {
  
  const [toDos, setToDos] = useState([
    { id: Date.now(), title: "Work Work Work" },
  ]);

  const [input, setInput] = useState("");

  const handleAdd = ()=> {
      setToDos([...toDos, {id: Date.now(), title: input}]);
      setInput("");
  }

  const handleDelete = (elementId: number) => {
    setToDos(toDos.filter(({id}) => id !== elementId));
  }

  const handleUpdate = (elementId: number)=> {
    if (input.trim() === "") {
      alert("Input must have a value");
    }

    setToDos(toDos.map((element) => elementId === element.id ? {id: elementId, title: input} : element));
    setInput("");
  }

  const handleEnter = <T extends HTMLElement>(event: React.KeyboardEvent<T>) =>{
      if (event.key === "Enter"){
        handleAdd();
      }
  }

  return (

    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

      <h1>To do List</h1>
      <div>
        {toDos.map(({ id, title }, index) => (
          <section key={id}>
            <ol>
              <h1>
                <h3 style={{display: "inline"}}>{index + 1}. {title}</h3>
                {"   "}
                <button onClick={()=> handleDelete(id)}>Delete</button>
                {"   "}
                <button onClick={()=> handleUpdate(id)}>Update</button>
              </h1>
            </ol>
          </section>
        ))}
      </div>


      <div>
        <input onKeyDown={handleEnter} placeholder="More Effort I'm The One" value={input} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> setInput(event.currentTarget.value)} type="text" />
        <button onClick={()=> handleAdd()}>Add</button>
      </div>

    </div>
  );
};

export default ToDoList;
