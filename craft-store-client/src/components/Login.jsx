import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import SocialLogin from "./SocialLogin";
// import login from './../assets/login.jpg'

const Login = () => {
  const {loginUser} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'




  const handleLogin = e =>{
    e.preventDefault()
   
    const email = e.target.email.value
    const password = e.target.password .value
   
    console.log(email,password);
    loginUser(email,password)
    .then((result) => {
     if(result.user){
      navigate(from)
      
     }
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">


          <div className="text-center">
      <h2 className="text-4xl font-extrabold text-purple-600 mb-2">Please login here</h2>
      <p className="text-lg text-gray-700 mb-6">Enter your credentials below to access your account.</p>
      <div className="flex items-center justify-center">
        <span className="text-5xl font-extrabold text-red-500">S</span>
        <span className="text-5xl font-extrabold text-blue-500">A</span>
        <span className="text-5xl font-extrabold text-green-500">M</span>
        <span className="text-5xl text-yellow-500">&</span>
        <span className="text-5xl font-extrabold text-purple-500">CRAFT</span>
      </div>
    </div>
            
{/* <img src={login} alt="" /> */}
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link to='/signup' href="#" className="label-text-alt link link-hover">New here </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;