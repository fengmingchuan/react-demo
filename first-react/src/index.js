import  React  from 'react'
import  ReactDOM  from  'react-dom'
//import App  from './components/app'
 import App from   './components/views/layout'
 
 
  


 ReactDOM.render(
   <App/>,

 
 document.getElementById("root"));
// import { observable, action } from "mobx";
// icmport {observer} from 'mobx-react';

// var appState = observable({
//     timer: 0
// });


// @observer
//    class TimerView extends React.Component {
//     render() {
//         return (
//             <button onClick={this.onReset.bind(this)}>
//                 Seconds passed: {this.props.appState.timer}
//             </button>
//         );
//     }

//     onReset() {
//         this.props.appState.resetTimer();
//     }
// };
// appState.resetTimer = action(function reset() {
//     appState.timer = 0;
// });


// setInterval(action(function tick() {
//     appState.timer += 1;
// }), 1000);
// ReactDOM.render(<TimerView appState={appState} />, document.getElementById("root"));