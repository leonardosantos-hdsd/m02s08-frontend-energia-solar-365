// src/components/Hero.jsx
export default function Hero({
  id = 'inicio',
  eyebrow = 'Gestão eficiente de resíduos & consumo consciente',
  title = (
    <>
      Plataforma Cidadã — <span className='accent'>Coleta Seletiva</span> de
      Joinville
    </>
  ),
  subtitle = 'Visualize, mapeie e acompanhe as ações de coleta seletiva. Juntos, impulsionamos os ODS 11 e 12.',
  showCtas = true,
  odsLink = 'https://brasil.un.org/pt-br/sdgs', // <— novo
  odsText = 'Conheça os ODS da ONU', // <— novo
}) {
  return (
    <div className='main' id={id}>
      <section className='hero' aria-labelledby={`${id}-title`}>
        <p className='eyebrow'>{eyebrow}</p>

        <h1 id={`${id}-title`} className='title'>
          {title}
        </h1>

        <p className='subtitle'>{subtitle}</p>

        {/* Link para ODS */}
        <p className='ods-cta'>
          <a
            className='ods-link'
            href={odsLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            {odsText}
          </a>
        </p>

        {showCtas && (
          <div className='cta-row'>
            <a className='btn btn-primary' href='#porque-investir'>
              Quero entender
            </a>
            <a className='btn btn-ghost' href='#orcamento'>
              Pedir orçamento
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
