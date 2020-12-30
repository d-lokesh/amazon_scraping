import React, { Component } from 'react'

import { CSVLink, CSVDownload } from "react-csv";


class CSV extends Component {
    state = {
        csv: [["name", "age"], ["loki", "54"], ["rahul", 52]]
    }
    sam = () => {
        for (var x in this.state.csv) {
            console.log(typeof (this.state.csv[x]))
            for (var i in this.state.csv[x]) {
                console.log(typeof (this.state.csv[x][i]))
            }
        }
    }


    render() {
        return (
            <div>
                <h5>downloadcsv</h5>

                <CSVLink data={this.state.csv}>Download CSV</CSVLink>;
                <button onClick={this.sam}>clicked</button>
            </div>
        );
    }
}

export default CSV;