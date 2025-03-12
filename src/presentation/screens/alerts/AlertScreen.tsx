import { Alert, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import { showPrompt } from '../../../config/adapters/prompt.adapter';


export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                cancelable: true,
                onDismiss: () => {
                    console.log('On dismiss');
                },
            }
        );

    const onShowPrompt = () => {

        showPrompt({
            title: 'Este es el texto del prompt',
            message: 'Mensaje del propmt',
            buttons: [{
                text: 'Ok',
                style: 'default',
                onPress: () => console.log('Ok!'),
            }],
        });

        // Este es el código nativo
        /* Alert.prompt(
            '¿Cuál es tu correo electrónico?',
            'Lorem ipsum',
            (valor: string) => console.log({ valor }),
            'secure-text',
            'Soy el valor por defecto',
            'number-pad'
        ); */
    };

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title text="Alertas" safe />

            <Button
                text="Alerta - 2 Botones"
                onPress={createTwoButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Alerta - 3 Botones"
                onPress={createThreeButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text="Prompt - Input"
                onPress={onShowPrompt}
            />
        </CustomView>
    );
};
