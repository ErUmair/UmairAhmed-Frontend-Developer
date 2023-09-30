import { FILTER_ACTION } from "./type";


export function filterCapsule(dataToSubmit) {
    return {
        type: FILTER_ACTION,
        payload: dataToSubmit
    }
}