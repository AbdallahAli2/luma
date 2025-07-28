import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('Hello 👋');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting = 'Hello 👋';

      if (hour >= 5 && hour < 12) {
        newGreeting = 'Good Morning ☀️';
      } else if (hour >= 12 && hour < 17) {
        newGreeting = 'Good Afternoon 🌤️';
      } else if (hour >= 17 && hour < 22) {
        newGreeting = 'Good Evening 🌙';
      } else {
        newGreeting = 'Good Night 🌚';
      }

      setGreeting(newGreeting);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <Image 
        source={require('@/assets/images/luma.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedText type="title" style={styles.greeting}>{greeting}</ThemedText>
      <ThemedText type="title" style={styles.title}>Subjects</ThemedText>
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <ThemedView style={styles.subjectContainer}>
          <ThemedText style={styles.subjectText}>Maths</ThemedText>
        </ThemedView>
        <ThemedView style={styles.subjectContainer}>
          <ThemedText style={styles.subjectText}>English Literature</ThemedText>
        </ThemedView>
        <ThemedView style={styles.subjectContainer}>
          <ThemedText style={styles.subjectText}>Biology</ThemedText>
        </ThemedView>
        <ThemedView style={styles.subjectContainer}>
          <ThemedText style={styles.subjectText}>Physics</ThemedText>
        </ThemedView>
        <ThemedView style={styles.subjectContainer}>
          <ThemedText style={styles.subjectText}>Chemistry</ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Increased to accommodate larger logo
    paddingHorizontal: 20,
    backgroundColor: '#121212',
  },
  logo: {
    width: 120, // Increased from 80 to 120
    height: 120, // Increased from 80 to 120
    position: 'absolute',
    top: 10, // Adjusted positioning
    left: 10,
    paddingTop: 40, // Adjusted positioning
  },
  greeting: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFD700',
    marginTop: 130, // Increased from 80 to 130 to account for larger logo
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#5170ff',
  },
  subjectContainer: {
    width: '100%',
    height: 80,
    padding: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#5170ff',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#1E1E1E',
  },
  subjectText: {
    fontFamily: 'systemui',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});