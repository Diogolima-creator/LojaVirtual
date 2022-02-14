import * as C from './styles';
import { useHistory } from 'react-router';
import images from '../../images/perfil1.png'
import { InputReg } from '../../components/InputReg';
import { useState,useEffect } from 'react';
import { AddressBlock } from '../../components/AddressBlock';
import { ReactComponent as FavIcon } from '../../svgs/fav.svg';
import { ReactComponent as PadlockIcon } from '../../svgs/padlock.svg';
import { ReactComponent as AddressIcon } from '../../svgs/address.svg';
import { ReactComponent as BoxIcon } from '../../svgs/box.svg';
import { ReactComponent as DadosIcon } from '../../svgs/dados.svg';





export const Profile = () => {
    
    const history = useHistory();
    const [listOn,setlistOn] = useState(0);
    const [resultado,setResultado] = useState([]);
    const [address, setAddress] = useState([])
    const [teste,setTeste] = useState(false)

    const handleBackHome = () => {
        history.push('/');
    }
        
    const funcsetlistOn = ( num ) => {
      setlistOn(num);
  
    }

    const Logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      history.push('/')
    }

    useEffect(() => {
      if(localStorage.getItem('token') === null){
          history.push('/')
      }
    });

    const userList = async () => {
      const _id = localStorage.getItem('id');
      
      const result = await fetch('http://localhost:9999/list',{
          method: 'POST',
          headers:{
              'Content-type' : 'application/json'
          },
          body: JSON.stringify({
              _id,
          })
      })
      .then((res) => res.json())
      
      if(result.status === 'ok'){

        return setResultado(result.user)
      }else{
        alert(result.error);
      }
    }

      const addressList = async () => {
        const _id = localStorage.getItem('id');
        
        const result = await fetch('http://localhost:9999/listaddress',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                _id,
            })
        })
        .then((res) => res.json())
        
        if(result.status === 'ok'){
          return setAddress(result.adress.AllAddress)
        }else{
          alert(result.error);
        }
    }

    

    const userUpdate = async() => {

      const email = document.getElementById('Email').value
      const name = document.getElementById('Nome').value
      const lastname = document.getElementById('Sobrenome').value
      const rg = document.getElementById('RG').value
      const datenasc = document.getElementById('Datanasc').value
      const gender = document.getElementById('Gender').value
      const tel = document.getElementById('Tel').value
      const cel = document.getElementById('Cel').value
      
      const result = await fetch('http://localhost:9999/update',{
              method: 'POST',
              headers:{
                'Content-type' : 'application/json'
              },
              body: JSON.stringify({
                  email,
                  name,
                  lastname,
                  rg,
                  datenasc,
                  gender,
                  tel,
                  cel
              })
            }).then((res) => res.json())

      if(result.status === 'ok'){
        document.location.reload(true);
        return console.log(result.user)
      }else{
        alert(result.error);
      }
    }

  if(teste === false){
        userList()
        addressList();
        setTeste(true)
      }

  const formData = ( data ) => {
        if(data !== undefined){
          const date = data.substring(0,10)
          return date
        }
      }

  const handleAddressInput = ( ) => {
       
        if(document.getElementById('addInput').style.display === 'block'){
          document.getElementById('addInput').style.display = 'none'
        }else{
          document.getElementById('addInput').style.display = 'block'
        }
    }

  const handleAddAddress = async() =>{
        const typeEnd = document.getElementById('typeEnd').value
        const cep = document.getElementById('cep').value
        const city = document.getElementById('city').value
        const state = document.getElementById('state').value
        const end = document.getElementById('end').value
        const bairro = document.getElementById('bairro').value
        const number = document.getElementById('number').value
        const complemento = document.getElementById('complemento').value
        const ref = document.getElementById('ref').value
        const _id = localStorage.getItem('id')

        const AllAddr = 
          {
           typeAddress: typeEnd,
           cep: cep,
           city: city,
           state: state,
           address: end,
           address2: bairro,
           number: number,
           complement: complemento,
           ref: ref 
          }

        const result = await fetch('http://localhost:9999/createaddress',{
              method: 'POST',
              headers:{
                'Content-type' : 'application/json'
              },
              body: JSON.stringify({
                  _id,
                  AllAddr
              })
            }).then((res) => res.json())

      if(result.status === 'ok'){
        alert('deu certo!')
        return console.log(result)
      }else{
        alert(result.error);
      }

    }

    return (
        <C.Container>
            <C.Header>
            <C.Text><p onClick={handleBackHome}>NCSM</p></C.Text>
            <C.Text><p className="end2">Endreço<br></br>Sac<br></br>Others</p></C.Text>
          </C.Header>
          <C.Profile>
            
              <C.ProfileHeader> 
                <C.Text><p className="backhome" onClick={handleBackHome}>Inicio - Profile</p> </C.Text>
                <C.Text>Profile<hr/></C.Text>
              </C.ProfileHeader>
              <div className="ProfileFlex">
              <C.ProfileMenu>
                <div className="perfilTitle">
                  <img src={images} alt={images}></img><p className="Logout" onClick={Logout}>{resultado.name+' '+resultado.lastname} (sair)</p>
                </div>
                <div className="perfilList">
                  <ul>
                    <li onClick={()=>funcsetlistOn(0)}>MEUS DADOS</li>
                    <li onClick={()=>funcsetlistOn(1)}>MEUS ENDEREÇOS</li>
                    <li onClick={()=>funcsetlistOn(2)}>MEUS PEDIDOS</li>
                    <li onClick={()=>funcsetlistOn(3)}>MINHA LISTA DE DESEJOS</li>
                    <li onClick={()=>funcsetlistOn(4)}>ALTERAR SENHA</li>
                  </ul>
                </div>
              </C.ProfileMenu>
              <C.ProfileSelect>
                {listOn === 0 && 
                <div className="meusDados">
                    <div className="titleDados">
                      <DadosIcon className="IconSvg"/><p>Dados Pessoais</p><hr/>
                    </div >
                    <div className="Input">
                      <InputReg id1={'Email'} title1={'Email'} title2={'Adicione um Email Aqui'} metade={true} placeholder1={resultado.email} Val={resultado.email}></InputReg>
                      <InputReg id1={'Nome'} id2={'Sobrenome'} title1={'Nome'} title2={'Sobrenome'} metade={true} placeholder1={resultado.name} placeholder2={resultado.lastname} Val={''}></InputReg>
                      <InputReg id1={'CPF'} id2={'RG'} title1={'CPF'} title2={'RG'} metade={true} placeholder1={resultado.cpf} placeholder2={resultado.rg} Val={resultado.cpf}></InputReg>
                      <InputReg id1={'Datanasc'} id2={'Gender'} type={'date'}title1={'Data de Nacimento'} title2={'Gênero'} metade={true} placeholder1={formData(resultado.datenasc)} placeholder2={resultado.gender} Val={''}></InputReg>
                      <InputReg id1={'Tel'} id2={'Cel'} title1={'Telefone'} title2={'Celular'} metade={true} placeholder1={resultado.tel} placeholder2={resultado.cel} Val={''}></InputReg>
                    </div>
                    <button onClick={userUpdate}>ALTERAR DADOS</button>
                </div>}
                {listOn === 1 && 
                <div className="meusEndereços">
                  <div className="titleDados">
                      <AddressIcon className="IconSvg"/><p>Meus Endereços</p><hr/>
                    </div>
                    <div className='listaddress'>
                      {address.map((item,key) => 
                      
                      <AddressBlock 
                      typeEnd={item.typeAddress}
                      CEP={item.cep}
                      Rua={item.address+','}
                      Bairro={item.address2}
                      Complemento={item.complement}
                      Cidade={item.city+','}
                      Estado={item.state}
                      pos = {key}
                      />)}
                    </div>
                    
                    <C.AddressInput id='addInput' className="addInput">
                      <div className="teste">
                      <button className="btnCloseAdd" onClick={()=>handleAddressInput()}>X</button>
                      <InputReg
                            title1={"Nome do Endereço"}
                            metade={true}
                            id1="typeEnd" 
                            title2={"CEP"}
                            id2="cep"
                            Val=''
                            min1='11'
                            max1='11'
                            min2='8'
                            max2='8'
                      />
                      <InputReg
                            title1={"Cidade"}
                            title2={"Estado"}
                            metade={true}
                            id1="city"
                            id2="state"
                            Val=''
                      />
                      <InputReg
                            title1={"Endereço"}
                            title2={"Bairro"}
                            metade={true}
                            id1="end"
                            id2="bairro"
                            Val=''
                      />
                      <InputReg
                            title1={"Numero"}
                            title2={"Complemento"}
                            metade={true}
                            id1="number"
                            id2="complemento"
                            Val=''
                      />
                      <InputReg
                            title1={"Referência"}
                            metade={false}
                            id1="ref"
                      />
                      <button className="btnAddEnd" onClick={()=> handleAddAddress()}>Adicionar Endereço</button>
                      </div>
                      <div className='screenback'></div>
                    </C.AddressInput>
                    <button className="btnEnd" onClick={()=>handleAddressInput()}>NOVO ENDEREÇO</button> 
                  </div>}
                  
                {listOn === 2 && 
                <div>
                  <div className="titleDados">
                      <BoxIcon className="IconSvgBox"/><p>Meus Pedidos</p><hr/>
                    </div>
                  </div>}
                {listOn === 3 && 
                <div>
                  <div className="titleDados">
                      <FavIcon className="IconSvg"/><p>Minha Lista de Desejos</p><hr/>
                    </div>
                  </div>}
                {listOn === 4 && 
                <div>
                  <div className="titleDados">
                      <PadlockIcon className="IconSvg"/><p>NOVA SENHA</p><hr/>
                    </div>
                    <div className="Input">
                      <InputReg type="password" title1={'Senha'} title2={'Confirmar Senha'} metade={true} Val=''/>
                    </div>
                    <button>ALTERAR SENHA</button>
                  </div>}

              </C.ProfileSelect>
            </div>
          </C.Profile> 
           <C.Footer>
              <hr></hr>
              <p>NCSM Store| 11.111.111/1111-11| Rua Ficticia, 16 - Jd Ficticio- Guarulhos/ RJ - CEP 00000-000</p>
              <p>CNPJ: 11.11.11/11-11 | (11) 1111-1111 / (11) 1111-1111 | sac@ncsm.gg</p>
          </C.Footer> 
        </C.Container>
    );
}