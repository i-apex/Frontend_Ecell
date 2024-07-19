import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/admin/login', {
        username,
        password
      });
      // Handle the response from the server
      console.log(response.data);
      if (response.data.status===200) {
        // Redirect to the admin dashboard or another page
        window.location.href = '/admin/dashboard';
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('There was an error!', error);
      document.getElementById("password_reset").classList.remove("hidden")
      setError('An error occurred while trying to log in');
    }
  };

  return (
    <div className="my-24">
      <div className="row mx-0">
      <h1 className="text-center text-wrap w-80 mx-auto mt-0 mb-24 h-fit md:mt-[110px] text-3xl font-bold">Admin Login</h1>

        <div>
          <form className="needs-validation w-[90%] md:w-1/3 mx-auto" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <input
                name="username"
                type="text"
                className="form-control h-12 rounded-4"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="invalid-feedback">Username is required</div>
            </div>
            <div className="mb-0">
              <input
                name="password"
                type="password"
                className="form-control h-12 rounded-4"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="invalid-feedback">Password is required</div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <a href="/reset" id="password_reset" className="w-fit p-0 text-red-500 underline hidden">Reset-Password/username</a>
            <button type="submit" class="bg-blue-800 text-white mt-10 mb-24  transition-transform duration-300 font-bold w-full justify-between py-2 h-12  px-4 rounded-4" >
                    Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
