import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import Layout from '../../components/Layout/index';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setInitialData(categoriasComVideos);
      })
      .catch((err) => {
        console.message('Erro', err);
      });
  }, []);

  return (
    <Layout paddingAll={0}>
      {initialData.length === 0 && <div>Loading...</div>}

      {initialData.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[1].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      {/*

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      */}
    </Layout>
  );
}

export default Home;
