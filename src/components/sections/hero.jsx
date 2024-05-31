import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export const Hero = () => {
	return (
		<section className='flex items-center justify-between py-10 mt-9 '>
			<div>
				<h1 className='font-bold text-4xl'>
					Discover, and collect Digital Art NFTs
				</h1>
				<p className='py-6 w-[45ch]'>
					Digital marketplace for crypto collectibles and non-fungible tokens
					(NFTs). Buy, Sell, and discover exclusive digital assets.
				</p>
				<Button className='rounded-full'>Explore Now</Button>
			</div>
			<div className='relative basis-2/4  flex items-center justify-center'>
				<Image
					src='/images/reflective-headphones.png'
					alt='nft image'
					height={250}
					width={250}
					className='relative'
				/>
				<Image
					src='/images/storm-sneakers.png'
					alt='nft image'
					height={250}
					width={250}
					className='absolute left-28'
				/>
				<Image
					src='/images/the-wallet.png'
					alt='nft image 4'
					height={250}
					width={250}
					className='absolute top-0 left-8'
				/>
			</div>
		</section>
	)
}
