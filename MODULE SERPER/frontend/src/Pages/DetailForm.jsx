import "../css/bootstrap.css";
import "../css/style.css";

const DetailFormPage = () => {
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
                        <a className="nav-link active" href="detail-form.html">Questions</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/forms/slug/responses">Responses</a>
                     </li> 
                  </ul>
               </div>
             </div>

            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-6"> 

                  <div className="question-item  card card-default my-4">
                     <div className="card-body">
                        <div className="form-group my-3">
                           <input type="text" placeholder="Question" className="form-control" name="name" value="Name" disabled />
                        </div> 

                        <div className="form-group my-3">
                           <select name="choice_type" className="form-select" disabled>
                              <option>Choice Type</option>
                              <option selected value="short answer">Short Answer</option>
                              <option value="paragraph">Paragraph</option>
                              <option value="multiple choice">Multiple Choice</option>
                              <option value="dropdown">Dropdown</option>
                              <option value="checkboxes">Checkboxes</option>
                           </select>
                        </div>
                        <div className="form-check form-switch" aria-colspan="my-3">
                           <input className="form-check-input" type="checkbox" role="switch" id="required" disabled checked />
                           <label className="form-check-label" htmlFor="required">Required</label>
                         </div>
                         <div className="mt-3">
                           <button type="submit" className="btn btn-outline-danger">Remove</button>
                         </div> 
                     </div>
                  </div> 

                  <div className="question-item card card-default my-4">
                     <div className="card-body">
                        <div className="form-group my-3">
                           <input type="text" placeholder="Question" className="form-control" name="name" value="Address" disabled />
                        </div> 

                        <div className="form-group my-3">
                           <select name="choice_type" className="form-select" disabled>
                              <option>Choice Type</option>
                              <option value="short answer">Short Answer</option>
                              <option selected value="paragraph">Paragraph</option>
                              <option value="multiple choice">Multiple Choice</option>
                              <option value="dropdown">Dropdown</option>
                              <option value="checkboxes">Checkboxes</option>
                           </select>
                        </div>
                        <div className="form-check form-switch" aria-colspan="my-3">
                           <input className="form-check-input" type="checkbox" role="switch" id="required" />
                           <label className="form-check-label" htmlFor="required">Required</label>
                         </div>
                         <div className="mt-3">
                           <button type="submit" className="btn btn-outline-danger">Remove</button>
                         </div> 
                     </div>
                  </div>

                  <div className="question-item card card-default my-4">
                     <div className="card-body">
                        <div className="form-group my-3">
                           <input type="text" placeholder="Question" className="form-control" name="name" value="Sex" disabled />
                        </div> 

                        <div className="form-group my-3">
                           <select name="choice_type" className="form-select" disabled>
                              <option>Choice Type</option>
                              <option value="short answer">Short Answer</option>
                              <option value="paragraph">Paragraph</option>
                              <option selected value="multiple choice">Multiple Choice</option>
                              <option value="dropdown">Dropdown</option>
                              <option value="checkboxes">Checkboxes</option>
                           </select>
                        </div>
                        <div className="form-group my-3">
                           <textarea placeholder="Choices" className="form-control" name="choices" rows="4" disabled>Male,Female,Others</textarea>
                           <div className="form-text">
                              Separate choices using comma ",".
                            </div>
                        </div> 
                        <div className="form-check form-switch" aria-colspan="my-3">
                           <input className="form-check-input" type="checkbox" role="switch" id="required" checked disabled />
                           <label className="form-check-label" htmlFor="required">Required</label>
                         </div>
                         <div className="mt-3">
                           <button type="submit" className="btn btn-outline-danger">Remove</button>
                         </div> 
                     </div>
                  </div>

                  <div className="question-item card card-default my-4">
                     <div className="card-body">
                        <div className="form-group my-3">
                           <input type="text" placeholder="Question" className="form-control" name="name" value="Born Date" disabled />
                        </div> 

                        <div className="form-group my-3">
                           <select name="chocie_type" className="form-select" disabled>
                              <option>Choice Type</option>
                              <option value="short answer">Short Answer</option>
                              <option value="paragraph">Paragraph</option>
                              <option selected value="date">Date</option>
                              <option value="multiple choice">Multiple Choice</option>
                              <option value="dropdown">Dropdown</option>
                              <option value="checkboxes">Checkboxes</option>
                           </select>
                        </div>
                        <div className="form-check form-switch" aria-colspan="my-3">
                           <input className="form-check-input" type="checkbox" role="switch" id="required" checked disabled />
                           <label className="form-check-label" htmlFor="required">Required</label>
                         </div>
                        <div className="mt-3">
                           <button type="submit" className="btn btn-outline-danger">Remove</button>
                         </div>  
                     </div>
                  </div>

                  <div className="question-item card card-default my-4">
                     <div className="card-body">
                        <div className="form-group my-3">
                           <input type="text" placeholder="Question" className="form-control" name="name" value="Hobbies" disabled />
                        </div> 

                        <div className="form-group my-3">
                           <select name="choice_type" className="form-select" disabled>
                              <option>Choice Type</option>
                              <option value="short answer">Short Answer</option>
                              <option value="paragraph">Paragraph</option>
                              <option value="multiple choice">Multiple Choice</option>
                              <option value="dropdown">Dropdown</option>
                              <option selected value="checkboxes">Checkboxes</option>
                           </select>
                        </div>
                        <div className="form-group my-3">
                           <textarea placeholder="Choices" className="form-control" name="choices" rows="4" disabled>Football,Guitar,Coding,Watching,Traveling</textarea>
                           <div className="form-text">
                              Separate choices using comma ",".
                            </div>
                        </div>
                        <div className="form-check form-switch" aria-colspan="my-3">
                           <input className="form-check-input" type="checkbox" role="switch" id="required" disabled />
                           <label className="form-check-label" htmlFor="required">Required</label>
                         </div>
                        <div className="mt-3">
                           <button type="submit" className="btn btn-outline-danger">Remove</button>
                         </div>  
                     </div>
                  </div>

                  <div className="question-item card card-default my-4">
                     <div className="card-body">
                        <form>
                           <div className="form-group my-3">
                              <input type="text" placeholder="Question" className="form-control" name="name" value="" />
                           </div> 
   
                           <div className="form-group my-3">
                              <select name="choice_type" className="form-select">
                                 <option selected>Choice Type</option>
                                 <option value="short answer">Short Answer</option>
                                 <option value="paragraph">Paragraph</option>
                                 <option value="date">Date</option>
                                 <option value="multiple choice">Multiple Choice</option>
                                 <option value="dropdown">Dropdown</option>
                                 <option value="checkboxes">Checkboxes</option>
                              </select>
                           </div>
                           <div className="form-check form-switch" aria-colspan="my-3">
                              <input className="form-check-input" type="checkbox" role="switch" id="required" />
                              <label className="form-check-label" htmlFor="required">Required</label>
                            </div>
                           <div className="mt-3">
                              <button type="submit" className="btn btn-outline-primary">Save</button>
                            </div>  
                        </form>
                     </div>
                  </div> 

               </div>  
            </div>   
            
         </div>
      </div>
    </main>
        </>
    )
}

export default DetailFormPage