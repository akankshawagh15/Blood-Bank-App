import React from "react";
import HomeHeader from "../shared/Layout/HomeHeader";
import { Link } from "react-router-dom";

const Newshome = () => {
  return (
    <>
      <HomeHeader />
      <div className="bg-danger">
        <div>
          <h1 className="homequt mx-4">NEWS</h1>
        </div>
        <div className="container">
          <div className="uscontainer">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/12/15/39/blood-pressure-150267_1280.png"
                    className="img-fluid rounded-start col-md-4"
                    alt="New1"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Who can donate blood? What to know about FDA’s new
                      guidelines
                    </h5>
                    <p className="card-text">
                      The Food and Drug Administration updated its guidelines
                      this week regarding who can donate blood in the United
                      States, eliminating a decades-old rule stemming from the
                      AIDS crisis that prohibited men who have sex with men from
                      donating.
                    </p>
                    <p className="card-text">
                      <Link
                        to="https://www.washingtonpost.com/wellness/2023/05/12/who-can-donate-blood-fda-guidance/"
                        className="btn btn-primary"
                      >
                        Visit
                      </Link>
                      <br />
                      <small className="text-muted">
                        Last updated 2 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second news */}
          <div className="uscontainer">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/11/08/15/47/heart-5724137_1280.png"
                    className="img-fluid rounded-start col-md-4"
                    alt="New2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Donations needed: Nation’s blood supply critically low
                    </h5>
                    <p className="card-text">
                      According to the American Red Cross, the nation's blood
                      supply is critically low. The organization reports that
                      the weather has caused many blood drives to be canceled
                      and made it harder for the Red Cross to move supplies
                      around to meet needs.
                    </p>
                    <p className="card-text">
                      <Link
                        to="https://newsnetwork.mayoclinic.org/discussion/donations-needed-nations-blood-supply-critically-low/"
                        className="btn btn-primary"
                      >
                        Visit
                      </Link>{" "}
                      <br />
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third news */}
          <div className="uscontainer">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/10/02/18/03/ai-generated-8289758_1280.jpg"
                    className="img-fluid rounded-start col-md-4"
                    alt="New3"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Powergrid Corporation donated ₹70 lakh to set up blood
                      component unit
                    </h5>
                    <p className="card-text">
                      Indian Red Cross Society’s Vizianagaram district chairman
                      K.R.D. Prasada Rao on Saturday said that Powergrid
                      Corporation of India Limited (PGCL) provided ₹70 lakh for
                      the establishment of blood component unit in the blood
                      bank of IRCS. He inaugurated the blood donation camp in
                      Tata AIA office on the occasion of its 25th anniversary.
                    </p>
                    <p className="card-text">
                      <Link
                        to="https://www.thehindu.com/news/national/andhra-pradesh/powergrid-corporation-donated-70-lakh-to-set-up-blood-component-unit-says-red-cross-vizianagaram-district-chairman/article67832437.ece"
                        className="btn btn-primary"
                      >
                        Visit
                      </Link>{" "}
                      <br />
                      <small className="text-muted">
                        Last updated 59 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth news */}
          <div className="uscontainer">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/05/25/02/42/world-blood-donor-day-7219630_1280.png"
                    className="img-fluid rounded-start col-md-4"
                    alt="New4"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      India requires 14.6 million blood units every year: Health
                      ministry
                    </h5>
                    <p className="card-text">
                      On World Blood Donors Day, the health ministry drew
                      attention to the country’s high demand for blood
                      transfusions, which currently occurs every two seconds.
                    </p>
                    <p className="card-text">
                      <Link
                        to="https://www.livemint.com/news/india/india-requires-14-6-million-blood-units-every-year-health-ministry-11686739891661.html"
                        className="btn btn-primary"
                      >
                        Visit
                      </Link>
                      <br />
                      <small className="text-muted">
                        Last updated 10 day ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newshome;
