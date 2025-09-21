import { View, FlatList, Text } from 'react-native';
import { styles } from '../styles/styles';

const DATA = [
  { id: '1', label: 'Hjælp' },
  { id: '2', label: 'Om' },
  { id: '3', label: 'Kontakt' },
];

export default function FooterList() {
  return (
    <View style={styles.footer}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.footerItem}>
            <Text style={styles.footerText}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
}
