import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Doloremque animi nam rem mollitia a voluptatum architecto accusantium, in molestias libero tempora. 
      </p>
        <p>Ipsum, quas! Adipisci, cupiditate alias impedit quo expedita ratione.</p>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;