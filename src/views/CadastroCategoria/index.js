import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/index";

function CadastroCategoria() {
  return (
    <Layout>
      <h1>Página CadastroCategoria</h1>
      <Link to="/">Home</Link>
      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>
    </Layout>
  );
}

export default CadastroCategoria;
