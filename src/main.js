import { createApp } from 'vue'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faListCheck, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'  // Importando o ícone específico
import App from './App.vue'

// Adicionando o ícone à biblioteca
library.add(faPlus)
library.add(faTrash)
library.add(faListCheck)

createApp(App).component('fa', FontAwesomeIcon).mount('#app')
