import type { NextApiRequest, NextApiResponse } from 'next';

import { axios } from '@/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { id } = req.query;
        const body = await axios.get('/getpost', {
            params: {
                id
            }
        }).then(result => result.data)
        res.status(200).json({ body });
    } catch (err) {
        res.status(404).json({ ok: false });

    }

}
