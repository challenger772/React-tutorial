import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img  src={this.props.author.avatarUrl} 
            alt={this.props.author.name}
          />
          <div>{this.props.author.name}</div>
        </div>
        <div>{this.props.text}</div>
        <div>{formatDate(this.props.date)}</div>
      </div>
    );
  }
}

function formatDate(date) {
  return date.toLocaleTimeString();
}

const comment = {
  text: 'this is my page',
  author: {
    avatarUrl: 'https://placekitten.com/g/64/64',
    name: 'John Smith'
  },
  date: new Date()
}

ReactDom.render(
  <App 
    text={comment.text}
    author={comment.author}
    date={comment.date}
  />,
  document.getElementById('root')
)