import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import Footer from '../components/Footer';
import Riverpark from '../../assets/images/muntinlupa_riverpark.jpg';
import Festival from '../../assets/images/muntinlupa_festival.webp';
import Business from '../../assets/images/muntinlupa_business.jpg';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image
            source={Riverpark} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Muntinlupa City</Text>
          <Text style={styles.cardContent}>
            Muntinlupa is known as the "Emerald City of the Philippines," home to vibrant communities, modern urban centers, and the famous Laguna de Bay.
          </Text>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image
            source={Festival} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Cultural Heritage</Text>
          <Text style={styles.cardContent}>
            Muntinlupa celebrates its diverse culture with festivals such as the Tunasan Festival and unique local traditions that bring the community together.
          </Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Image
            source={Business} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Business Hub</Text>
          <Text style={styles.cardContent}>
            Known for hosting Alabang, a bustling business district, Muntinlupa serves as a key economic center in Metro Manila.
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
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 5, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
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
    color: '#607D8B',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default About;
