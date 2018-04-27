import * as React from 'react';
import './App.css';
import Calculator from './component/Calculator';
interface AppProps { }

interface AppState {
    
}

class App extends React.Component<AppProps, AppState> {
 
  constructor(props: AppProps) {
    super(props); 
  }
  render() {
    return (

     <div className="App">
        
        <Calculator bp="%" bdot="." bi="+-" b1="1" b2="2" b3="3" b4="4" b5="5" b6="6" b7="7" b8="8" b9="9" b0="0" ba="+" bs="-" bm="*" bd="/" be="=" br="c" />
        <br /></div>
  
    );
  }
}

export default App;
