import { useRef } from "react";

const UseRefDemo = () => {


  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const focusInput = () =>{
    console.log(inputRef.current);
    (inputRef.current as HTMLInputElement).focus();
    (btnRef.current as HTMLButtonElement).style.backgroundColor = "teal";
    
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={focusInput} ref={btnRef} >Focus</button>
    </div>
  )
}

export default UseRefDemo
