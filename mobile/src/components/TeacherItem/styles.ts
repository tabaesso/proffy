import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#EEE',
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#26304D',
        fontSize: 20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#617380',
        fontSize: 12,
        marginTop: 4,
    },

    bio:{
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 27,
        color: '#617380'
    },

    footer: {
        backgroundColor: '#FAFAFC',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#617380',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#57AFE5',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#57AFE5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    favorited: {
        backgroundColor: '#E3333D'
    },

    contactButton: {
        backgroundColor: '#66C7CC',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    }
});

export default styles;