
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
  <footer className='text-center footer'>Coded by Sarah Ward, available on <a href='https://github.com/Sarahwcode/dictionary-react-1' target='_blank'  rel='noreferrer'>Github</a> and hosted on <a href='https://prismatic-semolina-53ceb8.netlify.app/' target='_blank' rel='noreferrer'>Netlify</a> netlify</footer>
    </div>
  );
}

export default App;
