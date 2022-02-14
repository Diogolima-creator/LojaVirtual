import * as C from './styles';
import { InputReg } from '../../components/InputReg';
import { useHistory } from 'react-router';


export const Register = () => {

    
    const history = useHistory();
    const handleBackHome = () => {
       
        history.push('/');
    }
      
    async function registerUser(event){
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const name = document.getElementById('nome').value;
      const lastname = document.getElementById('sobrenome').value;
      const cpf = document.getElementById('cpf').value;
      const rg = document.getElementById('rg').value;
      const datenasc = document.getElementById('datadenascimento').value;
      const gender = document.getElementById('genero').value;
      const meet = document.getElementById('meet').value;
      const tel = document.getElementById('tel').value;
      const cel = document.getElementById('celular').value;
      
      const typeAddress = document.getElementById('typeEnd').value;
      const cep = document.getElementById('cep').value;
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;
      const address = document.getElementById('end').value;
      const address2 = document.getElementById('bairro').value;
      const number = document.getElementById('number').value;
      const complement = document.getElementById('complemento').value;
      const ref = document.getElementById('ref').value;

      const AllAddress = [{
        typeAddress:typeAddress,
        cep:cep,
        city:city,
        state:state,
        address:address,
        address2:address2,
        number:number,
        complement:complement,
        ref:ref
      }]

      console.log('ALLDADRESS',AllAddress)

      const result = await fetch('http://localhost:9999/register',{
          method: 'POST',
          headers:{
              'Content-type' : 'application/json'
          },
          body: JSON.stringify({
              email,
              password,
              name,
              lastname,
              cpf,
              rg,
              datenasc,
              gender,
              meet,
              tel,
              cel
          })
      }).then((res) => res.json())

      if(result.status === 'ok'){
        alert('Conta criada');
        console.log(result.user);
        localStorage.setItem('token',result.token)
        localStorage.setItem('id', result.user._id);
        const _id = result.user._id;
        
        const Address = await fetch('http://localhost:9999/regaddress',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    _id,
                    AllAddress
                })
            }).then((res) => res.json())
  
        if(Address.status === 'ok'){
              alert('Endereço salvo');
              console.log(Address);
        }else{
              alert(Address.error);
            }
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
          <C.Register>
            <C.RegHeader> 
              <C.Text><p className="backhome" onClick={handleBackHome}>Inicio - Cadastro</p> </C.Text>
              <C.Text>Cadastro<hr/></C.Text>
            </C.RegHeader>
            <div className="input">
              <C.Input className="input1">
                <C.Text>Dados de Login</C.Text>
                    <InputReg
                      title1={"Email"}
                      metade={false}
                      id1="email"
                      type="email"
                      required="true"
                    />
                    <InputReg
                      title1={"Senha"}
                      title2={"Confirmar Senha"}
                      id1="password"
                      id2="confirmpassword"
                      type="password"
                      type2="password"
                      metade={true}
                      Val=''
                    />
                    <C.Text className="closetext">Dados Pessoais</C.Text>
                    <InputReg
                      title1={"Nome"}
                      title2={"Sobrenome"}
                      metade={true}
                      id1="nome"
                      id2="sobrenome"
                      Val=''
                    />
                    <InputReg
                      title1={"CPF"}
                      title2={"RG"}
                      metade={true}
                      id1="cpf"
                      id2="rg"
                      min1='11'
                      max1='11'
                      min2='7'
                      max2='7'
                      Val=''
                    />
                    <InputReg
                      title1={"Data de Nascimento"}
                      title2={"Gênero"}
                      metade={true}
                      id1="datadenascimento"
                      id2="genero"
                      type = "date"
                      Val=''
                    />
                    <InputReg
                      title1={"Onde nos Conheceu?"}
                      metade={false}
                      id1="meet"
                      
                    />
                    <InputReg
                      title1={"Telefone"}
                      title2={"Celular"}
                      metade={true}
                      id1="tel"
                      id2="celular"
                      Val=''
                      min1='11'
                      max1='11'
                      min2='11'
                      max2='11'
                    />
              </C.Input>
              <C.Input className="input2">
                <C.Text>Dados de Correspondência</C.Text>
                <InputReg
                      title1={"Nome do Endereço:(ex:Casa, Trabalho)"}
                      metade={false}
                      id1="typeEnd"

                />
                 <InputReg
                      title1={"CEP"}
                      metade={false}
                      id1="cep"
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
              </C.Input>
            </div>
            <C.RegFooter>
              <div>
                <input type="checkbox"></input>
                <label>Desejo receber novidades e promoções através da newsletter</label>
              </div>
              <button onClick={registerUser}>Continuar</button>
            </C.RegFooter>
            <C.Footer>
              <hr></hr>
              <p>NCSM Store| 11.111.111/1111-22| Rua Ficticia, 16 - Jd Ficticio- Guarulhos/ RJ - CEP 00000-000</p>
              <p>CNPJ: 11.11.11/11-11 | (11) 1111-1111 / (11) 1111-1111 | sac@ncsm.gg</p>
          </C.Footer> 
          </C.Register>  
        </C.Container>
    );
}