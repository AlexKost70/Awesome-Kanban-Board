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

  newDescription = {
    blockId: undefined,
    id: undefined,
    describtion: undefined
  }

  updateDescription = (blockId, id, describtion) => {
    this.newDescription = {
      blockId: blockId,
      id: id,
      describtion: describtion
    }
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main updateCounter={this.updateCounter} />} />
            <Route path="/tasks" element={<Main updateCounter={this.updateCounter} newDescription={this.newDescription} />} />
            <Route path="/tasks/:id" element={<BlockDescription updateDescription={this.updateDescription} />} />
          </Routes>
          <Footer activeTasks={this.state.activeTasks} finishedTasks={this.state.finishedTasks} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;