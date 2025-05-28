import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FormTask } from './components/Tasks/FormTask';
import { AmazonSearch } from './components/hooks/AmazonUsingContex';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className='d-flex justify-content-between p-2 mx-2 my-2 bg-dark text-white'>
        <div className='navbar-brand fs-2 fw-bold w-100'>Amazon</div>
        <nav className='d-flex p-4 align-items-center border border-2 border-primary bg-dark text-white'>

          <Link to="home" className="nav-link text-white mx-2">Home</Link>
          <Link to="register" className="nav-link text-white mx-2">Register</Link>
          <Link to="login" className="nav-link text-white mx-2">Login</Link>

        </nav>
        <div>          
          <span><Link to='login'><span className='bi bi-person-fill mx-2 w-25'></span></Link> </span>
          <span className='bi bi-cart-plus'></span>
        </div>
      </header>
      <section className='mt-4 p-3'>
          <Routes>
            <Route path="home" element={<AmazonSearch/>} />
            <Route path="register" element={<FormTask/>} />
            <Route path="login" element={<div className='container-fluid mx-auto p-2 w-25 bg-black text-white' style={{boxShadow:'5px 5px 5px gray'}}><div className="modal-body">
              <h2 className='text-center bi bi-person'> Login</h2>
                                <dl>
                                    <dt>User Name : </dt>
                                    <dd><input type="text" className="form-control" name="username" /></dd>
                                    <dt>Email : </dt>
                                    <dd><input type="email" className="form-control" name="email"/></dd>
                                    <dt>Password : </dt>
                                    <dd><input type="password" className="form-control" name="password"/></dd>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </dl>

                            </div></div>} />
          </Routes>
        

      </section>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
