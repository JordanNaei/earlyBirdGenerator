import React, { Component } from "react";
import "./signupstyle.css";

class SignForm extends Component {

    render() {
        return (
            <div id="login-box">
                <div class="left">
                    <h1>Sign up</h1>

                    <input type="text" name="username" placeholder="Username" autoComplete = "off" />
                    <input type="text" name="email" placeholder="E-mail" autoComplete = "off"/>
                    <input type="password" name="password" placeholder="Password" autoComplete = "off"  />
                    <input type="password" name="password2" placeholder="Retype password" autoComplete = "off" />

                    <input type="submit" name="signup_submit" value="Sign me up" />
                </div>

                <div class="right">
                    <span class="loginwith">Sign in with<br />social network</span>

                    <button class="social-signin facebook">Log in with facebook</button>
                    <button class="social-signin twitter">Log in with Twitter</button>
                    <button class="social-signin google">Log in with Google+</button>
                </div>
                <div class="or">OR</div>
            </div>
        );
    }
}

export default SignForm;
