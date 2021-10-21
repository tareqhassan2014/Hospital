
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginIcon from "./../../images/profile.png";
import { useLocation, useHistory } from "react-router-dom";

const Signup = () => {
  const { signInUsingGoogle, signUpWithEmail } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_URI = location.state?.from || "/home";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    signUpWithEmail(email, password, history, redirect_URI);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="loin-icon">
          <img src={loginIcon} alt="" width="40" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            autoComplete="off"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            className="input-field"
            placeholder="Password"
            autoComplete="off"
            {...register("password", { required: true })}
          />

          <button className="login-btn" type="submit">
            SignUp
          </button>
          <hr className="hr-line" />
        </form>

        <button className="google-login" onClick={() => signInUsingGoogle(history, redirect_URI)}>
          SignUp with Google <i className="fab fa-google"></i>
        </button>

        <p style={{ textAlign: "center" }}>
          have an account ?<Link to="/login"> SignIn</Link>
        </p>

        <Link to="/" className="cross-btn" >
          <i className="fas fa-times-circle"></i>
        </Link>
      </div>
    </div>
  );
};

export default Signup;