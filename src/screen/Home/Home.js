import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import HomeCard from '../../components/Cards/HomeCard';
import Loading from '../../components/Lottie/Loading/Loading';
import Error from '../../components/Lottie/Error/Error';
import style from './Home.style';
const Home = () => {
  const [data, loading, error, fetchData] = useApi(Config.API_URL);
  const [isRefresing, setIsRefresing] = useState(false);

  const renderHomeCard = ({item}) => {
    return <HomeCard memes={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  let keyExtractor = (item, index) => index.toString();

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={renderHomeCard}
        keyExtractor={keyExtractor}
        refreshing={isRefresing}
        onRefresh={() => {
          setIsRefresing(true);
          fetchData();
          setIsRefresing(false);
        }}
      />
    </View>
  );
};

export default Home;
