import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";
import axios from "axios";

function Head() {
    useEffect(() => {
        axios
            .get("https://gptmechanic.com/api/check", { withCredentials: true })
            .then((res) => {
                console.log(res.data);

                if (res.data.split("|")[0] === "success") {
                    var accountButton = document.getElementById("accountButton") as HTMLElement;
                    accountButton.innerHTML = res.data.split("|")[1];
                }
            })
            .catch((err) => {
                console.log("Failed: " + err);
            });
    }, []);

    return (
        <header style={{ backgroundColor: "rgb(49, 67, 117)", color: "white", height: "100px", width: "100%" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <h1 style={{ paddingTop: "12px" }}>GPT-3 Mechanic</h1>
                <h3>A virtual mechanic powered by OpenAI's GPT-3</h3>
            </Link>
            <Link to="/account" style={{ textDecoration: "none", color: "white" }}>
                <p id="accountButton">Account</p>
            </Link>
        </header>
    );
}

export default Head;
