import React from 'react'

export const Collections = () => {
	return (
		<section class='bg-gray-100 p-8 flex justify-between'>
			<div class='flex gap-12'>
				<div>
					<img
						src='/images/nft.png'
						alt='Large Image'
						class='w-full h-auto mb-4'
					/>
					<div class='flex items-center mb-4'>
						<div class='mr-4'>
							<img
								src='/images/avatar-1.png'
								alt='Avatar'
								class='w-12 h-12 rounded-full'
							/>
						</div>
						<div className='flex items-center justify-between gap-20'>
							<div>
								<h2 class='text-lg font-bold'>Name of Image</h2>
								<p class='text-sm text-gray-600'>Number of Stocks</p>
							</div>
							<div>
								<p class='text-sm text-gray-600'>Price in ETH</p>
								<p class='text-sm text-gray-600'>Highest Bid</p>
							</div>
						</div>
					</div>
				</div>

				<div className=''>
					<div class='mb-4 flex gap-8'>
						<img
							src='/images/thumbnail-1.png'
							alt='Thumbnail 1'
							class='w-16 h-16 rounded'
						/>
						<div class='flex justify-between items-center gap-4'>
							<div>
								<h3 class='text-lg font-bold'>Name 1</h3>
								<p class='text-sm text-gray-600'>Price 1</p>
							</div>
							<button class='bg-blue-500 text-white px-4 py-2 rounded-full '>
								Buy
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class='mt-8'>
				<h2 class='text-xl font-bold mb-4'>Top Collections Over Last 7 Days</h2>
				<ul>
					<li class='flex items-center justify-between mb-4'>
						<div>
							<span class='rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center'>
								1
							</span>
						</div>
						<div class='flex items-center'>
							<img
								src='/images/list-thumb.png'
								alt='Thumbnail'
								class='w-12 h-12 rounded-full mr-4'
							/>
							<div>
								<h3 class='text-lg font-bold'>Collection Name</h3>
								<p class='text-sm text-gray-600'>Price</p>
							</div>
						</div>
						<div>
							<p class='text-sm text-gray-600'>Percentage</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}
