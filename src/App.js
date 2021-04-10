
import { Component } from 'react';
import './App.css';
import  ReviewComp from './reviewComp';
import users from './Data';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      i:0
    }
  }


  onClickLeft=()=>{
    console.log("click left");
    const iOld=this.state.i;
    if(iOld === 0){
      this.setState({i:users.length-1});
    }else{
      this.setState({i:iOld-1});
    }
  }

  onClickRight=()=>{
    console.log("click right")
    const iOld=this.state.i;
    if(iOld === users.length-1){
      this.setState({i:0});
    }else{
      this.setState({i:iOld+1});
    }
  }

  onClickRanddom=()=>{
    console.log("click random")
    this.setState({i:1});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <ReviewComp 
          onClickLeft={this.onClickLeft}
          onClickRight={this.onClickRight}
          onClickRanddom={this.onClickRanddom}
          user={users[this.state.i]}
          />
        </header>
      </div>
    );
  }
}

export default App;
