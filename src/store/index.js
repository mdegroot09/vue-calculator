import {createStore} from 'vuex'
import {evaluate} from 'mathjs'

const store = createStore({
    state: {
        screen1Num: 0,
        equation: '',
        appendToScreenNum: false,
        readyForNum: true,
        readyForOperation: false,
        appendString: '',
        openParenthesisCount: 0,
        subsequentEquation: false
    },
    mutations: {
        updateEquation(state, payload){

            // if starting a subsequent equation and val is not a number
            if (state.subsequentEquation === true && typeof(payload.val) !== 'number'){
                // update equation to match solution value and continue 
                state.equation = state.screen1Num
            }

            // handle numbers
            if (typeof(payload.val) === 'number' && state.readyForNum){
                // don't allow zero as beginning number
                if(!state.appendToScreenNum && payload.val === 0){
                    return 
                }
                // if beginning of equation OR subsequent equation
                else if ((state.screen1Num === 0 && !state.equation) || state.subsequentEquation === true){
                    state.screen1Num = payload.val
                    state.equation = String(payload.val)
                }
                // if appending to a number
                else if(state.appendToScreenNum){
                    state.screen1Num = Number(`${state.screen1Num}${payload.val}`)
                    state.equation += String(payload.val)
                }
                // if ready for a number
                else {
                    state.screen1Num = payload.val;
                    state.equation += state.appendString + String(payload.val)
                }
                // update settings
                state.appendToScreenNum = true
                state.readyForNum = true
                state.readyForOperation = true
                state.appendString = ''
                state.subsequentEquation = false
                return
            }

            else if(payload.val === '('){
                if (state.appendToScreenNum){
                    state.appendString = ' * '
                }
                state.equation += state.appendString + '('
                state.appendToScreenNum = false
                state.readyForNum = true
                state.readyForOperation = false
                state.appendString = ''
                state.openParenthesisCount++
                state.subsequentEquation = false
                return
            }

            // closed parenthesis must have open parenthesis
            else if(payload.val === ')' && state.openParenthesisCount > 0){
                state.equation += ')'
                state.appendToScreenNum = false
                state.readyForNum = false
                state.readyForOperation = true
                state.appendString = ' '
                state.openParenthesisCount--
                return
            }

            // handle operations
            else if((payload.val === '^' || payload.val === '*' || payload.val === '/' || payload.val === '+' || payload.val === '-') && state.readyForOperation){
                state.equation += ` ${payload.val}`
                state.appendToScreenNum = false
                state.readyForNum = true
                state.readyForOperation = false
                state.appendString = ' '
                state.subsequentEquation = false
                return
            }

            // handle clear
            else if (payload.val === 'C'){
                state.screen1Num = 0,
                state.equation = '',
                state.appendToScreenNum = false,
                state.readyForNum = true,
                state.readyForOperation = false,
                state.appendString = '',
                state.openParenthesisCount = 0
                state.subsequentEquation = false
                return
            }

            else if (payload.val === '='){
                if (state.openParenthesisCount > 0){
                    for(let i = state.openParenthesisCount; i > 0; i--){
                        state.equation += ')'
                    }
                    state.openParenthesisCount = 0
                }
                try{
                    let solution = evaluate(state.equation)
                    if(typeof(solution) === 'number'){
                        state.screen1Num = solution
                        state.subsequentEquation = true
                    }
                }
                catch(e1) {
                    state.screen1Num = 'ERROR'
                    return 
                }
            }
        }
    }
})
  
export default store