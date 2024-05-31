import { Button } from '@/components/ui/button'

export default async function Collection() {
	return (
		<main>
			<div
				className='h-[60vh] bg-cover bg-no-repeat bg-center'
				style={{ backgroundImage: "url('/images/face-in-color.png')" }}
			></div>
			<section className='py-8 px-16 flex justify-center'>
				<div>
					<div>
						<h2 className='font-bold text-3xl'>
							Desert Race: Collector’s Edition
						</h2>
						<p>Minted on May 30, 2024</p>
						<h4 className='mt-8'>Created By</h4>
						<p>Orbitian</p>
					</div>

					<div className='mt-28'>
						<h4>Description</h4>
						<ul>
							<li>
								Pioneering race car engineering, pushing the boundaries of speed
								and innovation.
							</li>
							<li>
								Renowned for creating high-performance, cutting-edge racing
								vehicles.
							</li>
							<li>Dedicated to the thrill and passion of motorsports.</li>
						</ul>
					</div>
				</div>
				<div className='py-8 px-6 rounded basis-2/5'>
					<Button> Open Nft</Button>
				</div>
			</section>
		</main>
	)
}
