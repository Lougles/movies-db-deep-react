import {IMovie} from "../../reducers/listOfMovie";
import {connect} from "react-redux";
import {RootState} from "../../store";
import MovieCard from "./MovieCard";
import styles from './Movies.module.scss'

interface MoviesProps {
    movies: IMovie[],
}
function Movies ({movies}: MoviesProps) {
    return(
        <section>
            <div className={styles.list}>
                {movies.map((el: IMovie) => (
                    <MovieCard
                    {...el}
                    />
                ))}
            </div>
        </section>
    )
}
const mapStateToProps = (state: RootState) => ({
    movies: state.movies?.top,
})

const connector = connect(mapStateToProps);

export default connector(Movies);
