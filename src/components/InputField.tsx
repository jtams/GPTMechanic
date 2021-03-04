import React, { useEffect } from "react";
import "../scss/inputfield.scss";
import axios from "axios";
import qs from "qs";

function InputField() {
    function submitQuestion() {
        var questionField = document.getElementById("questionField") as HTMLInputElement;
        var responseTextNode = document.getElementById("responseText") as HTMLInputElement;

        responseTextNode.innerHTML = "Loading...";

        axios({
            method: "post",
            url: "https://gptmechanic.com/api/ask",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
            data: qs.stringify({
                questions: questionField.value,
            }),
        })
            .then(function (response) {
                responseTextNode.innerHTML = response.data;
            })
            .catch(function (error) {
                console.log(error);
                responseTextNode.innerHTML = "Failed.";
            });
    }

    return (
        <>
            <div id="inputfield">
                <label>Ask GPT Mechanic a question about vehicles</label>
                <input autoComplete="off" id="questionField" type="text"></input>
                <button type="button" onClick={submitQuestion}>
                    Send
                </button>
            </div>
            <div id="response">
                <p id="responseText">Waiting for a question...</p>
            </div>
        </>
    );
}

export default InputField;
