
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="container">
     
       <header>
        <h1 className='text-center mt-4 header'><em>Dictionary</em></h1>
        </header>
  <main>
<Dictionary keyWord = "Hope"/>
  </main>
  <footer className='text-center'>Coded by Sarah Ward, available on Github and hosted on netlify</footer>
    </div>
  );
}

export default App;
