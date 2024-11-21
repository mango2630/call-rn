import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function GroupCall(): React.JSX.Element {
  const [calleeID, setCalleeID] = useState('');
  const groupCall = () => {
    const userIDList = calleeID.split(',');
    // TUICallKit.groupCall()
    console.log('groupCall', calleeID, userIDList);
  }
  return (
    <View style={{ padding: 10 }}>
      <View style={{
        flexDirection: "row",
        width: '100%',
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <Text
          style={{
            borderRadius: 5,
            lineHeight: 55,
            height: '100%',
            backgroundColor: '#fff',
          }}
        > userID </Text>
        <TextInput
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: 5,
          }}
          placeholder="输入群通话 userID, eg: user1,user2(逗号分割)"
          value={calleeID}
          onChangeText={setCalleeID}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 46,
          borderRadius: 5,
          backgroundColor: '#0c59f2',
          justifyContent: 'center',
          marginTop: 20,
        }}
        onPress={groupCall}
      >
        <Text style={{
          color: '#fff',
          fontWeight: 600,
          fontSize: 16,
          textAlign: 'center'
        }}> 发起群通话 </Text>
      </TouchableOpacity>
    </View>
  )
}