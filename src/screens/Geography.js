import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import laguna_bay from '../../assets/images/muntinlupa_laguna_bay.jpg';
import terrain from '../../assets/images/muntinlupa_terrain.jpg';
import weather from '../../assets/images/muntinlupa_weather.gif';
import urban from '../../assets/images/muntinlupa_urban.jpg';
import Footer from '../components/Footer';

const Geography = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image
            source={laguna_bay} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Laguna de Bay</Text>
          <Text style={styles.cardContent}>
            Muntinlupa is bordered by Laguna de Bay, the largest freshwater lake in the Philippines. The lake not only provides scenic views but also supports fishing and aquaculture for the local economy.
          </Text>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image
            source={terrain} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hilly Terrain</Text>
          <Text style={styles.cardContent}>
            The city features a mix of flatlands and hilly areas, contributing to its unique landscape. The rolling hills in some barangays offer stunning panoramic views of the surrounding areas.
          </Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Image
            source={weather} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Climate</Text>
          <Text style={styles.cardContent}>
            Muntinlupa has a tropical climate characterized by a dry season from November to April and a wet season from May to October, with temperatures averaging 25–32°C throughout the year.
          </Text>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Image
            source={urban} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Urban Features</Text>
          <Text style={styles.cardContent}>
            Despite being part of the bustling Metro Manila, Muntinlupa maintains green spaces, including parks and natural reserves, making it an urban area with a touch of nature.
          </Text>
        </View>
      </ScrollView>
      <Footer/>
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

export default Geography;
