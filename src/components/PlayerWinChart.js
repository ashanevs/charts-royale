import React, { Component } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";

class PlayerWinChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }
  componentWillMount = () => {
    this.getChartData();
  };
  getChartData = () => {
    this.setState({
      chartData: {
        labels: ["Wins", "Losses", "Draws"],
        datasets: [
          {
            label: "Ladder Match Statistics",
            data: [
              this.props.player.data.games.wins,
              this.props.player.data.games.losses,
              this.props.player.data.games.draws
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)"
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
    return (
      <div>
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Ladder Match Statistics",
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default PlayerWinChart;
