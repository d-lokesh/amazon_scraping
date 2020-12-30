import React, { Component } from 'react'
import Axios from "axios";
import sam from "../assets/sam.gif";
import avg from "../assets/avg.gif"
import { CSVLink, CSVDownload } from "react-csv";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import CsvDownloader from 'react-csv-downloader';



class Scrap extends Component {
  state = {
    url: this.props.location.state.url,
    data: null,
    data1: null,
    res: null,
    flag: 0,
    pnames:null,
    price:null,
    csv:null,
    datas:null,
    col:null,
  }


  handleclick = async () => {
    this.setState({ flag: 1 });

    const val = this.props.location.state.pro;

    console.log("clicked")
    console.log(val);
    // user = this.user;

    await Axios.post(
      "http://localhost:3002/scrap", { pro: val }).then((res) => {
        var res1=res.data.avg;
        var prices = res.data.price;
        var pnames = res.data.pnames;
        this.setState({ res: res1});
        this.setState({price:prices});
        this.setState({pnames:pnames});
        console.log(res, "your response");
        console.log("names",this.state.pnames);
        console.log("prices",this.state.price);

      var csv = [["Poduct_Name","Product_price","Product_Average_price"]];



//       for (var x in this.state.pnames){
//         var temp = [];
//         var avgt=this.state.res;
// // csv.concat(","+String(pnames[x]),","+this.state.price[x],","+String(avgt))
//       temp.push(String(pnames[x]));
//       temp.push(String(this.state.price[x]));
//       temp.push(String(avgt));
//       csv.push(Array(temp))
//       console.log("in for csv")
//       console.log("tcsv",csv)
//       }

//       this.setState({csv:csv})
//       console.log("csvdata from state",this.state.csv)
//       for(var x in this.state.csv){
//         console.log(typeof(this.state.csv[x]))
//         for (var i in this.state.csv[x] )
//         {
//           console.log(typeof(this.state.csv[x][i]))
//         }
//       }

     

      const columns = [{
        id: 'first',
        displayName: 'Poduct_Name'
      }, {
        id: 'second',
        displayName: 'Product_price'
      },
      {
        id: 'third',
        displayName: 'Product_Average_price'
      }

    ];
    this.setState({col:columns});

    const datas = []
    for (var x in this.state.pnames){
      var avgt=this.state.res;
      var tempobj = {
        first: 'foo',
        second: 'bar',
        third:'sample'
      };

      tempobj.first=String(pnames[x]);
      tempobj.second=String(this.state.price[x]);
      tempobj.third=String(avgt);

      datas.push(tempobj);

    }
    this.setState({datas:datas})
    console.log(datas,'datas')
  })

  };


  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="https://www.stablx.com/wp-content/uploads/2019/06/stablx-logo.png" alt="" width="40" height="30" class="d-inline-block align-top" />
      StablX
    </a>
          </div>

        </nav>

        <h5 style={{ color: "#f7c11e", border: "1px solid yellow", textAlign: "center" }}>Scraping price and download CSV from Amazon
</h5>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="card" >
                <div className="row">
                  <div className="col-md-6">
                    <img src={this.state.url} class="card-img-top" alt="..." />

                  </div>
                  <div className="col-md-6" >
                    <div class="card-body">
<hr/>
                      <h6 class="card-text">find average price of the product from amazon.in</h6>

<hr/>

<hr/>
                      <button value={"treadmill"} onClick={() => this.handleclick("treadmill")} className="btn btn-outline-warning" style={{ textAlign: "center", alignContent: "center", alignSelf: "center" }}> find price</button>

<hr/> 
                    </div></div>

                </div>

              </div>
            </div>
            <div className="col-md-6">
              {(this.state.flag === 1 & this.state.res === null) ? (<div>
                <div class="card">
                    <div class="card-body">
                <h6 style={{ color: "gray", textAlign: "left" }}>
                  please wait scraping required data from Amazon.in ......
</h6>
                <img src={sam} alt="" width="50%" height="45%" />

              </div>
              </div>
              </div>)
                : (<div>
                </div>)}

              {this.state.res ? (

                <div>
                  <div class="card">
                    <div class="card-body">
                      <h6 style={{ textAlign: "left" }}>
                        Average price after scraping  from Amazon.in                       </h6>
                      <img src={avg} alt="" width="100%" height="80%" />
                      <br/>
<hr/>
                      <div
                        className="card"
                        style={{ border: "1px solid black" }}
                      >
                        <div className="cardbody" style={{ margin: "2px" }}>
                         
                          <h6 style={{ color: "gray", textAlign: "left" }}>
                            Our system Extracted data from Amazon.in 
                              
                          </h6>
                          <h6 style={{ color: "gray", textAlign: "left" }}>
                            {" "}
                              Average price of the product is  RS : {this.state.res}
                          </h6>
                          <hr/>
                          <div className="row">
                            <div className="col-sm-6">
                          {/* <CSVLink data={this.state.csv}>Download CSV</CSVLink>   */}
                          {/* <CSVDownload data={this.state.csv} target="_blank" />; */}
                          <CsvDownloader className="btn btn-outline-warning"
        filename="product_prices"
        separator=","
        columns={this.state.col}
        datas={this.state.datas}
        text="DOWNLOAD_CSV" />
    

</div>
                            <div className="col-sm-6">
                            <Link 
                  className=" btn btn-outline-warning "
                  to={{
                    pathname: "/",
                   
                  }}
                >
                  <b>Home</b>
                </Link>
 

                            </div>

                            
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (<div />)}
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Scrap;