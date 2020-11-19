import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


function Button ({text, onPress, btnStyle, textStyle}) {
	return (
		<TouchableOpacity onPress={onPress} style={btnStyle}>
		    <Text style={textStyle}>{text}</Text>
	  	</TouchableOpacity>
	)
}

export default Button;
