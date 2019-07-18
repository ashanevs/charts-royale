import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

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
    let player = this.props.player;
    this.setState({
      chartData: {
        labels: ["Wins", "Losses", "Draws"],
        datasets: [
          {
            label: "Ladder Match Statistics",
            data: [player.games.wins, player.games.losses, player.games.draws],
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
    return (
      <div>
        <Pie
          data={this.state.chartData}
          width={200}
          height={50}
          options={{
            title: {
              display: true,
              text: "Ladder Match Statistics",
              fontSize: 18,
              fontFamily: "Supercell",
              fontColor: "#555555"
            }
          }}
        />
      </div>
    );
  }
}

export default PlayerWinChart;
