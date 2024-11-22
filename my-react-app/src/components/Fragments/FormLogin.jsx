import Button from "../Elements/Button";

import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-600 w-full hover:bg-blue-500">Login</Button>
    </form>
  );
};

export default FormLogin;
