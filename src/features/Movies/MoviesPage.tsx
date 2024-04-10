import {useParams} from "react-router-dom";
import {movies} from "../../reducers/listOfMovie";

export function MoviesPage () {
    const {id} = useParams();
    const findEl = movies.find(el => Number(el.id) === Number(id))
    return (
        <section>
            <img src="/movie-thumb.png"/>
            <h1>{findEl?.title}</h1>
            <p>{findEl?.overview}</p>
            <p>{findEl?.popularity}</p>
            <p>{findEl?.vote_average}</p>
            <p>{findEl?.vote_count}</p>
            <p>{findEl?.adult}</p>
            <p>{findEl?.original_language}</p>
            <p>{findEl?.original_title}</p>
        </section>
    )
}
