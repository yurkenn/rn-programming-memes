import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './Creator.style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Hello from '../../components/Lottie/Hello/Hello';

const openGithub = () => {
  Linking.openURL('https://github.com/yurkenn');
};

const openLinkedin = () => {
  Linking.openURL('https://www.linkedin.com/in/oğuzyürken');
};

const openTwitter = () => {
  Linking.openURL('https://twitter.com/yurkenowl');
};

const Creator = () => {
  return (
    <View style={style.container}>
      <View style={style.image_container}>
        <Image
          style={style.image}
          source={{uri: 'https://avatars.githubusercontent.com/u/69719126?v=4'}}
        />
      </View>
      <Hello style={style.hello_animation} />

      <View style={style.about_container}>
        <Text style={style.name}>Oğuz Yürken</Text>
        <Text style={style.nickname}>yurkenn</Text>
        <Text style={style.decription}>Mobile Developer | React Native</Text>
      </View>

      {/* my links  */}
      <View style={style.links}>
        <TouchableOpacity style={style.github} onPress={openGithub}>
          <Icon name="github" size={35} color="#000" />
          <Text style={style.gitText}>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.linkedin} onPress={openLinkedin}>
          <Icon name="linkedin" size={35} color="#000" />
          <Text style={style.linkText}>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.twitter} onPress={openTwitter}>
          <Icon name="twitter" size={35} color="#000" />
          <Text style={style.twitterText}>Twitter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Creator;
