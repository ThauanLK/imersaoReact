import url from '../services/url/index';

const urlVideo = `${url.Back}cadastro/video`;

const createVideos = (videoObject) => fetch(`${urlVideo}?_embed=videos`, {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(videoObject),
}).then(async (responseServer) => {
  if (responseServer.ok) {
    const data = await responseServer.json();
    return data;
  }
  throw new Error('Não foi possível cadastrar os videos');
});

export default {
  createVideos,
};
