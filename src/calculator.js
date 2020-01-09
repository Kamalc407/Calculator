//1/8/20
import React from 'react';

//??  Why does ommitting () => from the onclick call back object cause the method you place inside to fire everytime you press any button? 
//++  refactor code (Find methods that are W.E.T and make D.R.Y && seperate concerns)

// program expression input box 
// QA --> find bugs n fix
// WHEN BROWSER RESIZES BUTTONS SHRINK .add responsivenes to calculator  
// as you enter numbers into fragment expression make placement commas 
// make it look pretty
//OPTIONAL CLOSE UP SHOP AND MOVE ON!
// program a !! ANOTHER COMPONENT solution history section
// add REDUX to your app
// connect to an APi in Your APP
//refactor kepresses() & numberdisplay()
// program parsenthesis buttons 


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
                }else if (this.state.expFrag === '0' && input !== '0'){
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
   
    	// expAppend = () => {
    	// 	this.setState({
    	// 		expFrag: this.state.expFrag,
    	// 		expression: this.state.expFrag
    	// 	});
    	// };

    	//take expression which should be " # operator # = ". and replace the state with the answer.
        // for tunning total at the end of every operand function should be a call to the calculate function
        answer = () => {
            let total = 0,
                expression = this.state.expression + this.state.expFrag;

            let answer = eval(expression);
            this.setState({
                expFrag: answer.toString(),
                expression: this.state.expression
            });

        };








    	//appends the operator to the numbers to be calculated and clears the display for the next set of numbers to inputted as well.
    	appendOp = (operator) =>{
    		this.numberDisplay(operator);
            // console.log(this.state.expFrag)
    		// setTimeout(()=>{this.expAppend()},10);
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
                    this.appendOp('/');
                }else if (key.keyCode === 106){
                    this.appendOp('*');
                }else if (key.keyCode === 109){
                    this.appendOp('-');
                }else if (key.keyCode === 32){
                    this.clearEntry();
                }else if (key.keyCode === 13){
                    this.answer();
                }
        },false);
        
    };

    
	render(){
		return(
	   <div>
			 <h1>Calculator</h1>
	         <div id="parent">
                  <input id="display" style={style2} value={this.state.expression}/><br/>
		          <input id="display" style={style2} value={this.state.expFrag}/><br/>
		          <div className="b">
		            <button id="clearEntry" onClick={ () => this.clearEntry()}>CE</button>
		            <button id="allClear" onClick={ () => this.clear()}>C</button>
		            <button id="backspace" onClick={() => this.backspace()}>bck</button>
		            <button id="division"onClick={() => this.appendOp('/')}>/</button>
		         </div>
		         <div className="b">
		            <button id="seven" onClick ={() => this.numberDisplay('7')}>7</button> 
		            <button id="eight" onClick ={() => this.numberDisplay('8')}>8</button>
		            <button id="nine" onClick ={() => this.numberDisplay('9')}>9</button>
		            <button id="multiply" onClick ={ () => this.appendOp('*')}>X</button>
		         </div>
		         <div className="b">
		            <button id="six" onClick ={() => this.numberDisplay('6')}>6</button>
		            <button id="five" onClick ={() => this.numberDisplay('5')}>5</button>
		            <button id="four" onClick ={() => this.numberDisplay('4')}>4</button>
		            <button id="subtract" onClick ={() => this.appendOp('-')}>-</button>
		         </div>
		         <div className="b">
		            <button id="one" onClick ={() => this.numberDisplay('1')}>1</button>
		            <button id="two" onClick ={() => this.numberDisplay('2')}>2</button>
		            <button id="three" onClick ={() => this.numberDisplay('3')}>3</button>
		            <button id="add" onClick ={() => this.appendOp('+')}>+</button>
		         </div>
		         <div className="b">
		            <button id="sign" onClick ={() => this.sign()}>+/-</button>
		            <button id="zero" onClick ={() => this.numberDisplay('0')}>0</button>
		            <button id="decimal" onClick ={() => this.numberDisplay('.')}>.</button>
                    <button id="decimal" onClick = {() => console.log("expFrag: " + this.state.expFrag + "  expression: " + this.state.expression )}>Test</button>
		            <button id="result" onClick = {() => this.answer()}>=</button>
		         </div>
	        </div>
        </div>);
	};
}; 

export default Calculator;

// calculate = () => {
//           let newexp, sum;
//           if(this.state.expression.includes("-") === true){
//             newexp = this.state.expression.slice(0,this.state.expression.indexOf("-"));
//           }
//           sum = (Number(newexp) - Number(this.state.expFrag));
//           console.log( Number(newexp) +" - "+ Number(this.state.expFrag) + " = "+ sum);
//           console.log( "expression: "+ this.state.expression +"  expFrag: "+ this.state.expFrag);
//           this.setState({
//             expFrag: sum.toString(),
//             expression: sum.toString()
//           });
//               // expression has the answer duplicated 
//               // append reset is getting called when u press - so its appending the expression to theanswer
//             };