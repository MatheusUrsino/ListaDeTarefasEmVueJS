<script setup>
import ToDoTask from './components/ToDoTask.vue'
</script>

<template>

  <div class="min-h-screen flex justify-center items-center ">
    <div class="bg-white rounded-xl w-[70vw] h-[90vh] justify-center align-middle ">
      <ToDoTask titleToDo="Tarefas" toDoMsg="Insira uma nova tarefa: " />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
