import {Action, Reducer} from "redux";
import {IMovie, movies} from "./listOfMovie";

interface MovieState  {
    top: IMovie[]
}


const initialState: MovieState = {
    top: movies
}
const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
    return initialState;
}

export default moviesReducer;
