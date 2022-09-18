// /prisma/user.js
import prisma from './prisma';

// CREATE
export const createMessage = async (email, name, message) => {
  const createdMessage = await prisma.message.create({
    data: {
      email,
      name,
      message,
    },
  });
  return createdMessage;
};
