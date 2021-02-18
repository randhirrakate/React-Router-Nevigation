import {Link} from "react-router-dom"


function Login()
{
  return(
    <div>
      <h1>Welcome TO Login</h1>

      <Link to="register">Go To Register</Link>
    </div>
  );
}

export default Login;