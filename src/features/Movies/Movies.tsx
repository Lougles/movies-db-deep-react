import {Movie} from "../../reducers/movies";
import {connect} from "react-redux";
import {RootState} from "../../store";

interface MoviesProps {
    movies: Movie[],
}
function Movies ({movies}: MoviesProps) {
    return(
        <div>
            <h1>Movies comming soon...</h1>
            <ul>
                {movies.map((el: Movie) => (
                    <li key={el.id}>
                        <div>{el.title}</div>
                        <div>{el.popular}</div>
                        <div>{el.overview}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
const mapStateToProps = (state: RootState) => ({
    movies: state.movies?.top,
})

const connector = connect(mapStateToProps);

export default connector(Movies);
