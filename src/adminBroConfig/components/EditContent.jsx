import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import styled from 'styled-components';

const Text = styled.p`
	display: block;
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 8px;
	&.label {
		font-weight: 600;
		margin-right: 5px;
	}
`;
const CKEditorContainer = styled.div`
	margin-bottom: 15px;
	.ck-editor__editable {
		min-height: 300px;
	}
`;
const editorConfiguration = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'blockQuote',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'undo',
			'redo',
		],
		shouldNotGroupWhenFull: true,
	},
};

const EditContent = ({ onChange, property, record }) => {
	const value =
		record.params && typeof record.params[property.name] !== 'undefined'
			? record.params[property.name]
			: '';
	return (
		<CKEditorContainer className='CKEditor'>
			<Text>Content</Text>
			<CKEditor
				editor={ClassicEditor}
				data={value}
				config={editorConfiguration}
				onChange={(event, editor) => {
					const data = editor.getData();
					onChange(property.name, data);
				}}
			/>
		</CKEditorContainer>
	);
};

export default EditContent;
