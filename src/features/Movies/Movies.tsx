import {IMovie} from "../../reducers/listOfMovie";
import {RootState} from "../../store";
import MovieCard from "./MovieCard";
import styles from './Movies.module.scss'
import {useEffect} from "react";
import {client} from '../../api/tmdb';
import {connect, useDispatch} from "react-redux";
import {moviesLoaded, moviesLoading} from "../../reducers/movies";
interface MoviesProps {
    movies: IMovie[],
    loading: boolean
}
function Movies ({movies, loading}: MoviesProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            dispatch(moviesLoading());

            const config = await client.getConfiguration();
            const imageUrl = config.images.base_url;
            const results = await client.getNowPlaying();

            const mappedResults: IMovie[] = results.map((el: IMovie) => ({
                ...el,
                image: el.backdrop_path ? `${imageUrl}w780${el.backdrop_path}` : undefined,
            }));
            dispatch(moviesLoaded(mappedResults));
        })()
    }, [dispatch])
    return(
        <section>
            <div className={styles.list}>
                {loading ? <h3>Loading ...</h3> :
                movies.map((el: IMovie) => (
                    <MovieCard
                    key={el.id}
                    {...el}
                    />
                ))}
            </div>
        </section>
    )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies?.top,
    loading: state.movies?.loading
})
const connector = connect(mapStateToProps);
export default connector(Movies);
