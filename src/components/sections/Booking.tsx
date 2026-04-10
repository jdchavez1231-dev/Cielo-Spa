import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SPA_SERVICES, Appointment, Customer } from '@/src/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Booking() {
  const [date, setDate] = useState<Date>();
  const [serviceId, setServiceId] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !serviceId || !name || !email || !phone || !time) return;

    const selectedService = SPA_SERVICES.find(s => s.id === serviceId);
    
    const newAppointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      customerId: Math.random().toString(36).substr(2, 9),
      customerName: name,
      serviceId: serviceId,
      serviceName: selectedService?.name || '',
      date: format(date, 'yyyy-MM-dd'),
      time: time,
      status: 'pending',
    };

    const newCustomer: Customer = {
      id: newAppointment.customerId,
      name,
      email,
      phone,
      firstVisit: true,
    };

    // Save to localStorage for the "tracking" part
    const existingAppointments = JSON.parse(localStorage.getItem('spa_appointments') || '[]');
    const existingCustomers = JSON.parse(localStorage.getItem('spa_customers') || '[]');
    
    localStorage.setItem('spa_appointments', JSON.stringify([...existingAppointments, newAppointment]));
    localStorage.setItem('spa_customers', JSON.stringify([...existingCustomers, newCustomer]));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 min-h-screen flex items-center justify-center bg-spa-cream px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you, {name}. Your appointment for {SPA_SERVICES.find(s => s.id === serviceId)?.name} 
            on {date && format(date, 'PPP')} at {time} has been received. 
            We will contact you shortly to confirm.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-spa-gold hover:bg-spa-gold/90 text-white rounded-full px-8">
            Book Another Appointment
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-spa-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Book Your Session</h2>
          <p className="text-gray-600">Take the first step towards your radiant skin journey.</p>
        </div>

        <Card className="border-none shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-spa-gold p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">Why Cielo Spa?</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-3">
                  <Sparkles size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Expert Estheticians</p>
                    <p className="text-sm opacity-80">Highly trained professionals dedicated to your skin.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Sparkles size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Premium Products</p>
                    <p className="text-sm opacity-80">We use only the finest medical-grade skincare.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Sparkles size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Visible Results</p>
                    <p className="text-sm opacity-80">Noticeable improvement after just one session.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-sm italic">"The best facial I've ever had. My skin has never looked this good!"</p>
                <p className="text-xs font-bold mt-2">— Sarah J.</p>
              </div>
            </div>

            <div className="md:col-span-3 p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label>Select Service</Label>
                  <Select onValueChange={setServiceId} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {SPA_SERVICES.map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - ${service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select onValueChange={setTime} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pick a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {times.map(t => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-spa-gold hover:bg-spa-gold/90 text-white rounded-full py-6 text-lg font-bold">
                  Confirm Booking
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
