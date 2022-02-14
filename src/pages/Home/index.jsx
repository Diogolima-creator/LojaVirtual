import * as C from './styles';
import * as Products from '../../services/products'
import { useState, useEffect} from 'react';
import { DropBar } from '../../components/DropBar';
import { Footer } from '../../components/Footer';
import { Profile } from '../../components/Profile';
import { Cart } from '../../components/Cart';
import { Login } from '../../components/Login';
import { Search } from '../../components/Search';
import { ProductsItem } from '../../components/ProductsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import { slides } from '../../images/images';
import images from '../../images/loading.gif';
import { ProductAction, useProd } from '../../contexts/ProductContext';
import { productsitem } from '../../data/productsitem';

SwiperCore.use([Navigation,Pagination,Autoplay]);

export const Home = () => {

    const[loading, setLoading] = useState(false);
    const[products, setProducts] = useState([]);
    const { state, dispatch } = useProd();
    const[pos] = useState(state.posit);
    const[quant, setQuant] = useState(state.quantCart);
    const[cartItens, setCartItens] = useState(state.cartItens);
    const[valorCart,setValorCart] = useState(state.valorCart);
    const[qty,setQty] = useState(state.qtyItem);    
    const[qnt,setQntTotal] = useState(state.qntItem);
    let x = 0;
    
    useEffect(()=>{
      const getProducts = async () =>{
        setLoading(true);
        setProducts(await Products.getAll());
        setLoading(false); 
      }
      getProducts();
    },[]);

    const dispatchAllItems = () => {
      dispatch({
        type: ProductAction.setCartItens,
        payload: cartItens
      }) 
      dispatch({
        type: ProductAction.setQtyItem,
        payload: qty
      })
      dispatch({
        type: ProductAction.setQuantCart,
        payload: quant
      })
      dispatch({
        type: ProductAction.setPosit,
        payload: pos
      })
      dispatch({
        type: ProductAction.setQntItem,
        payload: qnt
      })
      dispatch({
        type: ProductAction.setValorCart,
        payload: valorCart
      })
    }

    const onAdd = ( posit ) => {
      let index = cartItens.findIndex(function(todo,index){
          console.log('index'+index);
          return todo.position === posit;
        });
      cartItens[index].qntProd = cartItens[index].qntProd + 1
      setQty(cartItens[index].qntProd)
      cartItens.map((item) => x = x + item.qntProd)
      setQntTotal(x);
      dispatch({
        type: ProductAction.setQtyItem,
        payload: qty
      })
      dispatch({
        type: ProductAction.setQntItem,
        payload: qnt
      })
      setValorCart(valorCart+productsitem[cartItens[index].prod].preco);
  }

  const onRemove = ( posit ) => {
      let index = cartItens.findIndex(function(todo,index){
          console.log('index'+index);
          return todo.position === posit;
        });
      if((cartItens[index].qntProd) !== 1){
          cartItens[index].qntProd = cartItens[index].qntProd - 1
          setQty(cartItens[index].qntProd)
          cartItens.map((item) => x = x + item.qntProd)
          setQntTotal(x);
          dispatch({
            type: ProductAction.setQtyItem,
            payload: qty
          })
          dispatch({
            type: ProductAction.setQntItem,
            payload: qnt
          })
          setValorCart(valorCart-productsitem[cartItens[index].prod].preco);
      }
  }

  const removeItemCart = (  posit  ) => {
  
    setQuant(quant-1);
    let index = cartItens.findIndex(function(todo,index){
        console.log(index);
        return todo.position === posit;
    });
    setValorCart(valorCart-productsitem[cartItens[index].prod].preco*cartItens[index].qntProd);
    setCartItens(cartItens.splice(index,1),[...cartItens]);
    setCartItens(cartItens);
    localStorage.removeItem(posit);
    cartItens.map((item) => x = x + item.qntProd)
    setQntTotal(x);

    dispatch({
      type: ProductAction.setCartItens,
      payload: cartItens
    }) 
    dispatch({
      type: ProductAction.setQtyItem,
      payload: qty
    })
    dispatch({
      type: ProductAction.setQuantCart,
      payload: quant
    })
  
    dispatch({
      type: ProductAction.setQntItem,
      payload: qnt
    })  
}

   
    return(
    <C.Container>
        <C.Header>
          <C.Text><p>NCSM</p></C.Text>
            <DropBar 
            title = "Wear" 
            dispatchAllItems={dispatchAllItems}
            />
            <Search/>
            {localStorage.getItem('token') ? <Profile /> : <Login/>}
            <Cart cartItens = {cartItens} quant={quant} precototal={valorCart} 
            removeItemCart={removeItemCart} onAdd={onAdd} onRemove={onRemove} qty={qty} qnt={qnt} pos={pos}/> 
        </C.Header>
        <C.Swiper>
            <Swiper id="main"
              navigation
              pagination
              loop = "true"
              spaceBetween={50}
              slidesPerView={1}
              effect="fade"
              autoplay 
            >
               {slides.map((e) =>
                  <SwiperSlide key = {e.id}>
                    <img src= {e.image}
                    alt={`Slide ${e.id}`}>  
                    </img>
                </SwiperSlide>
                )}
            </Swiper>
        </C.Swiper>
        <C.Text ><p className="titleText">Lançamentos</p></C.Text>
        {!loading && products.length > 0 && 
            <C.ProductsList>
              <Swiper id="main2"
                navigation
                loop = "true"
                spaceBetween={0}
                slidesPerView={5}
                effect="fade"          
              >
              
                {products.map((item,index)=>(
                  <SwiperSlide className="swips" key={item.id} >
                    <ProductsItem  cartItens = {cartItens} quant={quant} valorCart={valorCart} qty={qty} qnt={qnt} posit={state.posit} key={index} url={item.url} name={item.name} ifor={9}/>
                  </SwiperSlide>
                ))}
              
              </Swiper>
            </C.ProductsList>
          }
        <C.Text ><p className="titleText">Mais Vendidos</p></C.Text>
        {!loading && products.length > 0 && 
            <C.ProductsList>
              <Swiper id="main2"
                navigation
                loop = "true"
                spaceBetween={0}
                slidesPerView={5}
                effect="fade"          
              >
              
                {products.map((item,index)=>(
                  <SwiperSlide className="swips" key={item.id} >
                    <ProductsItem  cartItens = {cartItens} quant={quant} valorCart={valorCart} qty={qty} qnt={qnt} posit={state.posit} key={index} url={item.url} name={item.name} ifor={9}/>
                  </SwiperSlide>
                ))}
              
              </Swiper>
            </C.ProductsList>
          }
        {loading &&
        <C.ScreenWaning>
          <img src={images} alt={images}></img>
          <div>Carregando...</div>
        </C.ScreenWaning>
          }
        <Footer>
        </Footer>
      </C.Container>
    );
}