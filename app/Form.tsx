'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export const Form = ({ transformToCode }: { transformToCode: (url: string) => void }) => {
	return (
		<form
			className="flex flex-col gap-10"
			onSubmit={(e) => {
				e.preventDefault()
				const form = e.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement

				transformToCode(url.value)
			}}
		>
			<Label htmlFor="url"> Introduce tu URL de la imagen: </Label>
			<Input id="url" type="url" placeholder="https://www.tuscreenshot.com" />
			<Button>Generar codigo de la imagen</Button>
		</form>
	)
}
