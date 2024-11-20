"use client";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Box, Flex, Text } from "@mantine/core";

export const Footer = () => {
	return (
		<Box
			component="footer"
			className="bg-mantine-gray-200 dark:bg-mantine-dark-700"
		>
			<Container
				py="xl"
			>
				<Box className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<Flex direction="column" gap="xs">
						<Logo />

						<Text c="dimmed">
							Marketplace PI, conectando pessoas, fortalecendo comunidades.
						</Text>
					</Flex>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
						<div className="text-center sm:text-left">
							<p className="text-lg font-medium text-gray-900">About Us</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										Company History
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										Meet the Team
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										Employee Handbook
									</a>
								</li>

								<li>
									<a
										className="text-gray-700 transition hover:text-gray-700/75"
										href="#"
									>
										{" "}
										Careers{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Box>

				<Box className="">
					<div className="text-center sm:flex sm:justify-between sm:text-left">
						<p className="text-sm text-gray-500">
							<span className="block sm:inline">All rights reserved.</span>

							<a
								className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
								href="#"
							>
								Terms & Conditions
							</a>

							<span>&middot;</span>

							<a
								className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
								href="#"
							>
								Privacy Policy
							</a>
						</p>

						<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
							&copy; 2022 Company Name
						</p>
					</div>
				</Box>
			</Container>
		</Box>
	);
};
