import React from "react";
import { Route } from "react-router";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Layout from "./components/Layout";
import List from "./components/List";

import "./custom.css";

export default function App() {
    return (
        <Layout>
            <Route exact path="/" component={List} />
            <Route path="/add/" component={Add} />
            <Route path="/edit/:id" component={Edit} />
        </Layout>
    );
}

/*
<Route path="/counter" component={Counter} />
<Route path="/fetch-data" component={FetchData} /
*/
