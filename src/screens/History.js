import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import Footer from '../components/Footer';

import Historical from '../../assets/images/muntinlupa_historical.jpg';
import Spanish_colonial from '../../assets/images/spanish_colonial_muntinlupa.webp';
import Bilibid_prison from '../../assets/images/bilibid_prison.jpg';
import modern from '../../assets/images/muntinlupa_modern.jpg';

const History = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image
            source={Historical} 
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Early Beginnings</Text>
          <Text style={styles.cardContent}>
            Muntinlupa traces its roots back to pre-colonial times when it was home to native Tagalog communities. The name "Muntinlupa" is believed to have been derived from the Tagalog phrase "Monte sa Lupa," meaning mountain on the land, referencing its hilly terrain.
          </Text>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Image
            source={Spanish_colonial} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Spanish Era</Text>
          <Text style={styles.cardContent}>
            During the Spanish colonial period, Muntinlupa became a significant location for governance and missionary work. It was officially established as a pueblo in 1869 and became known for its strong agricultural contributions.
          </Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Image
            source={Bilibid_prison} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Establishment of Bilibid Prison</Text>
          <Text style={styles.cardContent}>
            In 1940, the New Bilibid Prison was established in Muntinlupa, replacing the Old Bilibid Prison in Manila. This iconic structure became one of the city’s defining landmarks.
          </Text>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Image
            source={modern} // Replace with an actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Modern Muntinlupa</Text>
          <Text style={styles.cardContent}>
            Over the years, Muntinlupa transformed into a modern urban center, becoming known as the "Emerald City of the Philippines" with thriving business districts such as Alabang and vibrant local communities.
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
    color: '#607D8B',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default History;
