import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/index';

function CadastroVideo() {
  return (
    <Layout>
      <h1>Página CadastroVideo</h1>
      <Link to="/cadastro/categoria">CadastroCategoria</Link>
    </Layout>
  );
}

export default CadastroVideo;
