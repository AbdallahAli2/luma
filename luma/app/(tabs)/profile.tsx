import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Guest</Text>
        <Text style={styles.email}>Guest</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        <ProfileItem icon="person" title="Personal Information" />
        <ProfileItem icon="lock-closed" title="Login & Security" />
        <ProfileItem icon="card" title="Payment Methods" />
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PREFERENCES</Text>
        <ProfileItem icon="notifications" title="Notifications" />
        <ProfileItem icon="moon" title="Dark Mode" />
        <ProfileItem icon="language" title="Language" />
      </View>
    </ScrollView>
  );
}

function ProfileItem({ icon, title }: { icon: IoniconsName; title: string }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={20} color="#5170ff" />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#A0A0A0" />
    </View>
  );
}

// ... keep your existing styles ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#5170ff',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemText: {
    fontSize: 17,
    color: '#FFFFFF',
  },
});