import { useState, useRef } from "react";
import "./AvoidState.css";

const AvoidState = () => {
  const [usernameInput, setUserNameInput] = useState("");
  //  A prefer usage to send user info to the Backend without rerendering
  const hackPass = useRef<HTMLInputElement>(null);

  return (
    <div className="main-user">
      <div className="user-container">
        <div className="user-contaienr">
          <h5>Username</h5>
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserNameInput(event.target.value)
            }
            value={usernameInput}
            placeholder="username"
          />
        </div>

        <div className="user-contaienr">
          <h5>Password</h5>
          <input ref={hackPass} type="password" placeholder="Password" />
        </div>
          
        <div className="login-btn-div">
          <button onClick={()=> console.log("This is a crime, Your password: ", hackPass.current?.value)} className="login-btn">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default AvoidState;
