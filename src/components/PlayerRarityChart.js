import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class PlayerRarityChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      rarityData: {}
    };
  }
  componentWillMount = () => {
    this.getChartData();
  };
  getChartData = () => {
    this.setState({
      chartData: {
        labels: [
          "Card Rarity"
          // "Common"
          // "Rare",
          // "Epic",
          // "Legendary"
          // "Average Rare Level",
          // "Average Epic Level",
          // "Average Legendary Level"
        ],
        datasets: [
          {
            label: "Common",
            data: [
              this.getRarityData().common
              // this.getRarityData().rare,
              // this.getRarityData().epic,
              // this.getRarityData().legendary
            ],
            backgroundColor: [
              // "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, .8)",
              "rgba(255, 159, 64, .8)",

              "rgba(153, 102, 255, .8)",
              "rgba(255, 206, 86, .8)"
              // "rgba(75, 192, 192, 0.6)"
              // "rgba(255, 99, 132, 1)"
            ]
          },
          {
            label: "Rare",
            data: [this.getRarityData().rare],
            backgroundColor: "rgba(255, 159, 64, .8)"
          },
          {
            label: "Epic",
            data: [this.getRarityData().epic],
            backgroundColor: "rgba(153, 102, 255, .8)"
          },
          {
            label: "Legendary",
            data: [this.getRarityData().legendary],
            backgroundColor: "rgba(255, 206, 86, .8)"
          }
        ]
      }
    });
  };
  getRarityData = () => {
    let player = this.props.player;
    let commonCards = 0;
    let commonCounter = 0;
    let rareCards = 0;
    let rareCounter = 0;
    let epicCards = 0;
    let epicCounter = 0;
    let legendaryCards = 0;
    let legendaryCounter = 0;
    for (let i = 0; i < player.cards.length; i++) {
      if (player.cards[i].rarity === "Common") {
        commonCounter += 1;
        commonCards += player.cards[i].displayLevel;
      } else if (player.cards[i].rarity === "Rare") {
        rareCounter += 1;
        rareCards += player.cards[i].displayLevel;
      } else if (player.cards[i].rarity === "Epic") {
        epicCounter += 1;
        epicCards += player.cards[i].displayLevel;
      } else if (player.cards[i].rarity === "Legendary") {
        legendaryCounter += 1;
        legendaryCards += player.cards[i].displayLevel;
      }
    }
    return {
      common: (commonCards / commonCounter).toFixed(2),
      rare: (rareCards / rareCounter).toFixed(2),
      epic: (epicCards / epicCounter).toFixed(2),
      legendary: (legendaryCards / legendaryCounter).toFixed(2)
    };
  };

  render() {
    return (
      <div className="chart">
        {" "}
        <Bar
          data={this.state.chartData}
          // width={100}
          // height={50}
          options={{
            title: {
              display: true,
              text: "Card Rarity Statistics",
              fontSize: 18,
              fontFamily: "Supercell",
              fontColor: "#555555"
            },
            legend: { position: "bottom" },
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 13,
                    min: 9
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default PlayerRarityChart;
