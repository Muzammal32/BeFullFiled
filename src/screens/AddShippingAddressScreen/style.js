import { StyleSheet, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { theme, fonts, colors } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        ...theme.SINGLE_FLEX,
        backgroundColor: 'white',
        paddingHorizontal: wp('2%'),
    },
    header: {
        flex: 0.4,
        ...theme.CENTER,
    },
    stepText: {
        color: colors.SILVER,
        fontFamily: fonts.MEDIUM,
        fontSize: FontScale(14),
    },
    headText: {
        fontWeight: 'bold',
        fontSize: FontScale(26),
        fontFamily: fonts.SEMIBOLD,
        marginVertical: hp('2%'),
    },
    subText: {
        color: colors.DOVE_GRAY,
        fontSize: FontScale(24),
    },
    signUpBtn: {
        backgroundColor: 'black',
    },
    signUpBtnText: {
        textAlign: 'center',
        fontFamily: fonts.MEDIUM,
        color: 'white',
        fontSize: FontScale(18),
    },
    input: {
        paddingHorizontal: wp('5%'),
        marginHorizontal: wp('1%'),
        marginTop: hp('1%'),
        height: ScreenScale(50),
        borderColor: '#E9E6E6',
        // height: hp('6%'),
        borderRadius: 25,
        borderWidth: 1,
        fontSize: FontScale(16),
    },
    multiline: {
        paddingHorizontal: wp('5%'),
        marginHorizontal: wp('1%'),
        marginTop: hp('1%'),
        borderColor: '#E9E6E6',
        height: hp('10%'),
        borderRadius: 25,
        borderWidth: 1,
        fontSize: FontScale(16),
    },
    inputContainer: {
        ...theme.ROW,
        ...theme.CENTER,
        paddingHorizontal: wp('5%'),
        marginHorizontal: wp('1%'),
        marginTop: hp('1%'),
        borderColor: '#E9E6E6',
        height: ScreenScale(55),
        borderRadius: 25,
        borderWidth: 1,
        fontSize: FontScale(16),
    },
    streetInput: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginVertical: '4%',
        borderRadius: 30,
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        fontSize: FontScale(16),
    },
    textInput: {
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
    },
    icon: {
        ...theme.ICON_DIMEN,
    },
    singleFlex: {
        ...theme.SINGLE_FLEX,
    },
    textInputText: {
        color: colors.BLACK,
        fontFamily: fonts.REGULAR,
        fontSize: FontScale(16),
    },
    neutralTextInputText: {
        color: colors.NOBEL,
        fontFamily: fonts.LIGHT,
        fontSize: FontScale(16),
    },
    cityText: {
        ...theme.SINGLE_FLEX,
        color: colors.DOVE_GRAY,
    },
    textInputContainer: {
        ...theme.SINGLE_FLEX,
        justifyContent: 'space-evenly',
        paddingHorizontal: wp('5%'),
    },
    keyboardScrollContainer: {
        flexGrow: 1,
        backgroundColor: colors.WHITE
    },
    errorStyle: {
        color: 'red',
        fontFamily: fonts.MEDIUM,
        marginTop: hp('1%'),
        marginStart: wp('5%'),
        fontSize: FontScale(12),
    },
});
