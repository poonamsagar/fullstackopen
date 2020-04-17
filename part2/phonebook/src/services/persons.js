import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseUrl).then((response) => response.data);

const create = (newPerson) =>
  axios.post(baseUrl, newPerson).then((response) => response.data);

const remove = (id) => axios.delete(`${baseUrl}/${id}`);

const update = (updatePerson) =>
  axios
    .put(`${baseUrl}/${updatePerson.id}`, updatePerson)
    .then((response) => response.data);
export { create, getAll, remove, update };
