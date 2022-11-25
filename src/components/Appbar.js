import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DisplayAllPokemon from './DisplayAllPokemon';
import { Container } from '@mui/system';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import banner from '../img/banner1.png'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import logo from '../img/logo2.png'

export default function Appbar() {

  var [pokemon, setPokemon] = useState("");
  const [result, setResult] = React.useState("");

  const handleSearch = () => {
    setPokemon(pokemon);
    console.log(pokemon);
  };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="center" style={{ backgroundColor: "#37474F", textAlign: "center" }}>
        <Toolbar style={{ justifyContent: "center" }}>
          <img src={logo} width="14%" ></img>
        </Toolbar>
      </AppBar>

      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage className="d-block w-100" src={banner2} alt="slide 1" width="100%" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={banner} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={banner3} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      <span> &nbsp;</span><br></br>
      <Container max-width="100%" >
        <span > <TextField fullWidth sx={{ m: 1 }} 
          id="outlined-helperText"
          label="Search"
          helperText="Search by Name"
          onChange={(e) => setPokemon(e.target.value)}
          onKeyUp={handleSearch}

          /></span>

      </Container>
      <span> &nbsp;</span><br></br>  <span> &nbsp;</span>

      <DisplayAllPokemon pokemon={pokemon} />
    </Box >
  );
}
