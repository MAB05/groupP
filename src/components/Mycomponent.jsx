import React, { Component } from 'react'

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
                {item.strDrink}
                <img width="50" height="50"  src={item.strDrinkThumb} alt="s"/>
            </li>
        
          ))}
        </ul>
      );
    }
  }
}
