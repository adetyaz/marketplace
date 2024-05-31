import React from 'react'

export const Cta = () => {
	return (
		<section class='flex flex-col md:flex-row'>
			<div class='flex-1 bg-cyan-300 relative'>
				<img
					src='/images/ct-image-1.png'
					alt='Image 1'
					className='left-[20px] absolute'
				/>
				<img
					src='/images/ct-image-2.png'
					alt='Image 2'
					className='left-[50%] absolute'
				/>
				<img
					src='/images/ct-image-3.png'
					alt='Image 3'
					className='right-[20px] absolute'
				/>
			</div>

			<div class='flex-1 p-8'>
				<h2 class='text-3xl font-bold mb-4'>Connect with Our Wallet</h2>
				<p class='text-lg text-gray-700 mb-6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula,
					neque at eleifend fermentum, tellus velit placerat justo, id aliquet
					dolor mauris vel est.
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
