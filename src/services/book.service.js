const BASE_URL = localStorage.getItem('base_url')
const handleResponse = (response) => {
    if(!response.ok){
        return Promise.reject(response.json())
    }
    return response.json();
}
const fetchBooks = () => {
//get books from books endpoint
    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
    }
    return fetch(`${BASE_URL}/books`,requestOptions).then(handleResponse);
}
//get books from special_offer_books endpoint
const fetchSpecialOffer = () => {

    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
    }
    return fetch(`${BASE_URL}/special_offer_books`,requestOptions).then(handleResponse);
}
//post post orders to orders  endpoint
const buyBooks = (payload) => {
    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type:':'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        },
        body:JSON.stringify(payload)
    }
    return fetch(`${BASE_URL}/buy_book`,requestOptions).then(handleResponse)
}

//get orders from ordered item endpoint
const fetchOrder = () => {

    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
    }
    return fetch(`${BASE_URL}/get_books`,requestOptions).then(handleResponse);
}
export const bookService = {
    fetchBooks,fetchSpecialOffer,buyBooks, fetchOrder
}