import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlockDescription from './components/main/block/blockDescription/BlockDescription';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTasks: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data"))[0].issues.length : 0,
      finishedTasks: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data"))[3].issues.length : 0
    }
  }

  updateCounter = () => {
    this.setState({
      activeTasks: JSON.parse(localStorage.getItem("data"))[0].issues.length,
      finishedTasks: JSON.parse(localStorage.getItem("data"))[3].issues.length
    });
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main updateCounter={this.updateCounter} />} />
            <Route path="/tasks" element={<Main />} />
            <Route path="/tasks/:id" element={<BlockDescription />} />
          </Routes>
          <Footer activeTasks={this.state.activeTasks} finishedTasks={this.state.finishedTasks} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;