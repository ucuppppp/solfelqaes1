import "../css/bootstrap.css";
import "../css/style.css";

const ForbiddenPage = () => {
    return(
        <>
        <main>
      <div className="hero py-5 bg-light">
         <div className="container text-center"> 
            <h2 className="mb-3">
               403 Forbidden Access
            </h2> 
            <div className="text-muted">
               You don't have access this form.
            </div>
         </div>
      </div> 
    </main>
        </>
    )
}

export default ForbiddenPage