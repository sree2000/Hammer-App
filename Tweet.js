import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,

    TouchableHighlight,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

// import randomWords from 'random-words'


const userImage = { uri: 'https://pbs.twimg.com/profile_images/951903664809050114/Grfd40ih_400x400.jpg' }
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
String.prototype.capitalizeFirstLetter = function () {
    return `${this.substr(0, 1).toUpperCase()}${this.substr(1)}`;
}
export default class Tweet extends React.Component {

    constructor(props) {
        super(props)
        const { tweet, name, handle, time, liked, picture, twit } = this.props
  //   const twit = "Yesterday’s Federal court ruling is deeply disappointing. While the court’s order does not now affect current DACA recipients, this decision nonetheless relegates hundreds of thousands of young immigrants to an uncertain future. It is my fervent hope that Congress will act."//randomWords({ min: 18, max: 40 }).join(" ");
        this.state = {
          //  photo: { uri: picture.thumbnail },
            touched: false,
            tweet: twit,
            retweets: Math.floor((Math.random() * 100) + 1),
            likes: Math.floor((Math.random() * 10) + 1),
            name: `${name.first.capitalizeFirstLetter()} ${name.last.capitalizeFirstLetter()}`,
            handle: `@${handle}`,
            time: "1hr",
            liked: [true, false].random(),
        }

    }


    render() {

        const {thekey, isReply } = this.props
        const { touched, tweet, retweets, likes, name, handle, time, retweetedBy, retweeted, liked, photo } = this.state


        return (
            <View style = {styles.wrapper}>
                <View key={thekey} style={styles.container}>
                    <View style={styles.innerContainer}>

                        <View style={styles.photoContainer}>
                            <View style={styles.innerPhotoContainer}>
                                <TouchableOpacity>
                                    <Image
                                        source={photo}
                                        style={styles.photo} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.info}>

                            <View style={styles.userDetails}>
                                <Text style={styles.userName}>{name}
                                    <Text style={styles.userHandleAndTime}>{handle} · {time}</Text>
                                </Text>
                            </View>
                            <View style={styles.tweetTextContainer}>
                                <Text style={styles.tweetText}>{tweet}</Text>

                            </View>
                            <View style={styles.tweetActionsContainer}>
                                <TouchableOpacity style={styles.commentButton}>
                                    <EvilIcons name={'comment'} style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                                    <Text style={styles.commentsCount}>20</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.retweetButton}>
                                    <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)" : 'rgb(136, 153, 166)'} />
                                    <Text style={[styles.retweetButtonIcon, { color: retweeted ? "rgb(23, 191, 99)" : "rgb(136, 153, 166)", fontWeight: retweeted ? "bold" : "300", }]}>{retweets}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.likeButton}>

                                    <EvilIcons name={'heart'} size={25} color={ 'rgb(136, 153, 166)'} />

                                    <Text style={[styles.likeButtonIcon, { color: "rgb(136, 153, 166)", fontWeight:  "300", }]}>{likes}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.shareButton}>

                                    <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'} />

                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    wrapper: {
        flex: 0.2,
    },
    container: {
        //flex: 0.6,
        justifyContent: 'flex-start',

        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        // borderColor: "purple",
        // borderWidth: 0,
        flexDirection: "column",
        backgroundColor: "#1b2836"
    },
    isReplyContainer: {
        flex: 1,
        borderColor: "green",
        flexDirection: "row",
        borderWidth: 0,
        height: 20,
        marginTop: 5
    },
    innerContainer: {
        // flex: 1,
        justifyContent: 'flex-start',
        borderColor: "green",
        flexDirection: "row",
        borderWidth: 0,
        height: "auto"
    },
    photoContainer: {
        flex: 0.23,
        borderColor: "yellow",
        flexDirection: "column",
        borderWidth: 0
    },
    innerPhotoContainer: { height: 100, alignItems: "center" },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 15
    },
    info: {
        flex: 1,
        borderColor: "yellow",
        flexDirection: "column",
        borderWidth: 0
    },
    userDetails: {
        marginTop: 10,
       // flex: 0.15,
        borderColor: "green",
        borderWidth: 0,
        marginBottom: 5,
        paddingBottom: 5
    },
    userName: { color: "white", fontWeight: "bold" },
    userHandleAndTime: {
        color: "rgb(136, 153, 166)",
        marginLeft: 10,
    },
    tweetTextContainer: { //flex: 0.3,
         borderColor: "red", borderWidth: 0 },
    tweetText: { color: "white", paddingRight: 10 },
    tweetActionsContainer: {
     //  flex: 0.15,
        borderColor: "blue",
        borderWidth: 0,
        marginTop: 5,
        flexDirection: "row",
        paddingBottom: 1
    },
    commentButton: {
        paddingLeft: 0,
        flex: 0.25,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 0
    },
    commentButtonIcon: {
        margin: 0,
        marginLeft: -4,
        borderColor: "red",
        borderWidth: 0
    },
    commentsCount: {
        position: "absolute",
        left: 27,
        color: "rgb(136, 153, 166)",
        marginLeft: -4
    },
    retweetButton: {
        padding: 5,
        flex: 0.25,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 0
    },
    retweetButtonIcon: {
        position: "absolute",
        left: 27,

        marginLeft: 3
    },
    likeButton: {
        padding: 5,
        flex: 0.25,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 0
    },
    likeButtonIcon: {
        position: "absolute",
        left: 27,

        marginLeft: 3
    },
    shareButton: {
        padding: 5,
        flex: 0.25,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 0
    }
});

// Tweet.propTypes = {
//     retweeted: PropTypes.string.isRequired
// };
Tweet.defaultProps = {
    name: "Anonymous",
    tweet: "A tweet",
    retweeted: false,
    liked: false
};