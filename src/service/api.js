import axios from 'axios';

const api = axios.create({
    baseURL:'https://accenture-java-desafio.herokuapp.com/'
    // baseURL:'https://gama-bankline-desbugados.herokuapp.com/'
    // baseURL:'https://webhook.site/70ecbcbf-8a13-4e2d-8633-dc76c6025d8b'
})

export default api;