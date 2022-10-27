
// LISTAR OS PRODUTOS 
export const fetchListProduct = async () => {
    return fetch('http://localhost:8000/product/list', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => { return data })
        .catch(error => console.log(error))
}

// CRIAR UM PRODUTO
export const fetchNewProduct = async (image, product, description, quantity, value) => {
    return fetch('http://localhost:8000/product/create', {
        method: 'POST',
        body: JSON.stringify({
            image,
            product,
            description,
            quantity,
            value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))


}

// LISTAR UM PRODUTO PELO ID
export const fetchEditProduct = async (id) => {
   
    return fetch(`http://localhost:8000/product/find?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


// ATUALIZAR O PRODUTO (INFORMAÇÕES DELE )
export const fetchUpdateProduct = async (id, product) => {
    return fetch(`http://localhost:8000/product/update?id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


// DELETAR ESSE PRDODUTO 
export const fetchDeleteProduct = async (id) => {
    return fetch(`http://localhost:8000/product/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}