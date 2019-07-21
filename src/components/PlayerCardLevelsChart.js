import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PlayerCardLevelsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }
  componentDidMount = () => {
    this.getChartData();
  };
  getChartData = () => {
    let player = this.props.player;
    let playerCardLevels = {
      level1: 0,
      level2: 0,
      level3: 0,
      level4: 0,
      level5: 0,
      level6: 0,
      level7: 0,
      level8: 0,
      level9: 0,
      level10: 0,
      level11: 0,
      level12: 0,
      level13: 0
    };
    for (let i = 0; i < player.cards.length; i++) {
      if (player.cards[i].displayLevel === 13) {
        playerCardLevels.level13 += 1;
      } else if (player.cards[i].displayLevel === 12) {
        playerCardLevels.level12 += 1;
      } else if (player.cards[i].displayLevel === 11) {
        playerCardLevels.level11 += 1;
      } else if (player.cards[i].displayLevel === 10) {
        playerCardLevels.level10 += 1;
      } else if (player.cards[i].displayLevel === 9) {
        playerCardLevels.level9 += 1;
      } else if (player.cards[i].displayLevel === 8) {
        playerCardLevels.level8 += 1;
      } else if (player.cards[i].displayLevel === 7) {
        playerCardLevels.level7 += 1;
      } else if (player.cards[i].displayLevel === 6) {
        playerCardLevels.level6 += 1;
      } else if (player.cards[i].displayLevel === 5) {
        playerCardLevels.level5 += 1;
      } else if (player.cards[i].displayLevel === 4) {
        playerCardLevels.level4 += 1;
      } else if (player.cards[i].displayLevel === 3) {
        playerCardLevels.level3 += 1;
      } else if (player.cards[i].displayLevel === 2) {
        playerCardLevels.level2 += 1;
      } else if (player.cards[i].displayLevel === 1) {
        playerCardLevels.level1 += 1;
      }
    }
    this.setState({
      chartData: {
        labels: [
          "Level 1",
          "Level 2",
          "Level 3",
          "Level 4",
          "Level 5",
          "Level 6",
          "Level 7",
          "Level 8",
          "Level 9",
          "Level 10",
          "Level 11",
          "Level 12",
          "Level 13"
        ],
        datasets: [
          {
            label: "Ladder Match Statistics",
            data: [
              playerCardLevels.level1,
              playerCardLevels.level2,
              playerCardLevels.level3,
              playerCardLevels.level4,
              playerCardLevels.level5,
              playerCardLevels.level6,
              playerCardLevels.level7,
              playerCardLevels.level8,
              playerCardLevels.level9,
              playerCardLevels.level10,
              playerCardLevels.level11,
              playerCardLevels.level12,
              playerCardLevels.level13
            ],
            backgroundColor: [
              "rgba 255, 255, 255, 0.6",
              "rgba(255, 100, 0, 0.6)",
              "rgba(0,0,139 ,0.6 )",
              "rgba(242, 38, 19, 0.6)",
              "rgba(46, 204, 113, 0.6)",
              "rgba(192,192,192,0.6",
              "rgba(0,100,0 ,0.6 )",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)"
            ]
          }
        ]
      }
    });
  };
  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          width={200}
          height={200}
          options={{
            title: {
              display: true,
              text: "Total Cards By Level",
              fontSize: 18,
              fontFamily: "Supercell",
              fontColor: "#555555"
            },
            responsive: true,
            animation: { animateScale: true }
          }}
        />
      </div>
    );
  }
}

export default PlayerCardLevelsChart;
