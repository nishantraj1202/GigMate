import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NeoBrutalismCard from '../components/NeoBrutalismCard';

export default function EarningsScreen() {
  return (
    <ScrollView style={styles.container}>
      <NeoBrutalismCard style={styles.earningsCard}>
        <Text style={styles.title}>Total Earnings</Text>
        <Text style={styles.amount}>$2,450.00</Text>
        <Text style={styles.subtitle}>This Month</Text>
      </NeoBrutalismCard>

      <NeoBrutalismCard style={styles.plannerCard}>
        <Text style={styles.title}>Financial Goals</Text>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>Emergency Fund</Text>
          <Text style={styles.goalAmount}>$5,000 / $10,000</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '50%' }]} />
        </View>
      </NeoBrutalismCard>

      <NeoBrutalismCard style={styles.statsCard}>
        <Text style={styles.title}>Quick Stats</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>32</Text>
            <Text style={styles.statLabel}>Gigs</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.9</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>28h</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </View>
        </View>
      </NeoBrutalismCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  earningsCard: {
    marginBottom: 16,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  plannerCard: {
    marginBottom: 16,
    padding: 20,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    fontWeight: '500',
  },
  goalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#2ECC71',
  },
  statsCard: {
    padding: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});