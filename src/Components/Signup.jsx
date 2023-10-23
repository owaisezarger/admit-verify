import React from "react";

function Signup() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="w-25">
        <h1 className="h3 mb-3 fw-normal">Please Sign up</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            id="floatingInput"
            placeholder="Full Name"
          />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mb-3"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign up
        </button>
        {/* <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p> */}
      </form>
    </div>
  );
}

export default Signup;
