import "../css/bootstrap.css";
import "../css/style.css";

const NotFoundPage = () => {
    return(
        <>
        <main>
      <div className="hero py-5 bg-light">
         <div className="container text-center"> 
            <h2 className="mb-3">
               404 Not Found
            </h2> 
            <div className="text-muted">
               The requested URL not found.
            </div>
         </div>
      </div> 
    </main>
        </>
    )
}

export default NotFoundPage