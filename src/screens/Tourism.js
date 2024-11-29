import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import Footer from '../components/Footer';
import palms_south from '../../assets/images/tourispot/palms_south.webp';
import filinvest_mall from '../../assets/images/tourispot/filinvest_mall.jpg';
import nature_parks from '../../assets/images/tourispot/nature_parks.jpg';
import laksa from '../../assets/images/tourispot/laksa.webp';

const Tourism = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image
            source={palms_south} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Palms Country Club</Text>
          <Text style={styles.cardContent}>
            Palms Country Club is a luxurious resort in Muntinlupa, offering world-class amenities, an 18-hole golf course, and serene swimming pools, perfect for both relaxation and recreation.
          </Text>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image
            source={filinvest_mall} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Alabang Town Center</Text>
          <Text style={styles.cardContent}>
            A popular shopping destination in Muntinlupa, Alabang Town Center offers a variety of retail shops, dining options, and entertainment facilities, making it a perfect spot for tourists and locals alike.
          </Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Image
            source={nature_parks} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Muntinlupa Nature Park</Text>
          <Text style={styles.cardContent}>
            The Muntinlupa Nature Park is an urban oasis that showcases lush greenery, scenic walking trails, and peaceful picnic spots. It's an ideal location for outdoor activities and enjoying nature within the city.
          </Text>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Image
            source={laksa} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Festivals and Events</Text>
          <Text style={styles.cardContent}>
            Muntinlupa hosts vibrant festivals such as the annual "Sungayan Festival," which celebrates the city's culture, food, and traditions. Visitors can experience lively parades, traditional dances, and local delicacies.
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796B',
    margin: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#546E7A',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default Tourism;
