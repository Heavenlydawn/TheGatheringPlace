import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  message: string;
};

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      res.status(400).json({ message: 'Invalid email' });
      return;
    }

    try {
      const response = await axios.post(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        res.status(200).json({ message: 'Subscription successful' });
      } else {
        res.status(response.status).json({ message: 'Subscription failed' });
      }
    } catch (err) {
      const error = err as any; // Assert error type to any

      console.error('Error subscribing:', error.response?.data || error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
