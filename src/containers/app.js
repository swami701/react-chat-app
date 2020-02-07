/*eslint-disable */
import React from 'react';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
class App extends React.Component {
  state = {
    userID: Math.round(Math.random() * 1000000).toString(),
    history: []
  }
  sendMessage = (message) => {
    this.setState({history: this.state.history.concat(message)});
  }
  render() {
    const { sendMessage, state } = this;
    return (
      <div>
        <ChatHistory history={state.history} />
        <ChatInput userID={state.userID} sendMessage={sendMessage} />
      </div>
    );
  }
}
export default App;
