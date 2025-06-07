import { useForm, type SubmitHandler } from "react-hook-form";
import "./SimpleForm.css";

type FormType = {
  name: string;
  email: string;
  password: string;
};

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <label htmlFor="name">name</label>
        {/* ... register to tell useFrom react take care of this input */}
        <input
          type="text"
          id="name"
          placeholder="name"
          {...register("name", { required: "This Field is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading ..." : "Submit"}</button>
      </div>
    </form>
  );
};

export default SimpleForm;
