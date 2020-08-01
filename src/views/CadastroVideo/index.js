import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/index';
import useForm from '../../hooks/useForm/index';
import FormField from '../CadastroCategoria/components/FormField/index';
import Button from '../../components/Button/index';
import VideoRepository from '../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { value, clearForm, onChangeHandler } = useForm({
    title: 'Video A',
    url: 'https://www.youtube.com/watch?v=DI96RZGQMTs',
    category: 'Front-End',
  });
  return (
    <Layout>
      <h1>Página CadastroVideo</h1>
      <Link to="/cadastro/categoria">CadastroCategoria</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          VideoRepository.createVideos(value);
          history.push('/');
        }}
      >
        <FormField
          label="Titulo"
          type="text"
          name="title"
          value={value.title}
          onChange={onChangeHandler}
        />

        <FormField
          label="url"
          type="text"
          name="url"
          value={value.url}
          onChange={onChangeHandler}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={value.category}
          onChange={onChangeHandler}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </Layout>
  );
}

export default CadastroVideo;
