import React, { Component } from "react";
import { DefaultContext } from "./default-context";
import Header from "./Header";

class App extends Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div className="page">
        <DefaultContext.Provider value={this.state.userData}>
          <Header />
        </DefaultContext.Provider>
      </div>
    );
  }
}

export default App;