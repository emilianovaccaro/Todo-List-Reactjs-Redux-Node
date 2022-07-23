import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import { Button, Card, Icon, Input } from "semantic-ui-react";


const TodoItem = ({ props }) => {
	const dispatch = useDispatch();
	const [ toggleEdit, setToggleEdit ] = useState(false);
	const [ newTitle, setNewTitle ] = useState(props.title);
	const [ newDescription, setNewDescription ] = useState(props.description);


	const handleSave = ( values ) => {
		return(<div>
			<form>
				<Card.Content key={props.id}>
					<Card.Header id="titulo">
						<Input type='text' onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
					</Card.Header>
					<Card.Description id="descripcion" style={{ position: 'absolute', maxWidth: '50%'}}>
						<Input type='text' onChange={(e) => setNewDescription(e.target.value)} value={newDescription}/>
					</Card.Description>
					<Button.Group style={{ position: 'relative' , float: 'right', display:'inline-block', verticalAlign:'top'}}>
						<Button
							color="teal"
							type="submit"
							style={{ maxWidth:'20%' }}
							onClick={( e ) => {
								console.log(e);
								e.preventDefault();
								values = {
									title: newTitle,
									description: newDescription,
									userId: props.userId,
									id: props.id
								};

 								dispatch( updateTodo(props.id, values) );
								return setToggleEdit(false);
							}}
						>
							<Icon name="save"/>
						</Button>
					</Button.Group>
				</Card.Content>
			</form>
		</div>
		)
	}

	
	const handleDelete = ( id ) => {
		return dispatch(deleteTodo(id));
	}


	return(
		<Card color="orange" fluid>
			<Card.Content key={props.id}>
			{
			! toggleEdit ? 
			<>

				<Card.Header id="titulo">{newTitle}</Card.Header>
				<Card.Description id="descripcion" style={{ position: 'absolute', maxWidth: '50%'}}>
						<p>{newDescription}
							</p>
				</Card.Description>
				<Button.Group style={{ position: 'relative' , float: 'right', display:'inline-block', verticalAlign:'top'}}>
					<Button
						color="teal"
						style={{ maxWidth:'20%' }}
						onClick={ () => setToggleEdit(true) }
						>
						<Icon name="edit"/>
					</Button>
					<Button.Or style={{ maxWidth: '5px', maxHeight:'5px'}} />
					<Button
						color="red"
						style={{ maxWidth:'20%' }}
						onClick={() => handleDelete(props.id) }
						>
						<Icon name="trash" />
					</Button>
				</Button.Group>
			</>
			
			:

				<div>{ handleSave() }</div>

		}
			</Card.Content>
		</Card>
	);
};


export default connect( null, { deleteTodo, updateTodo })(TodoItem);