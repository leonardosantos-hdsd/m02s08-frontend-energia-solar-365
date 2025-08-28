// import { useState } from 'react';

// export default function Orcamento() {
//   // export function Orcamento() {
//   const [form, setForm] = useState({
//     nome: '',
//     email: '',
//     telefone: '',
//     tipo: '',
//   });

//   function onChange(e) {
//     const { name, value } = e.target;
//     setForm(f => ({ ...f, [name]: value }));
//   }

//   function onSubmit(e) {
//     e.preventDefault();
//     // neste exercício não há backend, então só exibimos/limpamos
//     window.alert('Solicitação enviada! Em breve entraremos em contato.');
//     setForm({ nome: '', email: '', telefone: '', tipo: '' });
//   }

//   const valido =
//     form.nome.trim() && form.email.trim() && form.telefone.trim() && form.tipo;

//   return (
//     <section id='orcamento' className='section orc'>
//       <header className='orc-header'>
//         <h2>Orçamento</h2>
//         <p className='muted'>
//           Preencha os dados abaixo e receba uma proposta personalizada.
//         </p>
//       </header>

//       <form className='orc-form' onSubmit={onSubmit} noValidate>
//         <div className='grid-2'>
//           <div className='field'>
//             <label htmlFor='nome'>Nome</label>
//             <input
//               id='nome'
//               name='nome'
//               type='text'
//               placeholder='Seu nome completo'
//               value={form.nome}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className='field'>
//             <label htmlFor='email'>Email</label>
//             <input
//               id='email'
//               name='email'
//               type='email'
//               placeholder='email@exemplo.com'
//               value={form.email}
//               onChange={onChange}
//               required
//             />
//           </div>
//         </div>

//         <div className='grid-2'>
//           <div className='field'>
//             <label htmlFor='telefone'>Telefone</label>
//             <input
//               id='telefone'
//               name='telefone'
//               type='tel'
//               placeholder='(47) 99999-9999'
//               value={form.telefone}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className='field'>
//             <label htmlFor='tipo'>Tipo de Sistema</label>
//             <select
//               id='tipo'
//               name='tipo'
//               value={form.tipo}
//               onChange={onChange}
//               required
//             >
//               <option value=''>Selecione...</option>
//               <option value='residencial'>Residencial</option>
//               <option value='comercial'>Comercial</option>
//               <option value='rural'>Rural</option>
//               <option value='condominial'>Condominial</option>
//             </select>
//           </div>
//         </div>

//         <div className='orc-actions'>
//           <button className='btn btn-primary' type='submit' disabled={!valido}>
//             Enviar
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

// src/components/Orcamento.jsx
import { useState } from 'react';

export default function Orcamento() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: '',
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    window.alert('Solicitação enviada! Em breve entraremos em contato.');
    setForm({ nome: '', email: '', telefone: '', tipo: '' });
  }

  const valido =
    form.nome.trim() && form.email.trim() && form.telefone.trim() && form.tipo;

  return (
    <section id='orcamento' className='section orc'>
      <header className='orc-header'>
        <h2>Orçamento</h2>
        <p className='muted'>
          Preencha os dados abaixo e receba uma proposta personalizada.
        </p>
      </header>

      <form className='orc-form' onSubmit={onSubmit} noValidate>
        <div className='grid-2'>
          <div className='field'>
            <label htmlFor='nome'>Nome</label>
            <input
              id='nome'
              name='nome'
              type='text'
              placeholder='Seu nome completo'
              value={form.nome}
              onChange={onChange}
              required
            />
          </div>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='email@exemplo.com'
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className='grid-2'>
          <div className='field'>
            <label htmlFor='telefone'>Telefone</label>
            <input
              id='telefone'
              name='telefone'
              type='tel'
              placeholder='(47) 99999-9999'
              value={form.telefone}
              onChange={onChange}
              required
            />
          </div>
          <div className='field'>
            <label htmlFor='tipo'>Tipo de Sistema</label>
            <select
              id='tipo'
              name='tipo'
              value={form.tipo}
              onChange={onChange}
              required
            >
              <option value=''>Selecione...</option>
              <option value='residencial'>Residencial</option>
              <option value='comercial'>Comercial</option>
              <option value='rural'>Rural</option>
              <option value='condominial'>Condominial</option>
            </select>
          </div>
        </div>

        <div className='orc-actions'>
          <button className='btn btn-primary' type='submit' disabled={!valido}>
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
