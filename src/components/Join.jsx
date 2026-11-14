import { useState } from 'react';
import Icon from './Icon.jsx';
import { BRANCHES, CLUB_EMAIL } from '../data.js';

const EMPTY = { name: '', branch: '', dept: '', email: '', phone: '', why: '' };

export default function Join() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Sends the application to the club inbox through Web3Forms (access key in .env as VITE_WEB3FORMS_KEY)
  const submit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) { formEl.reportValidity(); return; }
    if (new FormData(formEl).get('botcheck')) return; // hidden spam trap
    setSending(true);
    setStatus('Sending...');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Delta application: ${form.name}`,
          from_name: 'Delta website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          branch: form.branch,
          department: form.dept,
          why_join: form.why,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Request failed');
      setStatus(`Thanks, ${form.name.trim().split(' ')[0]}. Your application has been sent. We will get back to you soon.`);
      setForm(EMPTY);
    } catch {
      setStatus(`Something went wrong. Please try again, or email us at ${CLUB_EMAIL}.`);
    } finally {
      setSending(false);
    }
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
            <li><span><b>Interdisciplinary teams.</b> Build alongside peers from Mechanical, Electronics, and Computer Science.</span></li>
            <li><span><b>Lab-to-launch projects.</b> Go beyond classroom theory by designing, simulating, and shipping real hardware.</span></li>
            <li><span><b>Mentored R&D.</b> Learn industry-standard tools like ANSYS, MATLAB, and KiCad with guidance from seniors and faculty.</span></li>
          </ul>
        </div>
        <form className="card-form" onSubmit={submit} noValidate={false}>
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
          <div className="field full">
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
          <div className="field full">
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
            <button className="btn" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send application'} <Icon name="arrow" /></button>
            <p className="status" role="status" aria-live="polite">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
