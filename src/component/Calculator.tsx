import * as React from 'react';
import './App.css';

interface CalculatorProps {
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    b5: string;
    b6: string;
    b7: string;
    b8: string;
    b9: string;
    b0: string;
    ba: string;
    bs: string;
    bm: string;
    bd: string;
    be: string;
    br: string;
    bp: string;
    bdot: string;
    bi: string;
}

interface CalculatorState {
   value: number;
   result: string;
   storageValue: string;
   resultstr: string;
   substr1: string;
   substr2: string;
   value1: number;
   operator: string;
}

class Calculator extends React.Component <CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.state = {value : 0, result : '0', storageValue: '', operator : '', resultstr : '', substr1 : '', substr2 : '', value1: 0 };
    }  
    display = (value: number) => {
        if (this.state.result === '0') {
            this.setState( {result: String(value)});
            this.setState( {resultstr: this.state.resultstr + String(value)});
        } else {
        if (this.state.result.length > 5) {
            this.setState( {result: this.state.result});
           
        } else {
            this.setState({result: this.state.result + value});
            this.setState( {resultstr: this.state.resultstr + value});
        }
        }
        
    }
    reset = () => {
        this.setState( {result: '0'} );
        this.setState( {storageValue: '0'});
        this.setState( {operator: '0'});
        this.setState( {resultstr: '0'});
    }

    operator = (value: string) => {
        this.setState({storageValue: this.state.result});
        this.setState({operator: value});
        this.setState({result: '0'});  
        this.setState( {resultstr: this.state.resultstr + value});  
    }

    equal = () => {
        if (this.state.operator === '+') {
            this.setState( {result: String(Number(this.state.storageValue) + Number(this.state.result))});
           
        } else if (this.state.operator === '-') {
            this.setState( {result: String(Number(this.state.storageValue) - Number(this.state.result))});
            
        } else if (this.state.operator === '*') {
            this.setState( {result: String(Number(this.state.storageValue) * Number(this.state.result))});
            
         } else if (this.state.operator === '/') {
            this.setState( {result: String(Number(this.state.storageValue) / Number(this.state.result))});
            
         }
        }
        bdot = () => {
            if (this.state.result.indexOf('.') === -1) {
                this.setState( { result: this.state.result + '.'});
                this.setState( {resultstr: this.state.resultstr + '.'});
            } else {
                this.setState( { result: this.state.result});
            }
        }
        binv = () => {
            this.setState( {result: String(Number(this.state.result) * -1)});
            this.setState( {resultstr: this.state.resultstr + 'x 1'});
        }
        bpercent = () => {
            this.setState( {result: String(Number(this.state.result) / 100)});
        }

    render() {
        return(
            <div className="calci">
            <header><strong>CALCULATOR</strong></header>
            <hr/> 
            <div className="display">
            <b> {this.state.result}</b>
            </div>
            <br/>
            <div className="resultfinal">
            <b>{this.state.resultstr}</b>
            </div>
            <br/>
            <button className="calcibutton" onClick={this.bdot} >{this.props.bdot}</button>
            <button className="calcibutton" onClick={this.binv}>{this.props.bi}</button>
            <button className="calcibutton" onClick={this.bpercent}>{this.props.bp}</button>
            <button className="calcibutton" onClick={() => this.operator('/')}>{this.props.bd}</button>
            <br/>
            <button className="calcibutton" onClick={() => this.display(7)}>{this.props.b7}</button>
            <button className="calcibutton" onClick={() => this.display(8)}>{this.props.b8}</button>
            <button className="calcibutton" onClick={() => this.display(9)}>{this.props.b9}</button>
            <button className="calcibutton" onClick={() => this.operator('+')}>{this.props.ba}</button>
            <br/>
            <button className="calcibutton" onClick={() => this.display(4)}>{this.props.b4}</button>
            <button className="calcibutton" onClick={() => this.display(5)}>{this.props.b5}</button>
            <button className="calcibutton" onClick={() => this.display(6)}>{this.props.b6}</button>
            <button className="calcibutton" onClick={() => this.operator('-')}>{this.props.bs}</button>
            <br/>
            <button className="calcibutton" onClick={() => this.display(1)}>{this.props.b1}</button>
            <button className="calcibutton" onClick={() => this.display(2)}>{this.props.b2}</button>
            <button className="calcibutton" onClick={() => this.display(3)}>{this.props.b3}</button>
            <button className="calcibutton" onClick={() => this.operator('*')}>{this.props.bm}</button>
            <br/>
            <button className="calcibutton" onClick={this.reset}>{this.props.br}</button>
            <button className="calcibutton" onClick={() => this.display(0)}>{this.props.b0}</button>
            <button className="calcibutton" onClick={this.equal}>{this.props.be}</button>
           
            <br/><br/>
            </div>  
        );
    }
}
export default Calculator;