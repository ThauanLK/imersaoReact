import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/index';
import FormField from './components/FormField/index';
import Button from '../../components/Button/index';

function CadastroCategoria() {
  const defaultCategoryValues = {
    name: '',
    description: '',
    color: '#333333',
  };

  const URL = 'http://localhost:8080/categorias';

  const [Categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(defaultCategoryValues);

  const setValue = (key, value) => {
    setCategoryValue({ ...categoryValue, [key]: value });
  };

  const onChangeHandler = (eventName) => {
    setValue(eventName.target.getAttribute('name'), eventName.target.value);
  };

  useEffect(() => {
    fetch(URL)
      .then(async (responseServer) => {
        const response = await responseServer.json();
        console.log(response);
        setCategories([...response,]);
      });
  }, []);

  return (
    <Layout>
      <h1>Nova Categoria </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategories([...Categories, categoryValue]);
          setCategoryValue(defaultCategoryValues);
          console.log(Categories);
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
          type="textarea"
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
        <Button>Cadastrar</Button>
        {Categories.length === 0 && <div>Carregando</div>}

        <ul>
          {Categories.map((Categories, index) => (

            <li key={`${Categories}${index}`}>{Categories.name}</li>
          ))}
        </ul>
      </form>
    </Layout>
  );
}

export default CadastroCategoria;
