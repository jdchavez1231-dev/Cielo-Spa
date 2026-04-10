import { useState, useEffect } from 'react';
import { Appointment, Customer, SPA_SERVICES } from '@/src/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Users, Calendar, TrendingUp, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('spa_appointments') || '[]');
    const savedCustomers = JSON.parse(localStorage.getItem('spa_customers') || '[]');
    setAppointments(savedAppointments);
    setCustomers(savedCustomers);
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

  const stats = [
    { name: 'Total Customers', value: customers.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Appointments', value: appointments.length, icon: Calendar, color: 'text-spa-gold', bg: 'bg-spa-pink/30' },
    { name: 'Revenue', value: `$${appointments.reduce((acc, a) => {
      const service = SPA_SERVICES.find(s => s.id === a.serviceId);
      return acc + (service?.price || 0);
    }, 0)}`, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Track your customers and manage appointments.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.name} className="border-none shadow-md">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="bg-white p-1 rounded-full shadow-sm mb-8">
            <TabsTrigger value="appointments" className="rounded-full px-8">Appointments</TabsTrigger>
            <TabsTrigger value="customers" className="rounded-full px-8">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Recent Appointments</CardTitle>
                <CardDescription>Manage your upcoming and past bookings.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  {appointments.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                      <Calendar size={48} className="mx-auto mb-4 opacity-20" />
                      <p>No appointments found yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {appointments.sort((a, b) => b.date.localeCompare(a.date)).map((apt) => (
                        <div key={apt.id} className="p-4 rounded-xl border border-gray-100 bg-white hover:border-spa-gold/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-spa-pink/20 rounded-full flex items-center justify-center text-spa-gold">
                              <Clock size={20} />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{apt.customerName}</p>
                              <p className="text-sm text-spa-gold font-medium">{apt.serviceName}</p>
                              <p className="text-xs text-gray-500">{apt.date} at {apt.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              apt.status === 'confirmed' ? 'bg-green-100 text-green-600' : 
                              apt.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {apt.status}
                            </div>
                            {apt.status === 'pending' && (
                              <Button size="sm" variant="ghost" className="text-green-600 hover:bg-green-50" onClick={() => updateStatus(apt.id, 'confirmed')}>
                                <CheckCircle2 size={18} />
                              </Button>
                            )}
                            <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50" onClick={() => deleteAppointment(apt.id)}>
                              <Trash2 size={18} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Customer Directory</CardTitle>
                <CardDescription>View and manage your client base.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  {customers.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                      <Users size={48} className="mx-auto mb-4 opacity-20" />
                      <p>No customers registered yet.</p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {customers.map((customer) => (
                        <div key={customer.id} className="p-4 rounded-xl border border-gray-100 bg-white hover:border-spa-gold/30 transition-all">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                              {customer.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{customer.name}</p>
                              <p className="text-xs text-gray-500">{customer.email}</p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-600 flex items-center">
                              <span className="font-medium mr-2">Phone:</span> {customer.phone}
                            </p>
                            <div className="flex items-center">
                              {customer.firstVisit && (
                                <span className="text-[10px] bg-spa-pink/30 text-spa-gold px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                                  New Client
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
