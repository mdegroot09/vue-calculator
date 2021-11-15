<template>
    <div class="w-screen h-screen grid items-center justify-center">
        <div class="calculator rounded-md bg-blue-400 grid grid-cols-1 grid-rows-2 items-center justify-center">
            <div class="screen bg-yellow-100 rounded-md"></div>
            <div class="calcBtns h-full grid grid-cols-4 grid-rows-5 gap-3">
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center">(</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center">)</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center" style="paddingTop: 6px">^</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center">/</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">7</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">8</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">9</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center">x</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">4</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">5</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">6</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center">-</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">1</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">2</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">3</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-500 rounded-md grid items-center"><div class="btnText text-center">+</div></div>
                <div class="calcBtn cursor-pointer w-full bg-red-400 rounded-md grid items-center"><div class="btnText text-center">C</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">0</div></div>
                <div class="calcBtn cursor-pointer w-full bg-gray-300 rounded-md grid items-center"><div class="btnText text-center">.</div></div>
                <div class="calcBtn cursor-pointer w-full bg-yellow-500 rounded-md grid items-center"><div class="btnText text-center">=</div></div>
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
}
.calcBtns {
    padding: 40px;
}
.calcBtn {
    opacity: .88;
}
.calcBtn:hover {
    opacity: .94;
}
.calcBtn:active {
    opacity: 1;
}
.btnText {
    vertical-align: middle;
    font-weight: 700;
    font-size: 1.3em;
}
</style>