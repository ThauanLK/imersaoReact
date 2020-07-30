import React, { useState } from "react";
import Layout from "../../components/Layout/index";
import FormField from "./components/FormField/index";

function CadastroCategoria() {
  const defaultCategoryValues = {
    name: " ",
    description: " ",
    color: "#333333",
  };

  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(defaultCategoryValues);

  const setValue = (key, value) => {
    setCategoryValue({ ...categoryValue, [key]: value });
  };

  const onChangeHandler = (eventName) => {
    setValue(eventName.target.getAttribute("name"), eventName.target.value);
  };

  return (
    <Layout>
      <h1>Página CadastroCategoria </h1>
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
          name="name"
          value={categoryValue.name}
          onChange={onChangeHandler}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={categoryValue.description}
          onChange={onChangeHandler}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
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
