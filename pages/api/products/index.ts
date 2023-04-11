// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'GET') {
		res.status(404).json({ message: 'not supported' })
	}
	res.status(200).json({ message: 'products' })
}
