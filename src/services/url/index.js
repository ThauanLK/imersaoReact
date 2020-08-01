const Back = window.location.hostname.includes('localhost')
  ? 'https://lucasincrivelflix.herokuapp.com/'
  : 'http://localhost:8080/';

export default {
  Back,
};
