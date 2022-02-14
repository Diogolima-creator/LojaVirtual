import * as C from './styles';
import { ReactComponent as CartIcon } from '../../svgs/cart.svg';
import { ItemCardCart } from '../ItemCardCart';
import { useHistory } from "react-router";
import { ProductAction,useProd } from '../../contexts/ProductContext';


const handleScreenCart = () => {
    if(document.getElementById("itens").style.display === 'none'){
        document.getElementById("itens").style.display = 'block';
    }else{
        document.getElementById("itens").style.display = 'none';
    }
}


export const Cart = (  { cartItens, quant, precototal, removeItemCart,onAdd,onRemove, qnt, qty,pos }  ) => {
    
    const history = useHistory();
    const { dispatch } = useProd();

    const handlePageCart = () => {
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
            payload: precototal
          })
        history.push('/cart');
        window.scrollTo(0,0);
    }

    return( 
        <C.Container>
            <CartIcon className="CartIcon"onClick={handleScreenCart}/>
            <div className="cartBall">{quant}</div>
            <C.Itens id="itens">
                <C.Text>Meu Carrinho</C.Text>
                
                <button className="X" onClick={handleScreenCart}>X</button>
                {quant <= 0 &&
                    <ItemCardCart
                        title = ''
                        tamanho = ''
                        quantidade = {-1}
                        preco = {0}
                        
                     />
                }
                {quant > 0 && 
                    <ItemCardCart
                        cartItens={cartItens}
                        quantidade = {qty}
                        removeItemCart={removeItemCart}
                        preco = {precototal}
                        onAdd = {onAdd}
                        onRemove = {onRemove}
                        qntotal = {qnt}
                     />
                }
                <C.FinishBuy className="FinishBuy">
                    <button className="btnEnd">Finalizar</button>
                    <button className="btnEnd" onClick={handlePageCart}>Ir para o Carrinho</button>
                </C.FinishBuy>
            </C.Itens>
        </C.Container>
    );
}