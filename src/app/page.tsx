import './style.css';

export default function Home() {
  return (
    <main>     
  <div className='container'>
  <div className='mid'> 
    <div className='write'>
      <h2 className='title'>Entregue sucesso agora <br/> com o Salesforce <br/> Customer 360</h2>
      <p>
        O Customer 360 é a nossa suite de produtos e serviços que <br/> ajuda 98% dos clientes a alcançar ou superar suas metas de <br/> ROI.
      </p> 
    <div className='buttons'>
      <button className='free-test-button'>
        Faça o teste grátis
      </button>
      <button className='know-button'>
        Saiba mais
      </button>
    </div>  
    </div>
    <figure>
    <img src='fundo.png'/>
    </figure>
    </div>
    <div className='botao'>
    <button className='contato'>Contato</button> 
    </div>
    </div>  


</main>
  );
}
