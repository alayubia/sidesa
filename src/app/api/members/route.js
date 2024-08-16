import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.formData();

    const file = formData.get('file');
    const name = formData.get('name');
    const position = formData.get('position');
    const address = formData.get('address');
    const gender = formData.get('gender');
    const lembaga = formData.get('lembaga');

    if (!file) {
      return NextResponse.json({ error: "Tidak ada file yang diunggah" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Memastikan direktori lembaga ada
    const uploadDir = join(process.cwd(), 'public', 'lembaga');
    await mkdir(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name}`;
    const path = join(uploadDir, fileName);
    
    await writeFile(path, buffer);

    const url = `/lembaga/${fileName}`;
    const savedData = await prisma.member.create({
      data: {
        name,
        position,
        address,
        gender,
        lembaga,
        profileImage: url,
      },
    });

    return NextResponse.json({ savedData }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const lembaga = url.searchParams.get('lembaga');

  try {
    const members = await prisma.member.findMany({
      where: {
        lembaga: lembaga,
      },
    });

    // Dapatkan host dari URL request
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const transformedMembers = members.map(member => ({
      ...member,
      profileImage: `${baseUrl}${member.profileImage}`,
    }));

    return NextResponse.json(transformedMembers, { status: 200 });
  } catch (error) {
    console.error('Error dalam mengambil data member:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const formData = await request.formData();

    const id = formData.get('id');
    const file = formData.get('file');
    const name = formData.get('name');
    const position = formData.get('position');
    const address = formData.get('address');
    const gender = formData.get('gender');
    const lembaga = formData.get('lembaga');

    let profileImage = null;

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = join(process.cwd(), 'public', 'lembaga');
      await mkdir(uploadDir, { recursive: true });

      const fileName = `${Date.now()}-${file.name}`;
      const path = join(uploadDir, fileName);
      
      await writeFile(path, buffer);
      profileImage = `/lembaga/${fileName}`;
    }

    const updatedMember = await prisma.member.update({
      where: { id: parseInt(id) },
      data: {
        name,
        position,
        address,
        gender,
        lembaga,
        profileImage: profileImage ? profileImage : undefined,
      },
    });

    return NextResponse.json({ updatedMember }, { status: 200 });
  } catch (error) {
    console.error('Error updating member:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    const member = await prisma.member.findUnique({
      where: { id: parseInt(id) },
    });

    if (member && member.profileImage) {
      const imagePath = join(process.cwd(), 'public', member.profileImage);
      try {
        await fs.unlink(imagePath);
      } catch (error) {
        console.error('Error deleting image file:', error);
      }
    }

    await prisma.member.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Member deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error('Error deleting member:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
