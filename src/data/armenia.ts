export interface NavLink {
  label: string;
  path: string;
}

export interface Region {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  mainCity: string;
  population: string;
  area: string;
  image: string;
}

export interface Destination {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  region: string;
  category: string;
  facts: { label: string; value: string }[];
  bestTime: string;
  unesco: boolean;
  gallery?: string[];
  longDescription?: string;
  interestingFacts?: string[];
  location?: {
    place: string;
    region: string;
    country: string;
  };
}

export interface Dish {
  name: string;
  origin: string;
  description: string;
  image: string;
  type: string;
}

export interface CultureCard {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

export interface HistoryEvent {
  year: string;
  era: string;
  title: string;
  description: string;
  significance: 'foundational' | 'golden' | 'tragedy' | 'revival';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface NationalSymbol {
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  title: string;
  caption: string;
  category: string;
  location: string;
}

export interface GalleryCategory {
  label: string;
  value: string;
}

export const navLinks: NavLink[] = [
  { label: 'Գլխավոր', path: '/' },
  { label: 'Մարզեր', path: '/regions' },
  { label: 'Ուղղություններ', path: '/destinations' },
  { label: 'Պատմություն', path: '/history' },
  { label: 'Մշակույթ', path: '/culture' },
  { label: 'Խոհանոց', path: '/cuisine' },
  { label: 'Պատկերասրահ', path: '/gallery' },
  { label: 'Մեր մասին', path: '/about' },
  { label: 'Կապ', path: '/contact' },
];

export const galleryCategories: GalleryCategory[] = [
  { label: 'Բոլորը', value: 'all' },
  { label: 'Բնություն', value: 'nature' },
  { label: 'Վանքեր', value: 'monastery' },
  { label: 'Քաղաքներ', value: 'city' },
  { label: 'Մշակույթ', value: 'culture' },
];

export const heroImage = 'https://images.pexels.com/photos/35863549/pexels-photo-35863549.jpeg';

export const regions: Region[] = [
  {
    slug: 'yerevan',
    name: 'Երևան',
    tagline: 'Մայրաքաղաք',
    description: 'Աշխարհի ամենահին քաղաքներից մեկը՝ հիմնադրված մ.թ.ա. 782 թվականին։ Վեհ Արարատի տեսարանով, վարդագույն տուֆի շենքերով և աշխույժ մշակութային կյանքով մայրաքաղաք։',
    highlights: ['Հանրապետության հրապարակ', 'Մատենադարան', 'Կասկադ', 'Օպերայի թատրոն'],
    mainCity: 'Երևան',
    population: '1.09 մլն',
    area: '223 կմ²',
    image: 'https://images.pexels.com/photos/29206201/pexels-photo-29206201.jpeg',
  },
  {
    slug: 'aragatsotn',
    name: 'Արագածոտն',
    tagline: 'Արագածի ստորոտին',
    description: 'Արագած լեռան ստորոտին գտնվող մարզ՝ հարուստ պատմամշակութային ժառանգությամբ։ Այստեղ գտնվում են Ամբերդ ամրոցը և Սաղմոսավանքը։',
    highlights: ['Ամբերդ ամրոց', 'Սաղմոսավանք', 'Օշական', 'Բյուրական'],
    mainCity: 'Աշտարակ',
    population: '126 հզ.',
    area: '2,756 կմ²',
    image: 'https://images.pexels.com/photos/9585095/pexels-photo-9585095.jpeg',
  },
  {
    slug: 'ararat',
    name: 'Արարատ',
    tagline: 'Արարատի հայացք',
    description: 'Արարատ լեռան հայացքով մարզ, որտեղ գտնվում է Խոր Վիրապը՝ հայ քրիստոնեության խորհրդանիշ սրբավայրը։ Հայտնի է նաև իր գինու և ծիրանի արտադրությամբ։',
    highlights: ['Խոր Վիրապ', 'Արարատ լեռ', 'Արտաշատ', 'Դվին'],
    mainCity: 'Արտաշատ',
    population: '247 հզ.',
    area: '2,096 կմ²',
    image: 'https://images.pexels.com/photos/11885453/pexels-photo-11885453.jpeg',
  },
  {
    slug: 'armavir',
    name: 'Արմավիր',
    tagline: 'Հնագույն մայրաքաղաքների երկիր',
    description: 'Մարզ, որտեղ գտնվում են հայոց հնագույն մայրաքաղաքների ավերակները՝ Արմավիրը, Էջմիածինը և Սարդարապատը։ Հայ քրիստոնեության օրրանը։',
    highlights: ['Էջմիածնի վանք', 'Սարդարապատ', 'Մենուայի ջրանցք', 'Ծաղկաձոր'],
    mainCity: 'Արմավիր',
    population: '265 հզ.',
    area: '1,242 կմ²',
    image: 'https://images.pexels.com/photos/33803507/pexels-photo-33803507.jpeg',
  },
  {
    slug: 'gegharkunik',
    name: 'Գեղարքունիք',
    tagline: 'Սևանա լճի երկիր',
    description: 'Սևանա լճով և վեհ լեռներով օրորվող մարզ։ Լիճը Կովկասի ամենամեծ քաղցրահամ ջրամբարն է՝ չքնաղ կղզի-վանքերով։',
    highlights: ['Սևանա լիճ', 'Սևանավանք', 'Հայրավանք', 'Նորատուսի խաչքարեր'],
    mainCity: 'Գավառ',
    population: '216 հզ.',
    area: '5,348 կմ²',
    image: 'https://images.pexels.com/photos/28543118/pexels-photo-28543118.jpeg',
  },
  {
    slug: 'kotayk',
    name: 'Կոտայք',
    tagline: 'Գառնիի կիրճ',
    description: 'Կենտրոնական մարզ՝ Գառնիի հեթանոսական տաճարով և Գեղարդի վանքով։ Հայտնի է նաև իր հանքային ջրերով և Չարենցի կիրճի անզուգական տեսարաններով։',
    highlights: ['Գառնիի տաճար', 'Գեղարդի վանք', 'Չարենցի կիրճ', 'Ծաղկաձոր'],
    mainCity: 'Հրազդան',
    population: '249 հզ.',
    area: '2,086 կմ²',
    image: 'https://images.pexels.com/photos/20446169/pexels-photo-20446169.jpeg',
  },
  {
    slug: 'lori',
    name: 'Լոռի',
    tagline: 'Կանաչ լեռների երկիր',
    description: 'Հյուսիսային մարզ՝ անտառապատ լեռներով, վանքերով և առուներով։ Այստեղ են գտնվում Հաղպատի և Սանահինի վանքերը՝ ՅՈՒՆԵՍԿՈ-ի ժառանգության ցանկում։',
    highlights: ['Հաղպատի վանք', 'Սանահինի վանք', 'Ստեփանավան', 'Ձորագյուղ'],
    mainCity: 'Վանաձոր',
    population: '219 հզ.',
    area: '3,789 կմ²',
    image: 'https://images.pexels.com/photos/14891335/pexels-photo-14891335.jpeg',
  },
  {
    slug: 'shirak',
    name: 'Շիրակ',
    tagline: 'Հյուսիսային դարպաս',
    description: 'Հայաստանի հյուսիսային մարզը՝ Գյումրի քաղաքով, որը հայտնի է իր յուրահատուկ ճարտարապետությամբ և ժողովրդական արվեստով։ Հարուստ է պատմական վանքերով։',
    highlights: ['Գյումրի', 'Հարիճ լիճ', 'Մարմաշեն', 'Անիի ավերակներ'],
    mainCity: 'Գյումրի',
    population: '251 հզ.',
    area: '2,681 կմ²',
    image: 'https://images.pexels.com/photos/19216317/pexels-photo-19216317.jpeg',
  },
  {
    slug: 'syunik',
    name: 'Սյունիք',
    tagline: 'Քարանձավների երկիր',
    description: 'Հայաստանի ամենահարավային մարզը՝ վեհ լեռներով, խոր կիրճերով և Թաթևի վանքով։ Կան նաև Քարահունջը և Զորաց քարերի առեղծվածային համալիրը։',
    highlights: ['Թաթևի վանք', 'Որոտնավանք', 'Քարահունջ', 'Սիսիան'],
    mainCity: 'Կապան',
    population: '132 հզ.',
    area: '4,506 կմ²',
    image: 'https://images.pexels.com/photos/11885440/pexels-photo-11885440.jpeg',
  },
  {
    slug: 'vayots-dzor',
    name: 'Վայոց Ձոր',
    tagline: 'Գինու օրրան',
    description: 'Հայաստանի ամենաքիչ բնակեցված մարզը՝ խոր կիրճերով և աշխարհի ամենահին գինեգործարանով Արենիում։ Այստեղ է գտնվում Նորավանքը՝ վեհ ժայռերի մեջ։',
    highlights: ['Նորավանք', 'Արենիի քարանձավ', 'Ջերմուկ', 'Սպանդարյան ջրամբար'],
    mainCity: 'Եղեգնաձոր',
    population: '52 հզ.',
    area: '2,308 կմ²',
    image: 'https://images.pexels.com/photos/17958105/pexels-photo-17958105.jpeg',
  },
  {
    slug: 'tavush',
    name: 'Տավուշ',
    tagline: 'Անտառապատ եզր',
    description: 'Հյուսիս-արևելյան մարզ՝ խիտ անտառներով, բլրաշատ լանդշաֆտով և գեղեցիկ վանքերով։ Հայտնի է Գոշավանքով և Դիլիջանի ազգային պարկով։',
    highlights: ['Գոշավանք', 'Դիլիջան', 'Աղավնավանք', 'Հաղարծին'],
    mainCity: 'Իջևան',
    population: '128 հզ.',
    area: '2,704 կմ²',
    image: 'https://images.pexels.com/photos/17501678/pexels-photo-17501678.jpeg',
  },
];

export const destinations: Destination[] = [
  {
    slug: 'garni-temple',
    name: 'Գառնիի հեթանոսական տաճար',
    shortDesc: 'Հայաստանի միակ պահպանված հեթանոսական տաճարը',
    description: 'Մ.թ. 1-ին դարում կառուցված հունա-հռոմեական ոճի տաճար՝ նվիրված արևի աստված Միհրին։ Գտնվում է Ազատ գետի կիրճի վեհ ժայռերի վրա և հանդիսանում է հայ հեթանոսական ճարտարապետության եզակի օրինակ։',
    image: 'https://images.pexels.com/photos/20446169/pexels-photo-20446169.jpeg',
    region: 'Կոտայք',
    category: 'Պատմական',
    facts: [
      { label: 'Կառուցում', value: 'Մ.թ. 1-ին դար' },
      { label: 'Ոճ', value: 'Հունա-հռոմեական' },
      { label: 'Նվիրված', value: 'Արևի աստված Միհր' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: false,
  },
  {
    slug: 'geghard-monastery',
    name: 'Գեղարդի վանք',
    shortDesc: 'Ժայռի մեջ փորված վանքային համալիր',
    description: 'Միջնադարյան վանքային համալիր, որի մի մասը փորված է միակտոր ժայռի մեջ։ Գեղարդ անունը վերաբերում է այն նիզակին, որով խոցվել է Քրիստոսը և ենթադրաբար բերվել է այստեղ։',
    image: 'https://images.pexels.com/photos/35224032/pexels-photo-35224032.jpeg',
    region: 'Կոտայք',
    category: 'Վանք',
    facts: [
      { label: 'Հիմնադրում', value: '4-րդ դար' },
      { label: 'Ճարտարապետություն', value: 'Ժայռափոր' },
      { label: 'Կարգ', value: 'ՅՈՒՆԵՍԿՈ-ի ժառանգություն' },
    ],
    bestTime: 'Ամբողջ տարին',
    unesco: true,
  },
  {
    slug: 'khor-virap',
    name: 'Խոր Վիրապ',
    shortDesc: 'Հայ քրիստոնեության խորհրդանիշ սրբավայրը',
    description: 'Արարատ լեռան ստորոտին գտնվող վանք, որտեղ Գրիգոր Լուսավորիչը բանտարկվել է 13 տարի։ Այստեղից բացվում է Արարատ լեռան ամենագեղեցիկ տեսարանը։',
    image: 'https://images.pexels.com/photos/11885453/pexels-photo-11885453.jpeg',
    region: 'Արարատ',
    category: 'Վանք',
    facts: [
      { label: 'Հիմնադրում', value: '642 թ.' },
      { label: 'Նշանակություն', value: 'Ուխտագնացության վայր' },
      { label: 'Տեսարան', value: 'Արարատ լեռ' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: false,
  },
  {
    slug: 'lake-sevan',
    name: 'Սևանա լիճ',
    shortDesc: 'Կովկասի ամենամեծ քաղցրահամ լիճը',
    description: 'Ծովի մակարդակից 1900 մ բարձրության վրա գտնվող կապույտ ջրամբար՝ շրջապատված լեռնաշղթաներով։ Լճի վրա գտնվում է Սևանավանքը՝ 9-րդ դարի վանքային համալիրը։',
    image: 'https://images.pexels.com/photos/28543118/pexels-photo-28543118.jpeg',
    region: 'Գեղարքունիք',
    category: 'Բնություն',
    facts: [
      { label: 'Բարձրություն', value: '1900 մ' },
      { label: 'Մակերես', value: '1,244 կմ²' },
      { label: 'Խորություն', value: '83 մ' },
    ],
    bestTime: 'Ամառ',
    unesco: false,
  },
  {
    slug: 'tatev-monastery',
    name: 'Թաթևի վանք',
    shortDesc: 'Վեհ վանք կիրճի եզրին',
    description: '9-րդ դարում հիմնադրված վանքային համալիր՝ Որոտանի կիրջի վեհ ժայռերի վրա։ Հասնելու համար կարելի է օգտվել աշխարհի ամենաերկար ճոպանուղով՝ «Թևեր Թաթևի»-ով։',
    image: 'https://images.pexels.com/photos/11885440/pexels-photo-11885440.jpeg',
    region: 'Սյունիք',
    category: 'Վանք',
    facts: [
      { label: 'Հիմնադրում', value: '9-րդ դար' },
      { label: 'Ճոպանուղի', value: '5752 մ երկար' },
      { label: 'Դիրք', value: 'Կիրճի եզրին' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: false,
  },
  {
    slug: 'noravank',
    name: 'Նորավանք',
    shortDesc: 'Կարմիր ժայռերի մեջ թաքնված վանք',
    description: '13-րդ դարի վանքային համալիր՝ կարմիր ժայռերի անսովոր կիրճում։ Հայտնի է իր յուրահատուկ աստիճաններով և փորագրություններով, որոնք պատկերում են հայ ոստիկաններին։',
    image: 'https://images.pexels.com/photos/17958105/pexels-photo-17958105.jpeg',
    region: 'Վայոց Ձոր',
    category: 'Վանք',
    facts: [
      { label: 'Հիմնադրում', value: '13-րդ դար' },
      { label: 'Ճարտարապետ', value: 'Մոմիկ' },
      { label: 'Շրջապատ', value: 'Կարմիր ժայռեր' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: false,
  },
  {
    slug: 'echmiadzin',
    name: 'Էջմիածնի վանք',
    shortDesc: 'Հայ առաքելական եկեղեցու մայր աթոռը',
    description: 'Աշխարհի ամենահին պետական եկեղեցին՝ հիմնադրված 301 թվականին Գրիգոր Լուսավորչի կողմից։ Հանդիսանում է հայ առաքելական եկեղեցու հոգևոր կենտրոնը։',
    image: 'https://images.pexels.com/photos/33803507/pexels-photo-33803507.jpeg',
    region: 'Արմավիր',
    category: 'Վանք',
    facts: [
      { label: 'Հիմնադրում', value: '301 թ.' },
      { label: 'Կարգ', value: 'ՅՈՒՆԵՍԿՈ-ի ժառանգություն' },
      { label: 'Նշանակություն', value: 'Մայր աթոռ' },
    ],
    bestTime: 'Ամբողջ տարին',
    unesco: true,
  },
  {
    slug: 'haghpat',
    name: 'Հաղպատի վանք',
    shortDesc: 'Միջնադարյան գիտության կենտրոն',
    description: '10-րդ դարում հիմնադրված վանքային համալիր՝ Լոռիի անտառապատ լեռներում։ Միջնադարում եղել է գիտության և կրթության կարևոր կենտրոն։',
    image: 'https://images.pexels.com/photos/36096818/pexels-photo-36096818.jpeg',
    region: 'Լոռի',
    category: 'Վանք',
    facts: [
      { label: 'Հիմնադրում', value: '10-րդ դար' },
      { label: 'Կարգ', value: 'ՅՈՒՆԵՍԿՈ-ի ժառանգություն' },
      { label: 'Դիրք', value: 'Անտառապատ լեռներ' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: true,
  },
  {
    slug: 'dilijan',
    name: 'Դիլիջանի ազգային պարկ',
    shortDesc: 'Կանաչ անտառների և բուժիչ կլիմայի երկիր',
    description: 'Տավուշի մարզում գտնվող ազգային պարկ՝ խիտ անտառներով, բուժիչ հանքային ջրերով և հանգիստ լճերով։ Կատարյալ վայր է բնության մեջ հանգստի համար։',
    image: 'https://images.pexels.com/photos/4638386/pexels-photo-4638386.jpeg',
    region: 'Տավուշ',
    category: 'Բնություն',
    facts: [
      { label: 'Մակերես', value: '33,279 հա' },
      { label: 'Բուսատեսակներ', value: '1102 տեսակ' },
      { label: 'Կլիմա', value: 'Բուժիչ' },
    ],
    bestTime: 'Ամառ — Աշուն',
    unesco: false,
  },
  {
    slug: 'areni-cave',
    name: 'Արենիի քարանձավ',
    shortDesc: 'Աշխարհի ամենահին գինեգործարանի վայրը',
    description: 'Քարանձավ, որտեղ հայտնաբերվել են 6100 տարվա հնություն ունեցող գինու ամառ ու գինեգործական սարքավորումներ։ Հայտնաբերվել է նաև 5,500 տարվա հնություն ունեցող կաշվե կոշիկ։',
    image: 'https://images.pexels.com/photos/12625834/pexels-photo-12625834.jpeg',
    region: 'Վայոց Ձոր',
    category: 'Պատմական',
    facts: [
      { label: 'Հնություն', value: '6100 տարի' },
      { label: 'Գտածո', value: 'Ամենահին գինեգործարան' },
      { label: 'Կոշիկ', value: '5500 տարվա հնություն' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: false,
  },
  {
    slug: 'myasnikyan',
    name: 'Մյասնիկյան',
    shortDesc: 'Խաղաղ գյուղ Արմավիրի մարզում',
    description: 'Մյասնիկյան գյուղը գտնվում է Արմավիրի մարզում՝ շրջապատված բարեբեր գյուղատնտեսական հողերով և կանաչ դաշտերով։ Գյուղն առանձնանում է իր խաղաղ մթնոլորտով, մտերմիկ համայնքով և բնության գրկում ապրելու յուրահատուկ զգացողությամբ։',
    image: 'https://images.pexels.com/photos/5273005/pexels-photo-5273005.jpeg',
    region: 'Արմավիր',
    category: 'Բնություն',
    facts: [
      { label: 'Մարզ', value: 'Արմավիր' },
      { label: 'Երկիր', value: 'Հայաստան' },
      { label: 'Տեսակ', value: 'Գյուղ' },
    ],
    bestTime: 'Գարուն — Աշուն',
    unesco: false,
    gallery: [
      'https://images.pexels.com/photos/5273005/pexels-photo-5273005.jpeg',
      'https://images.pexels.com/photos/37007297/pexels-photo-37007297.jpeg',
      'https://images.pexels.com/photos/33865566/pexels-photo-33865566.jpeg',
      'https://images.pexels.com/photos/11987205/pexels-photo-11987205.jpeg',
      'https://images.pexels.com/photos/37380682/pexels-photo-37380682.jpeg',
    ],
    longDescription: 'Մյասնիկյան գյուղը ներկայացնում է հայկական գյուղական կյանքի իսկական դեմքը՝ իր խաղաղ ու սահմանափակ ապրելակերպով, մարդկանց մտերմիկ հարաբերություններով և բնության հետ ներդաշնակ գոյակցությամբ։ Գյուղը գտնվում է Արմավիրի մարզում՝ Արարատյան դաշտի ընդարձակ հարթավայրում, որտեղ բարեբեր հողերն ու բարենպաստ կլիման հնարավորություն են տալիս աճեցնել ամենատարբեր մշակաբույսեր։ Գյուղի շուրջը տարածվում են ոսկեգույն ցորենի դաշտեր, խաղողի այգիներ և պտղատու ծառեր, որոնք գարնանը պատվում են սպիտակ ու վարդագույն ծաղիկներով, իսկ աշնանը պարգևում են առատ բերք։ Տեղացիները հպարտ են իրենց հողի և ավանդույթների հանդեպ. այստեղ դարեր շարունակ պահպանվել են գյուղատնտեսական մշակույթի ավանդական եղանակները։ Գյուղի խաղաղ մթնոլորտը հանգստություն է տալիս հոգուն՝ հեռու քաղաքի աղմուկից ու շունչը կտրող տեմպից։ Այստեղ կարելի է վայելել մաքուր օդը, լսել թռչունների երգը և զգալ հայկական գյուղի ջերմ հյուրընկալությունը։',
    interestingFacts: [
      'Գյուղը գտնվում է Արմավիրի մարզում՝ Արարատյան դաշտի բարեբեր հարթավայրում, որը Հայաստանի ամենապտղաբեր շրջաններից մեկն է։',
      'Շրջակա գյուղատնտեսական հողերում աճեցվում են ցորեն, խաղող, ծիրան և այլ մշակաբույսեր, որոնք ապահովում են տեղացիների կենսամակարդակը։',
      'Գյուղի համայնքը փոքր է ու մտերմիկ. բոլորը ճանաչում են իրար և պահպանում են հարևանական ու բարեկամական ավանդական կապերը։',
      'Մյասնիկյանն իր անունն ստացել է հայ պետական գործիչ Ալեքսանդր Մյասնիկյանի պատվին, որը մեծ դեր է խաղացել Հայաստանի պատմության մեջ։',
      'Գյուղի խաղաղ մթնոլորտն ու բնական գեղեցկությունը իդեալական են բնության գիրկն ընդունվելու և քաղաքի աղմուկից հանգստանալու համար։',
    ],
    location: {
      place: 'Մյասնիկյան գյուղ',
      region: 'Արմավիր',
      country: 'Հայաստան',
    },
  },
];

export const dishes: Dish[] = [
  {
    name: 'Խորոված',
    origin: 'Դասական հայկական',
    description: 'Համեղ մսով և բանջարեղենով ուտեստ՝ պատրաստված խորովման ձևով։ Միսը համեմվում է համեմումներով և խորովվում փայտի կամ ածուխի վրա։',
    image: 'https://images.pexels.com/photos/8413628/pexels-photo-8413628.jpeg',
    type: 'Հիմնական ուտեստ',
  },
  {
    name: 'Տոլմա',
    origin: 'Ավանդական',
    description: 'Խաղողի տերևների մեջ փաթաթված բրնձով և համեմումներով միս։ Հայկական խոհանոցի ամենաճանաչված ուտեստներից մեկն է։',
    image: 'https://images.pexels.com/photos/6089620/pexels-photo-6089620.jpeg',
    type: 'Հիմնական ուտեստ',
  },
  {
    name: 'Հարիսա',
    origin: 'Հնագույն ավանդույթ',
    description: 'Ցորենի և մսի խյուս՝ եփված ժամերով մինչև համասեռ զանգված։ Ունի հազարամյակների պատմություն և մատուցվում է տոնական առիթներով։',
    image: 'https://images.pexels.com/photos/7352787/pexels-photo-7352787.jpeg',
    type: 'Հիմնական ուտեստ',
  },
  {
    name: 'Լավաշ',
    origin: 'Ազգային հաց',
    description: 'Բարակ և փափկաբույս հաց՝ թխված թոնիրում։ Հայկական սեղանի անբաժանելի մասն է և գրանցված է ՅՈՒՆԵՍԿՈ-ի ոչ նյութական ժառանգության ցանկում։',
    image: 'https://images.pexels.com/photos/37039832/pexels-photo-37039832.jpeg',
    type: 'Հաց',
  },
  {
    name: 'Փախլավա',
    origin: 'Ավանդական աղանդեր',
    description: 'Շերտավոր խմորով և ընկույզով քաղցրավանդ, որը թխվում է մեղրով օշարակով։ Հայտնի է իր նրբահամ համով և խրթխրթան կառուցվածքով։',
    image: 'https://images.pexels.com/photos/20183032/pexels-photo-20183032.jpeg',
    type: 'Աղանդեր',
  },
  {
    name: 'Արարատ կոնյակ',
    origin: 'Ազգային խմիչք',
    description: 'Հայտնի հայկական կոնյակ՝ արտադրված հայկական որթատեսակներից և հնեցված կաղնեի տակառներում։ Արժանացել է բազմաթիվ միջազգային մրցանակների։',
    image: 'https://images.pexels.com/photos/7254847/pexels-photo-7254847.jpeg',
    type: 'Խմիչք',
  },
  {
    name: 'Թան',
    origin: 'Ավանդական ըմպելիք',
    description: 'Սառը խմորված կաթնային ըմպելիք՝ պատրաստված մածունից և ջրից՝ աղի և համեմումների հավելմամբ։ Կատարյալ է շոգ օրերին։',
    image: 'https://images.pexels.com/photos/18142603/pexels-photo-18142603.jpeg',
    type: 'Խմիչք',
  },
  {
    name: 'Ղափամա',
    origin: 'Տոնական ուտեստ',
    description: 'Դդումի մեջ լցոնված բրինձ, միս և չրեր՝ խորովված ջեռոցում։ Մատուցվում է Նոր տարվա և Սուրբ ծննդյան տոներին։',
    image: 'https://images.pexels.com/photos/5847941/pexels-photo-5847941.jpeg',
    type: 'Տոնական ուտեստ',
  },
];

export const cultureCards: CultureCard[] = [
  {
    title: 'Խաչքարի արվեստը',
    category: 'Քանդակագործություն',
    year: '9-21-րդ դար',
    description: 'Խաչքարները՝ քարե խաչերով սալերը, հայ միջնադարյան արվեստի եզակի երևույթ են։ Յուրաքանչյուր խաչքար անկրկնելի է իր զարդանախշով և փորագրությամբ։',
    image: 'https://images.pexels.com/photos/32281166/pexels-photo-32281166.jpeg',
  },
  {
    title: 'Հայկական գորգագործություն',
    category: 'Արհեստ',
    year: 'Հնագույն ժամանակներից',
    description: 'Հայկական գորգերը հայտնի են իրենց երկրաչափական նախշերով և հարուստ գունային լուծումներով։ Միջնադարում արտահանվել են ողջ աշխարհում։',
    image: 'https://images.pexels.com/photos/19515084/pexels-photo-19515084.jpeg',
  },
  {
    title: 'Կոմիտաս և հայկական երաժշտություն',
    category: 'Երաժշտություն',
    year: '19-20-րդ դար',
    description: 'Կոմիտասը հայ դասական երաժշտության հիմնադիրն է։ Նա հավաքել և գրառել է հազարավոր հայկական ժողովրդական մեղեդիներ՝ դրանք դարձնելով համաշխարհային ժառանգություն։',
    image: 'https://images.pexels.com/photos/18767553/pexels-photo-18767553.jpeg',
  },
  {
    title: 'Մեսրոպ Մաշտոցի այբուբեն',
    category: 'Գրականություն',
    year: '405 թ.',
    description: 'Հայոց այբուբենը ստեղծվել է 405 թվականին Մեսրոպ Մաշտոցի կողմից։ Այն բաղկացած է 36 տառից և ծառայում է հայ ժողովրդին արդեն 16 դար։',
    image: 'https://images.pexels.com/photos/12563778/pexels-photo-12563778.jpeg',
  },
  {
    title: 'Հայկական պարեր',
    category: 'Պարարվեստ',
    year: 'Հնագույն ժամանակներից',
    description: 'Հայկական ժողովրդական պարերը՝ Քոչարին, Շորորը, Յարխուշտան, արտացոլում են հայ ժողովրդի ոգին և պատմությունը։ Պարվում են տոներին և համայնքային միջոցառումներին։',
    image: 'https://images.pexels.com/photos/29057447/pexels-photo-29057447.jpeg',
  },
  {
    title: 'Թատրոն և կինո',
    category: 'Թատերարվեստ',
    year: '19-20-րդ դար',
    description: 'Հայ թատրոնն ունի հազարամյակների պատմություն, սկսած հին հայկական թատերական ավանդույթներից։ Հայկական կինոն հայտնի է Սերգեյ Փարաջանովի գլուխգործոցներով։',
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg',
  },
];

export const historyEvents: HistoryEvent[] = [
  {
    year: 'Մ.թ.ա. 4000',
    era: 'նախապատմական',
    title: 'Մենհիրներ և դոլմեններ',
    description: 'Հայկական բարձրավանդակում կառուցվում են առաջին մեգալիթյան կառույցները՝ աշխարհի ամենահին աստղագիտական դիտարկումների վայրերից մեկը։',
    significance: 'foundational',
  },
  {
    year: 'Մ.թ.ա. 2492',
    era: 'հիմնադրամ',
    title: 'Հայկ Նահապետ և Հայաստանի անվանակոչություն',
    description: 'Ըստ ավանդության՝ Հայկ Նահապետը հաղթում է Բել արքային և հիմնադրում հայոց պետությունը։ Նրա անունից էլ առաջացել է «Հայաստան» անունը։',
    significance: 'foundational',
  },
  {
    year: 'Մ.թ.ա. 782',
    era: 'Ուրարտու',
    title: 'Երևանի հիմնադրում',
    description: 'Արգիշտի Ա արքան հիմնադրում է Էրեբունի ամրոցը՝ ժամանակակից Երևանի նախատիպը։ Այսպիսով Երևանը դառնում է աշխարհի ամենահին քաղաքներից մեկը։',
    significance: 'foundational',
  },
  {
    year: 'Մ.թ.ա. 95 — Մ.թ. 55',
    era: 'Մեծ Հայք',
    title: 'Տիգրան Մեծի հզորությունը',
    description: 'Տիգրան Բ Մեծի օրոք Հայաստանը դառնում է հզորագույն կայսրություն՝ Կասպից ծովից մինչև Միջերկրական։ Այս շրջանը հայտնի է որպես հայոց ոսկեդար։',
    significance: 'golden',
  },
  {
    year: '301',
    era: 'Քրիստոնեության ընդունում',
    title: 'Առաջին քրիստոնյա պետությունը',
    description: 'Տրդատ Գ արքան պետական մակարդակով ընդունում է քրիստոնեությունը՝ Գրիգոր Լուսավորչի կողմից մկրտվելով։ Հայաստանը դառնում է աշխարհի առաջին քրիստոնեական պետությունը։',
    significance: 'foundational',
  },
  {
    year: '405',
    era: 'Ոսկեդար',
    title: 'Հայոց այբուբենի ստեղծումը',
    description: 'Մեսրոպ Մաշտոցը ստեղծում է հայոց այբուբենը՝ հնարավորություն ընձյուղելով հայ գրականության և գիտության զարգացումը։ Սկսվում է հայ գրականության ոսկեդարը։',
    significance: 'golden',
  },
  {
    year: '9-11-րդ դար',
    era: 'Բագրատունիներ',
    title: 'Բագրատունյաց թագավորության ծաղկումը',
    description: 'Բագրատունիների արքայատոհմի օրոք Հայաստանն ապրում է տնտեսական և մշակութային ծաղկում։ Կառուցվում են Անիի տաճարները և հարյուրավոր վանքեր։',
    significance: 'golden',
  },
  {
    year: '1915',
    era: 'Ողբերգություն',
    title: 'Հայոց ցեղասպանությունը',
    description: 'Օսմանյան կայսրությունում իրականացվում է հայերի ցեղասպանությունը, որի զոհ է դառնում 1.5 միլիոն հայ։ Այս ողբերգությունը խորը հետք է թողնում հայ ժողովրդի պատմության վրա։',
    significance: 'tragedy',
  },
  {
    year: '1918',
    era: 'Վերածնունդ',
    title: 'Առաջին Հանրապետություն',
    description: 'Սարդարապատի հերոսական ճակատամարտից հետո հռչակվում է Հայաստանի Առաջին Հանրապետությունը՝ վերականգնելով հայոց պետականությունը դարերի ընդմիջումից հետո։',
    significance: 'revival',
  },
  {
    year: '1991',
    era: 'Անկախություն',
    title: 'Անկախության վերականգնում',
    description: 'Խորհրդային Միության փլուզման արդյունքում Հայաստանը հանրաքվեի միջոցով հռչակում է անկախությունը՝ սկսելով պետականության նոր էջը։',
    significance: 'revival',
  },
];

export const timeline: TimelineItem[] = [
  { year: 'Մ.թ.ա. 2492', title: 'Հայկ Նահապետ', description: 'Հայոց պետության առասպելական հիմնադիրը' },
  { year: 'Մ.թ.ա. 782', title: 'Էրեբունի-Երևան', description: 'Աշխարհի ամենահին քաղաքներից մեկի հիմնադրումը' },
  { year: '301', title: 'Քրիստոնեության ընդունում', description: 'Աշխարհի առաջին քրիստոնեական պետությունը' },
  { year: '405', title: 'Հայոց այբուբեն', description: 'Մեսրոպ Մաշտոցի կողմից այբուբենի ստեղծումը' },
  { year: '9-11-րդ դար', title: 'Անիի ծաղկումը', description: '«1001 եկեղեցիների քաղաք»-ի ոսկեդարը' },
  { year: '1915', title: 'Մեծ եղեռն', description: 'Հայ ժողովրդի ամենամեծ ողբերգությունը' },
  { year: '1918', title: 'Առաջին Հանրապետություն', description: 'Պետականության վերականգնում դարեր անց' },
  { year: '1991', title: 'Անկախություն', description: 'Ժամանակակից Հայաստանի ի հայտ գալը' },
];

export const nationalSymbols: NationalSymbol[] = [
  {
    name: 'Արարատ լեռ',
    category: 'Բնություն',
    description: 'Հայ ժողովրդի հոգևոր խորհրդանիշը՝ 5137 մ բարձրությամբ վեհ լեռ, որը պատկերված է Հայաստանի զինանշանի վրա։',
    image: 'https://images.pexels.com/photos/31389682/pexels-photo-31389682.jpeg',
  },
  {
    name: 'Ծիրան',
    category: 'Բույս',
    description: 'Ծիրանենին հայկական բարձրավանդակի ավանդական պտղատու ծառն է։ Ծիրանը խորհրդանշում է արևը, պտղաբերությունը և կյանքը։',
    image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg',
  },
  {
    name: 'Հայոց այբուբեն',
    category: 'Մշակույթ',
    description: 'Հայոց այբուբենը՝ ստեղծված 405 թվականին, հայ ժողովրդի մշակութային ինքնության հիմնասյունն է և աշխարհի ամենաճշգրիտ այբուբեններից մեկը։',
    image: 'https://images.pexels.com/photos/12563778/pexels-photo-12563778.jpeg',
  },
  {
    name: 'Խաչքար',
    category: 'Կրոն',
    description: 'Խաչքարը՝ քարի վրա փորագրված խաչով սալը, հայ միջնադարյան արվեստի եզակի երևույթ է և ընդգրկված է ՅՈՒՆԵՍԿՈ-ի ժառանգության ցանկում։',
    image: 'https://images.pexels.com/photos/32281166/pexels-photo-32281166.jpeg',
  },
  {
    name: 'Գինու որթ',
    category: 'Գյուղատնտեսություն',
    description: 'Հայկական որթատեսակները հազարամյակների պատմություն ունեն։ Հայաստանը գինեգործության օրրանն է՝ աշխարհի ամենահին գինեգործարանի հայտնաբերմամբ։',
    image: 'https://images.pexels.com/photos/12625834/pexels-photo-12625834.jpeg',
  },
  {
    name: 'Հայկական գորգ',
    category: 'Արհեստ',
    description: 'Հայկական գորգերը հայտնի են իրենց երկրաչափական նախշերով և հարուստ գույներով։ Դրանք հայ արհեստավորության և մշակութային ժառանգության արտացոլումն են։',
    image: 'https://images.pexels.com/photos/19515084/pexels-photo-19515084.jpeg',
  },
];

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/31389682/pexels-photo-31389682.jpeg', title: 'Արարատի շքեղությունը', caption: 'Ձնապատ Արարատ լեռը պարզ երկնքի ներքո', category: 'nature', location: 'Արարատի մարզ' },
  { src: 'https://images.pexels.com/photos/28543118/pexels-photo-28543118.jpeg', title: 'Սևանա լճի կապույտը', caption: 'Արևահայաց Սևանա լիճը', category: 'nature', location: 'Գեղարքունիք' },
  { src: 'https://images.pexels.com/photos/35224032/pexels-photo-35224032.jpeg', title: 'Գեղարդի խորհրդավոր վանքը', caption: 'Ժայռի մեջ փորված վանքը', category: 'monastery', location: 'Կոտայք' },
  { src: 'https://images.pexels.com/photos/29206201/pexels-photo-29206201.jpeg', title: 'Երևանը մայրամուտին', caption: 'Կասկադի համալիրը մայրամուտին', category: 'city', location: 'Երևան' },
  { src: 'https://images.pexels.com/photos/36096818/pexels-photo-36096818.jpeg', title: 'Հաղպատի վանքը', caption: 'Անտառապատ լեռների մեջ վանք', category: 'monastery', location: 'Լոռի' },
  { src: 'https://images.pexels.com/photos/32281166/pexels-photo-32281166.jpeg', title: 'Խաչքարի արվեստը', caption: 'Միջնադարյան քանդակագործության եզակի օրինակ', category: 'culture', location: 'Լոռի' },
  { src: 'https://images.pexels.com/photos/4638386/pexels-photo-4638386.jpeg', title: 'Դիլիջանի անտառները', caption: 'Դիլիջանի ազգային պարկի կանաչ բնությունը', category: 'nature', location: 'Տավուշ' },
  { src: 'https://images.pexels.com/photos/11885440/pexels-photo-11885440.jpeg', title: 'Թաթևի վանքը', caption: 'Կիրճի վեհ վանքը', category: 'monastery', location: 'Սյունիք' },
  { src: 'https://images.pexels.com/photos/19216317/pexels-photo-19216317.jpeg', title: 'Գյումրիի հին ճարտարապետությունը', caption: 'Սուրբ Հակոբ եկեղեցին Գյումրիում', category: 'city', location: 'Շիրակ' },
  { src: 'https://images.pexels.com/photos/37039832/pexels-photo-37039832.jpeg', title: 'Լավաշի թխումը', caption: 'Ավանդական հացի պատրաստումը թոնիրում', category: 'culture', location: 'Հայաստան' },
  { src: 'https://images.pexels.com/photos/17958105/pexels-photo-17958105.jpeg', title: 'Նորավանքը կարմիր ժայռերի մեջ', caption: 'Կարմիր ժայռերի կիրճում վանք', category: 'monastery', location: 'Վայոց Ձոր' },
  { src: 'https://images.pexels.com/photos/12563778/pexels-photo-12563778.jpeg', title: 'Հայոց այբուբենը քարի վրա', caption: 'Միջնադարյան հայերեն արձանագրություն', category: 'culture', location: 'Հայաստան' },
  { src: 'https://images.pexels.com/photos/17550070/pexels-photo-17550070.jpeg', title: 'Սևանավանքը', caption: 'Լճի վրա գտնվող 9-րդ դարի վանք', category: 'monastery', location: 'Գեղարքունիք' },
  { src: 'https://images.pexels.com/photos/20446169/pexels-photo-20446169.jpeg', title: 'Գառնիի տաճարը', caption: 'Հունա-հռոմեական ոճի հեթանոսական տաճար', category: 'monastery', location: 'Կոտայք' },
  { src: 'https://images.pexels.com/photos/9585095/pexels-photo-9585095.jpeg', title: 'Ամբերդ ամրոցը', caption: 'Արագած լեռան ստորոտին գտնվող միջնադարյան ամրոց', category: 'monastery', location: 'Արագածոտն' },
  { src: 'https://images.pexels.com/photos/32447084/pexels-photo-32447084.jpeg', title: 'Սյունիքի լեռները', caption: 'Վեհ լեռնային լանդշաֆտ', category: 'nature', location: 'Սյունիք' },
  { src: 'https://images.pexels.com/photos/19515084/pexels-photo-19515084.jpeg', title: 'Հայկական գորգագործություն', caption: 'Ավանդական գորգի հյուսվածք', category: 'culture', location: 'Հայաստան' },
  { src: 'https://images.pexels.com/photos/11885453/pexels-photo-11885453.jpeg', title: 'Խոր Վիրապը և Արարատը', caption: 'Վանքը Արարատ լեռան ֆոնին', category: 'monastery', location: 'Արարատ' },
];
