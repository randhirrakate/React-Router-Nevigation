import {Link} from "react-router-dom"


function Notfound()
{
    return(
        <div>
            <h1>404 Function Not Found</h1>
            <Link to="/">Click Here To Home Page</Link>
        </div>
    );
}

export default Notfound;