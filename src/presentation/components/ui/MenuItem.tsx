import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import dicIcons from '../../../../node_modules/@react-native-vector-icons/ionicons/glyphmaps/Ionicons.json';
import { useNavigation } from '@react-navigation/native';
import { Separator } from './Separator';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export interface IMenuItem {
    name: string;
    icon: keyof typeof dicIcons;
    component: string;
    isFirst?: boolean;
    isLast?: boolean;
}

export const MenuItem = ({
    name,
    icon,
    component,
    isFirst,
    isLast,
}: IMenuItem) => {

    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation<any>();

    return (
        <>
            <Pressable
                onPress={() => navigation.navigate(component)}
            >
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: colors.cardBackground,
                        ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 10 }),
                        ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),
                    }}
                >
                    <Icon
                        name={icon}
                        size={25}
                        style={{ marginRight: 10 }}
                        color={colors.primary}
                    />
                    <Text style={{ color: colors.text }}>
                        {name}
                    </Text>
                    <Icon
                        name="chevron-forward-circle-outline"
                        size={25}
                        style={{ marginLeft: 'auto' }}
                        color={colors.primary}
                    />
                </View>
            </Pressable>
            {
                !isLast && <Separator />
            }
        </>
    );

};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});
