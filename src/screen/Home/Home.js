import {FlatList} from 'react-native';
import React, {useState} from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import HomeCard from '../../components/Cards/HomeCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

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

  return (
    <FlatList
      data={data}
      renderItem={renderHomeCard}
      refreshing={isRefresing}
      onRefresh={() => {
        setIsRefresing(true);
        fetchData();
        setIsRefresing(false);
      }}
    />
  );
};

export default Home;
