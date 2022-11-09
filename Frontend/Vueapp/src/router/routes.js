import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Profile from '../components/Profile';
import Edit from '../components/Edit';
import Delete from '../components/Delete';

export default [
  {
    path: '/',
    component: Signup,
  },
  {
    path: '/signin',
    component: Signin,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/edit',
    component: Edit,
  },
  {
    path: '/delete',
    component: Delete,
  },
];
