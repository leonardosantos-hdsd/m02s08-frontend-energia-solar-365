// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className='site-footer' role='contentinfo'>
      <div className='footer-inner'>
        {/* Bloco marca + dados cadastrais */}
        <div className='foot-brand'>
          <div className='foot-logo' aria-hidden='true'>
            ☀️
          </div>
          <div>
            <div className='foot-name'>Energia Solar 365 Ltda.</div>
            <div className='muted'>CNPJ 12.345.678/0001-90</div>
          </div>
        </div>

        {/* Contato / endereço */}
        <div className='foot-info'>
          <ul className='foot-list'>
            <li>
              <a href='mailto:contato@energiasolar365.com.br'>
                contato@energiasolar365.com.br
              </a>
            </li>
            <li>Rua das Inovações, 123 — Centro</li>
            <li>Joinville/SC — 89200-000</li>
          </ul>
        </div>

        {/* Redes sociais (opcional) */}
        <div className='foot-social'>
          <div className='social' aria-label='Redes sociais'>
            <a className='social-btn' href='#' aria-label='Instagram'>
              📷
            </a>
            <a className='social-btn' href='#' aria-label='LinkedIn'>
              💼
            </a>
            <a className='social-btn' href='#' aria-label='WhatsApp'>
              💬
            </a>
          </div>
        </div>
      </div>

      <div className='footer-copy'>
        © {new Date().getFullYear()} Energia Solar 365 — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
