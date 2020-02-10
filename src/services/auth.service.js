import axios from 'axios';
// export function PostData(type, userData) {
//     //let BaseURL = 'https://api.thewallscript.com/restful/';
//     let BaseURL = 'https://activelearning.herokuapp.com/api/login';

//     return new Promise((resolve, reject) =>{
    
         
//         fetch(BaseURL+type, {
//             method: 'POST',
//             body: JSON.stringify(userData)
//           })
//           .then((response) => response.json())
//           .then((res) => {
//             resolve(res);
//           })
//           .catch((error) => {
//             reject(error);
//           });

  
//       });
// }

const handleResponse = (response) => {
    if(!response.ok){
        return Promise.reject(response.json())
    }
    return response.json();
}
const BASE_URL = localStorage.getItem('base_url');
const login = (data) => {
    // console.log(data)
    const requestOptions = {
        method:'POST',
         //url:`${BASE_URL}/login`,
         headers:{
             'Content-Type':'application/json'
         },
        body:JSON.stringify(data)
    }
    
    return fetch(`${BASE_URL}/login`, requestOptions).then(handleResponse);

}
const register = (data) => {
    // console.log(data)
    const requestOptions = {
        method:'POST',
        url:`${BASE_URL}/register`,
        headers:{
            'Content-Type':'application/json'
        },
        data
    }
    
    return axios(requestOptions).then(response => response);
}
const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.clear();        
  }
export const authService = {
    login,register,logout
}