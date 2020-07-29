import React from "react";
import BannerMain from "../../components/BannerMain/index";
import Carousel from "../../components/Carousel/index";
import dadosIniciais from "../../dados_iniciais.json";

function Home() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={"Você sabia que o lucas é incrível?"}
        url={dadosIniciais.categorias[0].videos[0].url}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />
    </div>
  );
}
export default Home;
