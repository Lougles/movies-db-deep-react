import {Link} from "react-router-dom";
import styles from './MoviesCard.module.scss'
import {IMovie} from "../../reducers/listOfMovie";
function MovieCard (movie: IMovie) {
    return (
        <div className={styles.card}>
            <img className={styles.thumbnail} src="/movie-thumb.png" alt="Movie thumbnail"/>
            <div className={styles.content}>
                <div>
                    <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                </div>
                <div className={styles.popularity}>{movie.overview}</div>
                <div className={styles.overview}>{movie.popularity}</div>
            </div>
        </div>
    )
}

export default MovieCard;
