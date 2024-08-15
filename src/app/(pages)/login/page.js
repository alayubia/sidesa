"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextInput, PasswordInput, Button, Title, Text } from '@mantine/core';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

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
      router.push('/admin/keluhan');
    } else {
      const errorData = await res.json();
      setError(errorData.message);
    }
  };

  return (
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
          {error && <Text color="red">{error}</Text>}

          <Button type="submit" fullWidth mt="md">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
