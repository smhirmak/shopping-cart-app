import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise(async (resolve, reject) => {
    await axios
      .get('https://dummyjson.com/products/categories')
      .then((data) => {
        resolve('success');
        return res.status(200).json(data.data);
      })
      .catch((error) => {
        reject(error);
        return res.status(500).json(error);
      });
  });
}
