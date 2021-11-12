<template>
    <div class="hello">
        {{title}}
        <div>
            {{div}}
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
.hello {
    background: lightblue;
}
</style>