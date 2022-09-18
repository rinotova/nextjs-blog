import { createMessage } from '../../prisma/messages';

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'POST': {
        // Create a new user
        const { email, name, message } = req.body;
        console.log(req.body);
        const createdMessage = await createMessage(email, name, message);
        return res.json({ ...createdMessage, success: true });
      }
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    return res.json({ ...error, message: error.message, success: false });
  }
}
