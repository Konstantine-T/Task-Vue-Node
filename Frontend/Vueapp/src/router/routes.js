import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Profile from '../components/Profile';
import Edit from '../components/Edit';
import Delete from '../components/Delete';

export default [
  {
    name: 'signup',
    path: '/',
    component: Signup,
  },
  {
    name: 'signin',
    path: '/signin',
    component: Signin,
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
  },
  {
    name: 'edit',
    path: '/edit',
    component: Edit,
  },
  {
    name: 'delete',
    path: '/delete',
    component: Delete,
  },
];
