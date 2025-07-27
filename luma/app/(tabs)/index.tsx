import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Subjects</ThemedText>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subjectContainer: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  subjectText: {
    fontSize: 18,
  },
});
