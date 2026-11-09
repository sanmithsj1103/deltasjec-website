import { useState } from 'react';
import Icon from './Icon.jsx';
import { BRANCHES } from '../data.js';

const EMPTY = { name: '', branch: '', dept: '', email: '', phone: '', why: '' };

export default function Join() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Replace the body of this function to send `form` to Formspree, Google Sheets, Supabase, etc.
  // Example: await fetch('https://formspree.io/f/your-id', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
  const submit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) { e.currentTarget.reportValidity(); return; }
    setStatus(`Thanks, ${form.name.trim().split(' ')[0]}. This preview form is not connected to an inbox yet, so nothing was sent.`);
    setForm(EMPTY);
  };

  return (
    <section className="sec alt" id="join">
      <div className="wrap join">
        <div>
          <span className="eyebrow">Join community</span>
          <h2 className="title" style={{ marginTop: 14 }}>Build with us</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Tell us a little about yourself. First-years and seniors from every branch are welcome, and you do not need prior experience.
          </p>
          <ul className="perks">
            <li><span><b>Weekly build nights.</b> Open lab hours with mentors on hand.</span></li>
            <li><span><b>Real project teams.</b> Join a team that ships something each semester.</span></li>
            <li><span><b>Workshops and talks.</b> CAD, embedded systems, simulation and more.</span></li>
          </ul>
        </div>
        <form className="card-form" onSubmit={submit} noValidate={false}>
          <div className="field">
            <label htmlFor="f-name">Name</label>
            <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required value={form.name} onChange={set('name')} />
          </div>
          <div className="field">
            <label htmlFor="f-branch">Branch</label>
            <select id="f-branch" name="branch" required value={form.branch} onChange={set('branch')}>
              <option value="" disabled>Select your branch</option>
              {BRANCHES.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-dept">Delta department</label>
            <select id="f-dept" name="dept" required value={form.dept} onChange={set('dept')}>
              <option value="" disabled>Select a department</option>
              <option>Mechanical</option>
              <option>Electronics</option>
              <option>Computer Science</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input id="f-email" name="email" type="email" autoComplete="email" placeholder="you@college.edu" required value={form.email} onChange={set('email')} />
          </div>
          <div className="field full">
            <label htmlFor="f-phone">Phone</label>
            <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={set('phone')} />
          </div>
          <div className="field full">
            <label htmlFor="f-why">Why join us?</label>
            <textarea id="f-why" name="why" placeholder="What do you want to build or learn?" required value={form.why} onChange={set('why')} />
          </div>
          <div className="form-foot">
            <button className="btn" type="submit">Send application <Icon name="arrow" /></button>
            <p className="status" role="status" aria-live="polite">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
