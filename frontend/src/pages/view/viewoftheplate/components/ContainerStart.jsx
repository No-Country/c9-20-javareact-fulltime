import { useState } from "react";
import { ContainerStartStyled } from "../styled-components/layout.styled";
import RatingIcon from "./RatingIcon";
const ContainerStart = () => {
	const [rating, setRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);

	const onMouseEnter = (index) => {
		setHoverRating(index);
	};
	const onMouseLeave = () => {
		setHoverRating(0);
	};
	const onSaveRating = (index) => {
		setRating(index);
	};

	return (
		<ContainerStartStyled>
			<h2>Calificación</h2>
			<div>
				{[1, 2, 3, 4, 5].map((index) => (
					<RatingIcon
						key={index}
						index={index}
						rating={rating}
						hoverRating={hoverRating}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						onSaveRating={onSaveRating}
					/>
				))}
			</div>
		</ContainerStartStyled>
	);
};

export default ContainerStart;
