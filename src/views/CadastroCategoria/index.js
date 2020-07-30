import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/index";

function CadastroCategoria() {
  const [Categoria, setCategoria] = useState(" ");

  const onChangeHandler = (infosDoEvento) => {
    setCategoria(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
    console.log(Categoria);
  };

  return (
    <Layout>
      <h1>Página CadastroCategoria : {Categoria}</h1>
      <Link to="/">Home</Link>
      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={Categoria}
            onChange={(value) => {
              setCategoria(value.target.value);
            }}
          />
        </label>

        <button>Cadastrar</button>
      </form>
    </Layout>
  );
}

export default CadastroCategoria;
