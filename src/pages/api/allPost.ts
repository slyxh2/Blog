import { axios } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // console.log(req.query);
    const posts = await axios.get('/allpost', {
        params: req.query
    }).then(result => result.data);
    // console.log(result);
    return res.status(200).json({ posts });
}