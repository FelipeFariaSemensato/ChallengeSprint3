import '../Cadastro/style.css';

const CadastroForm = () => {
    return (
    <div className="form-container">    
      <div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input type="text" id="sobrenome" name="sobrenome" required />
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input type="date" id="dataNascimento" name="dataNascimento" required />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        <button type="submit">Cadastrar</button>
      </div>
      </div>
    );
  }
      
export default CadastroForm;