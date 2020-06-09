import React from "react";
import CardEditor from "./CardEditor";
import CardViewer from "./CardViewer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      editor: false,
    };
  }

  addCard = (card) => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  };

  deleteCard = (index) => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards });
  };

  switchMode = () => this.setState({ editor: !this.state.editor });

  render() {
    if (this.state.editor) {
      return (
        <CardEditor
          addCard={this.addCard}
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          switchMode={this.switchMode}
        />
      );
    } else {
      return (
        <CardViewer cards={this.state.cards} switchMode={this.switchMode} />
      );
    }
  }
}

export default App;
