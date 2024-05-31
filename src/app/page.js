import { Collections } from '@/components/sections/collections'
import { Cta } from '@/components/sections/cta'
import { Hero } from '@/components/sections/hero'
import { Overview } from '@/components/sections/overview'
import { Footer } from '@/components/ui/footer'
// import { NavigationMenu } from '@/components/ui/navigation-menu'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='min-h-screen px-12'>
			<Hero />
			<Overview />
			<Collections />
			<Cta />
			<Footer />
		</main>
	)
}
