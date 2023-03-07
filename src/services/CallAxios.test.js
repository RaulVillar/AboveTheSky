import { CallAxios } from './CallAxios';

describe('Call Axios', () => {

    test('network request', () => {
        return CallAxios.get('http://localhost:5000/stars')
            .then(response => {
                expect(response.status).toBe(200);
            });

    });

});

// const axios = require('axios');

// test('should return data from the API', async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//   expect(response.status).toBe(200); // verifica que el estado de la respuesta sea 200 OK
//   expect(response.data.userId).toBe(1); // verifica que la respuesta incluya los datos esperados
// });



// Para acceder a los datos de la respuesta en una solicitud HTTP con axios, generalmente se debe usar la propiedad data del objeto de respuesta.
// Por ejemplo, si se hace una solicitud GET a una API y se espera una respuesta JSON, se puede obtener los datos de la siguiente manera:

// axios.get('/api/data')
//   .then(function(response) {
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
