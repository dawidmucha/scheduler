import { useState } from 'react' 

const App = () => {
	const [ formClass, setFormClass ] = useState('')
	const [ formTeacher, setFormTeacher ] = useState('')
	const [ formClassroom, setFormClassroom ] = useState('')
	const [ formSubject, setFormSubject ] = useState('')

	const onFormChange = (e) => {
		switch(e.target.name) {
			case 'class':
				setFormClass(e.target.value)
				break
			case 'teacher':
				setFormTeacher(e.target.value)
				break
			case 'classroom':
				setFormClassroom(e.target.value)
				break
			case 'subject':
				setFormSubject(e.target.value)
				break
			default:
				console.error('🥺')
		}
	}

	const onClassFormSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem('class', '123')
	}

	return (
		<div>
			<div>
				<form>
					<label htmlFor='class'>
						<h3>Class</h3>
					</label>
					<input type='text' name='class' onChange={(e) => onFormChange(e)} />
					<button onClick={(e) => onClassFormSubmit(e)}>submit</button>
				</form>

				<form>
					<label htmlFor='teacher'>
						<h3>Teacher</h3>
					</label>
					<input type='text' name='teacher' onChange={(e) => onFormChange(e)} />
					<button>submit</button>
				</form>
				
				<form>
					<label htmlFor='classroom'>
						<h3>Classroom</h3>
					</label>
					<input type='text' name='classroom' onChange={(e) => onFormChange(e)} />
					<button>submit</button>
				</form>
				
				<form>
					<label htmlFor='subject'>
						<h3>Subjest</h3>
					</label>
					<input type='text' name='subject' onChange={(e) => onFormChange(e)} />
					<button>submit</button>
				</form>
			</div>

			<div>
				<div>
					{ formClass }
				</div>
				<div>
					{ formTeacher }
				</div>
				<div>
					{ formClassroom }
				</div>
				<div>
					{ formSubject }
				</div>
				
			</div>
		</div>
	);
}

export default App