import { Button } from "ninjakit";
import { MdThumbUp } from "react-icons/md";

export default function Example() {
	return (
		<main>
			<section>
				<Button>Default</Button>
				<Button>
					<MdThumbUp /> With Icon
				</Button>
			</section>
			<section>
				<Button appearance="text">Text</Button>
			</section>
			<section>
				<Button appearance="floating">
					<MdThumbUp />
				</Button>
				<Button appearance="floating">
					<MdThumbUp />
					Extended
				</Button>
			</section>
		</main>
	);
}
