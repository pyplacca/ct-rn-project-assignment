import React from 'react';
import { View, StyleSheet } from 'react-native';
import { variables } from '../../utils';
import { TextButton } from '../buttons'


function ProductSizes ({list, onSizePress, selected, style}) {
	return (
		<View style={[styles.container, style]}>
			{
				list.map((size, i) => {
					const {primary, white, black} = colors,
					[bg, fg] = size === selected ? [primary, white] : [white, black]

					return (
						<TextButton
							key={i}
							onPress={() => onSizePress(size)}
							text={size}
							btnStyle={[
								styles.btn,
								!i ? styles.first : {},
								i === list.length-1 ? styles.last : {},
								{ backgroundColor: bg }
							]}
							textStyle={[ { color: fg }, styles.text ]}
						/>
					)
				})
			}
		</View>
	)
};

const { colors, dpi } = variables,
btnSize = dpi.m + dpi.xs * 2

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	btn: {
		borderRadius: dpi.xs,
		marginHorizontal: dpi.xs + 3,
		width: btnSize,
		height: btnSize,
		alignItems: 'center',
		justifyContent: 'center'
	},

	first: {
		marginLeft: 0
	},

	last: {
		marginRight: 0
	},

	text: {
		textTransform: 'uppercase',
		fontSize: dpi.s - 3,
		fontWeight: '500',
	},
};

export default ProductSizes;
