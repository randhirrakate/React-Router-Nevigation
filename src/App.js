import {Link} from "react-router-dom"


function App()
{
  return(
    <div>
      <h1>Welcome Page : App.js</h1>
      <Link to="/login">Clic Here For Login</Link>
    </div>
  );
}

export default App;