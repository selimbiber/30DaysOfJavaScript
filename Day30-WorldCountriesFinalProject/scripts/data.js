const dataForAllCountries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://flagpedia.net/data/flags/w580/af.webp',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://flagpedia.net/data/flags/w580/ax.webp',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://flagpedia.net/data/flags/w580/al.webp',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://flagpedia.net/data/flags/w580/dz.webp',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://flagpedia.net/data/flags/w580/as.webp',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://flagpedia.net/data/flags/w580/ad.webp',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://flagpedia.net/data/flags/w580/ao.webp',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://flagpedia.net/data/flags/w580/ai.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Antigua and Barbuda',
      capital: "Saint John's",
      languages: ['English'],
      population: 86295,
      flag: 'https://flagpedia.net/data/flags/w580/ag.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      languages: ['Spanish', 'Guaraní'],
      population: 43590400,
      flag: 'https://flagpedia.net/data/flags/w580/ar.webp',
      currency: 'Argentine peso'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      languages: ['Armenian', 'Russian'],
      population: 2994400,
      flag: 'https://flagpedia.net/data/flags/w580/am.webp',
      currency: 'Armenian dram'
    },
    {
      name: 'Aruba',
      capital: 'Oranjestad',
      languages: ['Dutch', '(Eastern) Punjabi'],
      population: 107394,
      flag: 'https://flagpedia.net/data/flags/w580/aw.webp',
      currency: 'Aruban florin'
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      languages: ['English'],
      population: 24117360,
      flag: 'https://flagpedia.net/data/flags/w580/au.webp',
      currency: 'Australian dollar'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      languages: ['German'],
      population: 8725931,
      flag: 'https://flagpedia.net/data/flags/w580/at.webp',
      currency: 'Euro'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      languages: ['Azerbaijani'],
      population: 9730500,
      flag: 'https://flagpedia.net/data/flags/w580/az.webp',
      currency: 'Azerbaijani manat'
    },
    {
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://flagpedia.net/data/flags/w580/bs.webp',
      currency: 'Bahamian dollar'
    },
    {
      name: 'Bahrain',
      capital: 'Manama',
      languages: ['Arabic'],
      population: 1404900,
      flag: 'https://flagpedia.net/data/flags/w580/bh.webp',
      currency: 'Bahraini dinar'
    },
    {
      name: 'Bangladesh',
      capital: 'Dhaka',
      languages: ['Bengali'],
      population: 161006790,
      flag: 'https://flagpedia.net/data/flags/w580/bd.webp',
      currency: 'Bangladeshi taka'
    },
    {
      name: 'Barbados',
      capital: 'Bridgetown',
      languages: ['English'],
      population: 285000,
      flag: 'https://flagpedia.net/data/flags/w580/bb.webp',
      currency: 'Barbadian dollar'
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      languages: ['Belarusian', 'Russian'],
      population: 9498700,
      flag: 'https://flagpedia.net/data/flags/w580/by.webp',
      currency: 'New Belarusian ruble'
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      languages: ['Dutch', 'French', 'German'],
      population: 11319511,
      flag: 'https://flagpedia.net/data/flags/w580/be.webp',
      currency: 'Euro'
    },
    {
      name: 'Belize',
      capital: 'Belmopan',
      languages: ['English', 'Spanish'],
      population: 370300,
      flag: 'https://flagpedia.net/data/flags/w580/bz.webp',
      currency: 'Belize dollar'
    },
    {
      name: 'Benin',
      capital: 'Porto-Novo',
      languages: ['French'],
      population: 10653654,
      flag: 'https://flagpedia.net/data/flags/w580/bj.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Bermuda',
      capital: 'Hamilton',
      languages: ['English'],
      population: 61954,
      flag: 'https://flagpedia.net/data/flags/w580/bm.webp',
      currency: 'Bermudian dollar'
    },
    {
      name: 'Bhutan',
      capital: 'Thimphu',
      languages: ['Dzongkha'],
      population: 775620,
      flag: 'https://flagpedia.net/data/flags/w580/bt.webp',
      currency: 'Bhutanese ngultrum'
    },
    {
      name: 'Bolivia (Plurinational State of)',
      capital: 'Sucre',
      languages: ['Spanish', 'Aymara', 'Quechua'],
      population: 10985059,
      flag: 'https://flagpedia.net/data/flags/w580/bo.webp',
      currency: 'Bolivian boliviano'
    },
    {
      name: 'Bosnia and Herzegovina',
      capital: 'Sarajevo',
      languages: ['Bosnian', 'Croatian', 'Serbian'],
      population: 3531159,
      flag: 'https://flagpedia.net/data/flags/w580/ba.webp',
      currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
      name: 'Botswana',
      capital: 'Gaborone',
      languages: ['English', 'Tswana'],
      population: 2141206,
      flag: 'https://flagpedia.net/data/flags/w580/bw.webp',
      currency: 'Botswana pula'
    },
    {
      name: 'Brazil',
      capital: 'Brasília',
      languages: ['Portuguese'],
      population: 206135893,
      flag: 'https://flagpedia.net/data/flags/w580/br.webp',
      currency: 'Brazilian real'
    },
    {
      name: 'British Indian Ocean Territory',
      capital: 'Diego Garcia',
      languages: ['English'],
      population: 3000,
      flag: 'https://flagpedia.net/data/flags/w580/io.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Virgin Islands (British)',
      capital: 'Road Town',
      languages: ['English'],
      population: 28514,
      flag: 'https://flagpedia.net/data/flags/w580/vg.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Virgin Islands (U.S.)',
      capital: 'Charlotte Amalie',
      languages: ['English'],
      population: 114743,
      flag: 'https://flagpedia.net/data/flags/w580/vi.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Brunei Darussalam',
      capital: 'Bandar Seri Begawan',
      languages: ['Malay'],
      population: 411900,
      flag: 'https://flagpedia.net/data/flags/w580/bn.webp',
      currency: 'Brunei dollar'
    },
    {
      name: 'Bulgaria',
      capital: 'Sofia',
      languages: ['Bulgarian'],
      population: 7153784,
      flag: 'https://flagpedia.net/data/flags/w580/bg.webp',
      currency: 'Bulgarian lev'
    },
    {
      name: 'Burkina Faso',
      capital: 'Ouagadougou',
      languages: ['French', 'Fula'],
      population: 19034397,
      flag: 'https://flagpedia.net/data/flags/w580/bf.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Burundi',
      capital: 'Bujumbura',
      languages: ['French', 'Kirundi'],
      population: 10114505,
      flag: 'https://flagpedia.net/data/flags/w580/bi.webp',
      currency: 'Burundian franc'
    },
    {
      name: 'Cambodia',
      capital: 'Phnom Penh',
      languages: ['Khmer'],
      population: 15626444,
      flag: 'https://flagpedia.net/data/flags/w580/kh.webp',
      currency: 'Cambodian riel'
    },
    {
      name: 'Cameroon',
      capital: 'Yaoundé',
      languages: ['English', 'French'],
      population: 22709892,
      flag: 'https://flagpedia.net/data/flags/w580/cm.webp',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Canada',
      capital: 'Ottawa',
      languages: ['English', 'French'],
      population: 36155487,
      flag: 'https://flagpedia.net/data/flags/w580/ca.webp',
      currency: 'Canadian dollar'
    },
    {
      name: 'Cabo Verde',
      capital: 'Praia',
      languages: ['Portuguese'],
      population: 531239,
      flag: 'https://flagpedia.net/data/flags/w580/cv.webp',
      currency: 'Cape Verdean escudo'
    },
    {
      name: 'Cayman Islands',
      capital: 'George Town',
      languages: ['English'],
      population: 58238,
      flag: 'https://flagpedia.net/data/flags/w580/ky.webp',
      currency: 'Cayman Islands dollar'
    },
    {
      name: 'Central African Republic',
      capital: 'Bangui',
      languages: ['French', 'Sango'],
      population: 4998000,
      flag: 'https://flagpedia.net/data/flags/w580/cf.webp',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Chad',
      capital: "N'Djamena",
      languages: ['French', 'Arabic'],
      population: 14497000,
      flag: 'https://flagpedia.net/data/flags/w580/td.webp',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Chile',
      capital: 'Santiago',
      languages: ['Spanish'],
      population: 18191900,
      flag: 'https://flagpedia.net/data/flags/w580/cl.webp',
      currency: 'Chilean peso'
    },
    {
      name: 'China',
      capital: 'Beijing',
      languages: ['Chinese'],
      population: 1377422166,
      flag: 'https://flagpedia.net/data/flags/w580/cn.webp',
      currency: 'Chinese yuan'
    },
    {
      name: 'Christmas Island',
      capital: 'Flying Fish Cove',
      languages: ['English'],
      population: 2072,
      flag: 'https://flagpedia.net/data/flags/w580/cx.webp',
      currency: 'Australian dollar'
    },
    {
      name: 'Cocos (Keeling) Islands',
      capital: 'West Island',
      languages: ['English'],
      population: 550,
      flag: 'https://flagpedia.net/data/flags/w580/cc.webp',
      currency: 'Australian dollar'
    },
    {
      name: 'Colombia',
      capital: 'Bogotá',
      languages: ['Spanish'],
      population: 48759958,
      flag: 'https://flagpedia.net/data/flags/w580/co.webp',
      currency: 'Colombian peso'
    },
    {
      name: 'Comoros',
      capital: 'Moroni',
      languages: ['Arabic', 'French'],
      population: 806153,
      flag: 'https://flagpedia.net/data/flags/w580/km.webp',
      currency: 'Comorian franc'
    },
    {
      name: 'Congo',
      capital: 'Brazzaville',
      languages: ['French', 'Lingala'],
      population: 4741000,
      flag: 'https://flagpedia.net/data/flags/w580/cg.webp',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Congo (Democratic Republic of the)',
      capital: 'Kinshasa',
      languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
      population: 85026000,
      flag: 'https://flagpedia.net/data/flags/w580/cd.webp',
      currency: 'Congolese franc'
    },
    {
      name: 'Cook Islands',
      capital: 'Avarua',
      languages: ['English'],
      population: 18100,
      flag: 'https://flagpedia.net/data/flags/w580/ck.webp',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Costa Rica',
      capital: 'San José',
      languages: ['Spanish'],
      population: 4890379,
      flag: 'https://flagpedia.net/data/flags/w580/cr.webp',
      currency: 'Costa Rican colón'
    },
    {
      name: 'Croatia',
      capital: 'Zagreb',
      languages: ['Croatian'],
      population: 4190669,
      flag: 'https://flagpedia.net/data/flags/w580/hr.webp',
      currency: 'Croatian kuna'
    },
    {
      name: 'Cuba',
      capital: 'Havana',
      languages: ['Spanish'],
      population: 11239004,
      flag: 'https://flagpedia.net/data/flags/w580/cu.webp',
      currency: 'Cuban convertible peso'
    },
    {
      name: 'Curaçao',
      capital: 'Willemstad',
      languages: ['Dutch', '(Eastern) Punjabi', 'English'],
      population: 154843,
      flag: 'https://flagpedia.net/data/flags/w580/cw.webp',
      currency: 'Netherlands Antillean guilder'
    },
    {
      name: 'Cyprus',
      capital: 'Nicosia',
      languages: ['Greek (modern)', 'Turkish', 'Armenian'],
      population: 847000,
      flag: 'https://flagpedia.net/data/flags/w580/cy.webp',
      currency: 'Euro'
    },
    {
      name: 'Czech Republic',
      capital: 'Prague',
      languages: ['Czech', 'Slovak'],
      population: 10558524,
      flag: 'https://flagpedia.net/data/flags/w580/cz.webp',
      currency: 'Czech koruna'
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      languages: ['Danish'],
      population: 5717014,
      flag: 'https://flagpedia.net/data/flags/w580/dk.webp',
      currency: 'Danish krone'
    },
    {
      name: 'Djibouti',
      capital: 'Djibouti',
      languages: ['French', 'Arabic'],
      population: 900000,
      flag: 'https://flagpedia.net/data/flags/w580/dj.webp',
      currency: 'Djiboutian franc'
    },
    {
      name: 'Dominica',
      capital: 'Roseau',
      languages: ['English'],
      population: 71293,
      flag: 'https://flagpedia.net/data/flags/w580/dm.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Dominican Republic',
      capital: 'Santo Domingo',
      languages: ['Spanish'],
      population: 10075045,
      flag: 'https://flagpedia.net/data/flags/w580/do.webp',
      currency: 'Dominican peso'
    },
    {
      name: 'Ecuador',
      capital: 'Quito',
      languages: ['Spanish'],
      population: 16545799,
      flag: 'https://flagpedia.net/data/flags/w580/ec.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Egypt',
      capital: 'Cairo',
      languages: ['Arabic'],
      population: 91290000,
      flag: 'https://flagpedia.net/data/flags/w580/eg.webp',
      currency: 'Egyptian pound'
    },
    {
      name: 'El Salvador',
      capital: 'San Salvador',
      languages: ['Spanish'],
      population: 6520675,
      flag: 'https://flagpedia.net/data/flags/w580/sv.webp',
      currency: 'United States dollar'
    },
    {
      name: 'England',
      capital: 'London',
      languages: ['English'],
      population: 55997178,
      flag: 'https://flagpedia.net/data/flags/w580/gb-eng.webp',
      currency: 'British pound'
    },
    {
      name: 'Equatorial Guinea',
      capital: 'Malabo',
      languages: ['Spanish', 'French'],
      population: 1222442,
      flag: 'https://flagpedia.net/data/flags/w580/gq.webp',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Eritrea',
      capital: 'Asmara',
      languages: ['Tigrinya', 'Arabic', 'English'],
      population: 5352000,
      flag: 'https://flagpedia.net/data/flags/w580/er.webp',
      currency: 'Eritrean nakfa'
    },
    {
      name: 'Estonia',
      capital: 'Tallinn',
      languages: ['Estonian'],
      population: 1315944,
      flag: 'https://flagpedia.net/data/flags/w580/ee.webp',
      currency: 'Euro'
    },
    {
      name: 'Ethiopia',
      capital: 'Addis Ababa',
      languages: ['Amharic'],
      population: 92206005,
      flag: 'https://flagpedia.net/data/flags/w580/et.webp',
      currency: 'Ethiopian birr'
    },
    {
      name: 'Falkland Islands (Malvinas)',
      capital: 'Stanley',
      languages: ['English'],
      population: 2563,
      flag: 'https://flagpedia.net/data/flags/w580/fk.webp',
      currency: 'Falkland Islands pound'
    },
    {
      name: 'Faroe Islands',
      capital: 'Tórshavn',
      languages: ['Faroese'],
      population: 49376,
      flag: 'https://flagpedia.net/data/flags/w580/fo.webp',
      currency: 'Danish krone'
    },
    {
      name: 'Fiji',
      capital: 'Suva',
      languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
      population: 867000,
      flag: 'https://flagpedia.net/data/flags/w580/fj.webp',
      currency: 'Fijian dollar'
    },
    {
      name: 'Finland',
      capital: 'Helsinki',
      languages: ['Finnish', 'Swedish'],
      population: 5491817,
      flag: 'https://flagpedia.net/data/flags/w580/fi.webp',
      currency: 'Euro'
    },
    {
      name: 'France',
      capital: 'Paris',
      languages: ['French'],
      population: 66710000,
      flag: 'https://flagpedia.net/data/flags/w580/fr.webp',
      currency: 'Euro'
    },
    {
      name: 'French Guiana',
      capital: 'Cayenne',
      languages: ['French'],
      population: 254541,
      flag: 'https://flagpedia.net/data/flags/w580/gf.webp',
      currency: 'Euro'
    },
    {
      name: 'French Polynesia',
      capital: 'Papeetē',
      languages: ['French'],
      population: 271800,
      flag: 'https://flagpedia.net/data/flags/w580/pf.webp',
      currency: 'CFP franc'
    },
    {
      name: 'French Southern Territories',
      capital: 'Port-aux-Français',
      languages: ['French'],
      population: 140,
      flag: 'https://flagpedia.net/data/flags/w580/tf.webp',
      currency: 'Euro'
    },
    {
      name: 'Gabon',
      capital: 'Libreville',
      languages: ['French'],
      population: 1802278,
      flag: 'https://flagpedia.net/data/flags/w580/ga.webp',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Gambia',
      capital: 'Banjul',
      languages: ['English'],
      population: 1882450,
      flag: 'https://flagpedia.net/data/flags/w580/gm.webp',
      currency: 'Gambian dalasi'
    },
    {
      name: 'Georgia',
      capital: 'Tbilisi',
      languages: ['Georgian'],
      population: 3720400,
      flag: 'https://flagpedia.net/data/flags/w580/ge.webp',
      currency: 'Georgian Lari'
    },
    {
      name: 'Germany',
      capital: 'Berlin',
      languages: ['German'],
      population: 81770900,
      flag: 'https://flagpedia.net/data/flags/w580/de.webp',
      currency: 'Euro'
    },
    {
      name: 'Ghana',
      capital: 'Accra',
      languages: ['English'],
      population: 27670174,
      flag: 'https://flagpedia.net/data/flags/w580/gh.webp',
      currency: 'Ghanaian cedi'
    },
    {
      name: 'Gibraltar',
      capital: 'Gibraltar',
      languages: ['English'],
      population: 33140,
      flag: 'https://flagpedia.net/data/flags/w580/gi.webp',
      currency: 'Gibraltar pound'
    },
    {
      name: 'Greece',
      capital: 'Athens',
      languages: ['Greek (modern)'],
      population: 10858018,
      flag: 'https://flagpedia.net/data/flags/w580/gr.webp',
      currency: 'Euro'
    },
    {
      name: 'Greenland',
      capital: 'Nuuk',
      languages: ['Kalaallisut'],
      population: 55847,
      flag: 'https://flagpedia.net/data/flags/w580/gl.webp',
      currency: 'Danish krone'
    },
    {
      name: 'Grenada',
      capital: "St. George's",
      languages: ['English'],
      population: 103328,
      flag: 'https://flagpedia.net/data/flags/w580/gd.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Guadeloupe',
      capital: 'Basse-Terre',
      languages: ['French'],
      population: 400132,
      flag: 'https://flagpedia.net/data/flags/w580/gp.webp',
      currency: 'Euro'
    },
    {
      name: 'Guam',
      capital: 'Hagåtña',
      languages: ['English', 'Chamorro', 'Spanish'],
      population: 184200,
      flag: 'https://flagpedia.net/data/flags/w580/gu.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Guatemala',
      capital: 'Guatemala City',
      languages: ['Spanish'],
      population: 16176133,
      flag: 'https://flagpedia.net/data/flags/w580/gt.webp',
      currency: 'Guatemalan quetzal'
    },
    {
      name: 'Guernsey',
      capital: 'St. Peter Port',
      languages: ['English', 'French'],
      population: 62999,
      flag: 'https://flagpedia.net/data/flags/w580/gg.webp',
      currency: 'British pound'
    },
    {
      name: 'Guinea',
      capital: 'Conakry',
      languages: ['French', 'Fula'],
      population: 12947000,
      flag: 'https://flagpedia.net/data/flags/w580/gn.webp',
      currency: 'Guinean franc'
    },
    {
      name: 'Guinea-Bissau',
      capital: 'Bissau',
      languages: ['Portuguese'],
      population: 1547777,
      flag: 'https://flagpedia.net/data/flags/w580/gw.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Guyana',
      capital: 'Georgetown',
      languages: ['English'],
      population: 746900,
      flag: 'https://flagpedia.net/data/flags/w580/gy.webp',
      currency: 'Guyanese dollar'
    },
    {
      name: 'Haiti',
      capital: 'Port-au-Prince',
      languages: ['French', 'Haitian'],
      population: 11078033,
      flag: 'https://flagpedia.net/data/flags/w580/ht.webp',
      currency: 'Haitian gourde'
    },
    {
      name: 'Holy See (Vatican City)',
      capital: 'Rome',
      languages: ['Latin', 'Italian', 'French', 'German'],
      population: 451,
      flag: 'https://flagpedia.net/data/flags/w580/va.webp',
      currency: 'Euro'
    },
    {
      name: 'Honduras',
      capital: 'Tegucigalpa',
      languages: ['Spanish'],
      population: 8576532,
      flag: 'https://flagpedia.net/data/flags/w580/hn.webp',
      currency: 'Honduran lempira'
    },
    {
      name: 'Hong Kong',
      capital: 'City of Victoria',
      languages: ['English', 'Chinese'],
      population: 7324300,
      flag: 'https://flagpedia.net/data/flags/w580/hk.webp',
      currency: 'Hong Kong dollar'
    },
    {
      name: 'Hungary',
      capital: 'Budapest',
      languages: ['Hungarian'],
      population: 9823000,
      flag: 'https://flagpedia.net/data/flags/w580/hu.webp',
      currency: 'Hungarian forint'
    },
    {
      name: 'Iceland',
      capital: 'Reykjavík',
      languages: ['Icelandic'],
      population: 334300,
      flag: 'https://flagpedia.net/data/flags/w580/is.webp',
      currency: 'Icelandic króna'
    },
    {
      name: 'India',
      capital: 'New Delhi',
      languages: ['Hindi', 'English'],
      population: 1295210000,
      flag: 'https://flagpedia.net/data/flags/w580/in.webp',
      currency: 'Indian rupee'
    },
    {
      name: 'Indonesia',
      capital: 'Jakarta',
      languages: ['Indonesian'],
      population: 258705000,
      flag: 'https://flagpedia.net/data/flags/w580/id.webp',
      currency: 'Indonesian rupiah'
    },
    {
      name: "Côte d'Ivoire",
      capital: 'Yamoussoukro',
      languages: ['French'],
      population: 22671331,
      flag: 'https://flagpedia.net/data/flags/w580/ci.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Iran (Islamic Republic of)',
      capital: 'Tehran',
      languages: ['Persian (Farsi)'],
      population: 79369900,
      flag: 'https://flagpedia.net/data/flags/w580/ir.webp',
      currency: 'Iranian rial'
    },
    {
      name: 'Iraq',
      capital: 'Baghdad',
      languages: ['Arabic', 'Kurdish'],
      population: 37883543,
      flag: 'https://flagpedia.net/data/flags/w580/iq.webp',
      currency: 'Iraqi dinar'
    },
    {
      name: 'Ireland',
      capital: 'Dublin',
      languages: ['Irish', 'English'],
      population: 6378000,
      flag: 'https://flagpedia.net/data/flags/w580/ie.webp',
      currency: 'Euro'
    },
    {
      name: 'Isle of Man',
      capital: 'Douglas',
      languages: ['English', 'Manx'],
      population: 84497,
      flag: 'https://flagpedia.net/data/flags/w580/im.webp',
      currency: 'British pound'
    },
    {
      name: 'Israel',
      capital: 'Jerusalem',
      languages: ['Hebrew (modern)', 'Arabic'],
      population: 8527400,
      flag: 'https://flagpedia.net/data/flags/w580/il.webp',
      currency: 'Israeli new shekel'
    },
    {
      name: 'Italy',
      capital: 'Rome',
      languages: ['Italian'],
      population: 60665551,
      flag: 'https://flagpedia.net/data/flags/w580/it.webp',
      currency: 'Euro'
    },
    {
      name: 'Jamaica',
      capital: 'Kingston',
      languages: ['English'],
      population: 2723246,
      flag: 'https://flagpedia.net/data/flags/w580/jm.webp',
      currency: 'Jamaican dollar'
    },
    {
      name: 'Japan',
      capital: 'Tokyo',
      languages: ['Japanese'],
      population: 126960000,
      flag: 'https://flagpedia.net/data/flags/w580/jp.webp',
      currency: 'Japanese yen'
    },
    {
      name: 'Jersey',
      capital: 'Saint Helier',
      languages: ['English', 'French'],
      population: 100800,
      flag: 'https://flagpedia.net/data/flags/w580/je.webp',
      currency: 'British pound'
    },
    {
      name: 'Jordan',
      capital: 'Amman',
      languages: ['Arabic'],
      population: 9531712,
      flag: 'https://flagpedia.net/data/flags/w580/jo.webp',
      currency: 'Jordanian dinar'
    },
    {
      name: 'Kazakhstan',
      capital: 'Astana',
      languages: ['Kazakh', 'Russian'],
      population: 17753200,
      flag: 'https://flagpedia.net/data/flags/w580/kz.webp',
      currency: 'Kazakhstani tenge'
    },
    {
      name: 'Kenya',
      capital: 'Nairobi',
      languages: ['English', 'Swahili'],
      population: 47251000,
      flag: 'https://flagpedia.net/data/flags/w580/ke.webp',
      currency: 'Kenyan shilling'
    },
    {
      name: 'Kiribati',
      capital: 'South Tarawa',
      languages: ['English'],
      population: 113400,
      flag: 'https://flagpedia.net/data/flags/w580/ki.webp',
      currency: 'Australian dollar'
    },
    {
      name: 'Kuwait',
      capital: 'Kuwait City',
      languages: ['Arabic'],
      population: 4183658,
      flag: 'https://flagpedia.net/data/flags/w580/kw.webp',
      currency: 'Kuwaiti dinar'
    },
    {
      name: 'Kyrgyzstan',
      capital: 'Bishkek',
      languages: ['Kyrgyz', 'Russian'],
      population: 6047800,
      flag: 'https://flagpedia.net/data/flags/w580/kg.webp',
      currency: 'Kyrgyzstani som'
    },
    {
      name: "Lao People's Democratic Republic",
      capital: 'Vientiane',
      languages: ['Lao'],
      population: 6492400,
      flag: 'https://flagpedia.net/data/flags/w580/la.webp',
      currency: 'Lao kip'
    },
    {
      name: 'Latvia',
      capital: 'Riga',
      languages: ['Latvian'],
      population: 1961600,
      flag: 'https://flagpedia.net/data/flags/w580/lv.webp',
      currency: 'Euro'
    },
    {
      name: 'Lebanon',
      capital: 'Beirut',
      languages: ['Arabic', 'French'],
      population: 5988000,
      flag: 'https://flagpedia.net/data/flags/w580/lb.webp',
      currency: 'Lebanese pound'
    },
    {
      name: 'Lesotho',
      capital: 'Maseru',
      languages: ['English', 'Southern Sotho'],
      population: 1894194,
      flag: 'https://flagpedia.net/data/flags/w580/ls.webp',
      currency: 'Lesotho loti'
    },
    {
      name: 'Liberia',
      capital: 'Monrovia',
      languages: ['English'],
      population: 4615000,
      flag: 'https://flagpedia.net/data/flags/w580/lr.webp',
      currency: 'Liberian dollar'
    },
    {
      name: 'Libya',
      capital: 'Tripoli',
      languages: ['Arabic'],
      population: 6385000,
      flag: 'https://flagpedia.net/data/flags/w580/ly.webp',
      currency: 'Libyan dinar'
    },
    {
      name: 'Liechtenstein',
      capital: 'Vaduz',
      languages: ['German'],
      population: 37623,
      flag: 'https://flagpedia.net/data/flags/w580/li.webp',
      currency: 'Swiss franc'
    },
    {
      name: 'Lithuania',
      capital: 'Vilnius',
      languages: ['Lithuanian'],
      population: 2872294,
      flag: 'https://flagpedia.net/data/flags/w580/lt.webp',
      currency: 'Euro'
    },
    {
      name: 'Luxembourg',
      capital: 'Luxembourg',
      languages: ['French', 'German', 'Luxembourgish'],
      population: 576200,
      flag: 'https://flagpedia.net/data/flags/w580/lu.webp',
      currency: 'Euro'
    },
    {
      name: 'Macedonia',
      capital: 'Skopje',
      languages: ['Macedonian'],
      population: 2058539,
      flag: 'https://flagpedia.net/data/flags/w580/mk.webp',
      currency: 'Macedonian denar'
    },
    {
      name: 'Madagascar',
      capital: 'Antananarivo',
      languages: ['French', 'Malagasy'],
      population: 22434363,
      flag: 'https://flagpedia.net/data/flags/w580/mg.webp',
      currency: 'Malagasy ariary'
    },
    {
      name: 'Malawi',
      capital: 'Lilongwe',
      languages: ['English', 'Chichewa'],
      population: 16832910,
      flag: 'https://flagpedia.net/data/flags/w580/mw.webp',
      currency: 'Malawian kwacha'
    },
    {
      name: 'Malaysia',
      capital: 'Kuala Lumpur',
      languages: ['Malaysian'],
      population: 31405416,
      flag: 'https://flagpedia.net/data/flags/w580/my.webp',
      currency: 'Malaysian ringgit'
    },
    {
      name: 'Maldives',
      capital: 'Malé',
      languages: ['Divehi'],
      population: 344023,
      flag: 'https://flagpedia.net/data/flags/w580/mv.webp',
      currency: 'Maldivian rufiyaa'
    },
    {
      name: 'Mali',
      capital: 'Bamako',
      languages: ['French'],
      population: 18135000,
      flag: 'https://flagpedia.net/data/flags/w580/ml.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Malta',
      capital: 'Valletta',
      languages: ['Maltese', 'English'],
      population: 425384,
      flag: 'https://flagpedia.net/data/flags/w580/mt.webp',
      currency: 'Euro'
    },
    {
      name: 'Marshall Islands',
      capital: 'Majuro',
      languages: ['English', 'Marshallese'],
      population: 54880,
      flag: 'https://flagpedia.net/data/flags/w580/mh.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Martinique',
      capital: 'Fort-de-France',
      languages: ['French'],
      population: 378243,
      flag: 'https://flagpedia.net/data/flags/w580/mq.webp',
      currency: 'Euro'
    },
    {
      name: 'Mauritania',
      capital: 'Nouakchott',
      languages: ['Arabic'],
      population: 3718678,
      flag: 'https://flagpedia.net/data/flags/w580/mr.webp',
      currency: 'Mauritanian ouguiya'
    },
    {
      name: 'Mauritius',
      capital: 'Port Louis',
      languages: ['English'],
      population: 1262879,
      flag: 'https://flagpedia.net/data/flags/w580/mu.webp',
      currency: 'Mauritian rupee'
    },
    {
      name: 'Mayotte',
      capital: 'Mamoudzou',
      languages: ['French'],
      population: 226915,
      flag: 'https://flagpedia.net/data/flags/w580/yt.webp',
      currency: 'Euro'
    },
    {
      name: 'Mexico',
      capital: 'Mexico City',
      languages: ['Spanish'],
      population: 122273473,
      flag: 'https://flagpedia.net/data/flags/w580/mx.webp',
      currency: 'Mexican peso'
    },
    {
      name: 'Micronesia (Federated States of)',
      capital: 'Palikir',
      languages: ['English'],
      population: 102800,
      flag: 'https://flagpedia.net/data/flags/w580/fm.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Moldova (Republic of)',
      capital: 'Chișinău',
      languages: ['Romanian'],
      population: 3553100,
      flag: 'https://flagpedia.net/data/flags/w580/md.webp',
      currency: 'Moldovan leu'
    },
    {
      name: 'Monaco',
      capital: 'Monaco',
      languages: ['French'],
      population: 38400,
      flag: 'https://flagpedia.net/data/flags/w580/mc.webp',
      currency: 'Euro'
    },
    {
      name: 'Mongolia',
      capital: 'Ulan Bator',
      languages: ['Mongolian'],
      population: 3093100,
      flag: 'https://flagpedia.net/data/flags/w580/mn.webp',
      currency: 'Mongolian tögrög'
    },
    {
      name: 'Montenegro',
      capital: 'Podgorica',
      languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
      population: 621810,
      flag: 'https://flagpedia.net/data/flags/w580/me.webp',
      currency: 'Euro'
    },
    {
      name: 'Montserrat',
      capital: 'Plymouth',
      languages: ['English'],
      population: 4922,
      flag: 'https://flagpedia.net/data/flags/w580/ms.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Morocco',
      capital: 'Rabat',
      languages: ['Arabic'],
      population: 33337529,
      flag: 'https://flagpedia.net/data/flags/w580/ma.webp',
      currency: 'Moroccan dirham'
    },
    {
      name: 'Mozambique',
      capital: 'Maputo',
      languages: ['Portuguese'],
      population: 26423700,
      flag: 'https://flagpedia.net/data/flags/w580/mz.webp',
      currency: 'Mozambican metical'
    },
    {
      name: 'Myanmar',
      capital: 'Naypyidaw',
      languages: ['Burmese'],
      population: 51419420,
      flag: 'https://flagpedia.net/data/flags/w580/mm.webp',
      currency: 'Burmese kyat'
    },
    {
      name: 'Namibia',
      capital: 'Windhoek',
      languages: ['English', 'Afrikaans'],
      population: 2324388,
      flag: 'https://flagpedia.net/data/flags/w580/na.webp',
      currency: 'Namibian dollar'
    },
    {
      name: 'Nauru',
      capital: 'Yaren',
      languages: ['English', 'Nauruan'],
      population: 10084,
      flag: 'https://flagpedia.net/data/flags/w580/nr.webp',
      currency: 'Australian dollar'
    },
    {
      name: 'Nepal',
      capital: 'Kathmandu',
      languages: ['Nepali'],
      population: 28431500,
      flag: 'https://flagpedia.net/data/flags/w580/np.webp',
      currency: 'Nepalese rupee'
    },
    {
      name: 'Netherlands',
      capital: 'Amsterdam',
      languages: ['Dutch'],
      population: 17019800,
      flag: 'https://flagpedia.net/data/flags/w580/nl.webp',
      currency: 'Euro'
    },
    {
      name: 'New Caledonia',
      capital: 'Nouméa',
      languages: ['French'],
      population: 268767,
      flag: 'https://flagpedia.net/data/flags/w580/nc.webp',
      currency: 'CFP franc'
    },
    {
      name: 'New Zealand',
      capital: 'Wellington',
      languages: ['English', 'Māori'],
      population: 4697854,
      flag: 'https://flagpedia.net/data/flags/w580/nz.webp',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Nicaragua',
      capital: 'Managua',
      languages: ['Spanish'],
      population: 6262703,
      flag: 'https://flagpedia.net/data/flags/w580/ni.webp',
      currency: 'Nicaraguan córdoba'
    },
    {
      name: 'Niger',
      capital: 'Niamey',
      languages: ['French'],
      population: 20715000,
      flag: 'https://flagpedia.net/data/flags/w580/ne.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Nigeria',
      capital: 'Abuja',
      languages: ['English'],
      population: 186988000,
      flag: 'https://flagpedia.net/data/flags/w580/ng.webp',
      currency: 'Nigerian naira'
    },
    {
      name: 'Niue',
      capital: 'Alofi',
      languages: ['English'],
      population: 1470,
      flag: 'https://flagpedia.net/data/flags/w580/nu.webp',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Norfolk Island',
      capital: 'Kingston',
      languages: ['English'],
      population: 2302,
      flag: 'https://flagpedia.net/data/flags/w580/nf.webp',
      currency: 'Australian dollar'
    },
    {
      name: "Korea (Democratic People's Republic of)",
      capital: 'Pyongyang',
      languages: ['Korean'],
      population: 25281000,
      flag: 'https://flagpedia.net/data/flags/w580/kp.webp',
      currency: 'North Korean won'
    },
    {
      name: 'Northern Ireland',
      capital: 'Belfast',
      languages: ['English'],
      population: 1885400,
      flag: 'https://flagpedia.net/data/flags/w580/gb-nir.webp',
      currency: 'British pound'
    },
    {
      name: 'Northern Mariana Islands',
      capital: 'Saipan',
      languages: ['English', 'Chamorro'],
      population: 56940,
      flag: 'https://flagpedia.net/data/flags/w580/mp.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
      population: 5223256,
      flag: 'https://flagpedia.net/data/flags/w580/no.webp',
      currency: 'Norwegian krone'
    },
    {
      name: 'Oman',
      capital: 'Muscat',
      languages: ['Arabic'],
      population: 4420133,
      flag: 'https://flagpedia.net/data/flags/w580/om.webp',
      currency: 'Omani rial'
    },
    {
      name: 'Pakistan',
      capital: 'Islamabad',
      languages: ['English', 'Urdu'],
      population: 194125062,
      flag: 'https://flagpedia.net/data/flags/w580/pk.webp',
      currency: 'Pakistani rupee'
    },
    {
      name: 'Palau',
      capital: 'Ngerulmud',
      languages: ['English'],
      population: 17950,
      flag: 'https://flagpedia.net/data/flags/w580/pw.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Palestine, State of',
      capital: 'Ramallah',
      languages: ['Arabic'],
      population: 4682467,
      flag: 'https://flagpedia.net/data/flags/w580/ps.webp',
      currency: 'Israeli new sheqel'
    },
    {
      name: 'Panama',
      capital: 'Panama City',
      languages: ['Spanish'],
      population: 3814672,
      flag: 'https://flagpedia.net/data/flags/w580/pa.webp',
      currency: 'Panamanian balboa'
    },
    {
      name: 'Papua New Guinea',
      capital: 'Port Moresby',
      languages: ['English'],
      population: 8083700,
      flag: 'https://flagpedia.net/data/flags/w580/pg.webp',
      currency: 'Papua New Guinean kina'
    },
    {
      name: 'Paraguay',
      capital: 'Asunción',
      languages: ['Spanish', 'Guaraní'],
      population: 6854536,
      flag: 'https://flagpedia.net/data/flags/w580/py.webp',
      currency: 'Paraguayan guaraní'
    },
    {
      name: 'Peru',
      capital: 'Lima',
      languages: ['Spanish'],
      population: 31488700,
      flag: 'https://flagpedia.net/data/flags/w580/pe.webp',
      currency: 'Peruvian sol'
    },
    {
      name: 'Philippines',
      capital: 'Manila',
      languages: ['English'],
      population: 103279800,
      flag: 'https://flagpedia.net/data/flags/w580/ph.webp',
      currency: 'Philippine peso'
    },
    {
      name: 'Pitcairn',
      capital: 'Adamstown',
      languages: ['English'],
      population: 56,
      flag: 'https://flagpedia.net/data/flags/w580/pn.webp',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Poland',
      capital: 'Warsaw',
      languages: ['Polish'],
      population: 38437239,
      flag: 'https://flagpedia.net/data/flags/w580/pl.webp',
      currency: 'Polish złoty'
    },
    {
      name: 'Portugal',
      capital: 'Lisbon',
      languages: ['Portuguese'],
      population: 10374822,
      flag: 'https://flagpedia.net/data/flags/w580/pt.webp',
      currency: 'Euro'
    },
    {
      name: 'Puerto Rico',
      capital: 'San Juan',
      languages: ['Spanish', 'English'],
      population: 3474182,
      flag: 'https://flagpedia.net/data/flags/w580/pr.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Qatar',
      capital: 'Doha',
      languages: ['Arabic'],
      population: 2587564,
      flag: 'https://flagpedia.net/data/flags/w580/qa.webp',
      currency: 'Qatari riyal'
    },
    {
      name: 'Republic of Kosovo',
      capital: 'Pristina',
      languages: ['Albanian', 'Serbian'],
      population: 1733842,
      flag: 'https://flagpedia.net/data/flags/w580/xk.webp',
      currency: 'Euro'
    },
    {
      name: 'Réunion',
      capital: 'Saint-Denis',
      languages: ['French'],
      population: 840974,
      flag: 'https://flagpedia.net/data/flags/w580/re.webp',
      currency: 'Euro'
    },
    {
      name: 'Romania',
      capital: 'Bucharest',
      languages: ['Romanian'],
      population: 19861408,
      flag: 'https://flagpedia.net/data/flags/w580/ro.webp',
      currency: 'Romanian leu'
    },
    {
      name: 'Russian Federation',
      capital: 'Moscow',
      languages: ['Russian'],
      population: 146599183,
      flag: 'https://flagpedia.net/data/flags/w580/ru.webp',
      currency: 'Russian ruble'
    },
    {
      name: 'Rwanda',
      capital: 'Kigali',
      languages: ['Kinyarwanda', 'English', 'French'],
      population: 11553188,
      flag: 'https://flagpedia.net/data/flags/w580/rw.webp',
      currency: 'Rwandan franc'
    },
    {
      name: 'Saint Barthélemy',
      capital: 'Gustavia',
      languages: ['French'],
      population: 9417,
      flag: 'https://flagpedia.net/data/flags/w580/bl.webp',
      currency: 'Euro'
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      capital: 'Jamestown',
      languages: ['English'],
      population: 4255,
      flag: 'https://flagpedia.net/data/flags/w580/sh.webp',
      currency: 'Saint Helena pound'
    },
    {
      name: 'Saint Kitts and Nevis',
      capital: 'Basseterre',
      languages: ['English'],
      population: 46204,
      flag: 'https://flagpedia.net/data/flags/w580/kn.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Saint Lucia',
      capital: 'Castries',
      languages: ['English'],
      population: 186000,
      flag: 'https://flagpedia.net/data/flags/w580/lc.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Saint Martin (French part)',
      capital: 'Marigot',
      languages: ['English', 'French', 'Dutch'],
      population: 36979,
      flag: 'https://flagpedia.net/data/flags/w580/mf.webp',
      currency: 'Euro'
    },
    {
      name: 'Saint Pierre and Miquelon',
      capital: 'Saint-Pierre',
      languages: ['French'],
      population: 6069,
      flag: 'https://flagpedia.net/data/flags/w580/pm.webp',
      currency: 'Euro'
    },
    {
      name: 'Saint Vincent and the Grenadines',
      capital: 'Kingstown',
      languages: ['English'],
      population: 109991,
      flag: 'https://flagpedia.net/data/flags/w580/vc.webp',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Samoa',
      capital: 'Apia',
      languages: ['Samoan', 'English'],
      population: 194899,
      flag: 'https://flagpedia.net/data/flags/w580/ws.webp',
      currency: 'Samoan tālā'
    },
    {
      name: 'San Marino',
      capital: 'City of San Marino',
      languages: ['Italian'],
      population: 33005,
      flag: 'https://flagpedia.net/data/flags/w580/sm.webp',
      currency: 'Euro'
    },
    {
      name: 'Sao Tome and Principe',
      capital: 'São Tomé',
      languages: ['Portuguese'],
      population: 187356,
      flag: 'https://flagpedia.net/data/flags/w580/st.webp',
      currency: 'São Tomé and Príncipe dobra'
    },
    {
      name: 'Saudi Arabia',
      capital: 'Riyadh',
      languages: ['Arabic'],
      population: 32248200,
      flag: 'https://flagpedia.net/data/flags/w580/sa.webp',
      currency: 'Saudi riyal'
    },
    {
      name: 'Scotland',
      capital: 'Edinburgh',
      languages: ['Engilish', 'Scots', 'Scottish Gaelic'],
      population: 5424800,
      flag: 'https://flagpedia.net/data/flags/w580/gb-sct.webp',
      currency: 'British pound'
    },
    {
      name: 'Senegal',
      capital: 'Dakar',
      languages: ['French'],
      population: 14799859,
      flag: 'https://flagpedia.net/data/flags/w580/sn.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Serbia',
      capital: 'Belgrade',
      languages: ['Serbian'],
      population: 7076372,
      flag: 'https://flagpedia.net/data/flags/w580/rs.webp',
      currency: 'Serbian dinar'
    },
    {
      name: 'Seychelles',
      capital: 'Victoria',
      languages: ['French', 'English'],
      population: 91400,
      flag: 'https://flagpedia.net/data/flags/w580/sc.webp',
      currency: 'Seychellois rupee'
    },
    {
      name: 'Sierra Leone',
      capital: 'Freetown',
      languages: ['English'],
      population: 7075641,
      flag: 'https://flagpedia.net/data/flags/w580/sl.webp',
      currency: 'Sierra Leonean leone'
    },
    {
      name: 'Singapore',
      capital: 'Singapore',
      languages: ['English', 'Malay', 'Tamil', 'Chinese'],
      population: 5535000,
      flag: 'https://flagpedia.net/data/flags/w580/sg.webp',
      currency: 'Brunei dollar'
    },
    {
      name: 'Sint Maarten (Dutch part)',
      capital: 'Philipsburg',
      languages: ['Dutch', 'English'],
      population: 38247,
      flag: 'https://flagpedia.net/data/flags/w580/sx.webp',
      currency: 'Netherlands Antillean guilder'
    },
    {
      name: 'Slovakia',
      capital: 'Bratislava',
      languages: ['Slovak'],
      population: 5426252,
      flag: 'https://flagpedia.net/data/flags/w580/sk.webp',
      currency: 'Euro'
    },
    {
      name: 'Slovenia',
      capital: 'Ljubljana',
      languages: ['Slovene'],
      population: 2064188,
      flag: 'https://flagpedia.net/data/flags/w580/si.webp',
      currency: 'Euro'
    },
    {
      name: 'Solomon Islands',
      capital: 'Honiara',
      languages: ['English'],
      population: 642000,
      flag: 'https://flagpedia.net/data/flags/w580/sb.webp',
      currency: 'Solomon Islands dollar'
    },
    {
      name: 'Somalia',
      capital: 'Mogadishu',
      languages: ['Somali', 'Arabic'],
      population: 11079000,
      flag: 'https://flagpedia.net/data/flags/w580/so.webp',
      currency: 'Somali shilling'
    },
    {
      name: 'South Africa',
      capital: 'Pretoria',
      languages: [
        'Afrikaans',
        'English',
        'Southern Ndebele',
        'Southern Sotho',
        'Swati',
        'Tswana',
        'Tsonga',
        'Venda',
        'Xhosa',
        'Zulu'
      ],
      population: 55653654,
      flag: 'https://flagpedia.net/data/flags/w580/za.webp',
      currency: 'South African rand'
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      capital: 'King Edward Point',
      languages: ['English'],
      population: 30,
      flag: 'https://flagpedia.net/data/flags/w580/gs.webp',
      currency: 'British pound'
    },
    {
      name: 'Korea (Republic of)',
      capital: 'Seoul',
      languages: ['Korean'],
      population: 50801405,
      flag: 'https://flagpedia.net/data/flags/w580/kr.webp',
      currency: 'South Korean won'
    },
    {
      name: 'South Sudan',
      capital: 'Juba',
      languages: ['English'],
      population: 12131000,
      flag: 'https://flagpedia.net/data/flags/w580/ss.webp',
      currency: 'South Sudanese pound'
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      languages: ['Spanish'],
      population: 46438422,
      flag: 'https://flagpedia.net/data/flags/w580/es.webp',
      currency: 'Euro'
    },
    {
      name: 'Sri Lanka',
      capital: 'Colombo',
      languages: ['Sinhalese', 'Tamil'],
      population: 20966000,
      flag: 'https://flagpedia.net/data/flags/w580/lk.webp',
      currency: 'Sri Lankan rupee'
    },
    {
      name: 'Sudan',
      capital: 'Khartoum',
      languages: ['Arabic', 'English'],
      population: 39598700,
      flag: 'https://flagpedia.net/data/flags/w580/sd.webp',
      currency: 'Sudanese pound'
    },
    {
      name: 'Suriname',
      capital: 'Paramaribo',
      languages: ['Dutch'],
      population: 541638,
      flag: 'https://flagpedia.net/data/flags/w580/sr.webp',
      currency: 'Surinamese dollar'
    },
    {
      name: 'Swaziland',
      capital: 'Lobamba',
      languages: ['English', 'Swati'],
      population: 1132657,
      flag: 'https://flagpedia.net/data/flags/w580/sz.webp',
      currency: 'Swazi lilangeni'
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      languages: ['Swedish'],
      population: 9894888,
      flag: 'https://flagpedia.net/data/flags/w580/se.webp',
      currency: 'Swedish krona'
    },
    {
      name: 'Switzerland',
      capital: 'Bern',
      languages: ['German', 'French', 'Italian'],
      population: 8341600,
      flag: 'https://flagpedia.net/data/flags/w580/ch.webp',
      currency: 'Swiss franc'
    },
    {
      name: 'Syrian Arab Republic',
      capital: 'Damascus',
      languages: ['Arabic'],
      population: 18564000,
      flag: 'https://flagpedia.net/data/flags/w580/sy.webp',
      currency: 'Syrian pound'
    },
    {
      name: 'Taiwan',
      capital: 'Taipei',
      languages: ['Chinese'],
      population: 23503349,
      flag: 'https://flagpedia.net/data/flags/w580/tw.webp',
      currency: 'New Taiwan dollar'
    },
    {
      name: 'Tajikistan',
      capital: 'Dushanbe',
      languages: ['Tajik', 'Russian'],
      population: 8593600,
      flag: 'https://flagpedia.net/data/flags/w580/tj.webp',
      currency: 'Tajikistani somoni'
    },
    {
      name: 'Tanzania, United Republic of',
      capital: 'Dodoma',
      languages: ['Swahili', 'English'],
      population: 55155000,
      flag: 'https://flagpedia.net/data/flags/w580/tz.webp',
      currency: 'Tanzanian shilling'
    },
    {
      name: 'Thailand',
      capital: 'Bangkok',
      languages: ['Thai'],
      population: 65327652,
      flag: 'https://flagpedia.net/data/flags/w580/th.webp',
      currency: 'Thai baht'
    },
    {
      name: 'Timor-Leste',
      capital: 'Dili',
      languages: ['Portuguese'],
      population: 1167242,
      flag: 'https://flagpedia.net/data/flags/w580/tl.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Togo',
      capital: 'Lomé',
      languages: ['French'],
      population: 7143000,
      flag: 'https://flagpedia.net/data/flags/w580/tg.webp',
      currency: 'West African CFA franc'
    },
    {
      name: 'Tonga',
      capital: "Nuku'alofa",
      languages: ['English', 'Tonga (Tonga Islands)'],
      population: 103252,
      flag: 'https://flagpedia.net/data/flags/w580/to.webp',
      currency: 'Tongan paʻanga'
    },
    {
      name: 'Trinidad and Tobago',
      capital: 'Port of Spain',
      languages: ['English'],
      population: 1349667,
      flag: 'https://flagpedia.net/data/flags/w580/tt.webp',
      currency: 'Trinidad and Tobago dollar'
    },
    {
      name: 'Tunisia',
      capital: 'Tunis',
      languages: ['Arabic'],
      population: 11154400,
      flag: 'https://flagpedia.net/data/flags/w580/tn.webp',
      currency: 'Tunisian dinar'
    },
    {
      name: 'Turkiye',
      capital: 'Ankara',
      languages: ['Turkish'],
      population: 83741053,
      flag: 'https://flagpedia.net/data/flags/w580/tr.webp',
      currency: 'Turkish lira'
    },
    {
      name: 'Turkmenistan',
      capital: 'Ashgabat',
      languages: ['Turkmen', 'Russian'],
      population: 4751120,
      flag: 'https://flagpedia.net/data/flags/w580/tm.webp',
      currency: 'Turkmenistan manat'
    },
    {
      name: 'Turks and Caicos Islands',
      capital: 'Cockburn Town',
      languages: ['English'],
      population: 31458,
      flag: 'https://flagpedia.net/data/flags/w580/tc.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Tuvalu',
      capital: 'Funafuti',
      languages: ['English'],
      population: 10640,
      flag: 'https://flagpedia.net/data/flags/w580/tv.webp',
      currency: 'Australian dollar'
    },
    {
      name: 'Uganda',
      capital: 'Kampala',
      languages: ['English', 'Swahili'],
      population: 33860700,
      flag: 'https://flagpedia.net/data/flags/w580/ug.webp',
      currency: 'Ugandan shilling'
    },
    {
      name: 'Ukraine',
      capital: 'Kiev',
      languages: ['Ukrainian'],
      population: 42692393,
      flag: 'https://flagpedia.net/data/flags/w580/ua.webp',
      currency: 'Ukrainian hryvnia'
    },
    {
      name: 'United Arab Emirates',
      capital: 'Abu Dhabi',
      languages: ['Arabic'],
      population: 9856000,
      flag: 'https://flagpedia.net/data/flags/w580/ae.webp',
      currency: 'United Arab Emirates dirham'
    },
    {
      name: 'United Kingdom of Great Britain',
      capital: 'London',
      languages: ['English'],
      population: 65110000,
      flag: 'https://flagpedia.net/data/flags/w580/gb.webp',
      currency: 'British pound'
    },
    {
      name: 'United States of America',
      capital: 'Washington, D.C.',
      languages: ['English'],
      population: 323947000,
      flag: 'https://flagpedia.net/data/flags/w580/us.webp',
      currency: 'United States dollar'
    },
    {
      name: 'Uruguay',
      capital: 'Montevideo',
      languages: ['Spanish'],
      population: 3480222,
      flag: 'https://flagpedia.net/data/flags/w580/uy.webp',
      currency: 'Uruguayan peso'
    },
    {
      name: 'Uzbekistan',
      capital: 'Tashkent',
      languages: ['Uzbek', 'Russian'],
      population: 31576400,
      flag: 'https://flagpedia.net/data/flags/w580/uz.webp',
      currency: "Uzbekistani so'm"
    },
    {
      name: 'Vanuatu',
      capital: 'Port Vila',
      languages: ['Bislama', 'English', 'French'],
      population: 277500,
      flag: 'https://flagpedia.net/data/flags/w580/vu.webp',
      currency: 'Vanuatu vatu'
    },
    {
      name: 'Venezuela (Bolivarian Republic of)',
      capital: 'Caracas',
      languages: ['Spanish'],
      population: 31028700,
      flag: 'https://flagpedia.net/data/flags/w580/ve.webp',
      currency: 'Venezuelan bolívar'
    },
    {
      name: 'Vietnam (Socialist Republic of)',
      capital: 'Hanoi',
      languages: ['Vietnamese'],
      population: 92700000,
      flag: 'https://flagpedia.net/data/flags/w580/vn.webp',
      currency: 'Vietnamese đồng'
    },
    {
      name: 'Wales',
      capital: 'Cardiff',
      languages: ['Welsh, English'],
      population: 3139000,
      flag: 'https://flagpedia.net/data/flags/w580/gb-wls.webp',
      currency: 'British pound'
    },
    {
      name: 'Wallis and Futuna',
      capital: 'Mata-Utu',
      languages: ['French'],
      population: 11750,
      flag: 'https://flagpedia.net/data/flags/w580/wf.webp',
      currency: 'CFP franc'
    },
    {
      name: 'Western Sahara',
      capital: 'El Aaiún',
      languages: ['Spanish'],
      population: 510713,
      flag: 'https://flagpedia.net/data/flags/w580/eh.webp',
      currency: 'Moroccan dirham'
    },
    {
      name: 'Yemen',
      capital: "Sana'a",
      languages: ['Arabic'],
      population: 27478000,
      flag: 'https://flagpedia.net/data/flags/w580/ye.webp',
      currency: 'Yemeni rial'
    },
    {
      name: 'Zambia',
      capital: 'Lusaka',
      languages: ['English'],
      population: 15933883,
      flag: 'https://flagpedia.net/data/flags/w580/zm.webp',
      currency: 'Zambian kwacha'
    },
    {
      name: 'Zimbabwe',
      capital: 'Harare',
      languages: ['English', 'Shona', 'Northern Ndebele'],
      population: 14240168,
      flag: 'https://flagpedia.net/data/flags/w580/zw.webp',
      currency: 'Botswana pula'
    }
]