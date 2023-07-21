import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">learning system</h1>
            <p className="col-md-8 fs-4">
              This system uses React.js as the front-end framework, Node.js,
              MongoDB As a back-end server. Such a project is called MERN
              Project, it is one of the most popular ways to create a modern
              website.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              See how it works.
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>
                Students can register for the courses they like. This website is
                for practice purposes only. Please do not provide any personal
                information such as credit card number.
              </p>
              <button className="btn btn-outline-light" type="button">
                Sign in, or create an account
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>As a instructor</h2>
              <p>
                You can register as an instructor and start making online
                courses. This website is for practice purposes only. Please do
                not provide any personal information such as credit card number.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Classes begin today
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Baichuan Liu
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
