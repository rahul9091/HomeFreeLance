
import axios from 'axios';
import {FETCH,DATA} from '../types'
import {BASE_URL} from '../../config/index';

// export const fetchData = () => {
//     return async dispatch =>{
//         const response = await axios.get(`${BASE_URL}`)
//         if(response.data){
//             dispatch({
//                 type:FETCH,
//                 payload:response.data
//             })
//         }else{
//             console.log('unable to fetch')
//         }
//     }
// }

export const passData = (modalTitle,ids,designation,department) => dispatch => {
    console.log(modalTitle,'txt in actions')
    console.log(ids,'ids in the actions')
    console.log(designation,'Designation in actions')
    console.log(department,'Department in actions')
    dispatch({
        type:DATA,
        payload:{modalTitle,ids,designation,department}
    })
  
}