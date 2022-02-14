import * as C from './styles';

export const AddressBlock = ( {typeEnd,CEP,Rua,Bairro,Complemento,Cidade,Estado,pos} ) => {

    const delAddress = async () => {

        const _id = localStorage.getItem('id')
        
        const result = await fetch('http://localhost:9999/deladdress',{
              method: 'POST',
              headers:{
                'Content-type' : 'application/json'
              },
              body: JSON.stringify({
                  _id,
                  pos
              })
            }).then((res) => res.json())

            if(result.status === 'ok'){
                alert('deu certo')
                return console.log(result)
            }else{
                alert(result.error);
            }
    }    
    
    return(
        <C.Container>
            <div>
                <button onClick={delAddress} className="Delete">✖</button>
                <p className="Titulo">{typeEnd}</p>
                <p>CEP {CEP} </p>
                <p>{Rua + ' ' + Complemento}</p>
                <p>{Bairro}</p>
                <p>{Cidade+ ' ' + Estado}</p>
                <button className="Alterar">Alterar</button>
            </div>
        </C.Container>
    );
}