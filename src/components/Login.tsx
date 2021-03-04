import React from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import "../scss/account.scss";

function Login() {
    var history = useHistory();
    function login() {
        var emailNode = document.getElementById("email") as HTMLInputElement;
        var passwordNode = document.getElementById("password") as HTMLInputElement;
        var email = emailNode.value;
        var password = passwordNode.value;

        axios({
            method: "post",
            withCredentials: true,
            url: "https://gptmechanic.com/api/login",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: qs.stringify({
                email: email,
                password: password,
            }),
        })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log(response);
                if (response.data.split("|")[0] === "success") {
                    var accountButton = document.getElementById("accountButton") as HTMLElement;
                    accountButton.innerHTML = email;
                    history.push("/");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        // var email = document.getElementById("email").value as HTMLElement;
    }

    return (
        <div style={{ margin: "auto", width: "60%", minWidth: "320px", maxWidth: "600px" }}>
            <p id="status"></p>
            <h2 style={{ marginTop: "50px", fontSize: "40px", fontFamily: "Arial", color: "#333" }}>Sign In</h2>
            <form id="accountForm">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
                <button type="button" onClick={login}>
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;
