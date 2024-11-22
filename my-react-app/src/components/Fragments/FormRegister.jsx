import Button from "../Elements/Button";

import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Budi Santoso"
        name="fullname"
      ></InputForm>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="***"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="***"
        name="confirmPassword"
      ></InputForm>
      <Button classname="bg-blue-600 w-full hover:bg-blue-500">Register</Button>
    </form>
  );
};

export default FormRegister;
