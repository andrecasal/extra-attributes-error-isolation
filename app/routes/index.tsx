import { Form } from "@remix-run/react"
import { InputDefinition, useValidatedInput } from "remix-validity-state"

import { password_min_length } from '~/utils/authentication.server'

type FormSchema = {
	inputs: {
		password: InputDefinition
	}
}

const formDefinition: FormSchema = {
	inputs: {
		password: {
			validationAttrs: {
				minLength: password_min_length
			}
		}
	}
}

const Index = () => {
	const passwordInput = useValidatedInput({formDefinition, name: 'password'})

	return (
		<Form>
			<input {...passwordInput.getInputAttrs()} />
		</Form>
	)
}

export default Index
