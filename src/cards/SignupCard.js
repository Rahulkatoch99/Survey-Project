import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const SignupCard = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const HandelChange = (e) => {
    const { id, value } = e.target;

    if (id === "firstname") {
      setFirstname(value);
    }
    if (id === "lastname") {
      setLastname(value);
    }
    if (id === "gender") {
      setGender(value);
    }
    if (id === "dob") {
      setDob(value);
    }

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmpassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="py-5">
      <div className="d-flex justify-content-center">
        <div className="p-4  d-sm-block">
          <img
            src="Registration.jpg"
            alt="Registration"
            className="img-fluid"
          />
        </div>
        <div className="p-4 bg-dark text-white">
          <Form>
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={firstname}
                type="text"
                placeholder="Enter Firstname"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={lastname}
                type="text"
                placeholder="Enter lastname"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option value={gender}>Male</option>
                <option value={gender}>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={dob}
                type="date"
                placeholder="dd-mm-yyyy"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmpassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={confirmpassword}
                type="confirmpassword"
                placeholder="Confirm Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
