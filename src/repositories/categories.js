import url from '../services/url/index';

const urlBack = `${url.Back}categorias`;

const getAllWithVideos = () => fetch(`${urlBack}?_embed=videos`).then(async (responseServer) => {
  if (responseServer.ok) {
    const data = await responseServer.json();
    return data;
  }
  throw new Error('Não foi possível carregar os videos');
});

export default {
  getAllWithVideos,
};
