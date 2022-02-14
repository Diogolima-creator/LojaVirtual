import * as C from './styles';
import { useHistory } from "react-router";
import { productsitem } from '../../data/productsitem';
import { ProductAction, useProd } from '../../contexts/ProductContext';

export const ProductsItem = ({ posit,cartItens, qty, quant, valorCart, qnt,url, name, ifor}) => {
    const history = useHistory();
    const { dispatch } = useProd();
    

    const productnameConverter = ( name ) => {
        var names = name.substring(-3,(name.length-4))
        for(var i=1;i<ifor;i++){
            if(productsitem[i].type === names){
                return i;
            }
        }
    }

    const handlePageProduct = ( prod,url ) => {
        dispatch({
            type: ProductAction.setNumProd,
            payload: prod
        })
        dispatch({
            type: ProductAction.setURL,
            payload: url
        })
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
            payload: posit
          })
          dispatch({
            type: ProductAction.setValorCart,
            payload: valorCart
          })
        history.push('/product');
        window.scrollTo(0,0);
    }

    var prod = productnameConverter(name);
    
    return(
        <C.Container className="ContainerProducts">
            <img src={url} alt={name} />
            <C.Card>
                <p>{productsitem[prod].nome}</p>
                <h2>R$ {productsitem[prod].preco}</h2>
                <h3>A vista no boleto com 10% de desconto</h3>
                <p className="descrição">{productsitem[prod].subdescription} </p>
                <button onClick={()=>handlePageProduct(prod,url)}>VER DETALHES</button>
            </C.Card>
        </C.Container>

    );
}