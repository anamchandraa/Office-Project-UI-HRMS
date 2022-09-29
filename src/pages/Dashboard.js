const Dashboard = () => {

  var userData = localStorage.getItem("token");

  const t = JSON.parse(userData);

  if (t.UserType == "SubAdmin") {
    return (



      <div style={{ height: 500 }}>
        <main id="main" classNameName="main">
          <div classNameName="pagetitle">
            <h1>Admin Dashboard</h1>
            <nav>
              <ol classNameName="breadcrumb">
                <li classNameName="breadcrumb-item">
                  <a href="dashboard">Dashboard</a>
                </li>
                <li classNameName="breadcrumb-item">Pages</li>

              </ol>
            </nav>
          </div>

          <section className="section dashboard">
            <div className="row">


              <div className="col-lg-12">
                <div className="row">


                  <div className="col-xxl-4 col-md-4">
                    <div className="card info-card sales-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Total Employee <span>| Today</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-person"></i>
                          </div>
                          <div className="ps-3">
                            <h6>30</h6>
                            {/* <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className="col-xxl-4 col-md-4">
                    <div className="card info-card revenue-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Present<span>| This Month</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-person"></i>
                          </div>
                          <div className="ps-3">
                            <h6>28</h6>
                            {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className="col-xxl-4 col-md-4">
                    <div className="card info-card revenue-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Absent<span>| This Month</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-person"></i>
                          </div>
                          <div className="ps-3">
                            <h6>02</h6>
                            {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                </div>
              </div>




            </div>
          </section>

        </main>
      </div>
    )
  }

  else if (t.UserType == "Employee") {
    return (
      <div style={{ height: 500 }}>
        <main id="main" classNameName="main">
          <div classNameName="pagetitle">
            <h1>Employee Dashboard</h1>
            <nav>
              <ol classNameName="breadcrumb">
                <li classNameName="breadcrumb-item">
                  <a href="dashboard">Dashboard</a>
                </li>
                <li classNameName="breadcrumb-item">Pages</li>

              </ol>
            </nav>
          </div>



        </main>
      </div>);
  }
};
export default Dashboard;
