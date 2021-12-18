import { ChangeEventHandler } from "react";
import { Card, useColorScheme } from "ninjakit";

export default function Example() {
	const { colorScheme, setColorScheme } = useColorScheme();

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({
		currentTarget: { value },
	}) => {
		if (value !== "dark" && value !== "light" && value !== "system") return;

		setColorScheme(value);
	};

	return (
		<Card title="Color Scheme" subhead={`Current: ${colorScheme}`}>
			<label>
				<input
					checked={colorScheme === "dark"}
					name="color-scheme"
					onChange={handleChange}
					type="radio"
					value="dark"
				/>
				dark
			</label>
			<label>
				<input
					checked={colorScheme === "light"}
					name="color-scheme"
					onChange={handleChange}
					type="radio"
					value="light"
				/>
				light
			</label>
			<label>
				<input
					checked={colorScheme === "system"}
					name="color-scheme"
					onChange={handleChange}
					type="radio"
					value="system"
				/>
				system
			</label>
		</Card>
	);
}
