import { useRef, useState, type FormEvent } from "react";

type submittedDataType = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<submittedDataType>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    })

  }

  return (

    <form onSubmit={handleSubmit}>
      
      <input type="text" placeholder="Enter Your Name" ref={name}/>
      <input type="email" placeholder="Enter Your Email" ref={email}/>
      <input type="password" placeholder="Enter Your Password" ref={password}/>
      <button type="submit">Submit</button>

      <section>
        <h1>Submitted Data</h1>
        <h2>Name: {submittedData.name}</h2>
        <h2>Email: {submittedData.email}</h2>
        <h2>Password: {submittedData.password}</h2>
      </section>

    </form>

  );
};

export default Form;
