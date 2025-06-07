import { useState } from "react";

type UserType = {
  name: string;
  age: string;
  email: string;
};

const UserProfile = () => {
  const [profiles, setProfiles] = useState<UserType[]>([]);
  const [nameInput, setNameInput] = useState<string>("");
  const [ageInput, setAgeInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");

  const handleSubmit = () => {
    if (
      ageInput.trim() === "" ||
      emailInput.trim() === "" ||
      nameInput.trim() === ""
    ) {
      alert("All Feilds must have a value");
      return;
    }
    setProfiles((profiles) => [
      ...profiles,
      { name: nameInput, age: ageInput, email: emailInput },
    ]);
    setNameInput("");
    setAgeInput("");
    setEmailInput("");
  };
  const handleKeyDown = <T extends HTMLElement>(
    event: React.KeyboardEvent<T>
  ) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <h2>User Profile</h2>

      {profiles.map((profile, index) => (
        <section key={index}>
          <ul>
            <h2>{index + 1}. Profile</h2>
            <li>{profile.name}</li>
            <li>{profile.age}</li>
            <li>{profile.email}</li>
          </ul>
        </section>
      ))}

      <section className="flex flex-col">
        <input
          onKeyDown={handleKeyDown}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNameInput(e.currentTarget.value)
          }
          type="text"
          placeholder="Enter your name"
          value={nameInput}
        />
        <input
          onKeyDown={handleKeyDown}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAgeInput(event.currentTarget.value)
          }
          type="text"
          placeholder="Enter your age"
          value={ageInput}
        />
        <input
          onKeyDown={handleKeyDown}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmailInput(event.currentTarget.value)
          }
          type="text"
          placeholder="Enter your email"
          value={emailInput}
        />
      </section>

      <button onClick={handleSubmit}>Add a new Profile</button>
    </div>
  );
};

export default UserProfile;
