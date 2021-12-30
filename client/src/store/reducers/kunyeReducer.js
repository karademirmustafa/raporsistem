import { ADD_TO_KUNYE, REMOVE_FROM_KUNYE } from "../actions/kunyeActions";
import {kunyeItems} from "../initialValues/kunyeItems";
const initialState ={
    kunyeItems:kunyeItems,
}
export default function kunyeReducer(state=initialState,{type,payload}){
    switch(type){
        case ADD_TO_KUNYE:
            let kunye =state.kunyeItems.find(k=> k.kunye.id===payload.id)
            if (kunye) {
                return {
                    ...state
                }
            } else {
                
                return {
                    ...state,
                    kunyeItems:[...state.kunyeItems,payload],

                }
            }
        case REMOVE_FROM_KUNYE : 
            return {
                ...state,
                kunyeItems:state.kunyeItems.filter(k=> k.kunye.id!==payload.id)
            }
    
            default :
                return state;
    }

}