import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

import FavoriteFullIcon from '../../assets/favorite_full.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import {
  Container,
  Scroller,
  PageBody,
  BackButton,
  LoadingIcon,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  FakeSwiper,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  ServiceArea,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseBtnText,
  TestimonialArea,
  TestimonialItem,
  TestimonialInfo,
  TestimonialName,
  TestimonialBody,
} from './styles';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);

      let json = await Api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
        setFavorited(json.data.favorited);

        console.log(json.data.available);
      } else {
        alert('Erro: ' + json.error);
      }

      setLoading(false);
    };
    getBarberInfo();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFavClick = () => {
    setFavorited(!favorited);
    Api.setFavorite(userInfo.id);
  };

  const handleServiceChoose = (key) => {
    setSelectedService(key);
    setShowModal(true);
  };

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper />
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{}} />
            <UserInfo>
              <UserInfoName>RESERVA VERDE</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <UserFavButton onPress={handleFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#f00" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#f00" />
              )}
            </UserFavButton>
          </UserInfoArea>

          {loading && <LoadingIcon size="large" color="#000" />}
          <ServicesTitle>Empresa a 35 anos no mercado e há 20 em Ferraz de Vasconcelos.</ServicesTitle>
          <ServicesTitle>ENDEREÇO</ServicesTitle>
          <ServicesTitle>Rua: Rio das Folhas Verdes, Bairro: Nilo do Egito, n°000, CEP:
            00000-000, Cidade: Ferraz de Vasconcelos-SP.</ServicesTitle>
          <ServicesTitle>CONTATO</ServicesTitle>
          <ServicesTitle>Tel:(88)8888-8888</ServicesTitle>
          <ServicesTitle>Fax:(88)8888-8888</ServicesTitle>
          <ServicesTitle>Whats:(88)8888-8888</ServicesTitle>
            
          {userInfo.services && (
            <ServiceArea>
              <ServicesTitle>LISTA DE SERVIÇOS</ServicesTitle>

              {userInfo.services.map((item, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>Material</ServiceName>
                    <ServicePrice>R$</ServicePrice>
                  </ServiceInfo>
                  <ServiceChooseButton onPress={() => handleServiceChoose(key)}>
                    <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
            </ServiceArea>
          )}

          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimonialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon width="35" height="35" fill="#000" />}
                nextButton={<NavNextIcon width="35" height="35" fill="#000" />}>
                {userInfo.testimonials.map((item, key) => (
                  <TestimonialItem key={key}>
                    <TestimonialInfo>
                      <TestimonialName>Reciclagem Verde</TestimonialName>
                      <Stars stars={item.rate} showNumber={false} />
                    </TestimonialInfo>
                    <TestimonialBody>Ferraz de Vasconcelos</TestimonialBody>
                  </TestimonialItem>
                ))}
              </Swiper>
            </TestimonialArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />

        <BarberModal
          show={showModal}
          setShow={setShowModal}
          user={userInfo}
          service={selectedService}
        />
      </BackButton>
    </Container>
  );
};
