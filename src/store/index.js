import {createStore} from 'vuex'
import {evaluate} from 'mathjs'

export default createStore({
    state: {
        screen1Num: '0',
        equation: '',
        appendToNum: false,
        readyForNum: true,
        readyForDecimal: true,
        readyForOperation: false,
        appendString: '',
        openParenthesisCount: 0,
        subsequentEquation: false
    },
    mutations: {
        addNumber(state, payload){

            // if starting a subsequent equation and val is not a number
            if (state.subsequentEquation === true && typeof(payload.val) !== 'number'){
                // update equation to match solution value and continue 
                state.equation = state.screen1Num
            }

            // handle numbers
            if (state.readyForNum){
                // don't allow zero as beginning number
                if(!state.appendToNum && payload.val === 0){
                    return 
                }
                // if beginning of equation OR subsequent equation
                else if ((state.screen1Num === 0 && !state.equation) || state.subsequentEquation === true){
                    state.screen1Num = payload.val
                    state.equation = String(payload.val)
                }
                // if appending to a number
                else if(state.appendToNum){
                    state.screen1Num = `${state.screen1Num}${payload.val}`
                    state.equation += String(payload.val)
                }
                // if appending to a decimal
                else if (!state.readyForDecimal){
                    state.screen1Num = `${state.screen1Num}${payload.val}`
                    state.equation += String(payload.val)
                }
                // if ready for a number
                else {
                    state.screen1Num = payload.val;
                    state.equation += state.appendString + String(payload.val)
                }
                // update settings
                state.appendToNum = true
                state.readyForNum = true
                state.readyForOperation = true
                state.appendString = ''
                state.subsequentEquation = false
                return
            }
        },
        addDecimal(state){
            if (state.appendToNum && state.readyForDecimal){
                state.screen1Num = `${state.screen1Num}.`
                state.equation += '.'
            }
            else if (state.readyForDecimal){
                state.screen1Num = '0.'
                state.equation += '0.'
            }
            state.appendToNum = true
            state.readyForDecimal = false
            state.readyForOperation = true
            state.appendString = ''
            state.subsequentEquation = false
        },
        addOperation(state, payload){
            state.equation += ` ${payload.val}`
            state.appendToNum = false
            state.readyForNum = true
            state.readyForDecimal = true
            state.readyForOperation = false
            state.appendString = ' '
            state.subsequentEquation = false
            return
        },
        addParenthesis(state, payload){
            if(payload.val === '('){
                if (state.appendToNum || state.readyForOperation){
                    state.appendString = ' * '
                }
                state.equation += state.appendString + '('
                state.appendToNum = false
                state.readyForNum = true
                state.readyForDecimal = true
                state.readyForOperation = false
                state.appendString = ''
                state.openParenthesisCount++
                state.subsequentEquation = false
                return
            }

            // closed parenthesis must have open parenthesis
            else if(payload.val === ')' && state.openParenthesisCount > 0){
                state.equation += ')'
                state.appendToNum = false
                state.readyForNum = false
                state.readyForOperation = true
                state.appendString = ' '
                state.openParenthesisCount--
                return
            }
        },
        clear(state){
            // handle clear
            state.screen1Num = 0,
            state.equation = '',
            state.appendToNum = false,
            state.readyForNum = true,
            state.readyForOperation = false,
            state.appendString = '',
            state.openParenthesisCount = 0
            state.subsequentEquation = false
            return
        },
        compute(state){
            // add close parenthesis if necessary
            if (state.openParenthesisCount > 0){
                for(let i = state.openParenthesisCount; i > 0; i--){
                    state.equation += ')'
                }
                state.openParenthesisCount = 0
            }
            
            // solve equation
            try{
                let solution = evaluate(state.equation)
                if(typeof(solution) === 'number'){
                    state.screen1Num = solution
                    state.subsequentEquation = true
                }
                return
            }

            // handle incorrect equation
            catch(e1) {
                state.screen1Num = 'ERROR'
                return 
            }
        }
    }
})
