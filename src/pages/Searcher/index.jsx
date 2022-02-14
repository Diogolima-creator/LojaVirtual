import * as C from './styles';
import * as Products from '../../services/products';
import { useState, useEffect} from 'react';
import { useHistory } from "react-router";
import { DropBar } from '../../components/DropBar';
import { Cart } from '../../components/Cart';
import { Login } from '../../components/Login';
import { Search } from '../../components/Search';
import { ProductAction, useProd } from '../../contexts/ProductContext';
import { productsitem } from '../../data/productsitem';
import { ProductsItem } from '../../components/ProductsItem';
import images from '../../images/loading.gif';


export const Searcher = () => {

    const history = useHistory();
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

    useEffect(()=>{
      const getProducts = async () =>{
        setLoading(true);
        setProducts(await Products.getAll());
        setLoading(false); 
      }
      getProducts();
    },[]);

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

    const handleBackHome = () => {
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
      dispatch({
        type: ProductAction.setPosit,
        payload: pos
      })
      dispatch({
        type: ProductAction.setValorCart,
        payload: valorCart
      })
      
      history.push('/');
    }

    const[min,setMin] = useState(0);
    const[max,setMax] = useState(299.99);

    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");

    const valueInput = ( y,x ) => {   
        if(y === 0){
          setMin(x)

          var left = inputLeft;
          var minim = left.min;
          var w = left.max;

          left.value = Math.min(parseInt(left.value),
          parseInt(inputRight.value) - 1);

          var percent = ((left.value - minim) / (w-minim)) * 100;

          thumbLeft.style.left = percent + "%";
          range.style.left =  percent + "%";
        
        }else if (y === 1){
          setMax(x)

          var right = inputRight;
          minim = right.min;
          w = right.max;

          right.value = Math.max(parseInt(right.value),
          parseInt(inputLeft.value) + 1);

          percent = ((right.value - minim) / (w-minim)) * 100;

          thumbRight.style.right = (100-percent) + "%";
          range.style.right =  (100-percent) + "%";
        }
    }


    return(
    <C.Container>
        <C.Header>
          <C.Text><p onClick={handleBackHome}>NCSM</p></C.Text>
            <DropBar 
            title = "Wear" 
            dispatchAllItems={dispatchAllItems}
            />
            <Search/>
            <Login/>
            <Cart cartItens = {cartItens} quant={quant} precototal={valorCart} 
            removeItemCart={removeItemCart} onAdd={onAdd} onRemove={onRemove} qty={qty} qnt={qnt} /> 
        </C.Header>
        <C.Banner>
          
        </C.Banner>
        <C.SearchFunc>
          <C.Text>Filtros</C.Text>
          <C.Text className="titleFilter" >Preço</C.Text>
          <C.PriceBar>
            <div className="minmax">
                <p >Min.</p>
                <p >Max.</p> 
            </div>
              <div className="valorfilter">
                <div className="inputss">
                  <input id="input-left" value = {min} onInput={() => valueInput(0,inputLeft.value)} min={0} max={299} type="range"/>
                  <input id="input-right" value= {max} class="valorfilter3" onInput={() => valueInput(1,inputRight.value)} min={0} max={299} type="range"/>
                </div >
              </div>
              <div className="block">
                <p>R$ {min}</p>
                <p>R$ {max}</p> 
              </div>
              <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left"></div>
                <div class="thumb right"></div>
		          </div>
          </C.PriceBar>
          <C.Text className="titleFilter">Tamanho</C.Text>
          <C.Tamanho>
            <button>PP</button>
            <button>P</button>
            <button>M</button>
            <button>G</button>
            <button>GG</button>
            <button>XG</button>
          </C.Tamanho>
          <C.Text className="titleFilter">Cor</C.Text>
          <C.Cor>
            <button className="blue"></button>
            <button className="black"></button>
            <button className="red"></button>
            <button className="white"></button>
          </C.Cor>
        </C.SearchFunc>
        <C.Search>
        <C.LineTemp>
          <button onClick={handleBackHome} className="btnback"> ➞ Home </button>
          <p>Busca:'{state.search}'</p>
        </C.LineTemp>
          <C.Text ><p className="titleText">Destaques</p></C.Text>
          {!loading && products.length > 0 && 
              <C.ProductsList >
                {products
                .filter(({name}) => name.toLowerCase().indexOf(`${state.search}`.toLowerCase()) !== -1)
                .map((item,index) => (
                  <ProductsItem cartItens = {cartItens} quant={quant} valorCart={valorCart} qty={qty} qnt={qnt} posit={state.posit} key={index} url={item.url} name={item.name} ifor={9} />
                ))
               }
              </C.ProductsList>
            }
          {loading &&
          <C.ScreenWaning>
            <img src={images} alt={images}></img>
            <div>Carregando...</div>
          </C.ScreenWaning>
            }
        </C.Search>

    </C.Container>
    );
}