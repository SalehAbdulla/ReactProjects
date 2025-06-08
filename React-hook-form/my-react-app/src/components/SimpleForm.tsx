import { useForm, type SubmitHandler } from "react-hook-form";
import "./SimpleForm.css";

type DataFromType = {
  name: string;
  email: string;
  password: string;
};

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DataFromType>();

  const onSubmit: SubmitHandler<DataFromType> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="Please Enter Your name"
            id="name"
            {...register("name", { required: "Name Field is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Please Enter Your email"
            {...register("email", {
              required: "Email Field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}  
        
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Enter Your Password" {...register("password", {required: "Password Field is required",minLength: {value: 8, message: "password must be at least 8 characters"}})} />
          {errors.password && <p style={{color: "red"}} >{errors.password.message}</p>}
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading ..." : "Submit"}</button>
        </div>
      </form>
    </section>
  );
};

export default SimpleForm;
