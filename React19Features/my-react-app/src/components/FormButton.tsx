import { useFormStatus } from "react-dom";

const FormButton = () => {
  const {pending} = useFormStatus();
  console.log(pending);

  return <button type="submit" disabled={pending}>
    {!pending ? "Submit" : "loading ..."}
  </button>;
};

export default FormButton;
