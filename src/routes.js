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
        titulo: 'home',
        menu: true
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
        titulo: 'cadastro',
        menu: true
    },
    {
        path: '/cadastro/:id',
        name: 'altera',
        component: Cadastro,
        titulo: 'cadastro',
        menu: false
    }
];