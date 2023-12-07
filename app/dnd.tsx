import { useState } from 'react'
import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

export default function DragDrop() {
	const updateFile = (files: ExtFile[]) => {
		console.log(files)
	}
	return <Dropzone onChange={updateFile}>{files}</Dropzone>
}
