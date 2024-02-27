import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import './index.css'

class App extends React.Component {

  afterClicking = (message) => {
    window.alert(message);
  }

  render() {
    return (
      <>
        <Header />
        <div className='container-fluid d-flex justify-content-center align-items-center john mt-5 p-5'>
          <button onClick={() => this.afterClicking('hello world!')} className='btn btn-lg btn-secondary'>Click me!</button>
        </div>
        <Footer />
      </>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);
