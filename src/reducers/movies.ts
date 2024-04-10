import {Action, Reducer} from "redux";


export interface Movie {
    id: number;
    title: string;
    popular: number;
    overview: string;
}

interface MovieState  {
    top: Movie[]
}


const initialState: MovieState = {
    top: [
        {id: 1, title: "Title-1", popular: 100, overview: "God Father..."},
        {id: 2, title: "Title-2", popular: 50, overview: "Part II..."},
        {id: 3, title: "Title-3", popular: 65, overview: "Dreams..."},
        {id: 4, title: "Title-4", popular: 73, overview: "Batman..."},
    ]
}
const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
    return initialState;
}

export default moviesReducer;
