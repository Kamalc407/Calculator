//1/2/20
import React from 'react';


// program = operator button 
// WHEN BROWSER RESIZES BUTTONS SHRINK .add responsivenes to calculator  
// as you enter numbers into fragment expression make placement commas 
// program expression history display 
// program  % , Sqrt, x^3, X^2, 
// program a !! ANOTHER COMPONENT solution history section
// add REDUX to your app
// connect to an APi in Your APP
// program parsenthesis buttons 
// make it look pretty

let style2 ={
        textAlign:'right'
    };
class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expFrag:'0',
			expression:''
		};
	};

        componentDidMount(){
            this.keypress();
        }

    	numberDisplay = (input) => {
            if(this.state.expFrag.includes('.') === true && input === '.'){
                return;
            }else{
        		if( this.state.expFrag === '0' && input === '0'){
        			return;
        		}else if (this.state.expFrag === '0' && input === '.'){
                    this.setState({
                        expFrag:this.state.expFrag.concat(input),
                        expression:this.state.expression
                    });
                }else if (this.state.expFrag === '0' && input != '0'){
        			this.setState({
        				expFrag:input,
        				expression:this.state.expression
        		  	});
        		}else{
        		  this.setState({
        			expFrag:this.state.expFrag.concat(input),
        			expression:this.state.expression
        		  });
        		};
            };
    	};

        appender = (num) =>{
            let exp = this.state.expFrag;
            return setTimeout(num =>exp.concat(num),10);
            //(this.state.expFrag.includes('.') is not a function
        }
   
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
    	};

    	//appends the operator to the numbers to be calculated and clears the display for the next set of numbers to inputted as well.
    	appendReset = (operator) =>{
    		this.numberDisplay(operator);
    		setTimeout(()=>{this.expAppend()},10);
    		setTimeout(()=>{this.resetExpFrag()},10);
    	};

    	clearEntry = () => {
    		this.setState({
    			expFrag:'0',
    			expression: this.state.expression
    		});
    	};

    	clear = () => {
    		this.setState({
    			expFrag: '0' ,
    			expression:''});
    	};

    //deletes the character at the end of the state display string
    backspace = () =>{
    	//slice portion and set
    	if( this.state.expFrag.length === 1){
    		this.setState({
    			expFrag:'0'
    		});
    	}else{
	    	let stateCopy = {...this.state};
	    	this.setState({
	    		expFrag:stateCopy.expFrag.slice(0,stateCopy.expFrag.length - 1)
	    	});
	    };
    };

    sign = () => {
        let exp = [...this.state.expFrag]; 
        if(exp.includes("-") === false){
            exp.splice(0,0,'-'); 
            this.setState({
                expFrag: exp.join(""),
                expression: this.state.expression
            });
        }else{
            exp.splice(exp.indexOf("-"), 1);
            this.setState({
                expFrag: exp.join(""),
                expression: this.state.expression
            });
        };
    };

    keypress = () => {
        window.addEventListener(
            "keydown", 
            (key) =>{ 
                if(key.keyCode === 97){
                    this.numberDisplay('1');
                }else if (key.keyCode === 98){
                    this.numberDisplay('2');
                }else if (key.keyCode === 99){
                    this.numberDisplay('3');
                }else if (key.keyCode === 100){
                    this.numberDisplay('4');
                }else if (key.keyCode === 101){
                    this.numberDisplay('5');
                }else if (key.keyCode === 102){
                    this.numberDisplay('6');
                }else if (key.keyCode === 103){
                    this.numberDisplay('7');
                }else if (key.keyCode === 104){
                    this.numberDisplay('8');
                }else if (key.keyCode === 105){
                    this.numberDisplay('9');
                }else if (key.keyCode === 104){
                    this.numberDisplay('8');
                }else if (key.keyCode === 96){
                    this.numberDisplay('0');
                }else if (key.keyCode === 8){
                    this.backspace();
                }else if (key.keyCode === 110){
                    this.numberDisplay('.');
                }else if (key.keyCode === 111){
                    this.appendReset('/');
                }else if (key.keyCode === 106){
                    this.appendReset('*');
                }else if (key.keyCode === 109){
                    this.appendReset('-');
                }else if (key.keycode === 32){
                    this.clearEntry();
                }
        },false);
        
    };
    
    
        
	render(){
		return(
	   <div>
			 <h1>Calculator</h1>
	         <div id="parent">
		          <input id="display" style={style2} value={this.state.expFrag}/><br/>
		          <div className="b">
		            <button id="clearEntry" onClick={ () => this.clearEntry()}>CE</button>
		            <button id="allClear" onClick={ () => this.clear()}>C</button>
		            <button id="backspace" onClick={() => this.backspace()}>bck</button>
		            <button id="division"onClick={() => this.appendReset('/')}>/</button>
		         </div>
		         <div className="b">
		            <button id="seven" onClick ={() => this.numberDisplay('7')}>7</button> 
		            <button id="eight" onClick ={() => this.numberDisplay('8')}>8</button>
		            <button id="nine" onClick ={() => this.numberDisplay('9')}>9</button>
		            <button id="multiply" onClick ={ () => this.appendReset('X')}>X</button>
		         </div>
		         <div className="b">
		            <button id="six" onClick ={() => this.numberDisplay('6')}>6</button>
		            <button id="five" onClick ={() => this.numberDisplay('5')}>5</button>
		            <button id="four" onClick ={() => this.numberDisplay('4')}>4</button>
		            <button id="subtract" onClick ={() => this.appendReset('-')}>-</button>
		         </div>
		         <div className="b">
		            <button id="one" onClick ={() => this.numberDisplay('1')}>1</button>
		            <button id="two" onClick ={() => this.numberDisplay('2')}>2</button>
		            <button id="three" onClick ={() => this.numberDisplay('3')}>3</button>
		            <button id="add" onClick ={() => this.appendReset('+')}>+</button>
		         </div>
		         <div className="b">
		            <button id="sign" onClick ={() => this.sign()}>+/-</button>
		            <button id="zero" onClick ={() => this.numberDisplay('0')}>0</button>
		            <button id="decimal" onClick ={() => this.numberDisplay('.')}>.</button>
		            <button id="result">=</button>
		         </div>
	        </div>
        </div>);
	}
};

