import * as C from './styles'
import { productsitem } from '../../data/productsitem';

export const ItemCardCart = ( { cartItens,quantidade,removeItemCart, preco, onAdd, onRemove, qntotal} ) => {


    return(
        <C.Container>
            <C.Text className="Totalvalue">Valor Total: R$ { qntotal !== undefined && parseFloat(preco).toFixed(2)} {qntotal === undefined && preco} </C.Text>
            {quantidade > 0 &&
              cartItens.map((item,index) =>
                    
                <C.Card key = {index} id={item.position}>
                    
                    <div>   
                            {productsitem[item.prod].nome}{" "}{item.tam}
                            <br/>
                            R$ {productsitem[item.prod].preco}
                            <br/>
                        <button onClick={() => onRemove(item.position)}>-</button>{" "}{item.qntProd}{" "}<button onClick={() => onAdd(item.position)}>+</button>
                            <hr/>
                        {<button className="Xcart" onClick={() => removeItemCart(item.position)}>X</button> }
                    </div>    
                </C.Card>  
            )}

            {quantidade <= 0 &&
                <C.Card>
                    <p>Seu carrinho está vazio.</p>
                </C.Card>
            }
        </C.Container>
    
    );
}