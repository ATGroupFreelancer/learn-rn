import {FlatList, View} from "react-native";
import styles from "../utils/styles";
import React from "react";
import HeaderFull from "../components/HeaderFull";
import Search from "../components/Search";
import ListItemHorizontal from "../components/ListItemHorizontal";
import LabelItem from "../components/LabelItem";
import {StatusBar} from "expo-status-bar";

const CommunityScreen = ({navigation}) => {
    const data = [
        {
            id: '1',
            type: 'header',
            data: {name: 'Olivia Blue', age: 30, avatar: require('../assets/avatar4blue.png'), other: '...'}
        },
        {
            id: '2', type: 'search', data: {
                placeholder: 'Search people, stocks & crypto',
            }
        },
        {
            id: '3', type: 'categories', data: [
                {id: 1, title: 'Top 10 stocks'},
                {id: 2, title: 'Crypto currencies'},
                {id: 3, title: 'Retail'},
                {id: 4, title: 'Technology'},
                {id: 5, title: 'Healthcare'},
                {id: 6, title: 'Foods & beverages'},
            ]
        },
        {
            id: '4', type: 'assert', data: [
                {
                    id: 1,
                    title: 'Twitch',
                    content: '+12.17%',
                    image: require('../assets/logoTwitch.png'),
                    width: 70,
                },
                {
                    id: 2,
                    title: 'Paypal',
                    content: '+14.06',
                    image: require('../assets/logoPaypal.png'),
                    width: 70,
                },
                {
                    id: 3,
                    title: 'Google',
                    content: '+21.65',
                    image: require('../assets/logoGoogle.png'),
                    width: 70,
                },
                {
                    id: 4,
                    title: 'Amazon',
                    content: '+23.25',
                    image: require('../assets/logoAmazon.png'),
                    width: 70,
                },
                {
                    id: 5,
                    title: 'Amazon',
                    content: '+23.25',
                    image: require('../assets/logoAmazon.png'),
                    width: 70,
                },
                {
                    id: 6,
                    title: 'Amazon',
                    content: '+23.25',
                    image: require('../assets/logoAmazon.png'),
                    width: 70,
                },
                {
                    id: 7,
                    title: 'Amazon',
                    content: '+23.25',
                    image: require('../assets/logoAmazon.png'),
                    width: 70,
                },
                {
                    id: 8,
                    title: 'Amazon',
                    content: '+23.25',
                    image: require('../assets/logoAmazon.png'),
                    width: 70,
                },
            ]
        },
        {
            id: '5', type: 'news', data: [
                {
                    id: 1,
                    title: 'NDIA share price down 8% in a week',
                    content: 'The Nufarm Limited (ASX: NUF) share price has had a tough time over the last week. Since last Monday, the...',
                    width: 120
                },
                {
                    id: 2,
                    title: '"The fraud was executed using the names of the company\'s employees"',
                    content: 'This is a text content,This is a text content, This is a text content,',
                    width: 120
                },
                {
                    id: 3,
                    title: 'Tin tức 3',
                    content: 'This is a text content,This is a text content, This is a text content,',
                    width: 120
                },
                {
                    id: 4,
                    title: 'Tin tức 4',
                    content: 'This is a text content,This is a text content, This is a text content,',
                    width: 120
                },
            ]
        },
        {
            id: '6', type: 'podcast', data: [
                {id: 1, title: 'Podcast 1'},
                {id: 2, title: 'Podcast 2'},
                {id: 3, title: 'Podcast 3'},
                {id: 4, title: 'Podcast 4'},
            ]
        },
        {id: '7', type: 'highlight', data: {title: 'Tin tức nổi bật'}},
        {
            id: '8', type: 'suggestedAccounts', data: [
                {id: 1, username: 'user1'},
                {id: 2, username: 'user2'},
                {id: 3, username: 'user3'},
                {id: 4, username: 'user4'},
            ]
        },
        {
            id: '9', type: 'navbar', data: [
                {id: 1, title: 'Trang chủ'},
                {id: 2, title: 'Tin tức'},
                {id: 3, title: 'Podcast'},
                {id: 4, title: 'Tài khoản'},
            ]
        }
    ];

    const renderItem = ({item}) => {
        switch (item.type) {
            case 'header':
                const userInfo = item.data;
                return (
                    <View>
                        <HeaderFull userInfo={userInfo}/>
                    </View>
                )
            case 'search':
                const placeholder = item.data.placeholder;
                const styleSearch = styles.searchHome;
                const searchContainer = styles.searchContainer;
                const sizeButton = 20;
                return (
                    <View>
                        <Search placeholder={placeholder} styleSearch={styleSearch} searchContainer={searchContainer}
                                sizeButton={sizeButton}/>
                    </View>
                )
            case 'assert':
                const data = item.data;
                const listName = 'Most popular assets';
                const flagSeeAll = false;
                return (
                    <View>
                        <ListItemHorizontal widthItem={80} listName={listName} data={data} flagSeeAll={flagSeeAll}
                                            flagNext={false}/>
                    </View>
                )
            case 'categories':
                const catData = item.data;
                const catName = 'Popular categories';
                const catStyle = styles.catList;
                const itemCat = styles.catItem;
                const textCat = styles.catText;
                return (
                    <View>
                        <LabelItem catName={catName} catData={catData} catStyle={catStyle} itemCat={itemCat}
                                   textCat={textCat}/>
                    </View>
                )
            case 'news':
                const newsData = item.data;
                const newsName = 'News';
                const flagSeeAllNew = true;
                return (
                    <View>
                        <ListItemHorizontal navigation={navigation} widthItem={170} listName={newsName} data={newsData}
                                            flagSeeAll={flagSeeAllNew} flagNext={true}/>
                    </View>
                )
        }
    }
    return (
        <>
            <StatusBar style="auto"/>
            <FlatList style={styles.homePageFullContainer}
                      data={data}
                      keyExtractor={(item) => item.id}
                      renderItem={renderItem}
            />
        </>
    );
}

export default CommunityScreen;
