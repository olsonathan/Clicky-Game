import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
//import Counter from "./components/Counter";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    score: false,
    clickedCard: []
  };

  
  
  handleIncrement = id => {
    this.setState({ clickedCard: [...this.state.clickedCard, this.state.count] }) //simple value
   // this.setState({ clickedCard: this.state.clickedCard.concat(id) });
    //console.log(this.name)
    const currentCard = this.name;
    const CardAlreadyClicked =
      this.state.clickedCard.indexOf(currentCard) > -1;
       console.log(this.state.clickedCard)
        // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.state.friends.sort(() => Math.random() - 0.5);
    this.setState({score: false});
    console.log(this.state.score)
    
    if(CardAlreadyClicked){
      alert("You Lose")
      this.setState({
        count: 0,
        score: false,
        clickedCard: []
      })
    }


    else if (this.state.count === 16){
      alert("You are good at clicking")
      this.setState({
        count: 0,
        score: false,
        clickedCard: []
      })
    }

  };
  
  

/*
 gameOver = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore);
    });
  }
  this.state.cards.forEach(card => {
    card.count = 0;
  });
  alert(`Game Over :( \nscore: ${this.state.score}`);
  this.setState({score: 0});
  return true;
}


  handleIncrement = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }


*/
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        
        <div className="card-body">
        <p className="card-text">Click Count: {this.state.count}</p>
       
         </div>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
          
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            score={friend.score}
            handleIncrement={this.handleIncrement}
          />
        ))}


      </Wrapper>
     
      

    );
  }

 // 


}


 


export default App;
