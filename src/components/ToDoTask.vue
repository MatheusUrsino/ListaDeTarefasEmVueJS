<script setup>
import { ref } from 'vue'

defineProps({
  titleToDo: String,
  toDoMsg: String,
})
const toDoContent = ref("")
const toDoList = ref([])


const handleSubmit = (e) => {
  e.preventDefault();
  toDoList.value.push(toDoContent.value)


}
const removeToDo = (index) => {
  toDoList.value.splice(index, 1);
}
</script>

<template>
  <header class="w-full ">
    <h1 class="font-poppins text-cyan-950">{{ titleToDo }}
      <fa icon="list-check" class="text-green-700 justify-center bg" />
    </h1>
    <h2 class=" flex flex-col justify-center h-[10vh] mt-20 text-[1.2rem] text-lime-600 font-medium">{{ toDoMsg }}</h2>
  </header>
  <section>
    <div class="">
      <form id="toDoList" @submit="handleSubmit" class="">
        <input type="text" placeholder="Insira a tarefa aqui" v-model="toDoContent" id="ToDoContent"
          class="rounded-full p-4 text-gray-900 bg-slate-300 w-[70%] h-[10vh] border-none outline-none">
        <button type="submit" class="bg-green-600 rounded-full px-4 py-1 text-[2rem] text-white ml-5 align-middle">
          <fa icon="plus" />
        </button>
      </form>
      <div class="formsContent overflow-y-scroll h-[40vh] mt-5">
        <ul class=" ">
          <li v-for="(task, index) in toDoList" :key="index"
            class="rounded-md p-4 text-gray-900 bg-slate-300 w-[90%] h-[10vh] m-auto mt-5 flex justify-between">
            {{ task }}
            <button @click="removeToDo(index)">
              <fa icon="trash" class="text-red-700 justify-center bg" />
            </button>
          </li>
        </ul>
      </div>
    </div>


  </section>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}


/* Estilizando a barra de rolagem */
.formsContent::-webkit-scrollbar {
  width: 8px;
}

/* Estilizando a parte "traseira" da barra de rolagem */
.formsContent::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Estilizando a parte "deslizante" da barra de rolagem */
.formsContent::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Estilizando a parte deslizante quando passa o mouse */
.formsContent::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
