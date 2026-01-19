export  {removeperson} from '../reducers/personSlice';
import { ReactReduxContext } from 'react-redux';
import axios from '../../utils/axios';
import { loadperson } from '../reducers/personSlice';


export const asyncloadperson  = (id) => async (dispatch , getState) =>{

    try {

        const detail =await axios.get(`/person/${id}`);
        const externalid =await axios.get(`/person/${id}/external_ids`);
        const combineCredits =await axios.get(`/person/${id}/combined_credits`);
        const movieCredits =await axios.get(`/person/${id}/movie_credits`);
        const tvCredits =await axios.get(`/person/${id}/tv_credits`);
         

        let theultimatedetails = {
            detail : detail.data,
            externalid :externalid.data, 
            combineCredits : combineCredits.data,
            movieCredits : movieCredits.data,
            tvCredits : tvCredits.data,
            
        }
        
        dispatch(loadperson(theultimatedetails));

        // console.log(theultimatedetails)

    } catch (error) {
        console.log("Error :",error)
        
    }


}