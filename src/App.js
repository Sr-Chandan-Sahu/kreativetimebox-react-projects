import './index.css';
import './App.css' 

import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/To-Do-List/Home';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      {/* <Counter/> */}
      {/* <Home/> */}
      <Calculator/>
    </div>
  );
}

export default App;














//This Code is for Foodies website
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Foodies/Navbar';
// import { items } from './components/Foodies/ItemList';
// import CardList from './components/Foodies/CardList';

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: items,
//       search: "",
//     };
//   }
//    changeInput=(event)=>{
//     this.setState({ search: event.target.value });
//   };

//   render() {
//     const filterItem = this.state.items.filter((item) => {
//       return item.name.toLowerCase().includes(this.state.search.toLowerCase());
//     });
//     return (
//       <div>
//         <Navbar handleSearch={this.changeInput} />
//         <div>
//           <CardList items={filterItem} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App
