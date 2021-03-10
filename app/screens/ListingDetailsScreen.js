import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/2.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket</AppText>
        <AppText style={styles.price}>$330</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/edit2.png')}
            title='deepan'
            subTitle='5 listings'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen
