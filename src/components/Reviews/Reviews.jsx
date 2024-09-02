import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/TMDBApi';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();


    useEffect(() => {
        const fetchReviewsInfo = () => {
            setIsLoading(true);

            fetchReviews(movieId)
                .then(review => { setReviews(review); })
                .catch(error => { console.log(error); })
                .finally(() => { setIsLoading(false); })
        }

         fetchReviewsInfo();
    }, [movieId]);


    return (
        <>
            {isLoading && <Loader />}
            <h2>Movie Reviews</h2>
            <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
                    

            {reviews.length === 0 && (
                <p>
                    We don't have any reviews for this movie.
                </p>
            )
            }
        </>
    )
};

export default Reviews;