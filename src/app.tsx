import {
	AnchorButton,
	Button,
	Card,
	ColorScheme,
	Radioset,
	TextInput,
	useColorScheme,
} from "ninjakit";
import { MdThumbUp } from "react-icons/md";

export default function Example() {
	const { colorScheme, setColorScheme } = useColorScheme();
	const handleChange = (value: ColorScheme) => {
		setColorScheme(value);
	};

	return (
		<main>
			<section>
				<Card title="Card" subhead="filled">
					<Radioset<"light" | "dark" | "system">
						defaultValue={colorScheme}
						label="Radioset with useColorscheme"
						name="color-scheme"
						onChange={handleChange}
						options={[
							{ value: "light" },
							{ value: "dark" },
							{ value: "system" },
						]}
					/>
				</Card>
			</section>
			<section>
				<Card appearance="elevated" title="Card" subhead="elevated">
					<TextInput id="text-input-example" label="TextInput" />
					<section>
						<Button leadingIcon={<MdThumbUp />}>Button</Button>
						<AnchorButton href="/" target="_blank">
							AnchorButton
						</AnchorButton>
					</section>
				</Card>
			</section>
		</main>
	);
}
