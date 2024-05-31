import React from 'react'

export const footer = () => {
	return (
		<footer class='bg-gray-800 text-white py-6'>
			<div class='container mx-auto px-4'>
				<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<h4 class='text-lg font-semibold mb-2'>Contact Us</h4>
						<p class='text-sm'>123 Main Street</p>
						<p class='text-sm'>City, State ZIP</p>
						<p class='text-sm'>Phone: (123) 456-7890</p>
						<p class='text-sm'>Email: info@example.com</p>
					</div>
					<div>
						<h4 class='text-lg font-semibold mb-2'>Follow Us</h4>
						<ul class='flex space-x-4'>
							<li>
								<a href='#' class='text-sm hover:text-gray-400'>
									Facebook
								</a>
							</li>
							<li>
								<a href='#' class='text-sm hover:text-gray-400'>
									Twitter
								</a>
							</li>
							<li>
								<a href='#' class='text-sm hover:text-gray-400'>
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='border-t border-gray-700 mt-4 pt-4 text-center'>
				<p class='text-sm'>&copy; 2024 Your Company. All rights reserved.</p>
			</div>
		</footer>
	)
}
