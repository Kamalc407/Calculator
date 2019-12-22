//12/22/19 
import React from 'react';

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expFrag:'0',
			expression:''
		};
	};

	// MIMIC the windows built in calculator
	// enter a series of numbers once a arithmetic operator is entered 
	// 1) display the number string entered followed by the operator entered 
	// 2) clear the bottom display of numbers
    	numberDisplay = (input) => {
    		//accept button input and prevent preceding trailing zeros
    		if( this.state.expFrag === '0' && input === '0'){
    			return;
    		}else{
    		  this.setState({
    			expFrag:this.state.expFrag.concat(input),
    			expression:this.state.expression
    		  });
    		};
    	};
   
    	expAppend = () => {
    		this.setState({
    			expFrag: this.state.expFrag,
    			expression: this.state.expression.concat(this.state.expFrag)
    		});
    	};

    	resetExpFrag = () => {
    		this.setState({
    			expFrag:'0',
    			expression: this.state.expression
    		});
    		// alert(this.state.expression);
    	};

    	// program the alert function to wait before executing
    	appendReset = (operator) =>{
    		this.numberDisplay(operator ,alert(this.state.expFrag) );
    	}

    	clearEntry = () => {
    		this.setState({
    			expFrag:'0'
    		});
    	};

    //deletes the character at the end of the state display string
    backspace = () =>{
    	//slice portion and set
    	if( this.state.display.length == 1){
    		this.setState({
    			expFrag:'0'
    		})
    	}else{
	    	let stateCopy = {...this.state};
	    	let stateCopySliced = stateCopy.display.slice(0,stateCopy.display.length-1);
	    	this.setState({
	    		expFrag:stateCopySliced
	    	})
	    }
    }
    
	render(){
		return(
	   <div>
			 <h1>Calculator</h1>
	         <div id="parent">
		          <input id="display" dir="rtl" value={this.state.expFrag}/><br/>
		          <div class="b">
		            <button id="clearEntry" onClick={ () => this.clearEntry()}>CE</button>
		            <button id="allClear" >C</button>
		            <button id="backspace" onClick={() => this.backspace()}>bck</button>
		            <button id="division"onClick={() => this.appendReset('/')}>/</button>
		         </div>
		         <div class="b">
		            <button id="seven" onClick ={() => this.numberDisplay('7')}>7</button> 
		            <button id="eight" onClick ={() => this.numberDisplay('8')}>8</button>
		            <button id="nine" onClick ={() => this.numberDisplay('9')}>9</button>
		            <button id="multiply" onClick ={ () => this.appendReset('X')}>X</button>
		         </div>
		         <div class="b">
		            <button id="six" onClick ={() => this.numberDisplay('6')}>6</button>
		            <button id="five" onClick ={() => this.numberDisplay('5')}>5</button>
		            <button id="four" onClick ={() => this.numberDisplay('4')}>4</button>
		            <button id="subtract" onClick ={() => this.numberDisplay('-')}>-</button>
		         </div>
		         <div class="b">
		            <button id="one" onClick ={() => this.numberDisplay('1')}>1</button>
		            <button id="two" onClick ={() => this.numberDisplay('2')}>2</button>
		            <button id="three" onClick ={() => this.numberDisplay('3')}>3</button>
		            <button id="add" onClick ={() => this.numberDisplay('+')}>+</button>
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








// GRAVEYARD FOR OLD numberDisplay

/*function called in each input buttons onClick event handler. It receives as an arguement the number correspoding to each button. 
    	if an arithmetic character is the last character in the state string, another following arithmetic 
    	character cannot be placed after.*/
   		/*if state == 0 set desplay prop to input (to replace). other wise concat input 
	    dont allow the user to repeat 0's ie 00+8*/
// let display = [...this.state.display] , decimalCheck = [...this.state.decimalCheck];
//     		let target = display[display.length - 1];
//     		let regex = /\D/;
//     		// let nonDigitExceptDecimal = /\d^./
//     		if( this.state.display == '0'){
//     			if(/\d/.test(input)){
//     				this.setState({
//     					display: input.toString() ,
//     					decimalCheck: input.toString()

//     				})
//     			}
//     			else{
//     				this.setState({
//     					display: this.state.display.concat(input) ,
//     					decimalCheck: this.state.decimalCheck.concat(input)
//     				})
//     			}
//     			//if a decimal exist in input string dont allow the decimal button to push a decimal into the state. 
//     		    //if an arithmetic operator gets inputted only check wht comes after the operator and when anothr gets entered clear the array
//     		}else{
//     			if((regex.test(target)=== true) && (regex.test(input)=== true)){
// 	    			return;
// 	    		}else if( decimalCheck.includes('.') && input === '.'){
// 	    			return;
// 	    		}else{
// 			    		this.setState({
// 			    			display: this.state.display.concat(input) ,
// 			    			decimalCheck: this.state.decimalCheck
// 		    		})
// 		    	}
//     		}


