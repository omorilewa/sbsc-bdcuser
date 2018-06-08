import { StyleSheet } from 'react-native';

export const NavStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  icon: {
    fontSize: 40,
    color: '#7fab7f',
    marginRight: 10
  },
  backIcon: {
    fontSize: 40,
    color: '#7fab7f',
    marginLeft: '1%'
  },
  drawerText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'normal',
    fontFamily: 'OpenSans-Regular'
  },
  item: {
    borderBottomColor: '#1e331a',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
  },
  imagebg: {
    width: '100%',
    height: '100%',
  },
  drawerView: {
    backgroundColor:'rgba(0,0,0,.7)'
  }
});

export const StubStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export const RateScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  imagebg: {
    width: '100%',
    height: '100%',
  },
  currView: {
    width: '100%',
    height: '80%'
  },
  cut: {
    width: '100%'
  },
  calcView: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    borderRadius:20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  outerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  outerPadding: {
    paddingRight: 8,
    paddingLeft: 8
  },
  img: {
    width: 25,
    height: 33
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    color: 'white',
    marginTop: 8
  },
  subText: {
    fontSize: 14,
    marginTop: 3,
    color: '#9fa99d',
    fontFamily: 'OpenSans-Regular'
  },
  color: {
    color: 'white',
    marginTop: 13,
    fontFamily: 'OpenSans-Regular'
  },
  row: {
    flexDirection: 'row'
  },
  margin: {
    marginTop: 6,
    paddingLeft: 18,
    paddingRight: 18,
    justifyContent: 'space-between'
  },
  white: {
    color: 'white',
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'OpenSans-Italic',
  },
  morning: {
    backgroundColor: '#006FFF',
  },
  afternoon: {
    backgroundColor: '#FF9E3D',
  },
  evening: {
    backgroundColor: '#FF0000',
  },
  indicator: {
    width: 14,
    height: 14,
    marginTop: 2,
    borderRadius: 4,
  }
});

export const GeneralStyles = StyleSheet.create({
  calcView: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    borderRadius:20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  outerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  outerPadding: {
    paddingRight: 8,
    paddingLeft: 8,
    height: '100%',
    backgroundColor:'rgba(0,0,0,.7)'
  },
  calcImg: {
    width: 25,
    height: 33
  },
  wrapperImage: {
    width: '100%',
    height: '100%',
  },
});

export const AboutStyles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center'
  },
  cta: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'OpenSans-SemiBold'
  },
  readMoreButton: {
    marginTop: 15,
    backgroundColor: '#02a901',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%'
  },
  aboutContent: {
    justifyContent: 'center',
    height: 450,
    marginTop: 10,
    backgroundColor: '#105410',
    borderRadius: 30,
    width: '98%',
    opacity: 0.8,
  },
  aboutText: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    fontFamily: 'OpenSans-Regular'
  }
});
