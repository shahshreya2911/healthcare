import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'





const Signin = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;


    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
          console.log(email, password);
          dispatch(login(email, password))
      
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

    const signInForm = () => (
        <form onSubmit={submitHandler}>
            
            <div className="form-group">
                <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                <input className="form-control py-4"  type="email" aria-describedby="emailHelp"
                       placeholder="Enter email address" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-row">
             
                    <div className="form-group">
                        <label className="small mb-1" htmlFor="inputPassword">Password</label>
                        <input className="form-control py-4" type="password"
                               placeholder="Enter password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                
              
            </div>
            <div className="form-group mt-4 mb-0">
                <button className="btn btn-primary btn-block">Login</button></div>
        </form>

    );


    return (
        <>   {showLoading()}
            {showError()}
            {message && <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {message}
            </div>}
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3
                                            className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            {signInForm()}
                                        </div>
                                        <div className="card-footer text-center">
                                            <div className="small"><Link to={"/signin"}>
                                                Have an account? Go to login</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2020</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            </>
    )
}




export default Signin