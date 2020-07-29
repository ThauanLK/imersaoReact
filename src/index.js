import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/index";
import Layout from "./components/Layout";
import Pagina404 from "./views/"

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
