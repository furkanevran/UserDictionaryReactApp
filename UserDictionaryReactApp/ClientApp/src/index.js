import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import App from "./App";

const queryClient = new QueryClient();
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,
    rootElement
);

registerServiceWorker();
