import React, { useState } from 'react';
import { Form, FormInput, FormButton, Header } from 'semantic-ui-react';

const PostForm = (props) => {

	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		setStatus(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addPost(status);
	}
	return(
		<>
			<Header as="h3">New Post</Header>
			<Form onSubmit={handleSubmit}>
				<FormInput
					required
					name="status"
					value={status}
					placeholder="Enter your status here"
					onChange={handleChange}
				>
				</FormInput>
				<FormButton>Submit</FormButton>
			</Form>
		</>
	);
};

export default PostForm;