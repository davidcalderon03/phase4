
import { Outlet, Link } from "react-router-dom";
function Home() {
    return (
      <div className="Home">
        <nav>
        <ul>
          <li><Link to="/employee">Employee</Link></li>
          <li><Link to="/driver">Driver</Link></li>
          <li><Link to="/business_owner">Business Owner</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/worker">Worker</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/van">Van</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/delivery_service">Delivery Service</Link></li>
          <li><Link to="/contain">Contain</Link></li>
          <li><Link to="/work_for">Work For</Link></li>
          <li><Link to="/fund">Fund</Link></li>

          <li><Link to="/employee_view">Employee View</Link></li>
          <li><Link to="/location_view">Location View</Link></li>
          <li><Link to="/driver_view">Driver View</Link></li>
          <li><Link to="/owner_view">Owner View</Link></li>
          <li><Link to="/product_view">Product View</Link></li>
          <li><Link to="/service_view">Service View</Link></li>
        </ul>
      </nav>
      <Outlet />

      </div>
    );
  }
  
  export default Home;
  