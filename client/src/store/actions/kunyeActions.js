export const ADD_TO_KUNYE = "ADD_TO_KUNYE";
export const REMOVE_FROM_KUNYE = "REMOVE_FROM_KUNYE";

export function addToKunye(kunye){
    return {
        type : ADD_TO_KUNYE,
        payload : kunye
    }
}

export function removeFromKunye(kunye){
    return {
        type:REMOVE_FROM_KUNYE,
        payload:kunye
    }
}