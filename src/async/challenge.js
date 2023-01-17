import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
    const response = await fetch(urlApi)//Fectch es una forma asíncrona de ontener recursos de una API
    const data =  await response.json();
    return data;
}

//Función que realiza las solicitudes a la API

const anotherFunction = async (urlApi) => {
    try {
        //Aquí se hacen las peticiones a la API
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API);


