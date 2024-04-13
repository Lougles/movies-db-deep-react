import {IMovie} from "../../reducers/listOfMovie";
import {RootState} from "../../store";
import MovieCard from "./MovieCard";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovies} from "../../reducers/movies";
import {useAppDispatch} from "../../redux/hooks";
import {Container, Grid, LinearProgress, Typography} from "@mui/material";
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
        <Container sx={{py: 8}} maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Now playing
            </Typography>
                {loading ?
                    <LinearProgress color="secondary" />
                    :
                    (
                        <Grid container spacing={4}>
                            {movies.map((el: IMovie) => (
                            <Grid item key={el.id} xs={12} sm={6} md={4}>
                                <MovieCard
                                key={el.id}
                                {...el}
                                />
                            </Grid>
                            ))}
                        </Grid>
                    )
                }
        </Container>
    )
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies?.top,
    loading: state.movies?.loading
})
const connector = connect(mapStateToProps);
export default connector(Movies);
