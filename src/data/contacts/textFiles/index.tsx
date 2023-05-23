import React from 'react'
import TextFile from 'components/textFile'
import ContactsTextFile from 'data/contacts/textFiles/ContactsTextFile'

export const contactsTextFiles = [
	<TextFile key='readMe' title='contacts.txt'>
		<ContactsTextFile />
	</TextFile>,
]
