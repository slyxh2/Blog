import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch('https://uberimg.s3.amazonaws.com/one.md');
    const body = await response.text();
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).json({ body });
}