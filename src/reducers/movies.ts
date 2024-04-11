import {IMovie, movies} from "./listOfMovie";
import {ActionWithPayload, createReducer} from "../redux/utils";

interface MovieState  {
    top: IMovie[];
    loading: boolean;
}
const initialState: MovieState = {
    top: movies,
    loading: false,
}
export const moviesLoaded = (movies: IMovie[]) => ({
    type: "movies/loaded",
    payload: movies
})
export const moviesLoading = () => ({
    type: "movies/loading"
})
// @ts-ignore
const moviesReducer = createReducer<MovieState>(
initialState,
{
    "movies/loaded": (state, action: ActionWithPayload<IMovie[]>) => {
        return {
            ...state,
            top: action.payload,
            loading: false,
        }
    },
    "movies/loading": (state) => {
        return {
            ...state,
            loading: true,
        }
    }
})

// @ts-ignore
export default moviesReducer;
