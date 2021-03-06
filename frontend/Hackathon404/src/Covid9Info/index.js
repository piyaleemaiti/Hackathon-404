import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../commonStyles';
import Logout from '../components/Logout';

export default function Covid9Info({route, navigation}) {
  const [stateData, setStateData] = useState({
    hotelName: '',
    hotelId: '',
    listOfServices: '',
  });
  useEffect(() => {
    const {hotelId, listOfServices} = route.params;
    setStateData(state => ({
      ...state,
      hotelId: hotelId,
      listOfServices: listOfServices,
    }));
  }, [route.params]);
  const backToPage = () => {
    navigation.goBack();
  };
  const serviceDetails = (serviceId, serviceName) => {
    if (serviceId && serviceName) {
      navigation.navigate('ServiceDetails', {
        serviceId: serviceId,
        serviceName: serviceName,
      });
    }
  };
  const renderItem = ({item}) => {
    if (item.serviceName === 'Restaurant' || item.serviceName === 'Spa') {
      return (
        <TouchableOpacity
          onPress={() => serviceDetails(item.serviceId, item.serviceName)}>
          <View style={styles.servicesListStyle}>
            <Text style={(styles.serviceNameStyle, commonStyle.fnBold)}>
              {item.serviceName}
            </Text>
            <Text style={styles.serviceNameStyle}>
              Capacity in {item.serviceName} are {item.capacity}
            </Text>
            <Text style={styles.serviceNameStyle}>
              Current Availability of seats in {item.serviceName} are{' '}
              {item.availableSpace}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={(commonStyle.container, commonStyle.bgColor)}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={commonStyle.safeAreaViewStyle}>
        <View style={commonStyle.covidhHeader}>
          <Text style={commonStyle.heading}>
            <Text style={styles.subtitle}>
              {' '}
              The safety and wellbeing of our guests and associates is of
              paramount importance to Raj Hotel. Associates at Raj Hotel are
              extensively trained on safety, hygiene and physical distancing
              norms to ensure guests' wellbeing and delight, every time.
              Technology is used for seamless, yet personalized check-ins,
              check-outs and dining experiences. With digital payments and
              non-invasive thermal screening, the touch of care replaces the
              physical one.{' '}
            </Text>
          </Text>
        </View>
        <View style={commonStyle.header}>
          <Icon
            name="arrow-left"
            style={commonStyle.backButton}
            size={20}
            onPress={backToPage}
          />

          <Text style={commonStyle.heading}>Welcome to Raj Hotel</Text>
          <Logout navigation={navigation} />
        </View>
        <View style={commonStyle.flatListContainerStyle}>
          <FlatList
            data={stateData.listOfServices}
            renderItem={renderItem}
            keyExtractor={item => item.serviceId.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
