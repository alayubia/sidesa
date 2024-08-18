"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextInput, PasswordInput, Button, Title, Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State untuk notifikasi berhasil login
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      setSuccess(true); // Menampilkan notifikasi berhasil
      setTimeout(() => {
        router.push('/admin/keluhan'); // Redirect setelah beberapa detik
      }, 1500); // 1.5 detik
    } else {
      const errorData = await res.json();
      setError(errorData.message);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center relative">
      <div className="flex h-screen justify-center items-center">
        <div className="border px-14 py-10 rounded shadow">
          <Title align="center" mb="lg">
            Sign In
          </Title>

          <form onSubmit={handleSubmit}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              size="md"
              className="w-full md:w-64"
            />

            <PasswordInput
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
              size="md"
              mt="md"
              className="w-full md:w-64"
            />

            <Button type="submit" fullWidth mt="md">
              Sign In
            </Button>
          </form>
        </div>
      </div>
      {error && (
        <Notification
          icon={<IconX size="1.1rem" />}
          color="red"
          title="Login Gagal"
          className="absolute bottom-4 right-4"
        >
          {error}
        </Notification>
      )}
      {success && (
        <Notification
          icon={<IconCheck size="1.1rem" />}
          color="teal"
          title="Login Berhasil"
          className="absolute bottom-4 right-4"
        >
          Anda akan dialihkan...
        </Notification>
      )}
    </div>
  );
}
