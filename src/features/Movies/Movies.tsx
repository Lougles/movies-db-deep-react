import {Movie} from "../../reducers/movies";
import {connect} from "react-redux";
import {RootState} from "../../store";
import MovieCard from "./MovieCard";
import styles from './Movies.module.scss'

interface MoviesProps {
    movies: Movie[],
}
function Movies ({movies}: MoviesProps) {
    return(
        <section>
            <div className={styles.list}>
                {movies.map((el: Movie) => (
                    <MovieCard
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    overview={el.overview}
                    popularity={el.popular} />
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
