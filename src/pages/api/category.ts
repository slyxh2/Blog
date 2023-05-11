import { axios } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const categories = await axios.get('/all-category').then(result => (result.data.categories))
    return res.status(200).json({ categories });
}