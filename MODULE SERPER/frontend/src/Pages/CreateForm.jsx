import "../css/bootstrap.css";
import "../css/style.css";



const CreateFormPage = () => {
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
            <a href="index.html" className="btn bg-white text-primary ms-4">Logout</a>
         </li>
       </ul> 
      </div>
    </nav>

    <main>
      <div className="hero py-5 bg-light">
         <div className="container">
            <h2>Create Form</h2>
         </div>
      </div>

      <div className="py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-4">
                  
                  <form action="detail-form.html">
        
                     <div className="form-group mb-3">
                        <label htmlFor="name" className="mb-1 text-muted">Form Name</label>
                        <input type="text" id="name" name="name" className="form-control" autofocus />
                     </div>

        
                     <div className="form-group my-3">
                        <label htmlFor="slug" className="mb-1 text-muted">Form Slug</label>
                        <input type="text" id="slug" name="slug" className="form-control" />
                     </div>

        
                     <div className="form-group my-3">
                        <label htmlFor="description" className="mb-1 text-muted">Description</label>
                        <textarea id="description" name="description" rows="4" className="form-control"></textarea>
                     </div>
                     
        
                     <div className="form-group my-3">
                        <label htmlFor="allowed-domains" className="mb-1 text-muted">Allowed Domains</label>
                        <input type="text" id="allowed-domains" name="allowed_domains" className="form-control" />
                        <div className="form-text">Separate domains using comma ",". Ignore for public access.</div>
                     </div>
                     
        
                     <div className="form-check form-switch" aria-colspan="my-3">
                        <input type="checkbox" id="limit_one_response" name="limit_one_response" className="form-check-input" role="switch"/>
                        <label className="form-check-label" htmlFor="limit_one_response">Limit to 1 response</label>
                      </div>

                     <div className="mt-4">
                        <button type="submit" className="btn btn-primary">Save</button>
                     </div>
                  </form>

               </div>
            </div>
         </div>
      </div>
    </main>
        </>
    )
}

export default CreateFormPage