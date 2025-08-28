export default function PorQueInvestir() {
  const itens = [
    {
      icon: '💸',
      titulo: 'Economia imediata',
      texto:
        'Reduza a conta de luz e proteja-se de reajustes e bandeiras tarifárias.',
    },
    {
      icon: '🌱',
      titulo: 'Sustentabilidade',
      texto:
        'Energia limpa e renovável, ajudando a diminuir as emissões de CO₂.',
    },
    {
      icon: '📈',
      titulo: 'Valorização do imóvel',
      texto:
        'Imóveis com geração solar tendem a ser mais valorizados no mercado.',
    },
    {
      icon: '🔋',
      titulo: 'Independência energética',
      texto:
        'Gere sua própria energia e aumente a previsibilidade dos seus custos.',
    },
  ];

  return (
    <section id='porque-investir' className='section pq'>
      <header className='pq-header'>
        <h2>Por que investir em Energia Solar?</h2>
        <p className='muted'>
          Motivos claros para dar o próximo passo rumo à autonomia e à
          sustentabilidade.
        </p>
      </header>

      <div className='pq-grid'>
        {itens.map((it, i) => (
          <article className='pq-card' key={i}>
            <div className='pq-icon' aria-hidden='true'>
              {it.icon}
            </div>
            <h3 className='pq-title'>{it.titulo}</h3>
            <p className='pq-text'>{it.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
