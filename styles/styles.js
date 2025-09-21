import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 64,
    backgroundColor: '#181A20', // dark background
    justifyContent: 'center',
  },
  title: { 
    fontSize: 32, 
    fontWeight: '700', 
    marginBottom: 32, 
    color: '#fff', // white text
    textAlign: 'center',
    letterSpacing: 1,
  },
  paragraph: { 
    fontSize: 16, 
    marginBottom: 12, 
    color: '#ccc',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#39383eff', // dark input
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    fontSize: 16,
    color: '#fff',
    borderWidth: 0,
  },
  linkText: {
    marginTop: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#fdfdfdff', // accent color
    fontSize: 15,
    opacity: 0.85,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0, right: 0,
    borderTopWidth: 1,
    borderColor: '#23262F',
    paddingVertical: 4,
    backgroundColor: '#181A20',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footerItem: { 
    marginHorizontal: 50,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: { 
    fontSize: 14, 
    color: '#888',
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    paddingVertical: 2,
    paddingHorizontal: 2,
    backgroundColor: '#4a42e4ff',
    marginBottom: 8
    

  },
    

  

 


  linkTouchable: {
    marginTop: 24,
  },
});