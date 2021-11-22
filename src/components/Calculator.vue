<template>
    <div class="w-screen h-screen grid items-center justify-center">
        <div class="calculator rounded-md bg-blue-400 grid grid-cols-1 grid-rows-2 items-center justify-center">
            <div class="screen bg-yellow-100 rounded-md grid justify-end items-center">
                <span class="screenText overflow-x-auto overflow-y-hidden text-4xl font-medium">{{currentVal}}</span>
            </div> 
            <div class="calcBtns h-full grid grid-cols-4 grid-rows-5 gap-3">
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">(</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">)</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">^</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">/</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">7</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">8</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">9</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">x</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">4</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">5</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">6</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">-</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">1</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">2</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">3</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center">+</button>
                <button class="calcBtn cursor-pointer w-full bg-red-400 rounded-md grid items-center">C</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">0</button>
                <button class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center">.</button>
                <button class="calcBtn cursor-pointer w-full bg-yellow-500 rounded-md grid items-center">=</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    props: {
        title: String,
        div: String
    },
    data(){
        return {
            currentVal: this.$store.state.currentVal
        }
    }
}
</script>

<style scoped>
.calculator {
    height: calc(100vh - 100px);
    min-height: 400px;
    width: calc(100vw - 50px);
    max-width: calc(100vh * .75);
    grid-template-rows: 150px 1fr;
}
.screen {
    height: 70px;
    margin: 40px;
    vertical-align: center;
}
.screenText {
    margin-right: 15px;

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