import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heroes = ['Henry Cavill', 'Ben Affleck', 'Arnold', 'stalone']
  const products = [
    { name: 'PhotoShop', price: '0.99$' },
    { name: 'Illustrator', price: '0.99$' },
    { name: 'PhotoShop2', price: '0.99$' }]

  const productNames = [products.map(product => product.name)]
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name={heroes[0]} age="1000" address="London"></Person>
        <Person name={heroes[1]} age="100" address="Metropolis"></Person>

        <Counter></Counter>
        <users>

        </users>

        <ul>
          {heroes.map(heroes => (<li>{heroes}</li>))}
          {products.map(products => (<li>{products.name}</li>))}
        </ul>
        {products.map(product => <Product product={product}></Product>)}

      </header> </div >
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  const useEffect (() => {
    // console.log('calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setUsers(data));

  }, [])
  return (
    <div>
      <h2>Dynamic Users:{users.length}</h2>

      {
        <ul>
          users.map(user =>  <li>{user.name}{user.email}{user.phone}</li>);
        </ul>
      }

    </div>
  )

}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount = count + 1;
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: '2px solid lightYellow',
    margin: '10px',
    padding: '10px ',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h1 >My Name:{props.name}</h1>
      <h3>My Age:{props.age}</h3>
      <h3>My Address:{props.address}</h3>
    </div>)
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  const { name, price } = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
export default App;