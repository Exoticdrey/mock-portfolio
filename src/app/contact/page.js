'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const [status, setStatus] = useState('');

  const onSubmit = async (data) => {
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <main className="min-h-screen px-6 py-20 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-purple-700">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded shadow">
          <div>
            <label className="block mb-1">Name</label>
            <input
              {...register('name', { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              {...register('message', { required: true })}
              className="w-full border border-gray-300 p-2 rounded"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm font-medium text-green-600">{status}</p>
          )}
        </form>
      </div>
    </main>
  );
}
