import {Link} from "react-router-dom";
import styles from './MoviesCard.module.scss'
import {IMovie} from "../../reducers/listOfMovie";
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react'
function MovieCard (movie: IMovie) {
    return (
        <div className={styles.card}>
            <Link to={`${movie.id}`}>
                <Card style={{height: '520px'}}>
                    <Image src={movie.image} alt="Movie thumbnail"/>
                    <CardContent>
                        <CardHeader>{movie.title}</CardHeader>
                        <CardMeta>
                            <span className='date'>{Number(Math.ceil(movie.popularity))}</span>
                        </CardMeta>
                        <CardDescription style={{textAlign: 'justify'}}>
                            {movie.overview.length > 400 ? movie.overview.slice(0, 400) + '...' : movie.overview}
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <Icon name='time' />
                        {movie.release_date}
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}

export default MovieCard;
