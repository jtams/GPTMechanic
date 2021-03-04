import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../scss/account.scss";

function Account() {
    var history = useHistory();

    useEffect(() => {
        axios
            .get("https://gptmechanic.com/api/check", { withCredentials: true })
            .then((res) => {
                console.log(res.data);

                if (res.data.split("|")[0] === "failed") {
                    history.push("/login");
                } else {
                    history.push("/account_details");
                }
            })
            .catch((err) => {
                console.log("Failed: " + err);
            });
    }, []);

    return (
        <div style={{ margin: "auto", width: "60%", minWidth: "320px", maxWidth: "600px" }}>
            <p id="status"></p>
            <h2 style={{ marginTop: "50px", fontSize: "40px", fontFamily: "Arial", color: "#333" }}>Sign In</h2>
            <form id="accountForm">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
                <button type="button">Sign In</button>
            </form>
        </div>
    );
}

export default Account;
