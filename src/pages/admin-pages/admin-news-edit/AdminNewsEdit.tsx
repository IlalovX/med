import { Tabs, TabsProps } from 'antd'
import { useState } from 'react'
import AdminNewAddForm from '../admin-news-add/components/AdminNewAddForm'

function AdminNewsEdit() {
	const [lngIndex, setLngIndex] = useState('1')

	const onChange = (key: string) => {
		setLngIndex(key)
	}

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'Русский',
			children: <AdminNewAddForm lngIndex={lngIndex} />,
		},
		{
			key: '2',
			label: 'Каракалпаксикий',
			children: <AdminNewAddForm lngIndex={lngIndex} />,
		},
		{
			key: '3',
			label: 'Английский',
			children: <AdminNewAddForm lngIndex={lngIndex} />,
		},
		{
			key: '4',
			label: 'Узбекский',
			children: <AdminNewAddForm lngIndex={lngIndex} />,
		},
	]
	return (
		<>
			<Tabs onChange={onChange} type='card' items={items} />
		</>
	)
}

export default AdminNewsEdit
