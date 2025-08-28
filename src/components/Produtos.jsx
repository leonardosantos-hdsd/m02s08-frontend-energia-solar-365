export default function Produtos() {
  const produtos = [
    {
      id: 'kit3',
      nome: 'Kit Residencial 3 kWp',
      descricao:
        'Solução ideal para casas de pequeno porte. Alta eficiência e rápida instalação.',
      img: '/img/prod-kit3.jpg',
      fallback:
        'https://media.istockphoto.com/id/1349360708/pt/foto/solar-panels-on-the-tiled-roof-of-the-building-in-the-sun.jpg?s=612x612&w=0&k=20&c=aOHn91sicM6LoKWbx2udLEOV6E_0sBWZbYFGBKO7uVI=',
    },
    {
      id: 'kit10',
      nome: 'Kit Comercial 10 kWp',
      descricao:
        'Projetado para comércios. Reduza custos e ganhe previsibilidade na conta de luz.',
      img: '/img/prod-kit10.jpg',
      fallback:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'inversor5',
      nome: 'Inversor On-Grid 5 kW',
      descricao: 'Conversão estável e inteligente com monitoramento via app.',
      img: '/img/prod-inversor5.jpg',
      fallback:
        'https://media.istockphoto.com/id/1136573299/pt/foto/inversor-machine-isolated-on-white-background-solar-energy-concept-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=BWfHgq1ZOLTqcvqvTHvjGR_lWxmDg0b3RgmccwyUCNg=',
    },
    {
      id: 'placa550',
      nome: 'Placa Fotovoltaica 550 W',
      descricao:
        'Módulo monocristalino de alta eficiência, garantia estendida.',
      img: '/img/prod-placa550.jpg',
      fallback:
        'https://media.istockphoto.com/id/888257888/pt/foto/solar-energy-panels.jpg?s=612x612&w=0&k=20&c=17iSHbLBq2i2hlPA2COZgSvHu_ExPX1sAiFLkK7c4jo=',
    },
  ];

  return (
    <section id='produtos' className='section prod'>
      <header className='prod-header'>
        <h2>Produtos</h2>
        <p className='muted'>Catálogo de soluções em energia solar.</p>
      </header>

      <div className='prod-grid'>
        {produtos.map(p => (
          <article className='prod-card' key={p.id}>
            <div className='prod-media'>
              <img
                src={p.img}
                alt={p.nome}
                onError={e => {
                  e.currentTarget.onerror = null; // evita loop
                  e.currentTarget.src = p.fallback;
                }}
              />
            </div>
            <div className='prod-body'>
              <h3 className='prod-title'>{p.nome}</h3>
              <p className='prod-text'>{p.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
