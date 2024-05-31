import { BsCardChecklist } from 'react-icons/bs'
import { IoBarChartOutline } from 'react-icons/io5'

export const Overview = () => {
	return (
		<section class='flex flex-col md:flex-row p-8 bg-gray-100 my-12'>
			<div class='flex-1 mb-8 md:mb-0 md:mr-8'>
				<h2 class='text-3xl font-bold text-gray-800'>
					The amazing NFT art of the world here
				</h2>
			</div>

			<div class='flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col items-center'>
				<div class='flex  mb-4'>
					<BsCardChecklist />
					<h3 class='text-xl font-semibold text-gray-700'>Fast Transaction</h3>
				</div>
				<p class='text-gray-600 text-center'>
					Our streamlined checkout process ensures that your payments are
					processed swiftly, allowing you to complete purchases in just a few
					clicks.
				</p>
			</div>

			<div class='flex-1 flex flex-col items-center'>
				<div class='flex items-center mb-4'>
					<IoBarChartOutline />
					<h3 class='text-xl font-semibold text-gray-700'>
						Growth Transaction
					</h3>
				</div>
				<p class='text-gray-600 text-center'>
					Maximize revenue streams by streamlining transaction processes and
					implementing growth-focused strategies. From increasing customer
					acquisition to maximizing customer lifetime value, we'll help you
					unlock new opportunities for growth.
				</p>
			</div>
		</section>
	)
}
