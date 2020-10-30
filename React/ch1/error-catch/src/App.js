import logo from './logo.svg';
import './App.css';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const user = {
    id : 1, 
    username : 'velopert'
  };
  return (
    <div>
      <ErrorBoundary>
        <User />
      </ErrorBoundary>
    </div>
  )
}

export default App;
