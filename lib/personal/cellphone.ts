/**
 * Checks if value is a valid cellphone number.
 * @param value
 * @param options
 * @param options.expectMask
 * @param options.locale
 * @param options.startsWithPlus
 * @param options.validateAreaCodes
 * @param options.onlyNumbers
 * @param options.specificLength
 *
 * @returns boolean
 * @example
 *
 * ```ts
 * is.cellphone("5511999999999", { locale: "pt-BR" }) //=> true
 * is.cellphone("5511999999999", { locale: "en-US" }) //=> false
 * ```
 */

interface Options {
  expectMask?: boolean;
  locale:
    | string
    | "am-AM"
    | "ar-AE"
    | "ar-BH"
    | "ar-DZ"
    | "ar-LB"
    | "ar-EG"
    | "ar-IQ"
    | "ar-JO"
    | "ar-KW"
    | "ar-LY"
    | "ar-MA"
    | "ar-OM"
    | "ar-PS"
    | "ar-SA"
    | "ar-SD"
    | "ar-SY"
    | "ar-TN"
    | "az-AZ"
    | "bs-BA"
    | "be-BY"
    | "bg-BG"
    | "bn-BD"
    | "ca-AD"
    | "cs-CZ"
    | "da-DK"
    | "de-DE"
    | "de-AT"
    | "de-CH"
    | "de-LU"
    | "dv-MV"
    | "el-GR"
    | "el-CY"
    | "en-AI"
    | "en-AU"
    | "en-AG"
    | "en-BM"
    | "en-BS"
    | "en-GB"
    | "en-GG"
    | "en-GH"
    | "en-GY"
    | "en-HK"
    | "en-MO"
    | "en-IE"
    | "en-IN"
    | "en-JM"
    | "en-KE"
    | "fr-CF"
    | "en-SS"
    | "en-KI"
    | "en-KN"
    | "en-LS"
    | "en-MT"
    | "en-MU"
    | "en-MW"
    | "en-NA"
    | "en-NG"
    | "en-NZ"
    | "en-PG"
    | "en-PK"
    | "en-PH"
    | "en-RW"
    | "en-SG"
    | "en-SL"
    | "en-TZ"
    | "en-UG"
    | "en-US"
    | "en-ZA"
    | "en-ZM"
    | "en-ZW"
    | "en-BW"
    | "es-AR"
    | "es-BO"
    | "es-CO"
    | "es-CL"
    | "es-CR"
    | "es-CU"
    | "es-DO"
    | "es-HN"
    | "es-EC"
    | "es-ES"
    | "es-GT"
    | "es-PE"
    | "es-MX"
    | "es-NI"
    | "es-PA"
    | "es-PY"
    | "es-SV"
    | "es-UY"
    | "es-VE"
    | "et-EE"
    | "fa-IR"
    | "fi-FI"
    | "fj-FJ"
    | "fo-FO"
    | "fr-BF"
    | "fr-BJ"
    | "fr-CD"
    | "fr-CM"
    | "fr-FR"
    | "fr-GF"
    | "fr-GP"
    | "fr-MQ"
    | "fr-PF"
    | "fr-RE"
    | "fr-WF"
    | "he-IL"
    | "hu-HU"
    | "id-ID"
    | "ir-IR"
    | "it-IT"
    | "it-SM"
    | "ja-JP"
    | "ka-GE"
    | "kk-KZ"
    | "kl-GL"
    | "ko-KR"
    | "ky-KG"
    | "lt-LT"
    | "lv-LV"
    | "mg-MG"
    | "mn-MN"
    | "my-MM"
    | "ms-MY"
    | "mz-MZ"
    | "nb-NO"
    | "ne-NP"
    | "nl-BE"
    | "nl-NL"
    | "nl-AW"
    | "nn-NO"
    | "pl-PL"
    | "pt-BR"
    | "pt-PT"
    | "pt-AO"
    | "ro-MD"
    | "ro-RO"
    | "ru-RU"
    | "si-LK"
    | "sl-SI"
    | "sk-SK"
    | "so-SO"
    | "sq-AL"
    | "sr-RS"
    | "sv-SE"
    | "tg-TJ"
    | "th-TH"
    | "tr-TR"
    | "tk-TM"
    | "uk-UA"
    | "uz-UZ"
    | "vi-VN"
    | "zh-CN"
    | "zh-TW"
    | "dz-BT"
    | "ar-YE"
    | "ar-EH"
    | "fa-AF"
    | "en-CA"
    | "fr-CA"
    | "fr-BE"
    | "zh-HK"
    | "zh-MO"
    | "ga-IE"
    | "fr-CH"
    | "it-CH"
    | null;
  startsWithPlus?: boolean;
  validateAreaCodes?: boolean;
  onlyNumbers?: boolean;
  specificLength?: number | null;
}

