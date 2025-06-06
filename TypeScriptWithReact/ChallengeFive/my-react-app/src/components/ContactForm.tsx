import { useRef, useState } from "react";

type UserType = {
  name: string;
  email: string;
  phone: number;
};

const ContactForm = () => {
  const [user, setUser] = useState<UserType>({ name: "", email: "", phone: 0 });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const userVal = {
      name:
        name.current!.value.trim() === "" ? name.current!.value : "NoneName",
      email:
        email.current!.value.trim() === "" ? email.current!.value : "NoneEmail",
      phone: Number(
        phone.current!.value.trim() == "" ? name.current!.value : 0
      ),
    };
    setUser(userVal);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="phone" placeholder="Enter your phone number" ref={phone} />
      <button type="submit">Submit</button>

      <section>
        <h1>Contect details</h1>
        <h2>{user!.name}</h2>
        <h2>{user!.email}</h2>
        <h2>{user!.phone == 0 ? "" : user!.phone}</h2>
      </section>
    </form>
  );
};

export default ContactForm;
