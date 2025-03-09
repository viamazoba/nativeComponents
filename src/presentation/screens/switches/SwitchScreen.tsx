import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';


export const SwitchScreen = () => {

    return (
        <CustomView style={{ marginTop: 50, paddingHorizontal: 10 }}>
            <Card>
                {/* <Text>SwitchScreen</Text> */}
                <Button
                    text="Click me!"
                    onPress={() => { }}
                />
            </Card>
        </CustomView>
    );
};
