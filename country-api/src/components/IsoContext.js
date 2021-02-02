import React, { createContext, useState } from 'react';


export const IsoContext = createContext()


export const IsoProvider = (props) => {

    const [iso3To2, setIso3to2] = useState(
        {
            "iso3": "iso2",
            "AFG": "AF",
            "ALA": "AX",
            "ALB": "AL",
            "DZA": "DZ",
            "ASM": "AS",
            "AND": "AD",
            "AGO": "AO",
            "AIA": "AI",
            "ATA": "AQ",
            "ATG": "AG",
            "ARG": "AR",
            "ARM": "AM",
            "ABW": "AW",
            "AUS": "AU",
            "AUT": "AT",
            "AZE": "AZ",
            "BHS": "BS",
            "BHR": "BH",
            "BGD": "BD",
            "BRB": "BB",
            "BLR": "BY",
            "BEL": "BE",
            "BLZ": "BZ",
            "BEN": "BJ",
            "BMU": "BM",
            "BTN": "BT",
            "BOL": "BO",
            "BES": "BQ",
            "BIH": "BA",
            "BWA": "BW",
            "BVT": "BV",
            "BRA": "BR",
            "IOT": "IO",
            "BRN": "BN",
            "BGR": "BG",
            "BFA": "BF",
            "BDI": "BI",
            "CPV": "CV",
            "KHM": "KH",
            "CMR": "CM",
            "CAN": "CA",
            "CYM": "KY",
            "CAF": "CF",
            "TCD": "TD",
            "CHL": "CL",
            "CHN": "CN",
            "CXR": "CX",
            "CCK": "CC",
            "COL": "CO",
            "COM": "KM",
            "COG": "CG",
            "COD": "CD",
            "COK": "CK",
            "CRI": "CR",
            "CIV": "CI",
            "HRV": "HR",
            "CUB": "CU",
            "CUW": "CW",
            "CYP": "CY",
            "CZE": "CZ",
            "DNK": "DK",
            "DJI": "DJ",
            "DMA": "DM",
            "DOM": "DO",
            "ECU": "EC",
            "EGY": "EG",
            "SLV": "SV",
            "GNQ": "GQ",
            "ERI": "ER",
            "EST": "EE",
            "ETH": "ET",
            "FLK": "FK",
            "FRO": "FO",
            "FJI": "FJ",
            "FIN": "FI",
            "FRA": "FR",
            "GUF": "GF",
            "PYF": "PF",
            "ATF": "TF",
            "GAB": "GA",
            "GMB": "GM",
            "GEO": "GE",
            "DEU": "DE",
            "GHA": "GH",
            "GIB": "GI",
            "GRC": "GR",
            "GRL": "GL",
            "GRD": "GD",
            "GLP": "GP",
            "GUM": "GU",
            "GTM": "GT",
            "GGY": "GG",
            "GIN": "GN",
            "GNB": "GW",
            "GUY": "GY",
            "HTI": "HT",
            "HMD": "HM",
            "VAT": "VA",
            "HND": "HN",
            "HKG": "HK",
            "HUN": "HU",
            "ISL": "IS",
            "IND": "IN",
            "IDN": "ID",
            "IRN": "IR",
            "IRQ": "IQ",
            "IRL": "IE",
            "IMN": "IM",
            "ISR": "IL",
            "ITA": "IT",
            "JAM": "JM",
            "JPN": "JP",
            "JEY": "JE",
            "JOR": "JO",
            "KAZ": "KZ",
            "KEN": "KE",
            "KIR": "KI",
            "KOS": "KOS",
            "PRK": "KP",
            "KOR": "KR",
            "KWT": "KW",
            "KGZ": "KG",
            "LAO": "LA",
            "LVA": "LV",
            "LBN": "LB",
            "LSO": "LS",
            "LBR": "LR",
            "LBY": "LY",
            "LIE": "LI",
            "LTU": "LT",
            "LUX": "LU",
            "MAC": "MO",
            "MKD": "MK",
            "MDG": "MG",
            "MWI": "MW",
            "MYS": "MY",
            "MDV": "MV",
            "MLI": "ML",
            "MLT": "MT",
            "MHL": "MH",
            "MTQ": "MQ",
            "MRT": "MR",
            "MUS": "MU",
            "MYT": "YT",
            "MEX": "MX",
            "FSM": "FM",
            "MDA": "MD",
            "MCO": "MC",
            "MNG": "MN",
            "MNE": "ME",
            "MSR": "MS",
            "MAR": "MA",
            "MOZ": "MZ",
            "MMR": "MM",
            "NAM": "NA",
            "NRU": "NR",
            "NPL": "NP",
            "NLD": "NL",
            "NCL": "NC",
            "NZL": "NZ",
            "NIC": "NI",
            "NER": "NE",
            "NGA": "NG",
            "NIU": "NU",
            "NFK": "NF",
            "MNP": "MP",
            "NOR": "NO",
            "OMN": "OM",
            "PAK": "PK",
            "PLW": "PW",
            "PSE": "PS",
            "PAN": "PA",
            "PNG": "PG",
            "PRY": "PY",
            "PER": "PE",
            "PHL": "PH",
            "PCN": "PN",
            "POL": "PL",
            "PRT": "PT",
            "PRI": "PR",
            "QAT": "QA",
            "REU": "RE",
            "ROU": "RO",
            "RUS": "RU",
            "RWA": "RW",
            "BLM": "BL",
            "SHN": "SH",
            "KNA": "KN",
            "LCA": "LC",
            "MAF": "MF",
            "SPM": "PM",
            "VCT": "VC",
            "WSM": "WS",
            "SMR": "SM",
            "STP": "ST",
            "SAU": "SA",
            "SEN": "SN",
            "SRB": "RS",
            "SYC": "SC",
            "SLE": "SL",
            "SGP": "SG",
            "SXM": "SX",
            "SVK": "SK",
            "SVN": "SI",
            "SLB": "SB",
            "SOM": "SO",
            "ZAF": "ZA",
            "SGS": "GS",
            "SSD": "SS",
            "ESP": "ES",
            "LKA": "LK",
            "SDN": "SD",
            "SUR": "SR",
            "SJM": "SJ",
            "SWZ": "SZ",
            "SWE": "SE",
            "CHE": "CH",
            "SYR": "SY",
            "TWN": "TW",
            "TJK": "TJ",
            "TZA": "TZ",
            "THA": "TH",
            "TLS": "TL",
            "TGO": "TG",
            "TKL": "TK",
            "TON": "TO",
            "TTO": "TT",
            "TUN": "TN",
            "TUR": "TR",
            "TKM": "TM",
            "TCA": "TC",
            "TUV": "TV",
            "UGA": "UG",
            "UKR": "UA",
            "ARE": "AE",
            "GBR": "GB",
            "USA": "US",
            "UMI": "UM",
            "URY": "UY",
            "UZB": "UZ",
            "VUT": "VU",
            "VEN": "VE",
            "VNM": "VN",
            "VGB": "VG",
            "VIR": "VI",
            "WLF": "WF",
            "ESH": "EH",
            "YEM": "YE",
            "ZMB": "ZM",
            "ZWE": "ZW"
          }
    )

    const [iso2ToName, setIso2ToName] = useState(
        {
            'AF' : {
              name: 'Afghanistan',
            },
            'AX' : {
              name: 'Aland Islands',
            },
            'AL' : {
              name: 'Albania',
            },
            'DZ' : {
              name: 'Algeria',
            },
            'AS' : {
              name: 'American Samoa',
            },
            'AD' : {
              name: 'Andorra',
            },
            'AO' : {
              name: 'Angola',
            },
            'AI' : {
              name: 'Anguilla',
            },
            'AQ' : {
              name: 'Antarctica',
            },
            'AG' : {
              name: 'Antigua And Barbuda',
            },
            'AR' : {
              name: 'Argentina',
            },
            'AM' : {
              name: 'Armenia',
            },
            'AW' : {
              name: 'Aruba',
            },
            'AU' : {
              name: 'Australia',
            },
            'AT' : {
              name: 'Austria',
            },
            'AZ' : {
              name: 'Azerbaijan',
            },
            'BS' : {
              name: 'Bahamas',
            },
            'BH' : {
              name: 'Bahrain',
            },
            'BD' : {
              name: 'Bangladesh',
            },
            'BB' : {
              name: 'Barbados',
            },
            'BY' : {
              name: 'Belarus',
            },
            'BE' : {
              name: 'Belgium',
            },
            'BZ' : {
              name: 'Belize',
            },
            'BJ' : {
              name: 'Benin',
            },
            'BM' : {
              name: 'Bermuda',
            },
            'BT' : {
              name: 'Bhutan',
            },
            'BO' : {
              name: 'Bolivia',
            },
            'BA' : {
              name: 'Bosnia And Herzegovina',
            },
            'BW' : {
              name: 'Botswana',
            },
            'BV' : {
              name: 'Bouvet Island',
            },
            'BR' : {
              name: 'Brazil',
            },
            'IO' : {
              name: 'British Indian Ocean Territory',
            },
            'BN' : {
              name: 'Brunei Darussalam',
            },
            'BG' : {
              name: 'Bulgaria',
            },
            'BF' : {
              name: 'Burkina Faso',
            },
            'BI' : {
              name: 'Burundi',
            },
            'KH' : {
              name: 'Cambodia',
            },
            'CM' : {
              name: 'Cameroon',
            },
            'CA' : {
              name: 'Canada',
            },
            'CV' : {
              name: 'Cape Verde',
            },
            'KY' : {
              name: 'Cayman Islands',
            },
            'CF' : {
              name: 'Central African Republic',
            },
            'TD' : {
              name: 'Chad',
            },
            'CL' : {
              name: 'Chile',
            },
            'CN' : {
              name: 'China',
            },
            'CX' : {
              name: 'Christmas Island',
            },
            'CC' : {
              name: 'Cocos (Keeling) Islands',
            },
            'CO' : {
              name: 'Colombia',
            },
            'KM' : {
              name: 'Comoros',
            },
            'CG' : {
              name: 'Congo',
            },
            'CD' : {
              name: 'Congo, Democratic Republic',
            },
            'CK' : {
              name: 'Cook Islands',
            },
            'CR' : {
              name: 'Costa Rica',
            },
            'CI' : {
              name: 'Cote D\'Ivoire',
            },
            'HR' : {
              name: 'Croatia',
            },
            'CU' : {
              name: 'Cuba',
            },
            'CY' : {
              name: 'Cyprus',
            },
            'CZ' : {
              name: 'Czech Republic',
            },
            'DK' : {
              name: 'Denmark',
            },
            'DJ' : {
              name: 'Djibouti',
            },
            'DM' : {
              name: 'Dominica',
            },
            'DO' : {
              name: 'Dominican Republic',
            },
            'EC' : {
              name: 'Ecuador',
            },
            'EG' : {
              name: 'Egypt',
            },
            'SV' : {
              name: 'El Salvador',
            },
            'GQ' : {
              name: 'Equatorial Guinea',
            },
            'ER' : {
              name: 'Eritrea',
            },
            'EE' : {
              name: 'Estonia',
            },
            'ET' : {
              name: 'Ethiopia',
            },
            'FK' : {
              name: 'Falkland Islands (Malvinas)',
            },
            'FO' : {
              name: 'Faroe Islands',
            },
            'FJ' : {
              name: 'Fiji',
            },
            'FI' : {
              name: 'Finland',
            },
            'FR' : {
              name: 'France',
            },
            'GF' : {
              name: 'French Guiana',
            },
            'PF' : {
              name: 'French Polynesia',
            },
            'TF' : {
              name: 'French Southern Territories',
            },
            'GA' : {
              name: 'Gabon',
            },
            'GM' : {
              name: 'Gambia',
            },
            'GE' : {
              name: 'Georgia',
            },
            'DE' : {
              name: 'Germany',
            },
            'GH' : {
              name: 'Ghana',
            },
            'GI' : {
              name: 'Gibraltar',
            },
            'GR' : {
              name: 'Greece',
            },
            'GL' : {
              name: 'Greenland',
            },
            'GD' : {
              name: 'Grenada',
            },
            'GP' : {
              name: 'Guadeloupe',
            },
            'GU' : {
              name: 'Guam',
            },
            'GT' : {
              name: 'Guatemala',
            },
            'GG' : {
              name: 'Guernsey',
            },
            'GN' : {
              name: 'Guinea',
            },
            'GW' : {
              name: 'Guinea-Bissau',
            },
            'GY' : {
              name: 'Guyana',
            },
            'HT' : {
              name: 'Haiti',
            },
            'HM' : {
              name: 'Heard Island & Mcdonald Islands',
            },
            'VA' : {
              name: 'Holy See (Vatican City State)',
            },
            'HN' : {
              name: 'Honduras',
            },
            'HK' : {
              name: 'Hong Kong',
            },
            'HU' : {
              name: 'Hungary',
            },
            'IS' : {
              name: 'Iceland',
            },
            'IN' : {
              name: 'India',
            },
            'ID' : {
              name: 'Indonesia',
            },
            'IR' : {
              name: 'Iran, (Islamic Republic Of)',
            },
            'IQ' : {
              name: 'Iraq',
            },
            'IE' : {
              name: 'Ireland',
            },
            'IM' : {
              name: 'Isle Of Man',
            },
            'IL' : {
              name: 'Israel',
            },
            'IT' : {
              name: 'Italy',
            },
            'JM' : {
              name: 'Jamaica',
            },
            'JP' : {
              name: 'Japan',
            },
            'JE' : {
              name: 'Jersey',
            },
            'JO' : {
              name: 'Jordan',
            },

            'KOS' : {
                name: 'Kos'
            },
            'KZ' : {
              name: 'Kazakhstan',
            },
            'KE' : {
              name: 'Kenya',
            },
            'KI' : {
              name: 'Kiribati',
            },
            'KR' : {
              name: 'Korea',
            },
            'KW' : {
              name: 'Kuwait',
            },
            'KG' : {
              name: 'Kyrgyzstan',
            },
            'LA' : {
              name: 'Lao People\'s Democratic Republic',
            },
            'LV' : {
              name: 'Latvia',
            },
            'LB' : {
              name: 'Lebanon',
            },
            'LS' : {
              name: 'Lesotho',
            },
            'LR' : {
              name: 'Liberia',
            },
            'LY' : {
              name: 'Libyan Arab Jamahiriya',
            },
            'LI' : {
              name: 'Liechtenstein',
            },
            'LT' : {
              name: 'Lithuania',
            },
            'LU' : {
              name: 'Luxembourg',
            },
            'MO' : {
              name: 'Macao',
            },
            'MK' : {
              name: 'Macedonia',
            },
            'MG' : {
              name: 'Madagascar',
            },
            'MW' : {
              name: 'Malawi',
            },
            'MY' : {
              name: 'Malaysia',
            },
            'MV' : {
              name: 'Maldives',
            },
            'ML' : {
              name: 'Mali',
            },
            'MT' : {
              name: 'Malta',
            },
            'MH' : {
              name: 'Marshall Islands',
            },
            'MQ' : {
              name: 'Martinique',
            },
            'MR' : {
              name: 'Mauritania',
            },
            'MU' : {
              name: 'Mauritius',
            },
            'YT' : {
              name: 'Mayotte',
            },
            'MX' : {
              name: 'Mexico',
            },
            'FM' : {
              name: 'Micronesia, Federated States Of',
            },
            'MD' : {
              name: 'Moldova',
            },
            'MC' : {
              name: 'Monaco',
            },
            'MN' : {
              name: 'Mongolia',
            },
            'ME' : {
              name: 'Montenegro',
            },
            'MS' : {
              name: 'Montserrat',
            },
            'MA' : {
              name: 'Morocco',
            },
            'MZ' : {
              name: 'Mozambique',
            },
            'MM' : {
              name: 'Myanmar',
            },
            'NA' : {
              name: 'Namibia',
            },
            'NR' : {
              name: 'Nauru',
            },
            'NP' : {
              name: 'Nepal',
            },
            'NL' : {
              name: 'Netherlands',
            },
            'AN' : {
              name: 'Netherlands Antilles',
            },
            'NC' : {
              name: 'New Caledonia',
            },
            'NZ' : {
              name: 'New Zealand',
            },
            'NI' : {
              name: 'Nicaragua',
            },
            'NE' : {
              name: 'Niger',
            },
            'NG' : {
              name: 'Nigeria',
            },
            'NU' : {
              name: 'Niue',
            },
            'NF' : {
              name: 'Norfolk Island',
            },
            'MP' : {
              name: 'Northern Mariana Islands',
            },
            'NO' : {
              name: 'Norway',
            },
            'OM' : {
              name: 'Oman',
            },
            'PK' : {
              name: 'Pakistan',
            },
            'PW' : {
              name: 'Palau',
            },
            'PS' : {
              name: 'Palestinian Territory, Occupied',
            },
            'PA' : {
              name: 'Panama',
            },
            'PG' : {
              name: 'Papua New Guinea',
            },
            'PY' : {
              name: 'Paraguay',
            },
            'PE' : {
              name: 'Peru',
            },
            'PH' : {
              name: 'Philippines',
            },
            'PN' : {
              name: 'Pitcairn',
            },
            'PL' : {
              name: 'Poland',
            },
            'PT' : {
              name: 'Portugal',
            },
            'PR' : {
              name: 'Puerto Rico',
            },
            'QA' : {
              name: 'Qatar',
            },
            'RE' : {
              name: 'Reunion',
            },
            'RO' : {
              name: 'Romania',
            },
            'RU' : {
              name: 'Russian Federation',
            },
            'RW' : {
              name: 'Rwanda',
            },
            'BL' : {
              name: 'Saint Barthelemy',
            },
            'SH' : {
              name: 'Saint Helena',
            },
            'KN' : {
              name: 'Saint Kitts And Nevis',
            },
            'LC' : {
              name: 'Saint Lucia',
            },
            'MF' : {
              name: 'Saint Martin',
            },
            'PM' : {
              name: 'Saint Pierre And Miquelon',
            },
            'VC' : {
              name: 'Saint Vincent And Grenadines',
            },
            'WS' : {
              name: 'Samoa',
            },
            'SM' : {
              name: 'San Marino',
            },
            'ST' : {
              name: 'Sao Tome And Principe',
            },
            'SA' : {
              name: 'Saudi Arabia',
            },
            'SN' : {
              name: 'Senegal',
            },
            'RS' : {
              name: 'Serbia',
            },
            'SC' : {
              name: 'Seychelles',
            },
            'SL' : {
              name: 'Sierra Leone',
            },
            'SG' : {
              name: 'Singapore',
            },
            'SK' : {
              name: 'Slovakia',
            },
            'SI' : {
              name: 'Slovenia',
            },
            'SB' : {
              name: 'Solomon Islands',
            },
            'SO' : {
              name: 'Somalia',
            },
            'ZA' : {
              name: 'South Africa',
            },
            'GS' : {
              name: 'South Georgia And Sandwich Isl.',
            },
            'ES' : {
              name: 'Spain',
            },
            'LK' : {
              name: 'Sri Lanka',
            },
            'SD' : {
              name: 'Sudan',
            },
            'SR' : {
              name: 'Suriname',
            },
            'SJ' : {
              name: 'Svalbard And Jan Mayen',
            },
            'SZ' : {
              name: 'Swaziland',
            },
            'SE' : {
              name: 'Sweden',
            },
            'CH' : {
              name: 'Switzerland',
            },
            'SY' : {
              name: 'Syrian Arab Republic',
            },
            'TW' : {
              name: 'Taiwan',
            },
            'TJ' : {
              name: 'Tajikistan',
            },
            'TZ' : {
              name: 'Tanzania',
            },
            'TH' : {
              name: 'Thailand',
            },
            'TL' : {
              name: 'Timor-Leste',
            },
            'TG' : {
              name: 'Togo',
            },
            'TK' : {
              name: 'Tokelau',
            },
            'TO' : {
              name: 'Tonga',
            },
            'TT' : {
              name: 'Trinidad And Tobago',
            },
            'TN' : {
              name: 'Tunisia',
            },
            'TR' : {
              name: 'Turkey',
            },
            'TM' : {
              name: 'Turkmenistan',
            },
            'TC' : {
              name: 'Turks And Caicos Islands',
            },
            'TV' : {
              name: 'Tuvalu',
            },
            'UG' : {
              name: 'Uganda',
            },
            'UA' : {
              name: 'Ukraine',
            },
            'AE' : {
              name: 'United Arab Emirates',
            },
            'GB' : {
              name: 'United Kingdom',
            },
            'US' : {
              name: 'United States',
            },
            'UM' : {
              name: 'United States Outlying Islands',
            },
            'UY' : {
              name: 'Uruguay',
            },
            'UZ' : {
              name: 'Uzbekistan',
            },
            'VU' : {
              name: 'Vanuatu',
            },
            'VE' : {
              name: 'Venezuela',
            },
            'VN' : {
              name: 'Viet Nam',
            },
            'VG' : {
              name: 'Virgin Islands, British',
            },
            'VI' : {
              name: 'Virgin Islands, U.S.',
            },
            'WF' : {
              name: 'Wallis And Futuna',
            },
            'EH' : {
              name: 'Western Sahara',
            },
            'YE' : {
              name: 'Yemen',
            },
            'ZM' : {
              name: 'Zambia',
            },
            'ZW' : {
              name: 'Zimbabwe'
            },
          }
    )


    return (
        <IsoContext.Provider value={{code: [iso3To2, setIso3to2], name: [iso2ToName, setIso2ToName]}}>
            {props.children}
        </IsoContext.Provider>
    )
}