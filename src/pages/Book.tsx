import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

// Schema definition
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.enum(['saree', 'mehandi', 'aari'], {
    required_error: 'Please select a service',
  }),
  style: z.string().min(1, 'Please select a style'),
  date: z.string({
    required_error: 'Please select a date',
  }),
  time: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

const serviceStyles = {
  saree: ['Traditional Pleating', 'Modern Fusion', 'Bridal Special'],
  mehandi: ['Bridal Mehandi', 'Arabic Design', 'Indo-Arabic Fusion'],
  aari: ['Bridal Aari Work', 'Traditional Design', 'Contemporary Style'],
};

// Mock API function (replace with actual API call in production)
type BookingResponse = {
  success: boolean;
  bookingId: string;
};

const bookAppointment = async (data: BookingFormData): Promise<BookingResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, bookingId: `BOOK${Math.random().toString(36).substr(2, 9)}` });
    }, 1000);
  });
};

export function Book() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedService = watch('service');
  const selectedDate = watch('date') ? new Date(watch('date')) : null;

  const onSubmit = async (data: BookingFormData) => {
    try {
      setIsSubmitting(true);
      setBookingStatus('idle');
      
      const formattedData = {
        ...data,
        date: format(data.date, 'yyyy-MM-dd'),
      };

      const response = await bookAppointment(formattedData);
      
      if (response.success) {
        setBookingStatus('success');
        reset(); // Reset form after successful submission
        setTimeout(() => setBookingStatus('idle'), 5000); // Reset status after 5 seconds
      }
    } catch (error) {
      setBookingStatus('error');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-4xl font-serif font-bold text-center mb-8 text-amber-900">
            Book Your <span className="text-amber-600">Service</span>
          </h1>

          {/* Booking Status Messages */}
          {bookingStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg"
            >
              Booking successful! We'll send you a confirmation soon.
            </motion.div>
          )}
          {bookingStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg"
            >
              Something went wrong. Please try again later.
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-900">Personal Information</h2>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Phone</label>
                <input
                  type="tel"
                  {...register('phone')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-900">Service Details</h2>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Service Type</label>
                <select
                  {...register('service')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                  onChange={(e) => {
                    setValue('service', e.target.value as BookingFormData['service']);
                    setValue('style', '');
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="saree">Saree Pre-plating</option>
                  <option value="mehandi">Mehandi Design</option>
                  <option value="aari">Aari Work</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>
              {selectedService && (
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">Style</label>
                  <select
                    {...register('style')}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                  >
                    <option value="">Select a style</option>
                    {serviceStyles[selectedService].map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                  {errors.style && (
                    <p className="text-red-500 text-sm mt-1">{errors.style.message}</p>
                  )}
                </div>
              )}
            </div>

            {/* Appointment Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-amber-900">Appointment Details</h2>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Date</label>
                <DatePicker
                  selected={selectedDate as Date}
                  onChange={(date) => setValue('date', format(date as Date, 'yyyy-MM-dd'))}
                  minDate={new Date()}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                  dateFormat="MMMM d, yyyy"
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Time</label>
                <select
                  {...register('time')}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                {...register('message')}
                rows={4}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 disabled:opacity-50"
                placeholder="Any special requests or requirements..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md disabled:bg-amber-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Booking...
                </span>
              ) : (
                'Book Appointment'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Book;