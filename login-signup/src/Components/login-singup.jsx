import { useState } from "react"
import het from "./login-singup.module.css"
function Login_Signup() {

    const [state, setState] = useState(true)
    return (
        <div id="main">
        {state == true ?
                <div className={het.container1}>
                    <h2 class="text-center login-header">Login</h2>
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password"></input>
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                    
                    <div class="text-center mt-2">
                        <p onClick={() => { setState(false) }}>Don't have an account? <a href="#">Sign up</a></p>
                    </div>
                </div>
                :
                <div className={het.container2}>
                    <h2 class="text-center signup-header">Sign Up</h2>
                    <form>
                        <div class="mb-3">
                            <label for="fullName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="fullName" placeholder="Enter your full name"></input>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password"></input>
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password"></input>
                        </div>
                        
                        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
                    </form>
                    <div class="text-center mt-3">
                        <p onClick={() => { setState(true) }}>Already have an account? <a href="#">Login</a></p>
                    </div>
                </div>

        }
        </div>
    )
}

export default Login_Signup;