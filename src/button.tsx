import { Button, Card } from "ninjakit";
import { MdThumbUp } from "react-icons/md";

export default function Example() {
	return (
		<Card title="Button">
			<section>
				<Button>Default</Button>
				<Button>
					<MdThumbUp /> With Icon
				</Button>
				<Button appearance="text">Text</Button>
				<Button appearance="floating">
					<MdThumbUp />
				</Button>
				<Button appearance="floating">
					<MdThumbUp />
					Extended
				</Button>
			</section>
		</Card>
	);
}