export default function cellphone(value: unknown, options: Options = {
  expectMask: false,
  locale: null,
  startsWithPlus: false,
  validateAreaCodes: false,
  onlyNumbers: false,
  specificLength: null,
}): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  if (options?.startsWithPlus && !value.startsWith("+")) {
    return false;
  }

  if (Array.isArray(options?.locale)) {
    return options?.locale.some((key) => {
      if (Object.prototype.hasOwnProperty.call(regexes, key)) {
        const phone = regexes[key];
        if (phone.test(value)) {
          return optionalValidations(value, options);
        }
      }
      return false;
    });
  }

  if (options?.locale && options.locale in regexes) {
    return optionalValidations(value, options) &&
      regexes[options.locale].test(value);
  }

  if (!options?.locale || options?.locale === null) {
    for (const key in regexes) {
      if (Object.prototype.hasOwnProperty.call(regexes, key)) {
        const phone = regexes[key];
        if (phone.test(value)) {
          return optionalValidations(value, options);
        }
      }
    }
    return false;
  }

  return false;
}

const optionalValidations = (cellphone: string, options: Options) => {
  if (options?.validateAreaCodes) {
    switch (options.locale) {
      case "pt-BR":
        {
          cellphone = cellphone.toString().trim().replace(/\D/g, "");
          const areaCode = cellphone[0] + cellphone[1];
          const noAreaCodeCellphone = cellphone.substring(2);
          const [first, second] = noAreaCodeCellphone;
          const cellphoneLength = noAreaCodeCellphone.length;
          const knownInvalidAreaCodes = [
            10,
            20,
            23,
            25,
            26,
            29,
            30,
            36,
            39,
            40,
            50,
            52,
            56,
            57,
            58,
            59,
            60,
            70,
            72,
            76,
            78,
            80,
            90,
          ];
          if (
            areaCode[0] === "0" || areaCode[1] === "0" ||
            knownInvalidAreaCodes.includes(Number(areaCode))
          ) return false;
          const MOBILE_LENGTH = 9;
          const MOBILE_VALID_FIRST_DIGIT = "9";
          const MOBILE_INVALID_SECOND_DIGIT = "0";
          if (cellphoneLength !== MOBILE_LENGTH) return false;
          if (
            first !== MOBILE_VALID_FIRST_DIGIT ||
            second === MOBILE_INVALID_SECOND_DIGIT
          ) return false;
        }
        break;
    }
  }

  return true;
};

