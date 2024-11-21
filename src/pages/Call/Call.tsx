import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Call({ route }): React.JSX.Element {
  const [calleeID, setCalleeID] = useState('');
  const { callType } = route.params;
  console.log('call', callType);
  
  const call = () => {
    // TUICallKit.call()
    console.log('call', calleeID);
  }
  return (
    <View style={{
      padding: 10,
    }}>
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
          placeholder="输入要呼叫的用户 userID"
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
        onPress={call}
      >
        <Text style={{
          color: '#fff',
          fontWeight: 600,
          fontSize: 16,
          textAlign: 'center'
        }}> 发起通话 </Text>
      </TouchableOpacity>
    </View>
  )
}