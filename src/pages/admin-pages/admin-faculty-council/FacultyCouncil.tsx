import { Form, FormProps, Input, Tabs, TabsProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import SubmitButton from '../../../components/submit-button/SubmitButton'
import { useUploadImage } from '../../../services/mutations'

function CouncilForm({ lngIndex, title }: { lngIndex: string; title: string }) {
	type FieldType = {
		title?: string
		desc?: string
	}

	console.log(lngIndex)

	const [form] = Form.useForm()
	const [imageUrl, setImageUrl] = useState<string>('')
	console.log(imageUrl)

	const formData = new FormData()
	const uploadImage = useUploadImage()

	const onFinish: FormProps<FieldType>['onFinish'] = values => {
		values
	}

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
		console.log('Failed:', errorInfo)
	}

	const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.[0]) {
			formData.append('file', event.target.files?.[0])
			uploadImage
				.mutateAsync(formData)
				.then((res: any) => setImageUrl(res.data))
		}
	}
	return (
		<div>
			<h1 className='text-4xl text-white rounded-t-lg bg-almost-blue py-2 px-5'>
				{title}
			</h1>
			<div className='bg-white rounden-b-lg container mx-auto p-5 space-y-5'>
				<Form
					form={form}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
					layout='vertical'
				>
					<Form.Item<FieldType>
						label='Title'
						name='title'
						rules={[
							{
								required: true,
								message: `Пожалуйста заполните поля "Title"`,
							},
						]}
					>
						<Input maxLength={1000} minLength={2} />
					</Form.Item>
					<Form.Item<FieldType>
						label='Info'
						name='desc'
						rules={[
							{
								required: true,
								message: `Пожалуйста заполните поля "Info"`,
							},
						]}
					>
						<TextArea
							showCount
							maxLength={1000}
							minLength={2}
							placeholder='disable resize'
							style={{ height: 120, resize: 'none' }}
						/>
					</Form.Item>
					<Form.Item
						label='Upload'
						rules={[
							{
								required: true,
								message: `Пожалуйста заполните поля "Upload"`,
							},
						]}
					>
						<input type='file' onChange={onFileChange} />
					</Form.Item>
					<Form.Item className='text-end'>
						<SubmitButton form={form} w='inline'>
							Submit
						</SubmitButton>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

function Council() {
	const [lngIndex, setLngIndex] = useState('1')

	const onChange = (key: string) => {
		setLngIndex(key)
	}
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'Русский',
			children: (
				<CouncilForm lngIndex={lngIndex} title='Состав ученого совета' />
			),
		},
		{
			key: '2',
			label: 'Каракалпаксикий',
			children: (
				<CouncilForm lngIndex={lngIndex} title='Состав ученого совета' />
			),
		},
		{
			key: '3',
			label: 'Английский',
			children: (
				<CouncilForm lngIndex={lngIndex} title='Состав ученого совета' />
			),
		},
		{
			key: '4',
			label: 'Узбекский',
			children: (
				<CouncilForm lngIndex={lngIndex} title='Состав ученого совета' />
			),
		},
	]
	return <Tabs onChange={onChange} type='card' items={items} />
}

export default Council
