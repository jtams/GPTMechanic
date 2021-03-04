import React, { useEffect } from "react";
import axios from "axios";

function AccountDetails() {
    const [email, setEmail] = React.useState("loading...");
    const [questions, setQuestions] = React.useState("loading...");

    useEffect(() => {
        axios
            .get("https://gptmechanic.com/api/get_account_details", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                var results = res.data.split("|");
                setEmail(results[0]);
                setQuestions(results[1]);
            })
            .catch((err) => {
                console.log("Failed: " + err);
            });
    }, []);

    return (
        <div>
            <p>Account: {email}</p>
            <p>Remaining Questions: {questions}</p>
        </div>
    );
}

export default AccountDetails;