const regexes: Record<string, RegExp> = {
  "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
  "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
  "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
  "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
  "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
  "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
  "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
  "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
  "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
  "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
  "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
  "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
  "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
  "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
  "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
  "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
  "ar-TN": /^(\+?216)?[2459]\d{7}$/,
  "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
  "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
  "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
  "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
  "ca-AD": /^(\+376)?[346]\d{5}$/,
  "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
  "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
  "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
  "de-LU": /^(\+352)?((6\d1)\d{6})$/,
  "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
  "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
  "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
  "en-AI":
    /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
  "en-AU": /^(\+?61|0)4\d{8}$/,
  "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
  "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
  "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
  "en-GB": /^(\+?44|0)7[1-9]\d{8}$/,
  "en-GG": /^(\+?44|0)1481\d{6}$/,
  "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
  "en-GY": /^(\+592|0)6\d{6}$/,
  "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
  "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
  "en-JM": /^(\+?876)?\d{7}$/,
  "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
  "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
  "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
  "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
  "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
  "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
  "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  "en-MU": /^(\+?230|0)?\d{8}$/,
  "en-MW":
    /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
  "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
  "en-NG": /^(\+?234|0)?[789]\d{9}$/,
  "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
  "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
  "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
  "en-PH": /^(09|\+639)\d{9}$/,
  "en-RW": /^(\+?250|0)?[7]\d{8}$/,
  "en-SG": /^(\+65)?[3689]\d{7}$/,
  "en-SL": /^(\+?232|0)\d{8}$/,
  "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
  "en-UG": /^(\+?256|0)?[7]\d{8}$/,
  "en-US":
    /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  "en-ZA": /^(\+?27|0)\d{9}$/,
  "en-ZM": /^(\+?26)?09[567]\d{7}$/,
  "en-ZW": /^(\+263)[0-9]{9}$/,
  "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
  "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
  "es-BO": /^(\+?591)?(6|7)\d{7}$/,
  "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
  "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  "es-CR": /^(\+506)?[2-8]\d{7}$/,
  "es-CU": /^(\+53|0053)?5\d{7}$/,
  "es-DO": /^(\+?1)?8[024]9\d{7}$/,
  "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
  "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  "es-ES": /^(\+?34)?[6|7]\d{8}$/,
  "es-GT": /^(\+?502)?[2|6|7]\d{7}$/,
  "es-PE": /^(\+?51)?9\d{8}$/,
  "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
  "es-NI": /^(\+?505)\d{7,8}$/,
  "es-PA": /^(\+?507)\d{7,8}$/,
  "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
  "es-SV": /^(\+?503)?[67]\d{7}$/,
  "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
  "es-VE": /^(\+?58)?(2|4)\d{9}$/,
  "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
  "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "fr-BF": /^(\+226|0)[67]\d{7}$/,
  "fr-BJ": /^(\+229)\d{8}$/,
  "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
  "fr-CM": /^(\+?237)6[0-9]{8}$/,
  "fr-FR": /^(\+?33|0)[67]\d{8}$/,
  "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
  "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
  "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
  "fr-PF": /^(\+?689)?8[789]\d{6}$/,
  "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
  "fr-WF": /^(\+681)?\d{6}$/,
  "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
  "id-ID":
    /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  "ir-IR": /^(\+98|0)?9\d{9}$/,
  "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
  "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
  "kk-KZ": /^(\+?7|8)?7\d{9}$/,
  "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
  "lt-LT": /^(\+370|8)\d{8}$/,
  "lv-LV": /^(\+?371)2\d{7}$/,
  "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
  "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
  "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
  "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
  "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
  "nb-NO": /^(\+?47)?[49]\d{7}$/,
  "ne-NP": /^(\+?977)?9[78]\d{8}$/,
  "nl-BE": /^(\+?32|0)4\d{8}$/,
  "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
  "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
  "nn-NO": /^(\+?47)?[49]\d{7}$/,
  "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
  "pt-BR":
    /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
  "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
  "pt-AO": /^(\+244)\d{9}$/,
  "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
  "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
  "ru-RU": /^(\+?7|8)?9\d{9}$/,
  "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
  "sl-SI":
    /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
  "sq-AL": /^(\+355|0)6[789]\d{6}$/,
  "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
  "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
  "th-TH": /^(\+66|66|0)\d{9}$/,
  "tr-TR": /^(\+?90|0)?5\d{9}$/,
  "tk-TM": /^(\+993|993|8)\d{8}$/,
  "uk-UA": /^(\+?38)?0(50|6[36-8]|7[357]|9[1-9])\d{7}$/,
  "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
  "vi-VN":
    /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
  "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
  "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
  "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
  "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
  "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
  "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/,
  "en-CA":
    /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  "fr-CA":
    /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  "fr-BE": /^(\+?32|0)4\d{8}$/,
  "zh-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  "zh-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  "ga-IE": /^(\+?353|0)8[356789]\d{7}$/,
  "fr-CH": /^(\+41|0)([1-9])\d{1,9}$/,
  "it-CH": /^(\+41|0)([1-9])\d{1,9}$/,
};

// The node.js version was originally found here:
// Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
// Licensed under the MIT License. See the full license at:
// https://github.com/validatorjs/validator.js/blob/master/LICENSE
