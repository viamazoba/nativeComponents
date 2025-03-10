import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { CustomSwitch } from '../../components/ui/CustomSwitch';


export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    return (
        <CustomView style={{ marginTop: 50, paddingHorizontal: 10 }}>
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => setState({ ...state, isActive: value })}
                    text="¿Está activo?"
                />

                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={(value) => setState({ ...state, isHungry: value })}
                    text="¿Tiene hambre?"
                />

                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={(value) => setState({ ...state, isHappy: value })}
                    text="¿Es feliz?"
                />
            </Card>
        </CustomView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
