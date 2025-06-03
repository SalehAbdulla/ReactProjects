import { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
  const inputReference = useRef<HTMLInputElement>(null);
  const buttonReference = useRef<HTMLButtonElement>(null);
  const divReference = useRef<HTMLDivElement>(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(inputReference.current);

  const handleFocus = () => {
    if (isDarkMode) {
      (inputReference.current as HTMLInputElement).focus();
      (buttonReference.current as HTMLButtonElement).style.backgroundColor =
        "black";
      (buttonReference.current as HTMLButtonElement).style.color = "white";
      (divReference.current as HTMLDivElement).style.backgroundColor = "black";
    } else {
      (inputReference.current as HTMLInputElement).focus();
      (buttonReference.current as HTMLButtonElement).style.backgroundColor =
        "white";
      (buttonReference.current as HTMLButtonElement).style.color = "black";
      (divReference.current as HTMLDivElement).style.backgroundColor = "white";
    }
  };

  useEffect(() => {
    handleFocus();
  }, [isDarkMode]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={divReference}
    >
      <input type="text" ref={inputReference} />
      <button onClick={() => setIsDarkMode(!isDarkMode)} ref={buttonReference}>
        {isDarkMode ? "WhitekMode" : "DarkMode"}
      </button>
    </div>
  );
};

export default UseRefDemo;
