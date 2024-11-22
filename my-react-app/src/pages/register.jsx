import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Login">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
