import { Form, FormProps, Input, Tabs, TabsProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SubmitButton from '../../../components/submit-button/SubmitButton'
import { LANGUAGES } from '../../../constans/data'
import { useUploadImage } from '../../../services/mutations'
import styles from '../admin-faculty/admin-faculty.module.scss'
import { useScientific } from './services/mutations'

function ScientificForm({
	lngIndex,
	title,
}: {
	lngIndex: string
	title: string
}) {
	type FieldType = {
		title?: string
		desc?: string
	}

	const { id } = useParams()
	const [form] = Form.useForm()
	const [imageUrl, setImageUrl] = useState<string>('')
	const formData = new FormData()
	const uploadImage = useUploadImage()
	// const { data } = getScientific();
	const student = useScientific()
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log('Change:', e.target.value)
	}
	const onFinish: FormProps<FieldType>['onFinish'] = values => {
		student.mutateAsync({
			faculty: id?.toString(),
			info: values.desc,
			language: LANGUAGES[+lngIndex].abbr,
			title: values.title,
			photo: imageUrl,
		})
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
							onChange={onChange}
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

function Scientific() {
	const [lngIndex, setLngIndex] = useState('1')

	const onChange = (key: string) => {
		setLngIndex(key)
	}
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'Русский',
			children: (
				<ScientificForm
					lngIndex={lngIndex}
					title='Студенческое научное общество'
				/>
			),
		},
		{
			key: '2',
			label: 'Каракалпаксикий',
			children: (
				<ScientificForm
					lngIndex={lngIndex}
					title='Студенческое научное общество'
				/>
			),
		},
		{
			key: '3',
			label: 'Английский',
			children: (
				<ScientificForm
					lngIndex={lngIndex}
					title='Студенческое научное общество'
				/>
			),
		},
		{
			key: '4',
			label: 'Узбекский',
			children: (
				<ScientificForm
					lngIndex={lngIndex}
					title='Студенческое научное общество'
				/>
			),
		},
	]
	return (
		<div className={styles.faculty}>
			<Tabs onChange={onChange} type='card' items={items} />
		</div>
	)
}

export default Scientific
