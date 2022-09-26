import { useSelector, useDispatch } from 'react-redux';
import { clear, getInput, resolve } from './calculatorSlice';



export const Calculator = () => {
    const calc = useSelector((state) => state.calculator);
    const dispatch = useDispatch();
  
    return (
      <div id='container'>
        <div id='display'> { calc.output } </div>
        <div 
            className='button' 
            id='clear'
            onClick={ () => dispatch(clear()) }
        >AC</div>
        <div 
            className='operator button' 
            id='divide'
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >/</div>
        <div 
            className='operator button' 
            id='multiply'
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >*</div>
        <div 
            className='number button' 
            id='seven'
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >7</div>
        <div 
            className='number button' 
            id='eight'
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >8</div>
        <div 
            className='number button' 
            id='nine' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >9</div>
        <div 
            className='operator button' 
            id='subtract' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >-</div>
        <div 
            className='number button' 
            id='four' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >4</div>
        <div 
            className='number button' 
            id='five' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >5</div>
        <div 
            className='number button' 
            id='six' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >6</div>
        <div 
            className='operator button' 
            id='add' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >+</div>
        <div 
            className='number button' 
            id='one' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >1</div>
        <div 
            className='number button' 
            id='two' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >2</div>
        <div 
            className='number button' 
            id='three' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >3</div>
        <div 
            className='button' 
            id='equals' 
            onClick={ () => dispatch(resolve()) }
        >=</div>
        <div 
            className='number button' 
            id='zero' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >0</div>
        <div 
            className='number button' 
            id='decimal' 
            onClick={ (e) => dispatch(getInput(e.target.textContent)) }
        >.</div>
      </div>
    );
};
