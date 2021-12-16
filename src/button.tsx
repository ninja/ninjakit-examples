import { Button, ButtonAnchor, Card, GridArticle } from "ninjakit";
import { MdThumbUp } from "react-icons/md";

export default function Example() {
	return (
		<>
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
			<Card title="ButtonAnchor">
				<section>
					<ButtonAnchor href="#">Default</ButtonAnchor>
					<ButtonAnchor href="#">
						<MdThumbUp /> With Icon
					</ButtonAnchor>
					<ButtonAnchor href="#" target="_blank">
						With External Target
					</ButtonAnchor>
					<ButtonAnchor appearance="text" href="#">
						Text
					</ButtonAnchor>
				</section>
			</Card>
		</>
	);
}
