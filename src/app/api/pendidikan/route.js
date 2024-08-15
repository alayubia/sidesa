import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const records = await prisma.pendidikan.findMany();
    return new Response(JSON.stringify(records), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching records:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req) {
  const { tanggal, tingkat_pendidikan, laki_laki, perempuan, jumlah } = await req.json();
  try {
    const newRecord = await prisma.pendidikan.create({
      data: { tanggal, tingkat_pendidikan, laki_laki, perempuan, jumlah },
    });
    return new Response(JSON.stringify(newRecord), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating record:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req) {
  const { id } = await req.json();
  try {
    await prisma.pendidikan.delete({
      where: { id },
    });
    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error('Error deleting record:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req) {
  const { id, tanggal, tingkat_pendidikan, laki_laki, perempuan, jumlah } = await req.json();
  try {
    const updatedRecord = await prisma.pendidikan.update({
      where: { id },
      data: { tanggal, tingkat_pendidikan, laki_laki, perempuan, jumlah },
    });
    return new Response(JSON.stringify(updatedRecord), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating record:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
