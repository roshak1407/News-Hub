import { useState } from "react";
const Navbar = ({ setCategory, setCountry }) => {
    const[selectedcountry,setselectedcountry]=useState("United States");

    const handlecountryselect=(countrycode,countryname)=>{
         setCountry(countrycode);
         setselectedcountry(countryname);
    }

    
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-bg-secondary fs-5">News <span className="badge text-bg-danger">Mag</span></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("technology")}>Technology</div>
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("business")}>Business</div>
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("health")}>Health</div>
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("science")}>Science</div>
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("sports")}>Sports</div>
            </div>
            <div className="dropdown ms-auto">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                {selectedcountry}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <div className="dropdown-item" style={{ cursor: "pointer" }} onClick={()=>handlecountryselect("ae", "United Arab Emirates")}>
                    United Arab Emirates
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" style={{ cursor: "pointer" }} onClick={()=>handlecountryselect("ar", "Argentina")}>
                    Argentina
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" style={{ cursor: "pointer" }} onClick={()=>handlecountryselect("us", "United States")}>
                     United States
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" style={{ cursor: "pointer" }} onClick={()=>handlecountryselect("ca", "Canada")}>
                     Canada
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  