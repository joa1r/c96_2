import PostCard from "./PostCard";
import { FlatList } from "react-native-gesture-handler";
import {View, SafeAreaView, FlatList, StyleSheet} from "react-native"

let posts = require("./temp posts.json");

export default class Feed extends Component {

renderItem = ({ item: post }) => {
return <PostCard post={post} />;
};

keyExtractor = (item, index) => index.tostring();

render() {
return (
<View style={styles.container}>
<SafeAreaView style={styles.droidSafeArea} />
<View style={styles.appTitle}>
<Text style={styles.appTitleText}>Espectagrama</Text>
</View>
<View style={style.cardContainer}>
<FlatList
keyExtractor={this.keyExtractor}
data={posts}
renderItem={this.renderItem}
  />
 </View>
</View>

  );
 };
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundeolor: "darkblue"
},
droidsafearea: {
    marginTop: Platform.os === "android" ? statusBar.currentHeight : 35
},

appTitie: {
    flex: 0.07,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center"
},
appTitleText: {
    color: "white",
    fontsize: 28,

},
    cardContainer: {
    flex: 0.93
    }
});

