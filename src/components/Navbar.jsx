export default function Navbar() {
  const items = [
    { href: '#sobre-nos', label: 'Sobre Nós' },
    { href: '#porque-investir', label: 'Por que investir?' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#orcamento', label: 'Orçamento' },
  ];

  return (
    <header className='navbar'>
      <div className='nav-inner'>
        {/* {Logo} */}
        <a className='nav-logo' href='#inicio' aria-label='Ir para o início'>
          ☀️
        </a>

        <nav aria-label='Seções do site'>
          <ul className='nav-menu'>
            {items.map(it => (
              <li key={it.href}>
                <a href={it.href}>{it.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
