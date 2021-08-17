import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./components/dashboard/CryptoTracker";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";


const queryClient = new QueryClient();

const App = () => (
  
    <div>
   



      <Dashboard />
    </div>
  );


export default App;