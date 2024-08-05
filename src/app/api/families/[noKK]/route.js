import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req) {
  const { noKK } = await req.json();
  await prisma.family.delete({
    where: { noKK },
  });
  return new Response(null, {
    status: 204,
  });
}
