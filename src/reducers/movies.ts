import {IMovie, movies} from "./listOfMovie";
import {ActionWithPayload, createReducer} from "../redux/utils";
import {AppThunk} from "../store";
import {client} from "../api/tmdb";

interface MovieState  {
    top: IMovie[];
    loading: boolean;
}
const initialState: MovieState = {
    top: movies,
    loading: false,
}
const moviesLoaded = (movies: IMovie[]) => ({
    type: "movies/loaded",
    payload: movies
})
const moviesLoading = () => ({
    type: "movies/loading"
})

export function fetchMovies(): AppThunk<Promise<void>> {
    return async (dispatch, getState) => {
        dispatch(moviesLoading());

        const config = await client.getConfiguration();
        const imageUrl = config.images.base_url;
        const results = await client.getNowPlaying();

        const mappedResults: IMovie[] = results.map((el: IMovie) => ({
            ...el,
            image: el.backdrop_path ? `${imageUrl}w780${el.backdrop_path}` : undefined,
        }));
        dispatch(moviesLoaded(mappedResults));
    }
}
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
