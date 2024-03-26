import "../css/bootstrap.css";
import "../css/style.css";

const ResponsesPage = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="manage-forms.html">Formify</a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" href="#">Administrator</a>
         </li> 
         <li className="nav-item">
            <button type="button" className="btn bg-white text-primary ms-4">Logout</button>
         </li>
       </ul> 
      </div>
    </nav>

    <main>
      
      <div className="hero py-5 bg-light">
         <div className="container text-center">  
            <h2 className="mb-2">
               Biodata - Web Tech Members
            </h2>  
            <div className="text-muted mb-4">
               To save web tech members biodata
            </div> 
            <div>
               <div>
                  <small>For user domains</small>
               </div>
               <small><span className="text-primary">webtech.id, webtech.org</span></small>
            </div> 
         </div>
      </div>

      <div className="py-5">
         <div className="container"> 

            <div className="row justify-content-center ">
               <div className="col-lg-5 col-md-6"> 
                  <div className="input-group mb-5">
                     <input type="text" className="form-control form-link" readonly value="http://localhost:8080/forms/biodata"/>
                     <a href="submit-form.html" className="btn btn-primary">Copy</a>
                  </div>

                  <ul className="nav nav-tabs mb-2 justify-content-center">
                     <li className="nav-item">
                        <a className="nav-link" href="detail-form.html">Questions</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" href="responses.html">Responses</a>
                     </li> 
                  </ul>
               </div>
             </div>

            <div className="row justify-content-center">
               <div className="col-lg-10"> 

                  <table className="table mt-3">
                     <caption>Total Responses: 3</caption>
                     <thead>
                        <tr className="text-muted">
                           <th>User</th>
                           <th>Name</th>
                           <th>Address</th>
                           <th>Sex</th>
                           <th>Born Date</th>
                           <th>Hobbies</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td className="text-primary">budi@webtech.id</td>
                           <td>Budi Andrianto</td>
                           <td>Jakarta</td>
                           <td>Male</td>
                           <td>2000-09-09</td>
                           <td>Football, Coding, Guitar.</td>
                        </tr>
                        <tr>
                           <td className="text-primary">andi@webtech.id</td>
                           <td>Andi Budiman</td>
                           <td>Surabaya</td>
                           <td>Male</td>
                           <td>2005-10-01</td>
                           <td>Traveling, Watching.</td>
                        </tr>
                        <tr>
                           <td className="text-primary">mela@webtech.id</td>
                           <td>Mela Agustin</td>
                           <td>Bandung</td>
                           <td>Female</td>
                           <td>2003-04-07</td>
                           <td>Guitar, Traveling, Coding.</td>
                        </tr>
                     </tbody>
                  </table>

               </div>  
            </div>   
            
         </div>
      </div>
    </main>
        </>
    )
}

export default ResponsesPage