import Navbar from './components/Navbar.jsx';
// import Hero from './components/Hero.jsx';
import SobreNos from './components/SobreNos.jsx';
import PorQueInvestir from './components/PorQueInvestir.jsx';
import Produtos from './components/Produtos.jsx';
// import Orcamento from './components/Orcamento.jsx';
import Footer from './components/Footer.jsx';

// import Navbar from '/src/components/Navbar.jsx';
import Hero from '/src/components/Hero.jsx';
// import SobreNos from '/src/components/SobreNos.jsx';
// import PorQueInvestir from '/src/components/PorQueInvestir.jsx';
// import Produtos from '/src/components/Produtos.jsx';
import Orcamento from '/src/components/Orcamento.jsx';
// import Footer from '/src/components/Footer.jsx';

export default function App() {
  return (
    <>
      {/* Navbar (componente) */}
      <Navbar />
      {/* Hero (componente) */}
      <Hero />
      {/* <Hero showCtas={false} /> */}
      {/* <Hero showCtas={true} /> */}
      {/* Sobre Nós (componente) */}
      <SobreNos />
      {/* Por que investir (componente) */}
      <PorQueInvestir />
      {/* Produtos (componente) */}
      <Produtos />
      {/* Orçamento (componente) */}
      <Orcamento />
      {/* Footer (componente) */}
      <Footer />

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

      {/* Seções do menu */}
      {/* <section id='sobre' className='section'>
        <h2>Sobre Nós</h2>
        <p className='muted'>Conteúdo da seção sobre o projeto/time…</p>
      </section>
       */}

      {/* <section id='investir' className='section'>
        <h2>Por que investir?</h2>
        <p className='muted'>Benefícios, impacto e métricas de resultado…</p>
      </section> */}

      {/* <section id='produtos' className='section'>
        <h2>Produtos</h2>
        <p className='muted'>
          Lista/descrições dos produtos/serviços oferecidos…
        </p>
      </section> */}

      {/* <section id='orcamento' className='section'>
        <h2>Orçamento</h2>
        <p className='muted'>
          Call to action: formulário/contatos para orçamento…
        </p>
      </section> */}
    </>
  );
}
