import React from 'react';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <ul class="top">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 padtop">
                          <div class="container">
                            <div class="row">
                              <div class="col-3">
                                <li>
                                  <img class="logotop" src={logo}
                                    alt="e-com club" height="40" />
                                </li>
                              </div>
                              <div class="col-1-5">
                                <li class="button">
                                  <a class="btop" href="Mulheres">
                                    <b>Mulheres</b>
                                  </a>
                                </li>
                              </div>
                              <div class="col-1-5">
                                <li class="button">
                                  <a class="btop" href="Homens">
                                    <b>Homens</b>
                                  </a>
                                </li>
                              </div>
                              <div class="col-1-5">
                                <li class="button">
                                  <a class="btop" href="Crianças">
                                    <b>Crianças</b>
                                  </a>
                                </li>
                              </div>
                              <div class="col-0 marg3">
                                <p class="bus">|</p>
                              </div>
                              <div class="col-1 btop">
                                <li class="button">
                                  <a class="btop bus fas fa-search fa-lg" href="Busca">
                                  </a>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 ">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 padtop1">
                          <li class="car1">
                            <a class="car1" href="Carrinho">
                              <span class="car"> Carrinho / R$ 0.00</span>
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
      <p class="cad">
        Inicio >
        <span id="cadastro">Cadastrar</span>
      </p>

      <div class="main row">
        <form action='#' id="form">
          <div class="col-12">
            <div class="container">
              <div class="row teste alignr ">
                <div class="col-6 col-sm-12 ">
                  <div class="container">
                    <div class="row ">
                      <div class="col-12 padc margf">
                        <label for="email">E-mail
                                            <span class="red">*</span>
                                            :
                                        </label>
                        <input type="email" id="email" name="email" />
                      </div>
                      <div class="col-12 margf">
                        <label for="conEmail">Repetir e-mail
                                            <span class="red">*
                                            </span>
                                            :
                                        </label>
                        <input type="email" id="conEmail" name="conEmail" onblur="confirmEmail()" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-12">
                  <div class="container">
                    <div class="row">
                      <div class="col-12 padc margf">
                        <label for="pass">Crie uma senha
                                            <span class="red">*

                                            </span>
                                            :
                                        </label>
                        <input type="password" id="pass" name="pass" />
                      </div>
                      <div class="col-12 margf">
                        <label for="conPass">Repetir senha
                                            <span class="red">*

                                            </span>
                                            :
                                        </label>
                        <input type="password" id="conPass" name="conPass" onblur="confirmPass()" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="container marg1">
                    <p>Dados Cadastrais</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="container marg2">
                    <p>Endereço de entrega</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="container">
                    <div class="row teste1">
                      <div class="col-12 teste alignr margg">
                        <div class="container">
                          <div class="row">
                            <div class="col-12 pad">
                              <input type="radio" id="pfis" name="person" value="pfis" />
                              <label for="pfis">Pessoa fisica</label>
                              <input type="radio" id="pjur" name="person" value="pjur" />
                              <label for="pjur">Pessoa Juridica</label>
                            </div>
                            <div class="col-12 pad">
                              <label for="nome">Nome<span class="red">*</span>:</label>
                              <input type="text" id="nome" name="nome" ondrop="limpa(this.value);" onblur="validaNome();" />
                            </div>
                            <div class="col-12 pad">
                              <label for="snome">Sobrenome<span class="red">*</span>:</label>
                              <input type="text" id="snome" name="snome"
                                onblur="validaSobrenome();" />
                            </div>
                            <div class="col-12 pad">
                              <label for="Sexo">Sexo:</label>
                              <select id="sexo">
                                <option value="feme">Feminino</option>
                                <option value="masc">Masculino</option>
                                <option value="outr">Outro</option>
                              </select>
                            </div>
                            <div class="col-12 pad">
                              <label for="cpf">CPF<span class="red">*</span>:</label>
                              <input type="text" id="cpf" name="cpf"
                                onkeyup="javascript: fMasc( this, mCPF );" maxlength="11"
                                onblur="validaCpf();" />
                            </div>
                            <div class="col-12 pad">
                              <label for="tel">Telefone<span class="red">*</span>:</label>
                              <input type="text" id="tel" name="tel"
                                onkeyup="mascara( this, mascTel);" maxlength="15" />
                            </div>
                            <div class="col-12 pad">
                              <label for="cel">Celular:</label>
                              <input type="text" id="cel" name="cel"
                                onkeyup="mascara( this, mascTel);" maxlength="15" />
                            </div>
                            <div class="col-12 pad">
                              <label for="nasc">Nascimento<span class="red">*</span>:</label>
                              <input type="date" id="nasc" name="nasc" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="container">
                    <div class="row teste2">
                      <div class="col-12 teste alignr margf">
                        <div class="col-12 pad">
                          <label for="cep">CEP:</label>
                          <input type="text" id="cep" name="cep" onblur="buscaCep()" />
                        </div>
                        <div class="col-12 pad">
                          <label for="rua">Rua:</label>
                          <input type="text" id="rua" name="rua" disabled />
                        </div>
                        <div class="col-12 pad">
                          <label for="num">Número:</label>
                          <input type="text" id="num" name="num" disabled />
                        </div>
                        <div class="col-12 pad">
                          <input type="checkbox" id="nonum" name="nonum" value="nonum" disabled />
                          <label for="nonum"> Sem Numero.</label>
                        </div>
                        <div class="col-12 pad">
                          <label for="comp">Complemento:</label>
                          <input type="text" id="comp" name="comp" disabled />
                        </div>
                        <div class="col-12 pad">
                          <label for="ref">Referencia:</label>
                          <input type="text" id="ref" name="ref" disabled />
                        </div>
                        <div class="col-12 pad">
                          <label for="bai">Bairro:</label>
                          <input type="text" id="bai" name="bai" disabled />
                        </div>
                        <div class="col-12 pad">
                          <label for="city">Cidade:</label>
                          <input type="text" id="city" name="city" disabled />
                        </div>
                        <div class="col-12 pad">
                          <label for="est">Estado:</label>
                          <input type="text" id="est" name="est" disabled />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-12 teste1">
                  <p><span class="red">*</span>&ThinSpace;-&ThinSpace;Campos Obrigatorios</p>
                  <input type="checkbox" id="remail" name="remail" value="remail" checked="checked" />
                  <label for="remail"> Recever ofertas e novidade por e-mail.</label>
                </div>
                <div class="col-12 sub">
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
