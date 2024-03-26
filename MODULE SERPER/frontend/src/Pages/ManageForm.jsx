import "../css/bootstrap.css";
import "../css/style.css";


const ManageFormPage = () => {
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
            <a href="/forms/create" className="btn btn-primary">
               Create Form
            </a>
         </div>
      </div>

      <div className="list-form py-5">
         <div className="container">
            <h6 className="mb-3">List Form</h6>

            <a href="detail-form.html" className="card card-default mb-3">
               <div className="card-body">
                  <h5 className="mb-1">Biodata - Web Tech Members</h5>
                  <small className="text-muted">@biodata (limit for 1 response)</small>
               </div>
            </a>

            <a href="detail-form.html" className="card card-default my-3">
               <div className="card-body">
                  <h5 className="mb-1">HTML Fundamental - Quiz</h5>
                  <small className="text-muted">@html-fundamental-quiz</small>
               </div>
            </a>

         </div>
      </div>
      
    </main>
        </>
    )
}

export default ManageFormPage