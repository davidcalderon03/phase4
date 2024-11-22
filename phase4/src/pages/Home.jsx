
import { Outlet, Link } from "react-router-dom";
function Home() {
    return (
      <div className="Home">
        <nav>
        <ul>
          <li><Link to="/employee">Employee</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/van">Van</Link></li>
        </ul>
      </nav>
      <Outlet />

      </div>
    );
  }
  
  export default Home;
  