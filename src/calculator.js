//11/26/19 
import React from 'react';

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			display:'0',
			decimalCheck:''
		};
	};

    	/*function called in each input buttons onClick event handler. It receives as an arguement the number correspoding to each button. 
    	if an arithmetic character is the last character in the state string, another following arithmetic 
    	character cannot be placed after.*/
   		/*if state == 0 set desplay prop to input (to replace). other wise concat input 
	    dont allow the user to repeat 0's ie 00+8*/
    	numberDisplay = (input) => {
    		let display = [...this.state.display] , decimalCheck = [ ...this.state.decimalCheck];
    		let target = display[display.length - 1];
    		let regex = /\D/;
    		// let nonDigitExceptDecimal = /\d^./
    		if( this.state.display == '0'){
    			if(/\d/.test(input)){
    				this.setState({
    				display: input.toString() ,
    				decimalCheck: input.toString()

    				})
    			}
    			else{
    				this.setState({
    				display: this.state.display.concat(input) ,
    				decimalCheck: this.state.display.concat(input)
    				})
    			}
    			//if a decimal exist in input string dont allow the decimal button to push a decimal into the state. 
    		    //if an arithmetic operator gets inputted only check wht comes after the operator and when anothr gets entered clear the array
    		}else{
    			if((regex.test(target)=== true) && (regex.test(input)=== true)){
	    			return;
	    		}else if( decimalCheck.includes('.') && input === '.'){
	    			return;
	    		}else{
			    		this.setState({
			    			display: this.state.display.concat(input) ,
			    			decimalCheck: this.state.decimalCheck
		    		})
		    	}
    		}
    	}

    		// sets the state to default (0)
    		 clearEntry = () => {
    			this.setState({
    				display:'0', 
    				decimalCheck: this.state.decimalCheck
    			})
    		};

    		clearDecimalCheck = () => {
    			this.setState({
    				display: this.state.display,
    				decimalCheck: ''
    			});
    		}

    		//deletes the character at the end of the state display string
    		backspace = () =>{
    			//slice portion and set
    			if( this.state.display.length == 1){
    				this.setState({
    					display:'0', 
    					decimalCheck: this.state.decimalCheck
    				})
    			}else{
	    			let stateCopy = {...this.state};
	    			let stateCopySliced = stateCopy.display.slice(0,stateCopy.display.length-1);
	    			this.setState({
	    				display:stateCopySliced , 
	    				decimalCheck: this.state.decimalCheck
	    			})
	    		}
    		}

    		multiplyCl = () => {
    			this.numberDisplay('X');
    			this.clearDecimalCheck();
    		}


    		//TBA: sets the state to default & clears the history 
    		// let allClear = () =>{

    		// }
 
		//TODO: Get the arithmetic operator buttons to work
		//TODO: Decimal restriction logic (copy a peice of the state into a separate property that is checked for decimals )
    	//BUG: new numbers dont 
    	//TODO: Program number signing button
    	//TODO: Program Left and Right Parenthesis
    
	clear = () =>{
		this.setState({
			display:'0', 
			decimalCheck: this.state.decimalCheck
		});
	}
	render(){
		return(
	   <div>
			 <h1>Calculator</h1>
	         <div id="parent">
		          <input id="display" dir="rtl" value={this.state.display}/><br/>
		          <div class="b">
		            <button id="clearEntry" onClick={ () => this.clearEntry()}>CE</button>
		            <button id="allClear" >C</button>
		            <button id="backspace" onClick={() => this.backspace()}>bck</button>
		            <button id="division"onClick={() => this.numberDisplay('/')}>/</button>
		         </div>
		         <div class="b">
		            <button id="seven" onClick ={() => this.numberDisplay('7')}>7</button> 
		            <button id="eight" onClick ={() => this.numberDisplay('8')}>8</button>
		            <button id="nine" onClick ={() => this.numberDisplay('9')}>9</button>
		            <button id="multiply" onClick ={() => this.multiplyCl()}>X</button>
		         </div>
		         <div class="b">
		            <button id="six" onClick ={() => this.numberDisplay('6')}>6</button>
		            <button id="five" onClick ={() => this.numberDisplay('5')}>5</button>
		            <button id="four" onClick ={() => this.numberDisplay('4')}>4</button>
		            <button id="subtract" onClick ={() => this.numberDisplay('-') , () => this.clearDecimalCheck()}>-</button>
		         </div>
		         <div class="b">
		            <button id="one" onClick ={() => this.numberDisplay('1')}>1</button>
		            <button id="two" onClick ={() => this.numberDisplay('2')}>2</button>
		            <button id="three" onClick ={() => this.numberDisplay('3')}>3</button>
		            <button id="add" onClick ={() => this.numberDisplay('+') ,this.clearDecimalCheck()}>+</button>
		         </div>
		         <div class="b">
		            <button id="sign">+/-</button>
		            <button id="zero" onClick ={() => this.numberDisplay('0')}>0</button>
		            <button id="decimal" onClick ={() => this.numberDisplay('.')}>.</button>
		            <button id="result">=</button>
		         </div>
		         <div class="b">
		          <button id="leftParenthesis">(</button>
		          <button id="rightParenthesis">)</button>
		         </div>
	        </div>
        </div>);
	}
};

export default Calculator;


