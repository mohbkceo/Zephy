import React, { Component } from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section
        id = 'model-s'
        title= "Model-S"
        description= <a href='#'>Veie invetory</a>
        Leftbutton= "Custtom Order"
        Rightbutton= "Exixting Inventory"
        backgroundImage = 'model-s.jpg'
        />
    </Container>
  )
}

export default Home


const Container = styled.div`
height: 100vh;
`
