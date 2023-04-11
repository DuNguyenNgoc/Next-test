import { MainLayout } from '@/components/layout'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type Props = {
	post: any
}

export default function Post({ post }: Props) {
	return <div>{post.title}</div>
}

//function cũng là 1 object

Post.Layout = MainLayout

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
	const data = await res.json()

	return {
		paths: data.map((post: any) => ({ params: { postId: `${post.id}` } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
	// phần return { params: { postId: post } } của getStaticPaths sẽ được nhận vào tham số context của
	//getStaticProps
	const postId = context.params?.postId

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	const data = await res.json()

	return {
		props: {
			post: data,
		},
	}
}
