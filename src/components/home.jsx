import React, { Component } from 'react'
import Axios from "axios"
import { Route, Switch, NavLink, Link } from "react-router-dom";



class Home extends Component {
  state = {}
  componentWillMount() {

  }

  handleclick = async (val) => {

    console.log("clicked")
    console.log(val);
    // user = this.user;

    const response = await Axios.post(
      "http://localhost:3002/scrap", { pro: val });
    console.log(response);
  };



  render() {
    return (<div>


      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://www.stablx.com/wp-content/uploads/2019/06/stablx-logo.png" alt="" width="40" height="30" class="d-inline-block align-top" />
      StablX
    </a>
        </div>

      </nav>

      <h5 style={{ color: "#f7c11e", border: "1px solid yellow", textAlign: "center" }}>Sample Products from amazon
</h5>

      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="data:image/jpeg;base64,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" class="card-img-top" height="140%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Running Shoes</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "RunningShoes",
                      url: "data:image/jpeg;base64,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"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>
            <hr />
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="https://m.media-amazon.com/images/I/71c79ZSB60L._AC_UL320_.jpg" class="card-img-top" height="140%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Weight Lifting Shoes

</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "Weight_Lifting_Shoes",
                      url: "https://m.media-amazon.com/images/I/71c79ZSB60L._AC_UL320_.jpg"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="https://blog.talkcharge.com/wp-content/uploads/2020/05/Powermax-Fitness-Tda-230-2Hp-Motorized-Treadmill.jpg" class="card-img-top" height="140%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Treadmills</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "treadmill",
                      url: "https://blog.talkcharge.com/wp-content/uploads/2020/05/Powermax-Fitness-Tda-230-2Hp-Motorized-Treadmill.jpg"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>
            <hr />
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="https://m.media-amazon.com/images/I/91aVEDztNpL._AC_UL320_.jpg" class="card-img-top" height="100%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Weight lifting Belts


</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "Weight_lifting_Belts",
                      url: "https://m.media-amazon.com/images/I/91aVEDztNpL._AC_UL320_.jpg"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="https://images-na.ssl-images-amazon.com/images/I/41ygCEaIw5L._SX425_.jpg" class="card-img-top" height="140%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Dumbbells</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "Dumbbells",
                      url: "https://images-na.ssl-images-amazon.com/images/I/41ygCEaIw5L._SX425_.jpg"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>
            <hr />
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="https://m.media-amazon.com/images/I/61kMZ0w6WOL._AC_UY218_.jpg" class="card-img-top" height="100%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Workout Headphones



</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "Workout_Headphones",
                      url: "https://m.media-amazon.com/images/I/61kMZ0w6WOL._AC_UY218_.jpg"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>
          </div>


          <div className="col-md-3">
            <div class="card" style={{ width: "14.5rem" }}>

              <img src="https://m.media-amazon.com/images/I/412dHT5Fd7L._AC_UL320_.jpg" class="card-img-top" height="140%" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Home Gym Equipment
</h5>
                {/* <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> </button> */}
                <Link style={{ color: "yellow" }}
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/downloadcsv",
                    state: {
                      pro: "Home_Gym_Equipment",
                      url: "https://m.media-amazon.com/images/I/412dHT5Fd7L._AC_UL320_.jpg"
                    },
                  }}
                  style={{ color: "black" }}
                >
                  <b>Download  price</b>
                </Link>
                <br /> </div>
            </div>

          </div>


        </div>
      </div>


    </div>
    );
  }
}

export default Home;