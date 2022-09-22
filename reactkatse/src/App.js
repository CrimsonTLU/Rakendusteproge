import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Arvutaja from './components/Arvutaja';

import './App.css';

/*
  Peab olema parent element returnis,
  kas <div>, <React.Fragment> või shorthand versioon <>
  React Fragment ja <> on soovitatav parentid
*/

const App = () => {
  // const [show, setShow] = React.useState(true)

  const [show, setShow] = useState(true)

  const [tulemus, arvutaTulemus] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '25px',
        height: '100vh'
      }}
    >
      {/* Siin puudub nimi, ehk tuleb defaultPropsist */}
      <PropExample/>
      <PropExample name='Chris'/>
      <PropExample2 name={'Chris'}/>
      <PropExample3 name="Chris"/>
      <PropExample4 name={"Chris"}/>

      <Arvutaja />

      <Button 
        variant="contained" 
        color="success"
        onClick={() => setShow(!show)}
      >
        Toggle popup { JSON.stringify(show) }
      </Button>

      <MimicPopup 
        show={show} 
        setShow={setShow}
      />
      
      <MimicPopup2 show={show}/>
    </Box>
  )
}

// Ternary operator, kui kuvasime ainult tüpograafiat

// const MimicPopup = ({ show, setShow }) => {
//   return (
//     <>
//       <Typography>
//         { show ? 'Showing' : 'Hidden' }
//       </Typography>
//     </>
//   )
// }

const MimicPopup = ({ show, setShow }) => {
  return (
    <>
      { show &&
        <>
          <Typography>
            Showing popup
          </Typography>
          <Button 
            variant="contained" 
            color="success"
            onClick={() => setShow(false)}
          >
            Hide popup
          </Button>
        </>
      }
    </>
  )
}

// Pikem versioon lahti kirjutatuna

const MimicPopup2 = ({ show }) => {
  if (show === true){
    return <h1>Showing</h1>
  } else {
    return <h1>Hidden</h1>
  }
}

export default App;

// Esimene võimalus
const PropExample = (props) => <h1>Hello {props.name}</h1>

PropExample.defaultProps = {
  name: 'John Doe'
}

// Teine võimalus
const PropExample2 = (props) => {
  const { name } = props

  return <h1>Hello {name}</h1>
}

/*
  Kolmas võimalus kohe parameetrites deconstruct
  Tõenäoliselt hakkate kasutama seda kõige tihemini
*/

const PropExample3 = ({ name }) => <h1>Hello {name}</h1>

// Teine võimalus defaultPropsiks 
const PropExample4 = ({ name = 'John Doe' }) => <h1>Hello {name}</h1>

const Summa = ({ summa }) => <h1>Summa on {summa}</h1>

// PropTypes järgmine tund lisada