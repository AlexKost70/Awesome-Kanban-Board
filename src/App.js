import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTasks: 1,
      finishedTasks: 0
    };
  }

  updateCounter = (activeTasks, finishedTasks) => {
    this.setState({
      activeTasks: activeTasks,
      finishedTasks: finishedTasks
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main updateCounter={this.updateCounter} />
        <Footer activeTasks={this.state.activeTasks} finishedTasks={this.state.finishedTasks} />
      </div>
    );
  }
}

export default App;