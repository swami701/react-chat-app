/*eslint-disable */
import * as React from 'react';

export default class ChatInput extends React.Component {
  render() {
    return (<footer className="teal">
      <form className="container">
        <div className="row">
          <div className="input-field col s10">
            <i className="prefix mdi-communication-chat" />
            <input type="text" placeholder="Type your message" />
            <span className="chip left">
              <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" />
              <span>Anonymous robot #503483</span>
            </span>
          </div>
          <div className="input-field col s2">
            <button type="submit" className="waves-effect waves-light btn-floating btn-large">
              <i className="mdi-content-send" />
            </button>
          </div>
        </div>
      </form>
    </footer>);
  }
}
