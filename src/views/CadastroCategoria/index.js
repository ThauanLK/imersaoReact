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

  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(defaultCategoryValues);

  const setValue = (key, value) => {
    setCategoryValue({ ...categoryValue, [key]: value });
  };

  const onChangeHandler = (eventName) => {
    setValue(eventName.target.getAttribute('name'), eventName.target.value);
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategories(resposta);
          console.log(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <Layout>
      <h1>Nova Categoria </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategories([...categories, categoryValue]);
          setCategoryValue(defaultCategoryValues);
          console.log(categories);
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
        {categories.length === 0 && <div>Carregando</div>}

        <ul>
          {categories.map((Category, index) => (
            <li key={`${categories}${index}`}>{Category.titulo}</li> // pegar variavel do bd, nao do objeto no front
          ))}
        </ul>
      </form>
    </Layout>
  );
}

export default CadastroCategoria;
