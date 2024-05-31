import Link from 'next/link'
import React from 'react'

export const Collections = () => {
	return (
		<section class='bg-gray-100 p-8 flex justify-between'>
			<Link href='/collection' className='cursor-pointer'>
				<div class='flex gap-12'>
					<div>
						<img
							src='/images/face-in-color.png'
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
									<h2 class='text-lg font-bold'>
										Desert Race: Collector’s Edition
									</h2>
									<p class='text-sm text-gray-600'>Number of Stocks(15)</p>
								</div>
								<div>
									<p class='text-sm text-gray-600'>0.4 eth</p>
									<p class='text-sm text-gray-600'>Highest Bid</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-6'>
						<div class='mb-4 flex gap-8'>
							<img
								src='/images/colors-jacket.png'
								alt='Thumbnail 1'
								class='w-16 h-16 rounded'
							/>
							<div class='flex justify-between items-center gap-4'>
								<div>
									<h3 class='text-lg font-bold'>Jacket</h3>
									<p class='text-sm text-gray-600'>0.01 eth</p>
								</div>
								<button class='bg-blue-500 text-white px-4 py-2 rounded-full '>
									Buy
								</button>
							</div>
						</div>
						<div class='mb-4 flex gap-8'>
							<img
								src='/images/retro-vinyl-record-player.png'
								alt='Thumbnail 1'
								class='w-16 h-16 rounded'
							/>
							<div class='flex justify-between items-center gap-4'>
								<div>
									<h3 class='text-lg font-bold'>Vinyl</h3>
									<p class='text-sm text-gray-600'>0.31 eth</p>
								</div>
								<button class='bg-blue-500 text-white px-4 py-2 rounded-full '>
									Buy
								</button>
							</div>
						</div>
						<div class='mb-4 flex gap-8'>
							<img
								src='/images/storm-sneakers.png'
								alt='Thumbnail 1'
								class='w-16 h-16 rounded'
							/>
							<div class='flex justify-between items-center gap-4'>
								<div>
									<h3 class='text-lg font-bold'>Sneakers</h3>
									<p class='text-sm text-gray-600'>0.22 eth</p>
								</div>
								<button class='bg-blue-500 text-white px-4 py-2 rounded-full '>
									Buy
								</button>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</section>
	)
}
