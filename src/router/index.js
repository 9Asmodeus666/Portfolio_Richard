import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../views/IndexPage.vue'
import TodoApp from '../components/TodoApp.vue'

const routes = [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/todoapp',
      name: 'TodoApp',
      component: TodoApp
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router