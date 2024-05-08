import React from "react";

function Project() {
  // const projects = [
  //   {
  //     title: 'coffee-outlet',
  //     features: ['', '', ''],
  //     image: 'coffee-outlet',
  //     gitHub: 'https://github.com/NathaliaReyes/coffee-outlet.git',
  //     videoWalthrought: 'https://drive.google.com/file/d/1vU7d2GpcvbSMt_iA-AzY20sFmxL4tfmc/view?usp=sharing'
  //   },
  //   {
  //     title: '',
  //     features: ['', '', ''],
  //     image: '',
  //     gitHub: '',
  //     videoWalthrought: ''
  //   },
  //   {
  //     title: '',
  //     features: ['', '', ''],
  //     image: '',
  //     gitHub: '',
  //     videoWalthrought: ''
  //   },
  //   {
  //     title: '',
  //     features: ['', '', ''],
  //     image: '',
  //     gitHub: '',
  //     videoWalthrought: ''
  //   },
  //   {
  //     title: '',
  //     features: ['', '', ''],
  //     image: '',
  //     gitHub: '',
  //     videoWalthrought: ''
  //   },
  //   {
  //     title: '',
  //     features: ['', '', ''],
  //     image: '',
  //     gitHub: '',
  //     videoWalthrought: ''
  //   }
  // ]
  return (
    <div className="bg-secondary pt-1 pb-1">
      <section className="container container-fluid mt-5 mb-5 bg-light rounded p-3">
        <h2 className="h2 text-center text-info">Welcome</h2>
        <p className="text-primary text-center text-dark h6">Don't forget to leave feedback and add your favorite cozy spots
          to
          Coffee Outlet!❤️<br></br>
          Your points towards your next cuppa! :</p>
      </section>
      <section className="container container-fluid mt-5">
        <div className="row justify-content-center">
          <div className=" col-md-6 my-1 d-flex align-items-stretch">
            <div className="card p-2 border border-secondary">
              <img className=" card-img-top img-fluid" src="" alt="Coffeeshop Picture" />
                <div className="card-body">
                  <a href="#"><h5 className="card-title text-dark"></h5></a>
                  <p className="card-text"></p>
                </div>
                <div className="card-body bg-info">
                  <a href="/api/coffeeshops/{{coffeeshop.id}}" className="card-link"><i className="fas fa-comment-dots"></i> Add
                    Feedback</a>
                  <a href="tel:{{coffeeshop.phoneNumber}}" className="card-link"><i className="fas fa-phone-alt"></i>
                    Call</a>
                  <a href="#"
                    target="_blank" className="card-link"><i className="fas fa-map-marker-alt"></i> Directions</a>
                  <a href="#" className="card-link"><i className="fas fa-globe"></i> Website</a>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;