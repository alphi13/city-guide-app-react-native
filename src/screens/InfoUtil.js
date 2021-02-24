import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

const InfoUtil = () => (
  <ScrollView>
    <View>
      <Text style={styles.container}>
        Bu uygulama, 2010 yılından beri Tayland hakkındaki en ayrıntılı Türkçe
        kaynak olma özelliğini koruyan taylandgezi.com sitesindeki bilgilerden
        derlenmiştir.
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('http://www.taylandgezi.com')}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/tgr-logo.gif')} />
        </View>
      </TouchableOpacity>

      <Text style={styles.container}>
        Daha fazla ve ayrıntılı bilgiler için Google Play Books&apos;tan Tayland
        Gezi Rehberi e-kitabını indirebilirsiniz.
      </Text>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://play.google.com/store/books/details/Keremcan_B%C3%BCy%C3%BCkta%C5%9Fk%C4%B1n_Tayland_Gezi_Rehberi?id=eK10BgAAQBAJ'
          )
        }
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/tgr-book.jpg')} />
        </View>
      </TouchableOpacity>

      <Text style={styles.container}>© 2020 Keremcan Büyüktaşkın</Text>

      <Text style={styles.container}>
        Yazar, bilgilerin güncelliği, doğruluğu & eksiksizliği hakkında hiçbir
        garanti vermemektedir. Bilgilerin kullanımından kaynaklanabilecek bir
        zarardan yazar sorumlu tutulamaz. Metinler & görseller üzerindeki tüm
        maddi ve manevi haklar, 5846 sayılı Fikir ve Sanat Eserleri Kanunu’na
        göre materyal sahibi Keremcan Büyüktaşkın’a aittir. Söz konusu metinler
        & görseller eser sahibinin izni olmadan kopyalanamaz, çoğaltılamaz,
        işlenemez, değiştirilemez, başka internet sitelerinde ve basılı yada
        görsel yayın yapan diğer mecralarda yayınlanamaz.
      </Text>

      <Text style={styles.container}>
        Kullanım hakkı yazara ait olmayan açık kullanımlı fotoğraflar Wikimedia
        Commons kaynaklı & CC BY-SA lisanslı, haritalar ise OpenStreetMap
        kaynaklı & ODbL lisanslıdırlar.
      </Text>
    </View>
  </ScrollView>
);

InfoUtil.navigationOptions = (headerTitle) => (headerTitle: 'Hakkında');

const styles = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 19,
    lineHeight: 25,
    fontFamily: 'Abel-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default InfoUtil;
