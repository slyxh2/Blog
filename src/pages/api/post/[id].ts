import type { NextApiRequest, NextApiResponse } from 'next';

import { axios } from '@/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    const body = await axios.get('/getpost', {
        params: {
            id
        }
    }).then(result => result.data);
    res.status(200).json({ body });
}
