import { RefreshControl, ScrollView } from 'react-native';
import { Title } from '../../components/ui/Title';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';


export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();
    const { colors } = useContext(ThemeContext);

    const onRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    };


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    progressBackgroundColor={colors.cardBackground}
                    tintColor={colors.primary} // Para IOS
                    onRefresh={onRefresh}
                />
            }
            style={[
                globalStyles.mainContainer,
                globalStyles.globalMargin, { backgroundColor: colors.background }]}
        >

            <Title
                text="Pull to refresh"
            />

        </ScrollView>
    );
};
