import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/instance';
import { addToFavorites, removeFromFavorites } from '../../Redux/FavoriteMoviesSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Movies() {
  const [Movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const getMovies = (page) => {
    axiosInstance.get(`/popular?&page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  useEffect(()=> {
    getMovies(currentPage);
  }, [currentPage]);


  const getnext = () => {
    setCurrentPage((page) => page + 1);
  };


  const getPrev = () => {
    setCurrentPage((page) => page - 1);
  };

  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);
  const dispatch = useDispatch();
  const isFavorite = favoriteMovies.some(favoriteMovie => favoriteMovie.id === Movies.id);
  const handleToggleFavorite = (movie) => {
    const isFavorite = favoriteMovies.some(favoriteMovie => favoriteMovie.id === movie.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };
 

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ height: '350px' }} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className='cardText'>{movie.overview}</Card.Text>
                  <Link to={`/details/${movie.id}`}>
                    <Button className='btn3' variant="primary">View Details</Button>
                  </Link>
                  <i
                  className="far fa-heart "
                  style={{ fontSize: "50px" }}
                 
                ></i>
                
                  <div className='d-flex align-items-center'>
                  <div>
                   <button onClick={handleToggleFavorite} className={`btn btn-secondary m-2 `}>
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                 </div>
              
              <div>
              {isFavorite ? <span>&#9733;</span> : <span>&#9734;</span>}
              </div>
            </div>
                  </Card.Body>
              </Card>
            </div>
          ))}
          <div className=' my-5'>
            <Button className='btn1 mx-5' onClick={getPrev}>Previous</Button>
            <Button className='btn2'  onClick={getnext}>Next</Button>
          </div>
        </div>
      </div>
   
      </>
  );
}

