<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="rounded-md bg-blue-400 h-auto w-auto calculator">
            
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
    height: calc(100vh - 200px);
    width: calc(100vw - 200px);
    max-width: 500px;
}
</style>