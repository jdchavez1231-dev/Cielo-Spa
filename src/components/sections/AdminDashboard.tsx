import { useState, useEffect } from 'react';
import { Appointment, Customer, SPA_SERVICES } from '@/src/types';
import { Users, Calendar, TrendingUp, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [tab, setTab] = useState<'appointments' | 'customers'>('appointments');

  useEffect(() => {
    setAppointments(JSON.parse(localStorage.getItem('spa_appointments') || '[]'));
    setCustomers(JSON.parse(localStorage.getItem('spa_customers') || '[]'));
  }, []);

  const deleteAppointment = (id: string) => {
    const updated = appointments.filter(a => a.id !== id);
    setAppointments(updated);
    localStorage.setItem('spa_appointments', JSON.stringify(updated));
  };

  const updateStatus = (id: string, status: Appointment['status']) => {
    const updated = appointments.map(a => a.id === id ? { ...a, status } : a);
    setAppointments(updated);
    localStorage.setItem('spa_appointments', JSON.stringify(updated));
  };

  const revenue = appointments.reduce((acc, a) => {
    return acc + (SPA_SERVICES.find(s => s.id === a.serviceId)?.price || 0);
  }, 0);

  const stats = [
    { name: 'Total Customers', value: customers.length, icon: Users, color: '#C8847C', bg: 'rgba(200,132,124,0.12)' },
    { name: 'Appointments',    value: appointments.length, icon: Calendar, color: '#C9A84C', bg: 'rgba(201,168,76,0.12)' },
    { name: 'Revenue',         value: `$${revenue}`, icon: TrendingUp, color: '#6B9E7A', bg: 'rgba(107,158,122,0.12)' },
  ];

  return (
    <section className="py-24 px-6 md:px-16 min-h-screen" style={{ background: '#F5E0DC' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase mb-2" style={{ color: '#C9A84C' }}>
            Management
          </p>
          <h2 className="font-serif font-light text-[2.5rem]" style={{ color: '#3D2020' }}>
            Admin Dashboard
          </h2>
          <p className="text-[0.85rem] mt-2" style={{ color: '#9A7070' }}>
            Track your customers and manage appointments.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex items-center gap-4 p-6"
              style={{ background: '#FDF4F2', border: '1px solid rgba(200,132,124,0.2)' }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: stat.bg, color: stat.color }}
              >
                <stat.icon size={22} />
              </div>
              <div>
                <p className="text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: '#9A7070' }}>{stat.name}</p>
                <p className="font-serif text-2xl font-light mt-0.5" style={{ color: '#3D2020' }}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex mb-8" style={{ borderBottom: '1px solid rgba(200,132,124,0.2)' }}>
          {(['appointments', 'customers'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="text-[0.72rem] tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300"
              style={{
                color: tab === t ? '#C8847C' : '#9A7070',
                borderBottom: tab === t ? '2px solid #C8847C' : '2px solid transparent',
                background: 'none',
                cursor: 'pointer',
                paddingBottom: '0.75rem',
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#FDF4F2', border: '1px solid rgba(200,132,124,0.2)', padding: '2rem' }}>
          {tab === 'appointments' && (
            <>
              <p className="font-serif text-[1.3rem] font-light mb-1" style={{ color: '#3D2020' }}>Recent Appointments</p>
              <p className="text-[0.78rem] mb-6" style={{ color: '#9A7070' }}>Manage your upcoming and past bookings.</p>

              {appointments.length === 0 ? (
                <div className="text-center py-20" style={{ color: '#9A7070' }}>
                  <Calendar size={40} className="mx-auto mb-4 opacity-20" />
                  <p className="text-[0.85rem]">No appointments yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {[...appointments].sort((a, b) => b.date.localeCompare(a.date)).map((apt) => (
                    <div
                      key={apt.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 transition-all"
                      style={{ border: '1px solid rgba(200,132,124,0.15)', background: '#FFF8F7' }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(200,132,124,0.12)', color: '#C8847C' }}
                        >
                          <Clock size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-[0.9rem]" style={{ color: '#3D2020' }}>{apt.customerName}</p>
                          <p className="text-[0.78rem]" style={{ color: '#C9A84C' }}>{apt.serviceName}</p>
                          <p className="text-[0.72rem]" style={{ color: '#9A7070' }}>{apt.date} at {apt.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1"
                          style={{
                            background: apt.status === 'confirmed' ? 'rgba(107,158,122,0.15)' : apt.status === 'pending' ? 'rgba(201,168,76,0.15)' : 'rgba(154,112,112,0.15)',
                            color: apt.status === 'confirmed' ? '#6B9E7A' : apt.status === 'pending' ? '#C9A84C' : '#9A7070',
                          }}
                        >
                          {apt.status}
                        </span>
                        {apt.status === 'pending' && (
                          <button
                            onClick={() => updateStatus(apt.id, 'confirmed')}
                            className="w-8 h-8 flex items-center justify-center transition-colors"
                            style={{ color: '#6B9E7A', background: 'none', border: 'none', cursor: 'pointer' }}
                          >
                            <CheckCircle2 size={18} />
                          </button>
                        )}
                        <button
                          onClick={() => deleteAppointment(apt.id)}
                          className="w-8 h-8 flex items-center justify-center transition-colors"
                          style={{ color: '#C8847C', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {tab === 'customers' && (
            <>
              <p className="font-serif text-[1.3rem] font-light mb-1" style={{ color: '#3D2020' }}>Customer Directory</p>
              <p className="text-[0.78rem] mb-6" style={{ color: '#9A7070' }}>View and manage your client base.</p>

              {customers.length === 0 ? (
                <div className="text-center py-20" style={{ color: '#9A7070' }}>
                  <Users size={40} className="mx-auto mb-4 opacity-20" />
                  <p className="text-[0.85rem]">No customers yet.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      className="p-5 transition-all"
                      style={{ border: '1px solid rgba(200,132,124,0.15)', background: '#FFF8F7' }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 flex items-center justify-center font-medium flex-shrink-0 text-sm"
                          style={{ background: 'rgba(200,132,124,0.15)', color: '#C8847C' }}
                        >
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-[0.9rem]" style={{ color: '#3D2020' }}>{customer.name}</p>
                          <p className="text-[0.72rem]" style={{ color: '#9A7070' }}>{customer.email}</p>
                        </div>
                      </div>
                      <p className="text-[0.8rem] mb-2" style={{ color: '#6B4444' }}>
                        <span className="font-medium">Phone:</span> {customer.phone}
                      </p>
                      {customer.firstVisit && (
                        <span
                          className="text-[0.6rem] tracking-[0.2em] uppercase px-2 py-0.5"
                          style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}
                        >
                          New Client
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
