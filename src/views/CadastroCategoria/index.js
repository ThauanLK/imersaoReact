import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/index";
import FormField from "./components/FormField/index";

function CadastroCategoria() {
  const defaultCategoryValues = {
    name: "Teste Nome",
    description: "Teste Descrição",
    color: "#333333",
  };

  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(defaultCategoryValues);

  function onChangeHandler(eventName) {
    setValue(eventName.target.getAttribute("name"), eventName.target.value);
  }

  function setValue(key, value) {
    setCategoryValue({ ...value, [key]: value });
  }

  return (
    <Layout>
      <h1>Página CadastroCategoria </h1>
      <p>Nome {categoryValue.name}</p>
      <p>Descrição {categoryValue.description}</p>
      <p>Cor {categoryValue.color}</p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategories([...categories, categoryValue]);
          setCategoryValue(defaultCategoryValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={categoryValue.name}
          onChange={onChangeHandler}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={categoryValue.description}
          onChange={onChangeHandler}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoryValue.color}
          onChange={onChangeHandler}
        />
        <button>Cadastrar</button>
        <ul>
          {categories.map((categories, index) => {
            return <li key={`${categories}${index}`}>{categories.name}</li>;
          })}
        </ul>
      </form>
    </Layout>
  );
}

export default CadastroCategoria;
