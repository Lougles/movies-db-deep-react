import {IMovie} from "../../reducers/listOfMovie";
import {connect} from "react-redux";
import {RootState} from "../../store";
import MovieCard from "./MovieCard";
import styles from './Movies.module.scss'
import {useEffect, useState} from "react";
import {client} from '../../api/tmdb'
export function MovieFetch() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    useEffect(() => {
        (async () => {
            const config = await client.getConfiguration();
            const imageUrl = config.images.base_url;
            const results = await client.getNowPlaying();

            const mappedResults: IMovie[] = results.map((el: IMovie) => ({
                ...el,
                image: el.backdrop_path ? `${imageUrl}w780${el.backdrop_path}` : undefined,
            }));
            setMovies(mappedResults);
        })()
    }, [])
    return <Movies movies={movies} />
}

interface MoviesProps {
    movies: IMovie[],
}
function Movies ({movies}: MoviesProps) {
    return(
        <section>
            <div className={styles.list}>
                {movies.map((el: IMovie) => (
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
})

const connector = connect(mapStateToProps);

export default connector(Movies);
