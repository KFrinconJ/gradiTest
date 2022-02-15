import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Color(props) {
	const [selectedColor, setSelectedColor] = useState(
		props.colorData[0].values[0]
	);

	return (
		<div>
			<h3 className="text-sm text-gray-900 font-medium">Color</h3>

			<RadioGroup
				value={selectedColor}
				onChange={setSelectedColor}
				className="mt-4"
			>
				<RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
				<div className="flex items-center space-x-3">
					{props.colorData[0].values.map((color) => (
						<RadioGroup.Option
							key={color}
							value={color}
							name="picked"
							className={({ active, checked }) =>
								classNames(
									active && checked ? "ring ring-offset-1" : "",
									!active && checked ? "ring-2" : "",
									"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
								)
							}
						>
							<RadioGroup.Label as="p" className="sr-only">
								{color}
							</RadioGroup.Label>
							<span
								style={{
									backgroundColor: color,
								}}
								aria-hidden="true"
								className={classNames(
									"h-8 w-8 border border-black border-opacity-10 rounded-full"
								)}
							/>
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	);
}
