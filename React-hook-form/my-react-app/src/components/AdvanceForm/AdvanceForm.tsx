import "./AdvanceForm.css";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const AdvanceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          {...register("firstName", {
            required: "First Name Field is Required",
          })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}

        <label htmlFor="lasttName">last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          {...register("lastName", {
            required: "Last Name Field is Required",
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          placeholder="City"
          {...register("city", { required: "City Field is required" })}
        />
        {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}

        <label htmlFor="state">State: </label>
        <input
          type="text"
          id="state"
          placeholder="State"
          {...register("state", { required: "State field is required" })}
        />
        {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}

        <label htmlFor="zip">Zip: </label>
        <input
          type="text"
          id="zip"
          placeholder="Zip"
          {...register("zip", { required: "Zip field is required" })}
        />
        {errors.zip && <p style={{ color: "red" }}>{errors.zip.message}</p>}

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          id="country"
          placeholder="Country"
          {...register("country", { required: "Country Field is required" })}
        />
        {errors.country && (
          <p style={{ color: "red" }}>{errors.country.message}</p>
        )}

        <label htmlFor="completeLocation">CompleteLocation: </label>
        <textarea
          id="completeLocation"
          {...register("completeLocation", {
            required: "CompleteLocation Field is Required",
          })}
        />
        {errors.completeLocation && (
          <p style={{ color: "red" }}>{errors.completeLocation.message}</p>
        )}

        <button disabled={isSubmitting}>
          {isSubmitting ? "Loading ..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AdvanceForm;
