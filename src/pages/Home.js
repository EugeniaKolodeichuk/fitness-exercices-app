import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises.tsx';
import SearchExercises from '../components/SearchExercises.tsx';
import HeroBanner from '../components/HeroBanner.tsx';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  //console.log('body part', bodyPart)

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises 
        exercises={exercises} 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      />
    </Box>
  )
}

export default Home