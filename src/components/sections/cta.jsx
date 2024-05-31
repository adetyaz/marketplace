import React from 'react'

export const Cta = () => {
	return (
		<section class='flex flex-col my-28 md:flex-row'>
			<div class='flex-1 relative'>
				<img
					src='/images/reflective-headphones.png'
					alt='Image 1'
					className='left-[20px] absolute h-28 rounded-lg w-28'
				/>
				<img
					src='/images/collectible-guitar.png'
					alt='Image 2'
					className='left-[40%] absolute h-28 rounded-lg w-28'
				/>
				<img
					src='/images/colors-jacket.png'
					alt='Image 3'
					className='right-[20px] absolute h-28 rounded-lg w-28'
				/>
			</div>

			<div class='flex-1 p-8'>
				<h2 class='text-3xl font-bold mb-4'>Connect with Our Wallet</h2>
				<p class='text-lg text-gray-700 mb-6'>
					Welcome to the future of digital security and control. Our
					user-friendly wallet simplifies the way you manage your digital
					assets.
				</p>
				<a
					href='#'
					class='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300'
				>
					Connect Wallet
				</a>
			</div>
		</section>
	)
}
