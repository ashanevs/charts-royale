import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api-v3.royaleapi.com/";
class ClanHistoryChart extends Component {
  constructor() {
    super();
    this.state = {
      clanHistory: {},
      chartData: {}
    };
  }
  componentDidMount = () => {
    axios
      .get(proxyurl + url + "clan/" + this.props.clan.tag + "/history", {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7InVzZXJuYW1lIjoiSGlyYWV0aCIsImRpc2NyaW1pbmF0b3IiOiI1MzUyIiwia2V5VmVyc2lvbiI6M30sInRzIjoxNTY1ODg4MTU5MjkzfQ.rlEP-CqesaXwAwNsgZ-jNpzGJ3FDYVsCvVWZtQcn_pQ"
        }
      })
      .then(response => {
        this.setState({ clanHistory: response.data });
        this.getChartData();
      });
  };
  getChartData = () => {
    let clanHistoryValues = Object.values(this.state.clanHistory);
    let clanHistoryScores = clanHistoryValues.map(item => {
      return item.trophies;
    });
    let clanHistoryTimeStamps = clanHistoryValues.map(item => {
      return item.timestamp.slice(0, 10);
    });
    this.setState({
      chartData: {
        labels: clanHistoryTimeStamps,
        datasets: [
          {
            label: "Clan Score",
            data: clanHistoryScores,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)"
              // These colors commented out deliberately in case needed for reference in new chart
              // "rgba(54, 162, 235, 0.6)",
              // "rgba(255, 206, 86, 0.6)",
              // "rgba(75, 192, 192, 0.6)",
              // "rgba(153, 102, 255, 0.6)",
              // "rgba(255, 159, 64, 0.6)",
              // "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  };
  render() {
    let dataCheck = Object.entries(this.state.chartData);
    return (
      <div className="chart">
        {dataCheck.length > 0 ? (
          <Line
            data={this.state.chartData}
            width={200}
            height={150}
            options={{
              title: {
                display: true,
                text: "Clan Score Over Time",
                fontSize: 18,
                fontFamily: "Supercell",
                fontColor: "#555555"
              },
              responsive: true,
              animation: { animateScale: true },
              maintainAspectRatio: true
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ClanHistoryChart;
