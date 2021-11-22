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
        openParenthesisCount: 0
    },
    mutations: {
        updateEquation(state, payload){

            // handle numbers
            if (typeof(payload.val) === 'number' && state.readyForNum){
                // don't allow zero as beginning number
                if(!state.appendToScreenNum && payload.val === 0){
                    return 
                }
                // if beginning of equation
                else if (state.screen1Num === 0 && !state.equation){
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
                return
            }

            else if(payload.val === '('){
                state.equation += state.appendString + '('
                state.appendToScreenNum = false
                state.readyForNum = true
                state.readyForOperation = false
                state.appendString = ''
                state.openParenthesisCount++
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
                return
            }

            else if (payload.val === '='){
                try{
                    let solution = evaluate(state.equation)
                    if(typeof(solution) === 'number'){
                        state.screen1Num = solution
                    }
                }
                catch(e) {
                    return
                }
            }
        }
    }
})
  
export default store