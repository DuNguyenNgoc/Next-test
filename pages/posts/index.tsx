import { AdminLayout } from '@/components/layout'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type PostProps = {
	posts: any[]
}
export default function PostList({ posts }: PostProps) {
	console.log(123)

	return (
		<>
			<div>PostList</div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
				<Link href={'/'}>Go to home</Link>
			</ul>
		</>
	)
}
//function cũng là 1 object
PostList.Layout = AdminLayout

// chạy phía server
export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
	const data = await res.json()

	return {
		props: {
			posts: data,
		},
	}
}
