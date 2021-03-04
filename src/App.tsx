import React from "react";
import InputField from "./components/InputField";
import Head from "./components/Head";
import About from "./components/About";
import Account from "./components/Account";
import Login from "./components/Login";
import AccountDetails from "./components/AccountDetails";
import "./App.scss";
import "./scss/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Head />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/account" component={Account} />
                    <Route path="/login" component={Login} />
                    <Route path="/account_details" component={AccountDetails} />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <>
            <p style={{ paddingTop: "20px", width: "80%", margin: "auto" }}>
                This is a bot that uses OpenAI's GPT-3 natural language processing model to answer questions as a mechanic.
                <span style={{ color: "red" }}> It's not available to the public as it is currently under review by OpenAI. </span>
                To learn more,{" "}
                <span className="link">
                    <Link to="/about" style={{ textDecoration: "none", color: "rgb(21, 92, 223)" }}>
                        click here.
                    </Link>
                </span>
            </p>
            <InputField />
        </>
    );
}

export default App;
