import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Master from "./components/Master/Master";
import Chat from "./components/Chats/Chat";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Master /> },
    { path: "/chat", element: <Chat /> },
  ]);

  return routes;
};

export default App;
