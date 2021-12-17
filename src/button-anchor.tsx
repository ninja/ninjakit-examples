import { ButtonAnchor, Card } from "ninjakit";
import { MdThumbUp } from "react-icons/md";

export default function Example() {
	return (
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
	);
}
