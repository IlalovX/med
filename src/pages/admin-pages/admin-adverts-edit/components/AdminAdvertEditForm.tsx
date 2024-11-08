import { Form, FormProps, RadioChangeEvent } from 'antd'

import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewForm from '../../../../components/new-form/NewForm'
import { LANGUAGES } from '../../../../constans/data'
import { useEditAdvert } from '../services/mutation'

function AdminAdvertEditForm({ lngIndex }: { lngIndex: string }) {
	const { id } = useParams()
	const [form] = Form.useForm()
	const [radioValue, setRadioValue] = useState<number>(1)
	const [imageUrl, setImageUrl] = useState<string>('')
	const editAdvert = useEditAdvert({ id: id as string })
	const onChange = (e: RadioChangeEvent) => {
		setRadioValue(e.target.value)
	}

	const onFinish: FormProps['onFinish'] = values => {
		editAdvert.mutateAsync({
			description: values.description,
			flags: [radioValue.toString()],
			header: values.header,
			language: LANGUAGES[+lngIndex].abbr,
			photo: imageUrl,
		})
		form.resetFields()
	}
	const ref = useRef()
	return (
		<NewForm
			fileInputRef={ref}
			key={1}
			i18nIsDynamicList
			text='Новости'
			onFinish={onFinish}
			form={form}
			onChange={onChange}
			radioValue={radioValue}
			setImageUrl={setImageUrl}
		/>
	)
}

export default AdminAdvertEditForm
