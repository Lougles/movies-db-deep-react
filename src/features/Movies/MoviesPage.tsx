import {useParams} from "react-router-dom";
import {movies} from "../../reducers/listOfMovie";
import styles from './MoviePage.module.scss'
export function MoviesPage () {
    const {id} = useParams();
    const findEl = movies.find(el => Number(el.id) === Number(id))
    return (
        <section>
            <div className={styles.container}>
                <h1>{findEl?.title}</h1>
                <div className={styles.movie_Infotable}>
                    <div className={styles.movie_Infotable_left}>
                        <img src="/movie-thumb.png"/>
                    </div>
                    <div className={styles.movie_Infotable_right}>
                        <div style={{marginLeft: '20px'}}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h2>Популярность:</h2>
                                        </td>
                                        <td>
                                            <span>{findEl?.popularity}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>vote_average: </h2>
                                        </td>
                                        <td>
                                            <span>{findEl?.vote_average}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>vote_count:</h2>
                                        </td>
                                        <td>
                                            <span>{findEl?.vote_count}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>adult:</h2>
                                        </td>
                                        <td>
                                            <span>{findEl?.adult}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>original_language:</h2>
                                        </td>
                                        <td>
                                            <span>{findEl?.original_language}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>original_title:</h2>
                                        </td>
                                        <td>
                                            <span>{findEl?.original_title}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <h1>Про что «{findEl?.title}»</h1>
                <p>{findEl?.overview}</p>
            </div>
        </section>
    )
}
