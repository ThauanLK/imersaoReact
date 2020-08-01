import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/index';
import FormField from './components/FormField/index';
import Button from '../../components/Button/index';
import useForm from '../../hooks/useForm/index';
import url from '../../services/url/index';

function CadastroCategoria() {
  const defaultCategoryValues = {
    name: '',
    description: '',
    color: '#333333',
  };

  const { onChangeHandler, value, clearForm } = useForm(
    defaultCategoryValues,
  );
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // if (window.location.href.includes('localhost')) {
    //   const URL = 'http://localhost:8080/categorias';
    //   fetch(URL).then(async (respostaDoServer) => {
    //     if (respostaDoServer.ok) {
    //       const resposta = await respostaDoServer.json();
    //       setCategories(resposta);
    //       console.log(resposta);
    //       return;
    //     }
    //     throw new Error('Não foi possível pegar os dados');
    //   });
    // }

    fetch(`${url.Back}categorias`).then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        setCategories(resposta);
        console.log(resposta);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  }, []);

  return (
    <Layout>
      <h1>Nova Categoria </h1>
      <form
        onSubmit={(event) => { // inserir o metodo post para o cadastro de uma categoria
          event.preventDefault();
          setCategories([...categories, value]);
          clearForm(defaultCategoryValues);
          console.log(categories);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={value.name}
          onChange={onChangeHandler}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={value.description}
          onChange={onChangeHandler}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={value.color}
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
