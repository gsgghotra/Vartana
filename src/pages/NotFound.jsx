import { Link } from "react-router-dom";

const NotFound =() => {
    return(
        <>
            <main className='container-main'>
                <h2>Page Not Found</h2>
                <p>Go to the <Link to="/" className="blue-text">Dashboard</Link></p>
            </main>
            
        </>
    )
}

export default NotFound;