import url from '../services/url/index';

const urlVideo = `${url.Back}videos`;

function createVideos(videoObject) {
  return fetch(`${urlVideo}?_embed=videos`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(videoObject),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const data = await responseServer.json();
      return data;
    }
    throw new Error('Erro');
  });
}

export default {
  createVideos,
};

// const createVideos = (videoObject) => fetch(`${urlVideo}?_embed=videos`, {
//   method: 'POST',
//   headers: { 'Content-type': 'application/json' },
//   body: JSON.stringify(videoObject),
// }).then(async (responseServer) => {
//   if (responseServer.ok) {
//     const data = await responseServer.json();
//     return data;
//   }
//   throw new Error('Erro');
// });
