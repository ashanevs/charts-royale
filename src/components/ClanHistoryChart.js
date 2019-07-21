import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

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
      .get(
        "https://api.royaleapi.com/clan/" + this.props.clan.tag + "/history",
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7fSwidHMiOjE1NjMzMTc2NjQ5MjJ9.G4gAN7044E1oBnhysqh8QxwniMtoeAR8zpvtVZNPhHo"
          }
        }
      )
      .then(response => {
        console.log(response.data);
        this.setState({ clanHistory: response.data });
        this.getChartData();
      });
  };
  getChartData = () => {
    let clanHistoryValues = Object.values(this.state.clanHistory);
    let clanHistoryScores = clanHistoryValues.map(item => {
      return item.score;
    });
    this.setState({
      chartData: {
        labels: Object.keys(this.state.clanHistory),
        datasets: [
          {
            label: "Clan Score",
            data: clanHistoryScores,
            backgroundColor: [
              // "rgba(255, 99, 132, 0.6)",
              // "rgba(54, 162, 235, 0.6)",
              // "rgba(255, 206, 86, 0.6)",
              // "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  };
  render() {
    let dataCheck = Object.entries(this.state.chartData);
    console.log(dataCheck);
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
