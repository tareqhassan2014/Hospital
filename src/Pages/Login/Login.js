import "./Login.css";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import loginIcon from "./../../images/profile.png";
import { Link, useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_URI = location.state?.from || "/home";

  const {
    signInUsingGoogle,
    signInWithEmail,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    signInWithEmail(email, password, history, redirect_URI);
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
            defaultValue="testadmin@gmail.com"
            autoComplete="off"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            className="input-field"
            placeholder="Password"
            defaultValue="testadmin"
            autoComplete="off"
            {...register("password", { required: true })}
          />

          <button className="login-btn" type="submit">
            Login
          </button>
          <hr className="hr-line" />
        </form>

        <button className="google-login" onClick={() => signInUsingGoogle(history, redirect_URI)}>
          Login with Google <i className="fab fa-google"></i>
        </button>

        <p style={{ textAlign: "center" }}>
          New here ?<Link to="/signup"> SignUp</Link>
        </p>

        <Link to="/" className="cross-btn">
          <i className="fas fa-times-circle"></i>
        </Link>
      </div>
    </div>
  );
};

export default Login;
