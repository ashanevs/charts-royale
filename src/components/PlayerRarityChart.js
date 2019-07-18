import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PlayerRarityChart extends Component {
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
        labels: [
          "Wins: " + this.props.player.data.games.wins,
          "Losses: " + this.props.player.data.games.losses,
          "Draws: " + this.props.player.data.games.draws
        ],
        datasets: [
          {
            label: "Ladder Match Statistics",
            data: [
              this.props.player.data.games.wins,
              this.props.player.data.games.losses,
              this.props.player.data.games.draws
            ],
            backgroundColor: [
              // "rgba(255, 99, 132, 0.6)",
              // "rgba(54, 162, 235, 0.6)",
              // "rgba(255, 206, 86, 0.6)",
              // "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)"
            ]
          }
        ]
      }
    });
  };
  render() {
    let commonCards = 0;
    let commonCounter = 0;
    let rareCards;
    let epicCards;
    let legendaryCards;
    for (let i = 0; i < this.props.player.data.cards.length; i++) {
      if (this.props.player.data.cards[i].rarity === "Common") {
        commonCounter += 1;
        commonCards += this.props.player.data.cards[i].displayLevel;
      }
      if (this.props.player.data.cards[i].rarity === "Rare") {
        // rareCards.push();
      }
      if (this.props.player.data.cards[i].rarity === "Epic") {
        // epicCards.push();
      }
      if (this.props.player.data.cards[i].rarity === "Legendary") {
        // legendaryCards.push();
      }
    }
    console.log(commonCards);
    console.log(commonCounter);
    return <div>Stuff</div>;
  }
}

export default PlayerRarityChart;
