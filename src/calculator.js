//1/25/20
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide ,faTimes,faEquals,faMinus,faPlus,faTrashAlt,faBackspace } from '@fortawesome/free-solid-svg-icons'
let style2 ={
        textAlign:'right'
    };

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expression:'0'
		};
	};

    componentDidMount(){
        this.keypress();
    }

    test = () =>{
        console.log("expression: " + this.state.expression + "  Answer:  "+ eval(this.state.expression));
	}

    input = (number) =>{
    	let expression = this.state.expression;
    	if(this.state.expression === '0' && /\d/.test(number) === true ){
	    		this.setState({
		    		expression: number
	    		});
	    	}else if (this.state.expression === '0' && /\D/.test(number) === true ){
	    		this.setState({
			    	expression: this.state.expression.concat(number)
		    	});
	    	}else if (this.decimalCheck(number) === true){
	    		return;
	    	}else if (/\+|\d-|\\|\*/.test(expression[expression.length - 1]) === true  && /\+|\\|\*/.test(number) === true){
	    			return;
	    	}else if (/-/.test(expression[expression.length - 1]) === true  && /-/.test(number) === true){
	    			let array = [...expression];
	    			array.splice(array.length - 1,1,"+")
	    			this.setState({
			    	expression: array.join('')
		    	});
	    			
	    	}else{
		    	this.setState({
			    	expression: this.state.expression.concat(number)
		    	});
	    	}
	};

    calculate = () =>{
    	console.log("expression Calculated:"+ this.state.expression+" Answer: "+eval(this.state.expression));
    		this.setState({
    			expression: eval(this.state.expression).toString()
    	    });
    };
	

	//keypresses 
	//returns true when no operator in expression yet but a decimal in the  expression and in the "variable"
	//also when 
    decimalCheck = (input)=>{
    	let expression = this.state.expression;
    	let stopInput;
    	let  target;
    	if( /\+|\d-|\\|\*/.test(expression) === false && expression.includes('.') === true && input === '.'){
    		stopInput = true;
    	}else if( /\+|\d-|\\|\*/.test(expression) === true ){
			for (var i = expression.length - 1; i >= 0; i--) {
					if(/\+|\d-|\\|\*/.test(expression[i]) === true){
						target = i;
						break;
					}
			}
			if(expression.slice(target,expression.length).includes('.') === true  && input === '.'){
					stopInput = true;
			}
    	}
    	return stopInput;
    }

    clearExpression = ()=>{
        this.setState({
            expression:'0'
         });
    };



    keypress = () => {
        window.addEventListener(
            "keydown", 
            (key) =>{ 
                switch(key.which){
                	case 96:
                		this.input("0");
                	break;
                	case 97:
                		this.input("1");
                	break;
                	case 98:
                		this.input("2");
                	break;
                	case 99:
                		this.input("3");
                	break;
                	case 100:
                		this.input("4");
                	break;
                	case 101:
                		this.input("5");
                	break;
                	case 102:
                		this.input("6");
                	break;
                	case 103:
                		this.input("7");
                	break;
                	case 104:
                		this.input("8");
                	break;
                	case 105:
                		this.input("9");
                	break;
                	case 107:
                		this.input("+");
                	break;
                	case 109:
                		this.input("-");
                	break;
                	case 110:
                		this.input(".");
                	break;
                	case 106:
                		this.input("*");
                	break;
                	case 111:
                		this.input("/");
                	break;
                	case 13:
                		this.calculate();
                	break;
                	default:
                	 return;
                }
       		 },false);
        
    };

    
    
    backspace = () => {
    	let expr = [...this.state.expression];

    	if(expr.length == 1){
    		this.setState({
            	expression:'0'
         	});
    	}else{
    		expr.splice(expr.length -1, 1);
	    	this.setState({
	    		expression: expr.join("")
	    	});
    	}
    	
    };
	render(){
		return(
	   <div>
			 <h1>Calculator</h1>

	         <div id="parent">
	         	  <div id="inputBox">
		          	<input id="display" style={style2} value= {this.state.expression}/><br/>
	         	  </div>	
	         	  <div id="buttons">
			          <div className="b">
			            <button class="endr" id="clear" onClick={()=> this.clearExpression()}>C</button>
			            <button id="backspace" onClick = {() => this.backspace()}><FontAwesomeIcon icon={faBackspace}/></button>
			            <button id="divide"onClick={()=> this.input("/")}><FontAwesomeIcon icon={faDivide}/></button>
			            <button class="endl" id="multiply" onClick={()=> this.input("*")}><FontAwesomeIcon icon={faTimes}/></button>
			         </div>
			         <div className="b">
			            <button class="endr" id="seven" onClick={()=> this.input("7")}>7</button> 
			            <button id="eight" onClick={()=> this.input("8")}>8</button>
			            <button id="nine" onClick={()=> this.input("9")}>9</button>
			            <button class="endl" id="subtract" onClick={()=> this.input("-")}><FontAwesomeIcon icon={faMinus}/></button>
			         </div>
			         <div className="b">
			            <button class="endr" id="six" onClick={()=> this.input("6")}>6</button>
			            <button id="five" onClick={()=> this.input("5")}>5</button>
			            <button id="four" onClick={()=> this.input("4")}>4</button>
			            <button id="add" class="endl"onClick={()=> this.input("+")}><FontAwesomeIcon icon={faPlus}/></button>
			         </div>
			         <div className="b">
			            <button class="endr" id="one" onClick={()=> this.input("1")}>1</button>
			            <button id="two" onClick={()=> this.input("2")}>2</button>
			            <button id="three" onClick={()=> this.input("3")}>3</button>
			            <button class="endl" id="equals" onClick={()=> this.calculate()}><FontAwesomeIcon icon={faEquals}/></button>
			         </div>
			         <div className="b">
			            <button id="zero" onClick={()=> this.input("0")}>0</button>
			            <button id="decimal" onClick={()=> this.input(".")}>.</button>
			         </div>
			      </div>
	        </div>
        </div>);
	};
}; 

export default Calculator;
