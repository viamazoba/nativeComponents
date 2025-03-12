import prompt from 'react-native-prompt-android';

interface PromptButton {
    text?: string;
    style?: 'cancel' | 'default' | 'destructive' | undefined;
    onPress?: (value: string) => void | undefined;
}

interface Options {
    title: string;
    message?: string;
    buttons?: PromptButton[];
    otherOptions?: {
        type?: 'default' | 'plain-text' | 'secure-text',
        cancelable?: boolean;
        defaultValue?: string,
        placeholder?: string,
    }
}

export const showPrompt = ({
    title,
    message,
    buttons,
    otherOptions,
}: Options) => {

    prompt(
        title,
        message,
        buttons,
        otherOptions
    );
};
