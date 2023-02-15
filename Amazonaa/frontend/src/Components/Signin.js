import "../App.css";
import { Form, Button } from "react-bootstrap";
import amazonNavLogo from "../Pics/amazonNavLogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";




function Signin({user,setUser}) {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailUpdate = (event) => {
    setEmail(event.target.value);
  };

  const passwordUpdate = (event) => {
    setPassword(event.target.value);
  };

  const nameUpdate = (event) => {
    setName(event.target.value);
  };
  
  

  function Addusertodb(e) {
    if ( password !== "" && email !== "") {
      e.preventDefault();
      fetch(`http://localhost:4000/adduser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      });
      setUser(name);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
  }

  return (
    <div>
      <nav className="signinNav">
        <ul>
          <Link to={"/"}>
            <li>
              <img src={amazonNavLogo} alt={"amazon"}></img>
            </li>
          </Link>
        </ul>
      </nav>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
          marginLeft: "25%",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={nameUpdate}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={emailUpdate}
              value={email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={passwordUpdate}
            />
            <Form.Text className="text-muted">
              We'll never share your data with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="dark" onClick={Addusertodb}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
