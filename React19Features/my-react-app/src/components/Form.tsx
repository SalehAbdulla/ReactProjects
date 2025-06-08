import React from 'react';

const Form = () => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <br />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
