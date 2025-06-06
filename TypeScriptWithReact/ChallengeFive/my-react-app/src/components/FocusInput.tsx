import { useRef } from "react"

const FocusInput = () => {

  const input = useRef<HTMLInputElement>(null);
  const handleFocus = () =>{
    input.current!.focus();
  }

  return (
    <div>
      <input type="text" placeholder="Click the Button To Focus" ref={input}/>
      <button onClick={() => handleFocus()}>Focus</button>
    </div>
  )
}

export default FocusInput
