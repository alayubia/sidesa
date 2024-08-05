import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        const families = await prisma.family.findMany();
        return new Response(JSON.stringify(families), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching families:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}

export async function POST(req) {
    const { noKK, namaKepalaKeluarga, nik, linkFolder } = await req.json();
    try {
        const newFamily = await prisma.family.create({
            data: { noKK, namaKepalaKeluarga, nik, linkFolder },
        });
        return new Response(JSON.stringify(newFamily), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error creating family:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function PUT(req) {
    const { noKK, namaKepalaKeluarga, nik, linkFolder } = await req.json();
    try {
        const updatedFamily = await prisma.family.update({
            where: { noKK },
            data: { namaKepalaKeluarga, nik, linkFolder },
        });
        return new Response(JSON.stringify(updatedFamily), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error updating family:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE(req) {
    const { noKK } = await req.json();
    try {
        await prisma.family.delete({
            where: { noKK },
        });
        return new Response(null, {
            status: 204,
        });
    } catch (error) {
        console.error('Error deleting family:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
