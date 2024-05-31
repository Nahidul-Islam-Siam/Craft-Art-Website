import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const [error,setError] = useState('')


    // navigation system
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    
    
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password .value
        const confirmPassword  = e.target.confirmPassword.value
        

if (password !== confirmPassword) {
    setError('Passwords did not match')
    return
}
// if (/(?=.*[a-z])/
// .test(password)) {
//     setError("Must have an Lowercase letter in the password") 
//     return
// }
// if ( /(?=.*[A-Z])/.test(password)
// ) {
//    setError("Must have an Uppercase letter in the password") 
//    return
// }
// if(password.length<6)
// {
// setError ('Password must be six characters')
// }
setError('')
        createUser(email,password)
        .then((result) => {
        if (result.user) {
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister } className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="name here" name="name" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="email" placeholder="photo URL" name="photo" className="input input-bordered" />
              </div>
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
                <input type="text" placeholder="password" name="password" className="input input-bordered" required />
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="confirm-password" name="confirmPassword" className="input input-bordered" required />
                {
                    error && <small className="text-red-800">{error}</small>
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password? </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUP</button>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default SignUp;