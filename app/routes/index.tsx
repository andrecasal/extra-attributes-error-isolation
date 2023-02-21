import { Form } from "@remix-run/react"

import { password_min_length } from '~/utils/authentication.server'


const Index = () => {
	return (
		<Form>
			<p>{password_min_length}</p>
		</Form>
	)
}

export default Index
