import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    input: [],
    output: 0
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        clear(state) {
            state.output = 0;
            state.input = [];
        },
        getInput(state, action) {
            const numberRegEx = /\d+(\.\d+)?/g;
            const operatorRegEx = /[+\-*/]/g;
            const multipleZeroesRegEx = /[+\-*/][0]{2}|^[0]{2}/g;
            const multipleDotsRegEx = /\d[.](\d+)?[.]/;

            if (state.output === 'BIG_NUM') { 
                return;
            }
            
            state.input += action.payload;

            if (multipleDotsRegEx.test(state.input) === true) {
                state.output = 'ERR_MULT_DOTS';
                return;
            }

            if (multipleZeroesRegEx.test(state.input) === true) {
                state.output = 'ERR_MULT_ZEROES';
                return;
            }

            if (operatorRegEx.test(action.payload) === true) {
                state.output = action.payload;
                return;
            }
            
            if (numberRegEx.test(state.input) === true) {
                let numbers = state.input.match(numberRegEx);
                let lastNumber = numbers[numbers.length - 1];
                if (lastNumber.toString().length > 16) {
                    state.output = 'ERR_BIG_NUM';
                    return;
                }
                state.output = lastNumber;
            } 
        },
        resolve(state) {
            const combinedRegex = /\d+(\.\d+)?|[+\-*/]|/g;
            const operations = state.input.match(combinedRegex);
            let number = undefined;
            let operator = '';

            for (let i = 0; i < operations.length; i++) {
                let target = operations[i];

                if (number === undefined) { 
                    number = parseFloat(target);
                    continue;
                }

                if (operator === '' && number !== undefined) {
                    operator = target;
                    continue;
                }

                if (operator !== '' && number !== undefined) {
                    switch(operator) {
                        case '+':
                            number = number + parseFloat(target);
                            break;
                        case '-':
                            number = number - parseFloat(target);
                            break;
                        case '*':
                            number = number * parseFloat(target);
                            break;
                        case '/':
                            number = number / parseFloat(target);
                            break;
                        default:
                            break;
                    }
                    operator = '';
                }
            }
            
            console.log(number.toString().length);
            if (number.toString().length > 16) {
                state.output = 'BIG_NUM';
                console.log(number);
                return;
            }
            state.output = number;
            console.log(...operations);
        }
    }
});


export const { clear, getInput, resolve } = calculatorSlice.actions;
export default calculatorSlice.reducer;
