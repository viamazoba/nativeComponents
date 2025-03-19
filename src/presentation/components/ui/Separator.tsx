import { StyleProp, View, ViewStyle } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>
}

export const Separator = ({
    style,
}: Props) => {

    const { colors } = useContext(ThemeContext);

    return (
        <View style={[
            {
                backgroundColor: colors.cardBackground,
            },
        ]}>
            <View
                style={[
                    {
                        backgroundColor: colors.background,
                        height: 2,
                        marginVertical: 5,
                    },
                    style,
                ]}
            />
        </View>
    );
};
