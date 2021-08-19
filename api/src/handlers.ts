import { Req, Res, Next, IResponse } from "./interfaces";
import { object, string } from 'joi';
import ContactModel from "./contact.model";

class ContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const PostContactSchema = object({
  name: string().required().min(2),
  email: string().email().required(),
  subject: string().required().min(2),
  message: string().required().min(2)
});

export const postContact = async (req: Req, res: Res, next: Next) => {
  const body = req.body as ContactDto
    ,   { error } = PostContactSchema.validate(body);
  
  if(error) {
    return next(new Error(error.message));
  }

  let contact = new ContactModel({...body});
  contact = await contact.save();
  
  const response: IResponse = {
    success: true,
    data: `Hello ${contact.name}, thanks for contacting me, I'd get back to you.`
  };

  res.json(response);
};