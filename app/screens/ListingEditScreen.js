import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  description: Yup.string().required().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
})

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Cars', value: 2, backgroundColor: 'green', icon: 'car' },
  { label: 'Cameras', value: 3, backgroundColor: 'blue', icon: 'camera' },
  {
    label: 'Games',
    value: 1,
    backgroundColor: 'red',
    icon: 'game-controller',
  },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'dresser' },
  {
    label: 'Sports',
    value: 3,
    backgroundColor: 'blue',
    icon: 'sports-football',
  },
  {
    label: 'Movies & Music',
    value: 1,
    backgroundColor: 'red',
    icon: 'shopping-music',
  },
  { label: 'Books', value: 2, backgroundColor: 'green', icon: 'book' },
  { label: 'Others', value: 3, backgroundColor: 'blue', icon: 'devices-other' },
]

function ListingEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <AppFormPicker
          items={categories}
          name='category'
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          width='50%'
        />
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  )
}

export default ListingEditScreen
