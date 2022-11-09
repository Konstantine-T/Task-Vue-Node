import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Profile from '../components/Profile';
import Edit from '../components/Edit';

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
];
