import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Size(props) {
	const [selectedSize, setSelectedSize] = useState(
		props.SizeOptions[1].values[1]
	);

	return (
		<div className="mt-10">
			<div className="flex items-center justify-between">
				<h3 className="text-sm text-gray-900 font-medium">Size</h3>
			</div>

			<RadioGroup
				value={selectedSize}
				onChange={setSelectedSize}
				className="mt-4"
			>
				<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
				<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
					{props.SizeOptions[1].values.map((size) => (
						<RadioGroup.Option
							key={size}
							value={size}
							className={({ active }) =>
								classNames(
									"bg-white shadow-sm text-gray-900 cursor-pointer",
									active ? "ring-2 ring-indigo-500" : "",
									"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
								)
							}
						>
							{({ active, checked }) => (
								<>
									<RadioGroup.Label as="p">{size}</RadioGroup.Label>
									{size.inStock ? (
										<div
											className={classNames(
												active ? "border" : "border-2",
												checked ? "border-indigo-500" : "border-transparent",
												"absolute -inset-px rounded-md pointer-events-none"
											)}
											aria-hidden="true"
										/>
									) : (
										<div
											aria-hidden="true"
											className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
										>

										</div>
									)}
								</>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	);
}
