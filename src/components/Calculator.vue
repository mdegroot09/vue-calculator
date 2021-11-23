<template>
    <div class="w-screen h-screen grid items-center justify-center">
        <div class="calculator rounded-md bg-blue-400 grid grid-cols-1 grid-rows-3 items-center justify-center">
            <div class="screen bg-yellow-100 rounded-md grid justify-end items-center">
                <span class="margin-right-15px overflow-x-auto overflow-y-hidden text-5xl font-medium">{{screen1Num}}</span>
            </div> 
            <div class="screen screen2 bg-gray-300 rounded-md grid justify-end items-center self-start">
                <span class="margin-right-15px overflow-x-auto overflow-y-hidden text-xl font-medium">{{equation}}</span>
            </div> 
            <div class="calcBtns h-full grid grid-cols-4 grid-rows-5 gap-3">
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addParenthesis('(')">(</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addParenthesis(')')">)</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addOperation('^')">^</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addOperation('/')">/</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(7)">7</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(8)">8</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(9)">9</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addOperation('*')">x</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(4)">4</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(5)">5</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(6)">6</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addOperation('-')">-</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(1)">1</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(2)">2</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(3)">3</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center" @click="addOperation('+')">+</button>
                <button class="calcBtn cursor-pointer w-full bg-red-400 rounded-md grid items-center" @click="clear()">C</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber(0)">0</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center" @click="addNumber('.')">.</button>
                <button class="calcBtn cursor-pointer w-full bg-yellow-500 rounded-md grid items-center" @click="compute()">=</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Calculator',
    props: {
        title: String,
        div: String
    },
    methods: {
        addNumber(val){
            this.$store.commit('addNumber', {
                val
            })
        },
        addOperation(val){
            this.$store.commit('addOperation', {
                val
            })
        },
        addParenthesis(val){
            this.$store.commit('addParenthesis', {
                val
            })
        },
        compute(){
            this.$store.commit('compute')
        },
        clear(){
            this.$store.commit('clear')
        }
    },
    computed: mapState({
        screen1Num: state => state.screen1Num,
        equation: state => state.equation
    }),
}
</script>)

<style scoped>
.calculator {
    height: calc(100vh - 100px);
    min-height: 400px;
    width: calc(100vw - 50px);
    max-width: calc(100vh * .75);
    grid-template-rows: auto auto 1fr;
}
.screen {
    height: 70px;
    margin: 40px;
    margin-bottom: 15px;
    vertical-align: center;
}
.margin-right-15px {
    margin-right: 15px;
}
.screen2 {
    margin: 0 40px;
    height: 30px;
}
.calcBtns {
    padding: 40px;
}
.calcBtn {
    opacity: .85;
    vertical-align: middle;
    font-weight: 700;
    font-size: 1.3em;
}
.calcBtn:hover {
    opacity: .90;
}
.calcBtn:active {
    opacity: 1;
}
</style>