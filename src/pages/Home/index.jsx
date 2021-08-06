import React, { useState } from 'react'; //8.3k (gzipped: 3.3k)
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    SlidesToScroll: 4,
    adaptiveHeight: true,
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <center><Logo src={logo} alt="Logo do restaurante" /></center>
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
            <Card photo={restaurante} title="Nome sei la" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>

  )
};

export default Home;
