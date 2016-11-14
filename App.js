import React from 'react';
// class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {txt: 'this is the state txt'}
    this.update = this.update.bind(this)
  }
  update(event){
    this.setState({txt: event.target.value})
  }

  render(){
    return ( 
      <div>
        <Widget txt= {this.state.txt} update={this.update} />

      </div>
      );
  }
}

// stateless component

const Widget = (props) => {
  return (
  <div>
   <input type= "text"
        onChange={this.update}/>
      <h1>{this.state.txt}</h1>
  </div>
  )
}


export default App