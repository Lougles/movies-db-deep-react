import {IMovie} from "../../reducers/listOfMovie";
import {RootState} from "../../store";
import MovieCard from "./MovieCard";
import styles from './Movies.module.scss'
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovies} from "../../reducers/movies";
import {useAppDispatch} from "../../redux/hooks";
interface MoviesProps {
    movies: IMovie[],
    loading: boolean
}
function Movies ({movies, loading}: MoviesProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
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
