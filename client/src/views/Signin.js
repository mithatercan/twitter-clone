import SigninForm from "../components/form/SigninForm";
import bg from "../assets/images/bg.png";
const Signin = () => {
  return (
    <div className="auth display-flex align-items-c">
      <img src={bg} alt="" />
      <SigninForm />
    </div>
  );
};

export default Signin;
