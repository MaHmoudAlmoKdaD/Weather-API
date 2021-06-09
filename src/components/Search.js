import React from "react";
import '../App.css'
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="wrapper">
        {/* {this.state.input} */}
        <div className="inputs-fileds">
          <input placeholder="Type in a city name"
            type="text" id="input-name" onChange={event => {
                this.setState({ input: event.target.value });
              }}
          />
          <button
            onClick={event => {
              this.props.handleInput(this.state.input);
            }}
          >
            Find Weather
          </button>
        </div>
      </div>
    );
  }
}
export default Search;
