import SignupForm from "../components/form/SignupForm";
import bg from "../assets/images/bg.png";

const Signup = () => {
  return (
    <div className="auth display-flex align-items-c">
      <img src={bg} alt="" />
      <SignupForm />
    </div>
  );
};

export default Signup;
