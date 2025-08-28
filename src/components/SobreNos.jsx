export default function SobreNos() {
  return (
    <section id='sobre-nos' className='section sobre'>
      <div className='sobre-grid'>
        {/* Texto */}
        <div className='sobre-content'>
          <h2>Sobre Nós</h2>

          <div className='sobre-block'>
            <h3>Missão</h3>
            <p>
              Promover gestão eficiente de resíduos e consumo consciente,
              conectando cidadãos, cooperativas e poder público para cidades
              mais sustentáveis.
            </p>
          </div>

          <div className='sobre-block'>
            <h3>Visão</h3>
            <p>
              Ser referência em tecnologia cívica que mapeia, monitora e
              impulsiona a reciclagem e a economia circular.
            </p>
          </div>

          <div className='sobre-block'>
            <h3>Valores</h3>
            <ul className='sobre-list'>
              <li>Transparência e dados abertos</li>
              <li>Impacto social e ambiental</li>
              <li>Participação e educação contínua</li>
            </ul>
          </div>
        </div>

        {/* Imagem (coloque um arquivo em /public/img/sobre.jpg ou mude a URL abaixo) */}
        <div className='sobre-media'>
          <img
            src='/assets/sobre.png'
            alt='Equipe e ações de coleta seletiva'
            onError={e => {
              // fallback simples para imagem online se a local não existir
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop';
            }}
          />
        </div>
      </div>
    </section>
  );
}
