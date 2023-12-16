import Blogs from '../views/pages/blogs';
import Home from '../views/pages/home';
import DIABETESDISH from '../views/pages/diabetesdish';
import Detail from '../views/pages/detail';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/diabetesdish': DIABETESDISH,
    '/food/:id': Detail,
    '/blogs': Blogs,
};

export default routes;