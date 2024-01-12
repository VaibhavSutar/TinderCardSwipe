import { View,Button, StyleSheet,Image } from 'react-native'
import React, { useRef } from 'react'
import Swiper from "react-native-deck-swiper"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const data =[
    {Color:"#92CDF3", id:1},
    {Color:"#7FE7B9", id:2},
    {Color:"#FBD688", id:3},
    {Color:"#D38C64", id:4},
    {Color:"#C65B66", id:5},
]

const SwipeCard = () => {
  return (
    <View style={styles.container}>
        <Swiper
            cards={data}
            renderCard={
                (cards) => {
                return (
                    <View style={[styles.card,{backgroundColor: cards.Color}]}>
                    </View>
                )
            }
        }
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            cardIndex={0}
            overlayLabels={
                {left: {
                    element: <Image style={{height: hp("10"), width: wp("23"), resizeMode:"contain",}} source={require("../assets/cancel.png")} />,
                    style: {
                      label: {
                        backgroundColor: 'black',
                        borderColor: 'black',
                        color: 'white',
                      },
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginTop: hp("1"),
                        // marginLeft: hp("2"),
                        padding: 3
                      }
                    }
                  },
                  right: {
                    element: <Image style={{height: hp("10"), width: wp("23"), resizeMode:"contain",}} source={require("../assets/right.png")} />,
                    style: {
                      label: {
                        backgroundColor: 'black',
                        borderColor: 'black',
                        color: 'white',
                        borderWidth: 1
                      },
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        marginTop: 2,
                        marginLeft: 0
                      }
                    }
                  },
                }
            }
            stackSeparation={22}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}
            cardStyle={styles.cardStyle}
            infinite
            >
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
        </Swiper>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F5FCFF",
      marginTop: hp("10"),
      alignItems: "center",
    },
    card: {
      flex: 1,
      borderRadius: 10,
    },
    cardStyle:
    {
        width: wp("90"),
        height: hp("60"),
    }
  });
export default SwipeCard