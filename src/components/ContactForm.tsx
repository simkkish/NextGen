import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactMethod: 'email' | 'text';
  phone?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactMethod: 'email',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_p8qp2xs',
        'template_bet06zd',
        {
          name: formData.name,
          title: 'Contact Form Submission',
          email: formData.email,
          message: formData.message,
          contact_method: formData.contactMethod,
          phone: formData.phone || 'Not provided',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          contactMethod: 'email',
          phone: '',
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
            focus:outline-none focus:border-blue-500 text-white"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
            focus:outline-none focus:border-blue-500 text-white"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
        <select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
            focus:outline-none focus:border-blue-500 text-white"
        >
          <option value="email">Email</option>
          <option value="text">Text Message</option>
        </select>
      </div>

      {formData.contactMethod === 'text' && (
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
              focus:outline-none focus:border-blue-500 text-white"
            placeholder="Your phone number"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 
            focus:outline-none focus:border-blue-500 text-white h-32"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 
          rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 
          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Mail className="animate-spin mr-2" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}