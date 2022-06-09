import { useForm } from "react-hook-form";

const UserProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First name:{" "}
        <input type="text" {...register("firstname", { required: true })} />
        {errors.firstname && <span>First name is a required field</span>}
      </label>

      <label>
        Last name:{" "}
        <input type="text" {...register("lastname", { required: true })} />
        {errors.lastname && <span>Last name is a required field</span>}
      </label>

      <label>
        Country:{" "}
        <select {...register("country", { required: true })}>
          <option value="">Choose your country</option>
          <option value="Ukraine">Ukraine</option>
          <option value="USA">USA</option>
          <option value="Poland">Poland</option>
          <option value="Germany">Germany</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <span>Country is a required field</span>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;
