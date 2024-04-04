import type { MetaFunction } from "@remix-run/node";
import { RotateCcw, RotateCw } from "lucide-react";
import React from "react";
import { Button } from "~/component/ui/button";
import { Input } from "~/component/ui/input";
import User from "~/component/ui/user";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const [color, setColor] = React.useState("#FBD101");
	const [name, setName] = React.useState("123");
	const [size, setSize] = React.useState(75);
	const [rotation, setRotation] = React.useState(0);

	const resizeHandler = (action: "+" | "-") => {
		const step = 10;

		//keep the size between 25 and 100

		if (action === "+") {
			//if size + step is greater than 100, set size to 100
			//else set size to size + step

			if (size + step > 100) {
				setSize(100);
				return;
			}
			setSize(size + step);
		} else {
			//if size - step is less than 25, set size to 25
			//else set size to size - step

			if (size - step < 25) {
				setSize(25);
				return;
			}
			setSize(size - step);
		}
	};

	const rotationHandler = (action: "+" | "-") => {
		const step = 90;

		//keep the rotation between 0 and 360
		if (action === "+") {
			setRotation((rotation + step) % 360);
		} else {
			setRotation((rotation - step) % 360);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-full gap-9 cel-shaded-box">
			<User
				className="h-1/3"
				rotation={rotation}
				fontsize={size}
				name={name}
				faceColor={color}
			/>
			<Input
				value={name}
				onInput={(e) => setName((e.target as HTMLInputElement).value)}
				onBlur={(e) => e.target.focus()}
				autoFocus
				maxLength={3}
				className="w-fit text-center opacity-0"
				type="text"
			/>
			<Input
				type="color"
				className="w-20 h-10 rounded-md"
				value={color}
				onInput={(e) => setColor((e.target as HTMLInputElement).value)}
			/>
			<div className="flex gap-3">
				<Button variant="secondary" onClick={() => resizeHandler("+")}>
					plus
				</Button>

				<Button variant="secondary" onClick={() => resizeHandler("-")}>
					moins
				</Button>
				<Button variant="secondary" onClick={() => rotationHandler("+")}>
					<RotateCw />
				</Button>
				<Button variant="secondary" onClick={() => rotationHandler("-")}>
					<RotateCcw />
				</Button>
			</div>
		</div>
	);
}
