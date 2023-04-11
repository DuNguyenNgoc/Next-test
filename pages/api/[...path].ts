// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

// type Data = {
// 	name: string
// }

//khởi tạo proxy
const proxy = httpProxy.createProxyServer()

// khi client truyền dữ liệu vào next server(proxy), thì nó sẽ tự động parse body của req ra để
// ta có thể lấy dữ liệu, nhưng nếu ta k muốn bodyParser mà ta muốn dữ liệu đó truyền thẳng về api server
// ta sẽ config như bên dưới
export const config = {
	api: {
		bodyParser: false,
	},
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	//dont send cookies to api server
	req.headers.cookie = ''

	//api server to proxy target
	proxy.web(req, res, {
		target: process.env.API_URL, // vì trong từng môi trường thì link này nó sẽ khác nhau. nên đưa vào .env
		changeOrigin: true, //hiểu đơn giản là khi thay giả sử người dùng req ở http://localhost:3000/api/posts?_page=1, thì
		//khi lọt vào đây sẽ thay http://localhost:3000 -> https://js-post-api.herokuapp.com, nghĩa là qua proxy nó sẽ req tới
		// https://js-post-api.herokuapp.com/api/posts?_page=1
		selfHandleResponse: false, // proxy tự xử lí res trả về luôn
	})

	// res.status(200).json({ name: 'ALO' })
}
