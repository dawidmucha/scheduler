import { useState, useEffect } from 'react' 

const App = () => {
	const [ formClass, setFormClass ] = useState('')
	const [ formTeacher, setFormTeacher ] = useState('')
	const [ formClassroom, setFormClassroom ] = useState('')
	const [ formSubject, setFormSubject ] = useState('')

	const [ forceRender, setForceRender ] = useState(true);

	useEffect(() => {
		if(localStorage.getItem('class') === null) {
			localStorage.setItem('class', [])
		}
		if(localStorage.getItem('teacher') === null) {
			localStorage.setItem('teacher', [])
		}
		if(localStorage.getItem('classroom') === null) {
			localStorage.setItem('classroom', [])
		}
		if(localStorage.getItem('subject') === null) {
			localStorage.setItem('subject', [])
		}
	}, [])

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

		const lsClassString = localStorage.getItem('class') || ""
		const lsClassArray = lsClassString === "" ? [] : lsClassString.split(',')
		const lsClassUpdated = [...lsClassArray, formClass]
		localStorage.setItem('class', lsClassUpdated)
		setForceRender(!forceRender)
	}

	const onTeacherFormSubmit = (e) => {
		e.preventDefault();

		const lsTeacherString = localStorage.getItem('teacher') || ""
		const lsTeacherArray = lsTeacherString === "" ? [] : lsTeacherString.split(',')
		const lsTeacherUpdated = [...lsTeacherArray, formTeacher]
		localStorage.setItem('teacher', lsTeacherUpdated)
		setForceRender(!forceRender)
	}

	const onClassroomFormSubmit = (e) => {
		e.preventDefault();

		const lsClassroomString = localStorage.getItem('classroom') || ""
		const lsClassroomArray = lsClassroomString === "" ? [] : lsClassroomString.split(',')
		const lsClassroomUpdated = [...lsClassroomArray, formClassroom]
		localStorage.setItem('classroom', lsClassroomUpdated)
		setForceRender(!forceRender)
	}

	const onSubjectFormSubmit = (e) => {
		e.preventDefault();

		const lsSubjectString = localStorage.getItem('subject') || ""
		const lsSubjectArray = lsSubjectString === "" ? [] : lsSubjectString.split(',')
		const lsSubjectUpdated = [...lsSubjectArray, formSubject]
		localStorage.setItem('subject', lsSubjectUpdated)
		setForceRender(!forceRender)
	}

	return (
		<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
			<div>
				<form>
					<label htmlFor='class'>
						<h3>Class</h3>
					</label>
					<input type='text' name='class' onChange={(e) => onFormChange(e)} />
					<button onClick={onClassFormSubmit}>submit</button>
				</form>

				<form>
					<label htmlFor='teacher'>
						<h3>Teacher</h3>
					</label>
					<input type='text' name='teacher' onChange={(e) => onFormChange(e)} />
					<button onClick={onTeacherFormSubmit}>submit</button>
				</form>
				
				<form>
					<label htmlFor='classroom'>
						<h3>Classroom</h3>
					</label>
					<input type='text' name='classroom' onChange={(e) => onFormChange(e)} />
					<button onClick={onClassroomFormSubmit}>submit</button>
				</form>
				
				<form>
					<label htmlFor='subject'>
						<h3>Subjest</h3>
					</label>
					<input type='text' name='subject' onChange={(e) => onFormChange(e)} />
					<button onClick={onSubjectFormSubmit}>submit</button>
				</form>
			</div>

			<div>
				<h3>State</h3>
				<div>formClass: { formClass }</div>
				<div>formTeacher: { formTeacher }</div>
				<div>formClassroom:	{ formClassroom }	</div>
				<div>formSubject: { formSubject }</div>
				
				<h3>Local Storage</h3>
				<div>class: { localStorage.getItem('class') }</div>
				<div>teacher: { localStorage.getItem('teacher') }</div>
				<div>classroom: { localStorage.getItem('classroom') }</div>
				<div>subject: { localStorage.getItem('subject') }</div>
			</div>
		</div>
	);
}

export default App