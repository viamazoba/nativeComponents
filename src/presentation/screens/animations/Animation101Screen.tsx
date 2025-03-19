import { Animated, Easing, StyleSheet } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';



export const Animation101Screen = () => {

    const { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop } = useAnimation();
    const { colors } = useContext(ThemeContext);

    return (
        <CustomView style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    backgroundColor: colors.primary,
                    opacity: animatedOpacity,
                    transform: [{ translateY: animatedTop }],
                }}
            />

            <Button
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -280,
                        easing: Easing.bounce,
                        duration: 700,
                    });
                }}
                styles={{ marginTop: 10 }}
                text="FadeIn"
            />


            <Button
                onPress={() => fadeOut({})}
                styles={{ marginTop: 10 }}
                text="FadeOut"
            />

        </CustomView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
    },
});
