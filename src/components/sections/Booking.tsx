import React, { useState } from 'react';
import { SPA_SERVICES, Appointment, Customer } from '@/src/types';
import { format } from 'date-fns';
import { CheckCircle2, Phone, MapPin, Clock } from 'lucide-react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.6)',
  border: '1px solid rgba(200,132,124,0.3)',
  color: '#3D2020',
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  padding: '0.85rem 1rem',
  outline: 'none',
  transition: 'border-color 0.3s',
  WebkitAppearance: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.62rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: '#9A7070',
  marginBottom: '0.5rem',
};

export default function Booking() {
  const [date, setDate] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !serviceId || !firstName || !email || !phone || !time) return;

    const name = `${firstName} ${lastName}`.trim();
    const selectedService = SPA_SERVICES.find(s => s.id === serviceId);

    const newAppointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      customerId: Math.random().toString(36).substr(2, 9),
      customerName: name,
      serviceId,
      serviceName: selectedService?.name || '',
      date,
      time,
      status: 'pending',
      notes,
    };

    const newCustomer: Customer = {
      id: newAppointment.customerId,
      name,
      email,
      phone,
      firstVisit: true,
    };

    const existing = JSON.parse(localStorage.getItem('spa_appointments') || '[]');
    const existingCustomers = JSON.parse(localStorage.getItem('spa_customers') || '[]');
    localStorage.setItem('spa_appointments', JSON.stringify([...existing, newAppointment]));
    localStorage.setItem('spa_customers', JSON.stringify([...existingCustomers, newCustomer]));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 min-h-screen flex items-center justify-center px-4" style={{ background: '#F5E0DC' }}>
        <div className="max-w-md w-full text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(200,132,124,0.15)', color: '#C8847C' }}
          >
            <CheckCircle2 size={40} />
          </div>
          <h2 className="font-serif font-light text-[2.5rem] mb-4" style={{ color: '#3D2020' }}>
            Booking Confirmed!
          </h2>
          <p className="text-[0.85rem] leading-relaxed mb-8" style={{ color: '#9A7070' }}>
            Thank you, {firstName}. We've received your request for{' '}
            <span style={{ color: '#C8847C' }}>{SPA_SERVICES.find(s => s.id === serviceId)?.name}</span>{' '}
            on {date} at {time}. We'll confirm within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-all duration-300"
            style={{ background: '#C9A84C', color: '#FDF4F2', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 px-6 md:px-16" style={{ background: '#F5E0DC' }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="grid"
          style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: '5rem' }}
        >
          {/* Left: info */}
          <div>
            <p className="text-[0.65rem] tracking-[0.35em] uppercase mb-3" style={{ color: '#C9A84C' }}>
              Schedule Your Visit
            </p>
            <h2 className="font-serif font-light mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#3D2020' }}>
              Book Your <em className="italic" style={{ color: '#C9A84C' }}>Glow</em> Session
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 1.5rem' }}><span /><i /><span /></div>
            <p className="text-[0.82rem] leading-[1.9] mb-8" style={{ color: '#9A7070' }}>
              Ready to transform your skin? Fill out the form and we'll confirm your appointment within 24 hours — or book instantly via Booksy.
            </p>

            {[
              { icon: <Phone size={16} />, text: '323-677-8772' },
              { icon: <MapPin size={16} />, text: 'Las Vegas, NV' },
              { icon: <Clock size={16} />, text: 'Mon – Sat  |  9:00 AM – 6:00 PM' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-4 text-[0.8rem]" style={{ color: '#6B4444' }}>
                <span style={{ color: '#C9A84C' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}

            <div className="mt-8">
              <a
                href="https://cielospa.booksy.com/a"
                target="_blank"
                rel="noopener"
                className="inline-block text-[0.72rem] tracking-[0.22em] uppercase font-medium no-underline transition-all duration-300"
                style={{ background: '#C9A84C', color: '#FDF4F2', padding: '1rem 2rem' }}
              >
                Book Instantly on Booksy
              </a>
            </div>

            {/* Testimonial pull-quote */}
            <div
              className="mt-10 p-6"
              style={{ border: '1px solid rgba(200,132,124,0.2)', background: '#FDF4F2' }}
            >
              <p className="font-serif italic text-[1rem] leading-[1.8] mb-3" style={{ color: '#6B4444' }}>
                "The best facial I've ever had. My skin has never looked this good!"
              </p>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: '#C8847C' }}>— Sarah J.</p>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="p-10"
            style={{ background: '#FDF4F2', border: '1px solid rgba(200,132,124,0.2)' }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    style={inputStyle}
                    placeholder="Maria"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                    onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    style={inputStyle}
                    placeholder="Garcia"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  style={inputStyle}
                  placeholder="you@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                />
              </div>

              <div className="mb-5">
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  style={inputStyle}
                  placeholder="(702) 000-0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                />
              </div>

              <div className="mb-5">
                <label style={labelStyle}>Service</label>
                <select
                  style={inputStyle}
                  value={serviceId}
                  onChange={e => setServiceId(e.target.value)}
                  required
                  onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                >
                  <option value="">Select a treatment…</option>
                  {SPA_SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.name} — ${s.price}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    type="date"
                    style={inputStyle}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    required
                    onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Time</label>
                  <select
                    style={inputStyle}
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required
                    onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                  >
                    <option value="">Select…</option>
                    <option value="Morning (9AM–12PM)">Morning (9AM–12PM)</option>
                    <option value="Afternoon (12PM–3PM)">Afternoon (12PM–3PM)</option>
                    <option value="Late Afternoon (3PM–6PM)">Late Afternoon (3PM–6PM)</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label style={labelStyle}>Notes (Optional)</label>
                <textarea
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                  placeholder="Skin concerns, allergies, or questions…"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  onFocus={e => (e.currentTarget.style.borderColor = '#C8847C')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,132,124,0.3)')}
                />
              </div>

              <button
                type="submit"
                className="w-full text-[0.72rem] tracking-[0.25em] uppercase font-medium transition-all duration-300"
                style={{ background: '#C9A84C', color: '#FDF4F2', padding: '1.1rem', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#E2C97E'; el.style.boxShadow = '0 6px 24px rgba(201,168,76,0.3)'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = '#C9A84C'; el.style.boxShadow = ''; }}
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
