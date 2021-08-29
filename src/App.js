import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'
import Search from './components/Search.js'
 

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('calories');

  return (
    <>
    <div className="App">
      <header className="App-header">

       


        <p className="title">
          Calorie Counter Meal Planner
        </p>
        <Search/>

        <div className = "float-container">
          <div>
            <Card
            meal= "Breakfast"
            calories = {query}
            />
          </div>
          <div>
            <Card
            meal = "Lunch"
            calories = {query}
            />
          </div>
          <div>
            <Card
            meal = "Dinner"
            calories = {query}
            />
          </div>
        </div>
        
      </header>

    </div>
    </>
  );
}



export default App;
