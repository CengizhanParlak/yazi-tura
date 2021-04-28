import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
   constructor(props) {
      super(props);
      // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
      // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
      this.state = {
         side: "tura",
         flipping: false,
         tailsCount: 0,
         headsCount: 0,
         totalFlip: 0,
      };
   }
   handleClick = () => {
      this.setState({ totalFlip: this.state.totalFlip + 1 });
      this.setState({ flipping: this.state.flipping = true })
      if (Math.random() < 0.5) {
         this.setState(prevState => {
            return ({
               ...prevState,
               side: 'tura',
               headsCount: this.state.headsCount + 1,
            })
         });
      }
      else {
         this.setState(prevState => {
            return ({
               ...prevState,
               side: 'yazi',
               tailsCount: this.state.tailsCount + 1,
            })
         });
      }

      // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
      setTimeout(() => this.setState({ flipping: false }), 1000);
   };

   render() {
      return (
         <div className="CoinFlipper">
            <h1>Coin Toss</h1>
            <Coin side={this.state.side} flipping={this.state.flipping} />
            <button onClick={this.handleClick}>Flip!</button>
            <p>
               Tossed
          <strong> {this.state.totalFlip} </strong>
          times <br />
               <strong> {this.state.headsCount} </strong> times was heads and <br />
               <strong> {this.state.tailsCount} </strong> times was tails.
        </p>
         </div>
      );
   }
}

export default CoinFlipper;
