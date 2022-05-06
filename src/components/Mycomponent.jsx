import React, { Component } from 'react'
import "./Body.css"
export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
   

    
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.drinks
              });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
    render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
                <h3>{item.strDrink}</h3>
                <img  width="100" height="100"  src={item.strDrinkThumb} alt="s"/>
            </li>
        
          ))}
        </ul>
      );
    }
  }
}
