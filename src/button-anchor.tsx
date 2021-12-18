import { ButtonAnchor } from "ninjakit";
import { MdThumbUp } from "react-icons/md";

export default function Example() {
	return (
		<main>
			<section>
				<ButtonAnchor href="#">Default</ButtonAnchor>
				<ButtonAnchor href="#">
					<MdThumbUp /> With Icon
				</ButtonAnchor>
			</section>
			<section>
				<ButtonAnchor appearance="text" href="#">
					Text
				</ButtonAnchor>
			</section>
			<section>
				<ButtonAnchor href="#" target="_blank">
					With External Target
				</ButtonAnchor>
			</section>
		</main>
	);
}
