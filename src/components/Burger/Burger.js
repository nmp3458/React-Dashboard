import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hoc from '../../hoc/Hoc';
import BurgerIngredient from './BurgerIngredient';
import BurgerControl from './BurgerControl';

class Burger extends Component {
  onAddIngredient = () => {};
  onRemoveIngredient = () => {};
  render() {
    let transformedIngredients = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return ([...Array(this.props.ingredients[igKey])] || []).map((data, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      }
    );

    return (
      <Hoc>
        <div className='burger'>
          <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
          </div>
          {transformedIngredients}
          <div className='BreadBottom'></div>
        </div>
        <BurgerControl controls={this.props.burgerControls} />
      </Hoc>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    burgerControls: state.controls,
  };
};

export default connect(mapStateToProps, null)(Burger);
