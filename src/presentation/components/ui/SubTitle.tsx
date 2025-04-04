import { Text } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text?: string;
    safe?: boolean;
    background: string;
}


export const SubTitle = ({
    text,
    safe = false,
    background,
}: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={{
                ...globalStyles.subTitle,
                marginTop: safe ? top : 0,
                marginBottom: 10,
                backgroundColor: background,
            }}
        >
            {text}
        </Text>
    );
};
