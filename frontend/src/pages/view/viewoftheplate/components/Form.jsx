import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddNewPostMutation } from "../../../../redux/query/FoodInfo.query";
import useDate from "../hook/useDate";
import useStart from "../hook/useStart";
import { FormStyled } from "../styled-components/layout.styled";
import ContainerStart from "./ContainerStart";

const Form = () => {
	const [comment, setComment] = useState("");
	const [success, setSuccess] = useState(false);
	const { idCategory, idFood } = useParams();
	const [addNewPost, { isLoading }] = useAddNewPostMutation();
	const handleChange = (event) => {
		setComment(event.target.value);
	};

	const { infoDate } = useDate();

	const { pos, rating, hoverRating, setHoverRating, setRating } = useStart(5);

	const onSavePost = async () => {
		if (comment !== "") {
			await addNewPost({
				id: Number(idFood),
				content: comment,
				createdAt: `${infoDate.day} de ${infoDate.months} ${infoDate.year}  ${infoDate.hour}:${infoDate.minutes}Hs `,
			}).unwrap();
			console.log(isLoading);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSavePost();
	};

	return (
		<>
			<ContainerStart
				pos={pos}
				rating={rating}
				hoverRating={hoverRating}
				setHoverRating={setHoverRating}
				setRating={setRating}
			/>
			<FormStyled onSubmit={handleSubmit}>
				<label htmlFor='text'>Déjanos tu comentario</label>
				<input
					type='text'
					placeholder="Deje su comentario aca"
					name='text'
					required
					onChange={handleChange}
					value={comment}
				/>
			</FormStyled>
		</>
	);
};

export default Form;
