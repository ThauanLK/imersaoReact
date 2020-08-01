import url from '../services/url/index';

const urlCategories = `${url.Back}categorias`;

function getAll() {
  return fetch(`${urlCategories}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

const getAllWithVideos = () => fetch(`${urlCategories}?_embed=videos`).then(async (responseServer) => {
  if (responseServer.ok) {
    const data = await responseServer.json();
    return data;
  }
  throw new Error('Não foi possível carregar os videos');
});

export default {
  getAllWithVideos,
  getAll,
};
