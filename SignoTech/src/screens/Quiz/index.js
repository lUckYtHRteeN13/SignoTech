import { View, Text, Image, BackHandler, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { FOREGROUND_COLOR, images, TEXT_COLOR, MIDDLEGROUND_COLOR } from '../../constants/Constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/Quiz';
import Banner from '../../components/Banner';
import CardComponent from './CardComponent';
import RoundedButton from '../../components/RoundedButton';

const getRandomOptions = (currentImageKey, allImages) => {
  const keys = Object.keys(allImages).filter(key => key !== currentImageKey);
  const randomKeys = shuffleArray(keys).slice(0, 3);
  const options = [allImages[currentImageKey].title, ...randomKeys.map(key => allImages[key].title)];
  return shuffleArray(options);
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function Quiz({navigation, ...props}) {
  /* 
    TODO: [Randomizer(Correct), Randomizer(Index), Randomizer(Incorrect) ]
  */
  const [currentImageKey, setCurrentImageKey] = useState(null);
  const [score, setScore] = useState(0);
  const [imagesKeys, setImagesKeys] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    setImagesKeys(shuffleArray(Object.keys(images)).slice(0,10));
  }, [images]);

  useEffect(() => {
    if (imagesKeys.length > 0) {
      setCurrentImageKey(imagesKeys[0]);
    }
  }, [imagesKeys]);

  useEffect(() => {
    console.log(currentImageKey);
    if (currentImageKey) {
      const options = getRandomOptions(currentImageKey, images);
      console.log(options);

      setCurrentQuestion({
        question: images[currentImageKey].title,
        options: options,
        correctAnswer: images[currentImageKey].title
      });
    }
  }, [currentImageKey]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        setIsPaused((prevPaused) => !prevPaused);
        return true;
      }
    );

    return () => {
      backHandler.remove();
    }
  }, [navigation]);

  const handleOptionSelect = (option) => {
    let timeoutId;
    setSelectedOption(option);
    setIsAnswered(true);
    
    timeoutId = setTimeout(() => {
      if (option == currentQuestion.correctAnswer) {
        setScore(score+10);
      }
      const nextIndex = imagesKeys.indexOf(currentImageKey) + 1;
      
      if (nextIndex < imagesKeys.length) {
        setCurrentImageKey(imagesKeys[nextIndex]);
        setIndex(nextIndex);

      } else {
        setIsComplete(true);
      }

      setSelectedOption('');
      setIsAnswered(false);
    }, 1500);
  
  };

  const handleResetQuiz = () => {
    setIsComplete(false);
    setIsPaused(false);
    setImagesKeys(shuffleArray(Object.keys(images)).slice(0,10));
    setCurrentImageKey(imagesKeys[0]);
    setScore(0);
    setIndex(0);
    setSelectedOption('');
    setIsAnswered(false);
  }

  const PauseComponent = () => {
    return(
      <View style={styles.pause}>
        <View style={styles.pause_content}>
          <Text style={styles.heading}>QUIZ PAUSED</Text>
          <Text style={styles.text} onPress={() => setIsPaused(!isPaused)}>Resume</Text>
          <Text style={styles.text} onPress={() => handleResetQuiz()}>Restart</Text>
          <Text style={styles.text} onPress={() => navigation.navigate('Home')}>Exit</Text>
        </View>
      </View>
    )
  }

  const ScoreComponent = () => {
    return(
      <View style={styles.pause}>
        <View style={styles.pause_content}>
          {
            score >= 80 ? (
              <Text style={[styles.heading, {fontSize: 32, paddingBottom:0, color:'rgb(0, 200, 50)'}]}>CONGRATS!</Text>
            ) : ( 
              score >= 50 ? (
                <Text style={[styles.heading, {fontSize: 32, paddingBottom:0, color:'rgb(230, 200, 0)'}]}>NICE TRY!</Text>
              ) : (
                <Text style={[styles.heading, {fontSize: 32, paddingBottom:0, color:'rgb(180, 0, 0)'}]}>TRY AGAIN!</Text>                
              ) 
            ) 
          }
          <Text style={[styles.heading, {fontSize: 24, alignSelf:'center', color:TEXT_COLOR}]}>Score: {score}</Text>
          <Text style={styles.text} onPress={() => {handleResetQuiz();} }>Continue</Text>
          <Text style={styles.text} onPress={() => navigation.navigate('Home')}>Exit</Text>

        </View>
      </View>
    )
  }

  const ScoreBoard = () => {
    return (
      <View style={styles.scoreboard}>    
        <View style={styles.info_container}>
          <Text style={styles.label}>
            Question
          </Text>
          <Text style={styles.values}>
            {index + 1} /10
          </Text>
        </View>

        <View style={styles.info_container}>
          <Icon name='pause' size={40} color={"#fff"} onPress={() => setIsPaused(!isPaused)}/>
        </View>

        <View style={styles.info_container}>
          <Text style={styles.label}>
            Score
          </Text>
          <Text style={styles.values}>
            {score}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.page_container}>
      <ScoreBoard />
      <CardComponent signKey={currentImageKey}/>
      <View style={{flex:1, padding:30, marginTop:50}}>
        <FlatList
          data={currentQuestion?.options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
              <RoundedButton text={item} onPress={() => handleOptionSelect(item)} 
              style={[styles.options, 
                isAnswered && item !== currentQuestion.correctAnswer && item === selectedOption && {backgroundColor:'red'},
                isAnswered && item === currentQuestion.correctAnswer && {backgroundColor:'green'},
                ]}
                disabled={isAnswered}
              />
        )}
        />
      </View>
      {isPaused && <PauseComponent/>}
      {isComplete && <ScoreComponent/>}
    </SafeAreaView>
  )
}

export default Quiz