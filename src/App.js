import "./App.css";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Pages/Doctors/Doctors";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import Signup from "./Pages/Signup/Signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/service/:id" component={ServiceDetail} />
          <PrivateRoute path="/store">
            <Store />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
