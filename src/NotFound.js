import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry... not sorry 👀</h2>
            <p>404: That page cannot be found.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;