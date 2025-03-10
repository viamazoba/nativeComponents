import { StyleProp, View, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>
}

export const Separator = ({
    style,
}: Props) => {

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
