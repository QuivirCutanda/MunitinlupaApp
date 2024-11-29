import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import muntinlupa_cityscape from '../../assets/images/muntinlupa_cityscape.jpg';
import palms_country_club from '../../assets/images/palms_country_club.jpg';
import alabang_town_center from '../../assets/images/alabang_town_center.png';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook to access the navigation object

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Image */}
        <Image
          source={muntinlupa_cityscape} // Replace with an actual image URL
          style={styles.headerImage}
        />
        
        {/* Welcome Text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome to Muntinlupa!</Text>
          <Text style={styles.subText}>
            Explore the city known for its rich culture, vibrant communities, and scenic spots.
          </Text>
        </View>

        {/* Quick Overview */}
        <TouchableOpacity onPress={()=>navigation.navigate('About')}>
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>About Muntinlupa</Text>
          <Text style={styles.sectionContent}>
            Muntinlupa is a city located in the southern part of Metro Manila, Philippines. It is known for its thriving urban developments, lush parks, and historical landmarks. The city is home to the famous Alabang district, which is a hub for shopping, dining, and entertainment.
          </Text>
        </View>
        </TouchableOpacity>
            

        {/* Highlights Section */}
        <View style={styles.highlightsSection}>
          <Text style={styles.sectionTitle}>City Highlights</Text>
          <View style={styles.highlightsContainer}>
            {/* Highlight 1 */}
            <View style={styles.highlightCard}>
              <Image
                source={palms_country_club} // Replace with an actual image URL
                style={styles.highlightImage}
              />
              <Text style={styles.highlightTitle}>Palms Country Club</Text>
              <Text style={styles.highlightContent}>
                A luxurious resort offering world-class amenities and stunning golf courses.
              </Text>
            </View>

            {/* Highlight 2 */}
            <View style={styles.highlightCard}>
              <Image
                source={alabang_town_center} // Replace with an actual image URL
                style={styles.highlightImage}
              />
              <Text style={styles.highlightTitle}>Alabang Town Center</Text>
              <Text style={styles.highlightContent}>
                A popular shopping and dining destination that captures the heart of the city.
              </Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Tourism')} 
        >
          <Text style={styles.exploreButtonText}>Explore More</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15,
  },
  welcomeSection: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
  },
  subText: {
    fontSize: 16,
    color: '#4F4F4F',
    marginTop: 5,
  },
  overviewSection: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#546E7A',
  },
  highlightsSection: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  highlightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  highlightCard: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  highlightImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  highlightContent: {
    fontSize: 14,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  exploreButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
