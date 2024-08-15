import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const records = await prisma.demografi.findMany();
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
  const { tanggal, jumlah_laki_laki, jumlah_perempuan, jumlah_total, jumlah_kk, kepadatan_penduduk } = await req.json();
  try {
    const newRecord = await prisma.demografi.create({
      data: { tanggal, jumlah_laki_laki, jumlah_perempuan, jumlah_total, jumlah_kk, kepadatan_penduduk },
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
    await prisma.demografi.delete({
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
  const { id, tanggal, jumlah_laki_laki, jumlah_perempuan, jumlah_total, jumlah_kk, kepadatan_penduduk } = await req.json();
  try {
    const updatedRecord = await prisma.demografi.update({
      where: { id },
      data: { tanggal, jumlah_laki_laki, jumlah_perempuan, jumlah_total, jumlah_kk, kepadatan_penduduk },
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
