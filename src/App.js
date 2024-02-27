import './index.css';
import './App.css' 
import Counter from './Counter/Counter';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      {/* <Counter/> */}
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
