import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlinIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('/connections', {
      user_id: teacher.id
    });
    // <a href="whatsapp://send?text=Hello World!&phone=+9198********1">Ping me on WhatsApp</a>
    Linking.openURL(`whatsapp://send?&phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    // Adds to favorite.
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (isFavorited) {
      // Remove from favorites.
      const favoriteIndex = favoritesArray.findIndex( (teacherItem:Teacher) =>{
        return teacherItem.id === teacher.id;
      });

      favoritesArray.slice(favoriteIndex);
      setIsFavorited(false);
    } else {

      if (favorites) {
        const favoritesArray = JSON.parse(favorites);
      }
      favoritesArray.push(teacher);
      setIsFavorited(true);
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        ></Image>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>

        <Text style={styles.price}>
          Preço/hora {'    '} R${' '}
          <Text style={styles.priceValue}>{teacher.cost}</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorited : {},
            ]}>
            {isFavorited ?
              <Image source={unFavoriteIcon}></Image>
              : <Image source={heartOutlinIcon}></Image>
            }
          </RectButton>

          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon}></Image>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>

  )
}

export default TeacherItem;