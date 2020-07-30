import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/index";

function CadastroCategoria() {
  const defaultCategoryValues = {
    name: "Teste Nome",
    description: "Teste Descrição",
    color: "#333333",
  };

  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(defaultCategoryValues);

  const onChangeHandler = (eventName) => {
    setValue(eventName.target.getAttribute("name"), eventName.target.value);
  };

  const setValue = (key, value) => {
    setCategoryValue({ ...value, [key]: value });
  };

  return (
    <Layout>
      <h1>Nova Categoria </h1>
      <p>Nome {categoryValue.name}</p>
      <p>Descrição {categoryValue.description}</p>
      <p>Cor {categoryValue.color}</p>
      <Link to="/">Home</Link>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategories([...categories, categoryValue]);
          setCategoryValue();
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="name"
              value={categoryValue.name}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>Descrição:</label>
          <textarea></textarea>
        </div>
        <div>
          <label>Cor:</label>
          <input
            type="color"
            value={categoryValue.color}
            name="color"
            onChange={onChangeHandler}
          />
        </div>

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
