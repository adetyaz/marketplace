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
					src='/images/sticker.png'
					alt='sticker'
					height={80}
					width={80}
					className='absolute'
				/>
				<Image
					src='/images/tag.png'
					alt='tag'
					height={80}
					width={150}
					className='absolute'
				/>
				<Image
					src='/images/image-1.png'
					alt='nft image'
					height={250}
					width={250}
					className='relative'
				/>
				<Image
					src='/images/image-2.png'
					alt='nft image'
					height={250}
					width={250}
					className='absolute left-28'
				/>
				<Image
					src='/images/image-3.png'
					alt='nft image 4'
					height={250}
					width={250}
					className='absolute top-0 left-8'
				/>
			</div>
		</section>
	)
}
