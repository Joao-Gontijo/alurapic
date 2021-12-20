import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    {
        path: '*', 
        component: Home,
        menu: false
    },
    {
        path: '',
        name: 'home',
        component: Home,
        titulo: 'Home',
        menu: true
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
        titulo: 'Cadastro',
        menu: true
    },
    {
        path: '/cadastro/:id',
        name: 'altera',
        component: Cadastro,
        titulo: 'Cadastro',
        menu: true
    }
];