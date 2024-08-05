// src/pages/api/members.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  const url = new URL(req.url);
  const lembaga = url.searchParams.get('lembaga');

  try {
    const members = await prisma.member.findMany({
      where: {
        lembaga: lembaga,
      },
    });
    return new Response(JSON.stringify(members), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching members:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req) {
  const { name, position, address, gender, lembaga } = await req.json();
  try {
    const newMember = await prisma.member.create({
      data: { name, position, address, gender, lembaga },
    });
    return new Response(JSON.stringify(newMember), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating member:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req) {
  const { id } = await req.json();
  try {
    await prisma.member.delete({
      where: { id },
    });
    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error('Error deleting member:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req) {
  const { id, name, position, address, gender, lembaga } = await req.json();
  try {
    const updatedMember = await prisma.member.update({
      where: { id },
      data: { name, position, address, gender, lembaga },
    });
    return new Response(JSON.stringify(updatedMember), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating member:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
