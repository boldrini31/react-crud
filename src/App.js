import React from 'react';
import logo from './assets/logo.png';
import './App.css';

function confirmEmail(value){

}

function App() {
  return (
    <div className="App">
      <ul className="top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 padtop">
                          <div className="container">
                            <div className="row">
                              <div className="col-3">
                                <li>
                                  <img className="logotop" src={logo}
                                    alt="e-com club" height="40" />
                                </li>
                              </div>
                              <div className="col-1-5">
                                <li className="button">
                                  <a className="btop" href="Mulheres">
                                    <b>Mulheres</b>
                                  </a>
                                </li>
                              </div>
                              <div className="col-1-5">
                                <li className="button">
                                  <a className="btop" href="Homens">
                                    <b>Homens</b>
                                  </a>
                                </li>
                              </div>
                              <div className="col-1-5">
                                <li className="button">
                                  <a className="btop" href="Crianças">
                                    <b>Crianças</b>
                                  </a>
                                </li>
                              </div>
                              <div className="col-0 marg3">
                                <p className="bus">|</p>
                              </div>
                              <div className="col-1 btop">
                                <li className="button">
                                  <a className="btop bus fas fa-search fa-lg" href="Busca">
                                  </a>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 padtop1">
                          <li className="car1">
                            <a className="car1" href="Carrinho">
                              <span className="car"> Carrinho / R$ 0.00</span>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
      <p className="cad">
        Inicio >
        <span id="cadastro">Cadastrar</span>
      </p>

      <div className="main row">
        <form action='#' id="form">
          <div className="col-12">
            <div className="container">
              <div className="row teste alignr ">
                <div className="col-6 col-sm-12 ">
                  <div className="container">
                    <div className="row ">
                      <div className="col-12 padc margf">
                        <label htmlFor="email">E-mail
                                            <span className="red">*</span>
                                            :
                                        </label>
                        <input type="email" id="email" name="email" />
                      </div>
                      <div className="col-12 margf">
                        <label htmlFor="conEmail">Repetir e-mail
                                            <span className="red">*
                                            </span>
                                            :
                                        </label>
                        <input type="email" id="conEmail" name="conEmail" onBlur={(e) => confirmEmail(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 padc margf">
                        <label htmlFor="pass">Crie uma senha
                                            <span className="red">*

                                            </span>
                                            :
                                        </label>
                        <input type="password" id="pass" name="pass" />
                      </div>
                      <div className="col-12 margf">
                        <label htmlFor="conPass">Repetir senha
                                            <span className="red">*

                                            </span>
                                            :
                                        </label>
                        <input type="password" id="conPass" name="conPass" 
                        //onblur="confirmPass()"
                         />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="container marg1">
                    <p>Dados Cadastrais</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="container marg2">
                    <p>Endereço de entrega</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="container">
                    <div className="row teste1">
                      <div className="col-12 teste alignr margg">
                        <div className="container">
                          <div className="row">
                            <div className="col-12 pad">
                              <input type="radio" id="pfis" name="person" value="pfis" />
                              <label htmlFor="pfis">Pessoa fisica</label>
                              <input type="radio" id="pjur" name="person" value="pjur" />
                              <label htmlFor="pjur">Pessoa Juridica</label>
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="nome">Nome<span className="red">*</span>:</label>
                              <input type="text" id="nome" name="nome" //ondrop="limpa(this.value);" onblur="validaNome();" 
                              />
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="snome">Sobrenome<span className="red">*</span>:</label>
                              <input type="text" id="snome" name="snome"
                                //onblur="validaSobrenome();" 
                                />
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="Sexo">Sexo:</label>
                              <select id="sexo">
                                <option value="feme">Feminino</option>
                                <option value="masc">Masculino</option>
                                <option value="outr">Outro</option>
                              </select>
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="cpf">CPF<span className="red">*</span>:</label>
                              <input type="text" id="cpf" name="cpf"
                                //onkeyup="javascript: fMasc( this, mCPF );" maxLength="11"
                                //onblur="validaCpf();"
                                 />
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="tel">Telefone<span className="red">*</span>:</label>
                              <input type="text" id="tel" name="tel"
                                //onkeyup="mascara( this, mascTel);" 
                                maxLength="15" />
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="cel">Celular:</label>
                              <input type="text" id="cel" name="cel"
                                //onkeyup="mascara( this, mascTel);" 
                                maxLength="15" />
                            </div>
                            <div className="col-12 pad">
                              <label htmlFor="nasc">Nascimento<span className="red">*</span>:</label>
                              <input type="date" id="nasc" name="nasc" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="container">
                    <div className="row teste2">
                      <div className="col-12 teste alignr margf">
                        <div className="col-12 pad">
                          <label htmlFor="cep">CEP:</label>
                          <input type="text" id="cep" name="cep" //onblur="buscaCep()"
                           />
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="rua">Rua:</label>
                          <input type="text" id="rua" name="rua" disabled />
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="num">Número:</label>
                          <input type="text" id="num" name="num" disabled />
                        </div>
                        <div className="col-12 pad">
                          <input type="checkbox" id="nonum" name="nonum" value="nonum" disabled />
                          <label htmlFor="nonum"> Sem Numero.</label>
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="comp">Complemento:</label>
                          <input type="text" id="comp" name="comp" disabled />
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="ref">Referencia:</label>
                          <input type="text" id="ref" name="ref" disabled />
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="bai">Bairro:</label>
                          <input type="text" id="bai" name="bai" disabled />
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="city">Cidade:</label>
                          <input type="text" id="city" name="city" disabled />
                        </div>
                        <div className="col-12 pad">
                          <label htmlFor="est">Estado:</label>
                          <input type="text" id="est" name="est" disabled />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 teste1">
                  <p><span className="red">*</span>&ThinSpace;-&ThinSpace;Campos Obrigatorios</p>
                  <input type="checkbox" id="remail" name="remail" value="remail" //checked="checked"
                   />
                  <label htmlFor="remail"> Recever ofertas e novidade por e-mail.</label>
                </div>
                <div className="col-12 sub">
                  <input type="submit" value="Cadastrar >" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
