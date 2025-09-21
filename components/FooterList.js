import { View, Text, TouchableOpacity, FlatList } from 'react-native'; // Tilføjer FlatList
import { styles } from '../styles/styles'; // Genbrugte styles
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ikoner

// Links + ikoner (FlatList anvendes efter ønske)
const LINKS = [
  { id: 'help', label: 'Help', icon: 'help-circle-outline' },
  { id: 'about', label: 'About', icon: 'information-outline' },
  { id: 'contact', label: 'Contact', icon: 'email-outline' },
];

export default function FooterList() {
  return (
    // Wrapper med fast position i bunden (styres i styles.footer)
    <View style={styles.footer}>
      <FlatList
        data={LINKS}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.footerFlatContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.footerFlatItem}
            activeOpacity={0.7}
            onPress={() => console.log('pressed', item.id)}
          >
            <MaterialCommunityIcons name={item.icon} size={16} style={styles.footerFlatIcon} />
            <Text style={styles.footerFlatText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
