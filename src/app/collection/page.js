import { Button } from '@/components/ui/button'

export default async function Collection() {
	return (
		<main>
			<div
				className='h-[60vh] bg-cover bg-no-repeat'
				style={{ background: '/images/placeholder.png' }}
			></div>
			<section className='py-8 px-16'>
				<div>
					<div>
						<h2>The Orbitians</h2>
						<p>Minted on Sep 30, 2022</p>
						<h4 className='mt-8'>Created By</h4>
						<p>Orbitian</p>
					</div>

					<div>
						<h4>Description</h4>
						<p>
							The Orbitians is a collection of 10,000 unique NFTs on the
							Ethereum blockchain,There are all sorts of beings in the NFT
							Universe. The most advanced and friendly of the bunch are
							Orbitians. They live in a metal space machines, high up in the sky
							and only have one foot on Earth. These Orbitians are a peaceful
							race, but they have been at war with a group of invaders for many
							generations.
						</p>
					</div>
				</div>
				<div className='py-8 px-6 rounded'>
					<Button>Open </Button>
				</div>
			</section>
		</main>
	)
}
