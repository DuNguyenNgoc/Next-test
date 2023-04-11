import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { AdminLayout, EmptyLayout, MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { NextPage } from 'next'

// import Header from '@/components/common/header' // sẽ được pre-render từ server
const Header = dynamic(() => import('@/components/common/header'), { ssr: false }) // render ở client-side, k được pre-render

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
	const router = useRouter()
	console.log(router.query)
	return (
		<>
			<div>home</div>
			<Header />
			<Link href={'/posts'}>Go to posts</Link>
		</>
	)
}

//function cũng là 1 object
Home.Layout = AdminLayout

export default Home

export const getStaticProps = () => {
	return {
		props: {},
	}
}
