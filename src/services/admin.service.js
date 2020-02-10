const BASE_URL = localStorage.getItem('base_url')
const handleResponse = (response) => {
    if(!response.ok){
        return Promise.reject(response.json())
    }
    return response.json();
}
const fetchAdminUser = () => {

    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
    }
    return fetch(`${BASE_URL}/admin/user`,requestOptions).then(handleResponse);
}



export const specialOfferService = {
    fetchAdminUser
}