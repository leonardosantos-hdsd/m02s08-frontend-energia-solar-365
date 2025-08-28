import Navbar from './components/Navbar.jsx';
import SobreNos from './components/SobreNos.jsx';

export default function App() {
  return (
    <>
      <Navbar />

      {/* Início / Hero */}
      <div className='main' id='inicio'>
        <section className='hero' aria-labelledby='site-title'>
          <p className='eyebrow'>
            Gestão eficiente de resíduos & consumo consciente
          </p>
          <h1 id='site-title' className='title'>
            Plataforma Cidadã — Coleta Seletiva de Joinville
          </h1>
          <p className='subtitle'>
            Visualize, mapeie e acompanhe as ações de coleta seletiva. Juntos,
            impulsionamos os ODS 11 e 12.
          </p>
        </section>
      </div>

      {/* Sobre Nós (componente) */}
      <SobreNos />

      {/* Seções do menu */}
      <section id='investir' className='section'>
        <h2>Por que investir?</h2>
        <p className='muted'>Benefícios, impacto e métricas de resultado…</p>
      </section>

      <section id='produtos' className='section'>
        <h2>Produtos</h2>
        <p className='muted'>
          Lista/descrições dos produtos/serviços oferecidos…
        </p>
      </section>

      <section id='orcamento' className='section'>
        <h2>Orçamento</h2>
        <p className='muted'>
          Call to action: formulário/contatos para orçamento…
        </p>
      </section>
    </>
  );
}
