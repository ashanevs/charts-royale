import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

class ClanWarChart extends Component {
  constructor() {
    super();
    this.state = {
      clanWarData: {},
      chartData: {}
    };
  }
  componentWillMount = () => {
    axios
      .get(
        "https://api.royaleapi.com/clan/" + this.props.clan.tag + "/warlog",
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc1MCwiaWRlbiI6IjI1MDQzMzU4NDEyMzQ3ODAyNiIsIm1kIjp7fSwidHMiOjE1NjMzMTc2NjQ5MjJ9.G4gAN7044E1oBnhysqh8QxwniMtoeAR8zpvtVZNPhHo"
          }
        }
      )
      .then(response => {
        this.setState({ clanWarData: response.data });
        this.getChartData();
      });
  };
  getChartData = () => {
    let participantCountArray = this.state.clanWarData.map(item => {
      return item.participants.length;
    });
    let winCountArray = this.state.clanWarData.map(item => {
      let counter = 0;

      for (let i = 0; i < item.participants.length; i++) {
        counter += item.participants[i].wins;
      }
      return counter;
    });
    this.setState({
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Number of Participants",
            data: participantCountArray,
            backgroundColor:
              // "rgba(255, 99, 132, 0.6)",
              // "rgba(54, 162, 235, 0.6)",
              // "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)"
            // "rgba(153, 102, 255, 0.6)"
            // "rgba(255, 159, 64, 0.6)",
            // "rgba(255, 99, 132, 0.6)"
          },
          {
            label: "Number of Wins",
            data: winCountArray,
            backgroundColor: "rgba(153, 102, 255, .8)"
          }
          // {
          //   label: "Legendary",
          //   data: [this.getRarityData().legendary],
          //   backgroundColor: "rgba(255, 206, 86, .8)"
          // }
        ]
      }
    });
  };
  render() {
    let dataCheck = Object.entries(this.state.chartData);
    return (
      <div className="chart">
        {dataCheck.length > 0 ? (
          <Bar
            data={this.state.chartData}
            width={200}
            height={150}
            options={{
              title: {
                display: true,
                text: "History of Last 10 War Battles",
                fontSize: 18,
                fontFamily: "Supercell",
                fontColor: "#555555"
              },
              responsive: true,
              animation: { animateScale: true },
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 50,
                      min: 15
                    }
                  }
                ]
              }
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ClanWarChart;
