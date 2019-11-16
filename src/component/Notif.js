import { Toast } from 'native-base'

export const NotificationError = (props) => (
    Toast.show({
        text: props.message,
        position: props.position
    })
)
export const NotificationSuccess = (props) => (
    Toast.show({
        text: props.message,
        position: 'bottom',
        type: 'success'
    })
)