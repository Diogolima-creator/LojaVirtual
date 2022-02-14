import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Searcher } from './pages/Searcher';
import { BrowserRouter, Route } from 'react-router-dom';
import { CartPage } from './pages/CartPage';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';

export const Router = () =>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/product" exact component={Product} />
            <Route path="/search" exact component={Searcher} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
        </BrowserRouter>
        
    );
}