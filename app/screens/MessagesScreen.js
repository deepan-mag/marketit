import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/edit2.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/edit2.png'),
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected')}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeparator onPress={() => console.log(item)} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/edit2.png'),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
