import * as C from './styles';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { DropBar } from '../../components/DropBar';
import { Cart } from '../../components/Cart';
import { Login } from '../../components/Login';
import { Search } from '../../components/Search';
import { Profile } from '../../components/Profile';
import { productsitem } from '../../data/productsitem';
import { ProductAction, useProd } from '../../contexts/ProductContext';
import { Tamanho } from '../../components/Tamanho';
import { Footer } from '../../components/Footer';
import * as cep from 'correios-brasil';


export const Product = () => {
  
    const history = useHistory();
    const { state, dispatch } = useProd();
    const[cepField, setCepField] = useState('');
    const[look, setLook] = useState(false);
    const[pos, setPos] = useState(state.posit);
    const[quant, setQuant] = useState(state.quantCart);
    const[cartItens, setCartItens] = useState(state.cartItens);
    const[qty,setQty] = useState(state.qtyItem);    
    const[qnt,setQntTotal] = useState(state.qntItem);
    const[valorCart,setValorCart] = useState(state.valorCart);

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
        console.log(cartItens[index].qntProd);
        setQty(cartItens[index].qntProd)
        console.log(cartItens);
        cartItens.map((item) => x = x + item.qntProd)
        setQntTotal(x);
        console.log('x'+x);
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
            console.log(cartItens[index].qntProd);
            setQty(cartItens[index].qntProd)
            console.log(cartItens);
            cartItens.map((item) => x = x + item.qntProd)
            console.log('x'+x);
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

   const addItemCart = ( numProd,tamanho ) => {
     const exist = tamanho;
      if(cartItens.find((x) => x.tam === exist && x.prod === `${numProd}`)){
      }else{
        localStorage.setItem(pos,numProd);
        setCartItens([...cartItens,{position:pos,prod:localStorage.getItem(pos),tam:tamanho,qntProd:1,url:state.url}]);
        setValorCart(valorCart+productsitem[numProd].preco*1);
        setPos(pos+1);
        setQuant(quant+1);
        
        dispatch({
          type: ProductAction.setCartItens,
          payload: cartItens
        })
        dispatch({
          type: ProductAction.setPosit,
          payload: pos
        })
        dispatch({
          type: ProductAction.setQtyItem,
          payload: qty
        })
        dispatch({
          type: ProductAction.setQuantCart,
          payload: quant
        })
        
        if(quant < 1){
          x=1;
          console.log(x+'quant'+quant);
        }else{
          x=1;
          cartItens.map((item) => x = x + item.qntProd);
        }
        setQntTotal(x); 
        dispatch({
                  type: ProductAction.setQntItem,
                  payload: qnt
        })
        
        
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
        console.log('x'+x);
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

    const setTamProd = ( tamProd ) => {
      dispatch({
          type: ProductAction.setTamProd,
          payload: tamProd
      });
    }

    useEffect(() => {
      if(state.numProd === 0){
          history.push('/')
      }
    });

    
    async function handleCalccep(cepField){
      setLook(false);
     if(look === false){
       document.getElementById('verify').value = 'Calculando'};

      let args = {
        sCepOrigem: "79011100",
        sCepDestino: cepField,
        nVlPeso: "1",
        nCdFormato: "1",
        nVlComprimento:"20",
        nVlAltura: "20",
        nVlLargura:"20",
        nCdServico: ['04014', '04510'],
        nVlDiamentro: "0"
      }
      
      await cep.calcularPrecoPrazo(args).then((response) => {
          dispatch({
            type: ProductAction.setCEP,
            payload: response
        });
      });

      setLook(true);

      }

    const handleBackHome = () => {
      dispatchAllItems();
      history.push('/');
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
            <Cart cartItens={cartItens} quant= {quant} precototal={valorCart} removeItemCart={removeItemCart} onAdd={onAdd} onRemove={onRemove} qty={qty} qnt={qnt} pos={pos}/> 
        </C.Header>
        <C.LineTemp>
          <button onClick={handleBackHome} className="btnback"> ➞ Home</button>
        </C.LineTemp>
        <C.ItemImage>
          <img src={state.url} alt={state.name}/>
        </C.ItemImage>
      <C.Item>
            <C.Title>{productsitem[state.numProd].nome} - {state.tamProd}</C.Title>
            <C.Value>R$ {productsitem[state.numProd].preco}</C.Value>
            <p>SELECIONE O TAMANHO:</p>
            <C.TamanhoList>
                <Tamanho 
                title="P"
                selected={state.tamProd === 'P'}
                onClick = {() => setTamProd('P')}
                />
                <Tamanho 
                title="M"
                selected={state.tamProd === 'M'}
                onClick = {() => setTamProd('M')}
                />
                <Tamanho 
                title="G"
                selected={state.tamProd === 'G'}
                onClick = {() => setTamProd('G')}
                />
                <Tamanho 
                title="GG"
                selected={state.tamProd === 'GG'}
                onClick = {() => setTamProd('GG')}
                />
            </C.TamanhoList>
            { (state.tamProd !== '' && <button onClick ={() => addItemCart(state.numProd,state.tamProd)}> COMPRAR </button>) ||
            (state.tamProd === '' && <button className="semTam" > Selecione um Tamanho </button>)}

            <C.Frete>
              <p>CALCULAR O FRETE:</p>
              <input type='text' placeholder='CEP' required maxlength ="8"
                value={cepField} onChange={e=> setCepField(e.target.value)}
              />
              <input id="verify" className="verify" type='button' value="Verificar" onClick={()=>handleCalccep(cepField)} ></input>
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" rel="noreferrer"target="_blank">não sei meu cep</a>
                <C.FreteItem>

                    { look && state.cep.map !== undefined && 
                    <div className="FreteItem">
                      {state.cep.map((item,index)=> (
                      <p> {Object.values(item)[2]} Dias para a entrega e Valor Sedex: R$ {(Object.values(item)[1])}</p>
                      ))}
                    </div>
                    }
                    
                </C.FreteItem>
            </C.Frete>
        </C.Item>
        <C.ItemDescription>
          <C.Text>Descrição do Produto:</C.Text>
          <C.Description>
                {productsitem[state.numProd].description}
          </C.Description>
       </C.ItemDescription>
       <Footer>

       </Footer>
      </C.Container>
    );
}