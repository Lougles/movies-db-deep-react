import {Link as RouterLink} from "react-router-dom";
import styles from './MoviesCard.module.scss'
import {IMovie} from "../../reducers/listOfMovie";
import {
    CardMeta,
    CardHeader,
    CardDescription,
    Icon,
    Image,
} from 'semantic-ui-react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
function MovieCard (movie: IMovie) {
    return (
        <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
            <CardMedia component="div" image={movie.image} sx={{pt: "56.25%"}}/>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                    {movie.title}
                </Typography>
                <Typography variant="button" display="block" mt={2}>
                    {Number(Math.ceil(movie.popularity))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.overview.length > 400 ? movie.overview.slice(0, 400) + '...' : movie.overview}
                </Typography>
                <CardActions>
                    <Button component={RouterLink} to={`/movies/${movie.id}`} color="secondary">
                        Details
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default MovieCard;
