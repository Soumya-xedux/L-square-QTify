// 🔥 CHANGED: minor note - kept structure but ensured global CSS variables imported in index.css
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;




// // import logo from './logo.svg';
// import './App.css';
// import Hero from './components/Hero/Hero';
// import Navbar from './components/Navbar/Navbar';
// import Main from './components/Main/Main';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <Main />
//     </div>
//   );
// }

// export default App;