export default Calculator;

// keypress = () => {
//         window.addEventListener(
//             "keydown", 
//             (key) =>{ 
//                 if(key.keyCode === "97"){
//                     this.numberDisplay('1');
//                 // }else if (key.keyCode === 98){
//                 //     this.numberDisplay('2');
//                 // }else if (key.keyCode === 99){
//                 //     this.numberDisplay('3');
//                 // }else if (key.keyCode === 100){
//                 //     this.numberDisplay('4');
//                 // }else if (key.keyCode === 101){
//                 //     this.numberDisplay('5');
//                 // }else if (key.keyCode === 102){
//                 //     this.numberDisplay('6');
//                 // }else if (key.keyCode === 103){
//                 //     this.numberDisplay('7');
//                 // }else if (key.keyCode === 104){
//                 //     this.numberDisplay('8');
//                 // }else if (key.keyCode === 105){
//                 //     this.numberDisplay('9');
//                 // }else if (key.keyCode === 104){
//                 //     this.numberDisplay('8');
//                 // }else if (key.keyCode === 8){
//                 //     this.backspace();
//                 // }else if (key.keyCode === 110){
//                 //     this.numberDisplay('.');
//                 // }else if (key.keyCode === 111){
//                 //     this.appendReset('/');
//                 // }else if (key.keyCode === 106){
//                 //     this.appendReset('*');
//                 // }else if (key.keyCode === 109){
//                 //     this.appendReset('-');
//                 // }else if (key.keycode === 32){
//                 //     this.clearEntry();
//                 // }else if (key.keycode === 96 || key.keycode === 45){
//                 //     this.numberDisplay('0');
//                 }else {
//                     this.appendReset('+');
//                 }
//         },false);
        
//     };