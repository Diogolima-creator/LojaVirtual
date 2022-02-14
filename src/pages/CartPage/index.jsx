import * as C from './styles';
import { useState} from 'react';
import { ProductAction, useProd } from '../../contexts/ProductContext';
import { productsitem } from '../../data/productsitem';
import { useHistory } from 'react-router';


export const CartPage = () => {

    const { state, dispatch } = useProd();
    const[pos] = useState(state.posit);
    const[quant, setQuant] = useState(state.quantCart);
    const[cartItens, setCartItens] = useState(state.cartItens);
    const[valorCart,setValorCart] = useState(state.valorCart);
    const[qty,setQty] = useState(state.qtyItem);    
    const[qnt,setQntTotal] = useState(state.qntItem);
    
    const history = useHistory();

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

    dispatchAllItems();

    }

    const handleBackHome = () => {
        dispatchAllItems();
        history.push('/');
    }
      
    return (
        <C.Container>
            <C.Header>
            <C.Text><p onClick={handleBackHome}>NCSM</p></C.Text>
            <C.Text><p className="end2">Endreço<br></br>Sac<br></br>Others</p></C.Text>
          </C.Header>
            <C.CartPage qnt={quant}>
                <C.HeaderCart>
                    <C.Text>🛒CARRINHO DE COMPRAS<hr></hr></C.Text>
                    <C.List>
                        <ul className="FirstList">
                            <li>#</li>
                            <li>Descrição</li>
                        </ul>
                        <ul className="SecondList">
                            <li>Quantidade</li>
                            <li>Preço</li>
                            <li>SubTotal</li>
                        </ul>
                    </C.List>
                </C.HeaderCart>
                <C.Product>
                {quant > 0 &&
                cartItens.map((item,index) =>
                        
                    <C.Card key = {index} id={item.position}>
                        
                        <div className="Lists">
                            <ul className="ThirdList">   
                                <li><img src={item.url} alt={state.url}></img></li>
                                <li className="nameProd">{productsitem[item.prod].nome}{" "}{item.tam}</li>
                            </ul>
                            <ul className="FourthList">
                                <li className="Buttons"><button onClick={() => onAdd(item.position)}>+</button><p>{item.qntProd}</p><button onClick={() => onRemove(item.position)}>-</button>
                                {<button className="Xcart" onClick={() => removeItemCart(item.position)}>Remover</button> }
                                </li>
                                <li className="preco">R$ {productsitem[item.prod].preco}</li>
                                <li className="subtotal">R$ { parseFloat(productsitem[item.prod].preco*item.qntProd).toFixed(2)}</li>
                            </ul>
                            
                        </div>    
                    </C.Card>  
                    
                )}

                {quant <= 0 &&
                    <C.Card className="Card">
                        <div>
                            <p>Seu carrinho está vazio.</p>
                            <button onClick={handleBackHome}>Voltar as Compras.</button>
                        </div>
                    </C.Card>                  
                }
                <hr></hr>
                </C.Product>
                <div className="end1">
                    <ul className="end">
                        <li>Preço Total: R$ {valorCart > 0 && parseFloat(valorCart).toFixed(2)}{valorCart <= 0 && 0}</li>
                        <li><button>FINALIZAR PEDIDO</button></li>
                    </ul>
                </div>
            </C.CartPage>
        </C.Container>
    );
}