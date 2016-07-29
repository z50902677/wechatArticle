/**
 * Created by 123 on 2016/7/25.
 */

import React, { Component } from 'react';
import {View, Text,TextInput,ListView ,StyleSheet,Picker,TouchableHighlight} from "react-native";
import DataPickerDemo from './CustomButton'
import Button from "react-native-button";

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding: 5,
        height:40
    },
    textTitle:{
        width:70,
        height:40,
        margin:10,
        fontSize: 15,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    inputText:{
        flex:1,
        width:240,
        height:40,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    button: {
        padding: 1,
        height:30,
        width:240,
        alignSelf: 'center',
        borderBottomColor:'#FFFFFF',
        borderBottomWidth:1
    }
});
class MessInfo extends React.Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state={language:""};
    }
    render(){
        return (
            <View style={{backgroundColor: '#2B3745',flex: 1}}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章名称:</Text>
                    </View>
                    <View style={{borderBottomColor:'#FFFFFF',borderBottomWidth:1}}>
                           <TextInput placeholder="请输入文章名称" placeholderTextColor ='#E0E0E0' underlineColorAndroid='transparent'  style={styles.inputText}></TextInput>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章链接:</Text>
                    </View>
                    <View style={{borderBottomColor:'#FFFFFF',borderBottomWidth:1}}>

                            <TextInput placeholder="请输入文章链接" placeholderTextColor ='#E0E0E0' underlineColorAndroid='transparent' style={styles.inputText}></TextInput>

                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章类型:</Text>
                    </View>
                    <View style={{borderBottomColor:'#FFFFFF',borderBottomWidth:1}}>
                        <Picker
                            mode={'dropdown'}
                            prompt="请选择文章类型"
                            style={styles.inputText} placeholderTextColor ='#E0E0E0' underlineColorAndroid='transparent'
                            selectedValue={this.state.language}
                            onValueChange={(lang) =>this.setState({language: lang})}>
                            <Picker.Item label="测试" value="test" />
                            <Picker.Item label="开发" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章作者:</Text>
                    </View>
                    <View style={{borderBottomColor:'#FFFFFF',borderBottomWidth:1}}>
                        <TextInput placeholder="请输入文章作者" placeholderTextColor ='#E0E0E0' underlineColorAndroid='transparent' style={styles.inputText}></TextInput>

                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>发表时间:</Text>
                    </View>
                    <View style={{borderBottomColor:'#FFFFFF',borderBottomWidth:1}}>
                        <DataPickerDemo underlineColorAndroid='transparent'/>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>图片文章:</Text>
                    </View>
                    <View>

                    </View>
                </View>

            </View>
        )
    }

}

export default MessInfo;
