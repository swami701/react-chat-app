/*eslint-disable */
import React from 'react';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
class App extends React.Component {
  render() {
    return (
      <div>
        <ChatHistory/>
        <ChatInput/>
      </div>
    );
  }
}
export default (App);
