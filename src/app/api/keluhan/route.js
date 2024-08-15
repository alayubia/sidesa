import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.formData();

    const file = formData.get('file');
    const nama = formData.get('nama');
    const keluhan = formData.get('keluhan');

    if (!file) {
      return NextResponse.json({ error: "Tidak ada file yang diunggah" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Memastikan direktori uploads ada
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name}`;
    const path = join(uploadDir, fileName);
    
    await writeFile(path, buffer);

    const url = `/uploads/${fileName}`;
    const savedData = await prisma.keluhan.create({
        data: {
          nama,
          keluhan,
          gambar: url,
        },
      });
    // console.log('Mengembalikan respons sukses', savedData);
    return NextResponse.json({ savedData }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(request) {
  try {
    const formSubmissions = await prisma.keluhan.findMany();

    // Dapatkan host dari URL request
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const transformedSubmissions = formSubmissions.map(submission => ({
      ...submission,
      url_gambar: `${baseUrl}${submission.gambar}`
    }));

    // console.log('Mengembalikan respons sukses', transformedSubmissions);
    
    return NextResponse.json(transformedSubmissions, { status: 200 });
  } catch (error) {
    console.error('Error dalam mengambil data keluhan:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}