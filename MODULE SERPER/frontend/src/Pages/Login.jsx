// import axios from "axios";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";

const LoginPage = () => {

   const formData = document.getElementsByTagName('form');
   console.log(formData)

   const handleSubmit = (e) => {
      e.location.href = '/forms'
   }

    return (
        <>
    <main >
      <section className="login">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-6">
                  <h1 className="text-center mb-4">Formify</h1>
                  <div className="card card-default">
                     <div className="card-body">
                        <h3 className="mb-3">Login</h3>
                        
                        <form action="" method="post"> 
                           <div className="form-group my-3">
                              <label htmlFor="email" className="mb-1 text-muted">Email Address</label>
                              <input type="email" id="email" name="email" className="form-control"  autoFocus />
                           </div> 

                           
                           <div className="form-group my-3">
                              <label htmlFor="password" className="mb-1 text-muted">Password</label>
                              <input type="password" id="password" name="password" className="form-control" />
                           </div>
                           
                           <div className="mt-4">
                           <Link to={'/forms'}><button type="submit" className="btn btn-primary" onSubmit={(window) => handleSubmit} >Login</button></Link>
                           </div>
                        </form>

                     </div>
                  </div> 
               </div>
            </div>
         </div>
      </section>
   </main>
        </>
    );
}

export default LoginPage