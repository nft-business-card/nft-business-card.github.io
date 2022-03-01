import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
import { SwatchesPicker } from 'react-color'
import {
mint, getCurrentWalletConnected, getCurrentPriceOfNFT,isChainCorrect
} from "../utils/interact";
import { renderToString } from 'react-dom/server'

class Hero extends React.Component {

  state = {
    displayColorPickerBackground: false,
    displayColorPickerText: false,
    fullNameData : "Your Full Name",
    titleData : "Your Title",
    otherData : "Email|Company|Website|Twitter",
    backgroundColor : "#a3eeff",
    textColor : "#17aab2", 
    walletAddress : "",
    currentPriceOfNFT: ""
  };

  

  mintNFT = async (e)  => {

    e.preventDefault();
  
    console.log(this.state);

    const walletResponse = await getCurrentWalletConnected();

    if(walletResponse.address){
      const _currentPriceOfNFT= await getCurrentPriceOfNFT();
      console.log(walletResponse.status);
      console.log(walletResponse.address);
      console.log(_currentPriceOfNFT);
      this.setState({walletAddress : walletResponse.address});
      this.setState({currentPriceOfNFT : _currentPriceOfNFT});
      
      if(!isChainCorrect()){
        document.getElementById("walletDiv").hidden = false;
        document.getElementById("walletAlert").hidden = false;
        document.getElementById("walletAlert").innerHTML = "Please change your network to Polygon on Metamask!";
        setTimeout(()=> document.getElementById("walletDiv").hidden = true, 5000);
        return;
      }

      if(this.state.fullNameData != "" && this.state.titleData != "" && this.state.otherData != ""){
        const mintStatu = await mint(this.state);
        if(mintStatu.status){
          document.getElementById("walletSuccessDiv").hidden = false;
          document.getElementById("walletSuccessDiv").innerHTML = renderToString(mintStatu.status);
          //setTimeout(()=> document.getElementById("walletDiv").hidden = true, 5000);
        }
      }
      else{
        document.getElementById("walletDiv").hidden = false;
        document.getElementById("walletAlert").hidden = false;
        document.getElementById("walletAlert").innerHTML = "Please fill all the fields";
        setTimeout(()=> document.getElementById("walletDiv").hidden = true, 5000);
      }
      
    }
    else{
      document.getElementById("walletDiv").hidden = false;
      document.getElementById("walletAlert").hidden = false;
      document.getElementById("walletAlert").innerHTML = walletResponse.status;
      setTimeout(()=> document.getElementById("walletDiv").hidden = true, 5000);
    }
  }

  handleClickBackground = () => {
    
    this.setState({ displayColorPickerBackground: !this.state.displayColorPickerBackground })
  };

  handleCloseBackground = () => {
    
    this.setState({ displayColorPickerBackground: false })
  };
  handleChangBackground = (color, event) => {
    this.setState({ backgroundColor: color.hex })
  }

  handleClickText = () => {
    this.setState({ displayColorPickerText: !this.state.displayColorPickerText })
  };

  handleCloseText = () => {
    this.setState({ displayColorPickerText: false })
  };
  handleChangeText = (color, event) => {
    this.setState({ textColor: color.hex })
  }
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '99999',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
  return (
    <main id="main" className="h-screen py-16 bg-pattern">
      <div className="container max-w-8xl mx-auto flex flex-col items-center pt-4">
      <div id="walletSuccessDiv" hidden={true}>
       
      </div>
      <div id="walletDiv" className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4 my-2" role="alert" hidden={true}>
        <p id="walletAlert" className="font-bold" hidden={true}>
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex mb-4">
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
              Do you want one? Each card is only 1 MATIC
            </div>
            <div className="mt-8">
              
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event => this.setState({fullNameData:event.target.value})} id="rounded-full-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name"/>
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input type="text" onChange={event =>this.setState({titleData:event.target.value})} id="rounded-title" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Title"/>
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <div className=" relative ">
                  <input type="text" onChange={event =>this.setState({otherData:event.target.value})} id="rounded-other" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email|Company|Website|Linkedin|Twitter"/>
                </div>
              </div>

              <div className="flex pl-2 px-2 mb-2">
                <div className=" relative pl-2 px-2">
                  <button  onClick={ event => this.setState({backgroundColor:randomColor()})} className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Random Background
                  </button>
                </div>
                <div className="relative pl-2 px-2">
                  <button onClick={ this.handleClickBackground } className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Choose Background
                  </button>
                  { this.state.displayColorPickerBackground ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleCloseBackground }/>
          <SwatchesPicker onChange={ this.handleChangBackground } />
        </div> : null }
                </div>
              </div>  
              
              <div className="flex pl-2 px-2 mb-12">
                <div className=" relative pl-2 px-2 ">
                  <button  onClick={ event => this.setState({textColor:randomColor()})} className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Random Font Color
                  </button>
                </div>
                <div className=" relative pl-2 px-2 ">
                  <button  onClick={ this.handleClickText} className="py-2 px-4 bg-purple-400 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Choose Font Color 
                  </button>
                  { this.state.displayColorPickerText ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleCloseText }/>
          <SwatchesPicker onChange={ this.handleChangeText } />
        </div> : null }
                </div>
              </div> 

              <div className="flex w-full">
                <button  type="submit" onClick={(e) => this.mintNFT(e)} className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Mint your NFT Business Card
                </button>
              </div>
           
          </div>
        </div>
        
        <div className="w-full max-w-md self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        
        <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 750 500">
  
          <path fill={this.state.backgroundColor} d="M0 0h750v500H0z"/>
          <text fontFamily="Noto Sans JP" fontSize="50" fill={this.state.textColor} x="50%" y="30%" dominantBaseline="middle" textAnchor="middle">{this.state.fullNameData}</text>
          <text fontFamily="Noto Sans JP" fontSize="30" fill={this.state.textColor} x="50%" y="40%" dominantBaseline="middle" textAnchor="middle">{this.state.titleData}</text>
          <text fontFamily="Noto Sans JP" fontSize="30" fill={this.state.textColor} x="50%" y="70%" dominantBaseline="middle" textAnchor="middle">{this.state.otherData}</text>
        </svg>
        
        </div>
        </div>
      </div>
    </main>
  );
};
}
export default Hero;


