export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  sizes: string[];
  colors: string[];
  reviews: Review[];
  stock: number;
  tags?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  size?: string;
  height?: string;
  weight?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "[BEST] 데일리 오버핏 무지 반팔티",
    price: 14900,
    originalPrice: 29000,
    description: "매일 입어도 질리지 않는 베이직 무지티에요. 두께감이 적당해서 봄부터 가을까지 레이어드용으로 딱이고, 단독으로 입어도 실루엣이 예쁘게 나와요.",
    category: "상의",
    images: [
      "/images/products/product-1-1.webp",
      "/images/products/product-1-2.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["화이트", "블랙", "그레이"],
    tags: ["BEST", "무료배송"],
    reviews: [
      { id: "r1", author: "민수", rating: 5, date: "2026.03.15", content: "175/65 L사이즈 오버핏으로 예쁘게 떨어져요", size: "L", height: "175", weight: "65" },
      { id: "r2", author: "준혁", rating: 5, date: "2026.03.10", content: "가격대비 퀄리티 진짜 좋아요", size: "XL", height: "180", weight: "75" }
    ],
    stock: 150
  },
  {
    id: "2",
    name: "린넨 블렌드 오버핏 셔츠",
    price: 34900,
    originalPrice: 49000,
    description: "여름에 진짜 시원해요. 린넨 특유의 까슬함 없이 부드러운 촉감이고, 오버핏이라 바람 잘 통해서 땀나도 쾌적합니다.",
    category: "상의",
    images: [
      "/images/products/product-2-1.webp",
      "/images/products/product-2-2.webp"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["화이트", "베이지", "스카이블루"],
    tags: ["여름신상"],
    reviews: [
      { id: "r3", author: "재원", rating: 5, date: "2026.03.18", content: "여름 출근룩으로 딱이에요 시원하고 깔끔해보임", size: "L", height: "178", weight: "68" },
      { id: "r4", author: "동현", rating: 4, date: "2026.03.12", content: "핏 예쁜데 린넨이라 다림질은 필수입니다", size: "M", height: "175", weight: "65" }
    ],
    stock: 80
  },
  {
    id: "3",
    name: "[1+1] 피그먼트 워싱 맨투맨",
    price: 29900,
    originalPrice: 59000,
    description: "빈티지한 워싱감이 포인트인 맨투맨이에요. 새 옷 느낌 없이 자연스럽게 입을 수 있고, 입을수록 워싱감이 더 예뻐져요.",
    category: "상의",
    images: [
      "/images/products/product-3-1.webp",
      "/images/products/product-3-2.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["차콜", "그레이", "블랙"],
    tags: ["1+1", "BEST"],
    reviews: [
      { id: "r5", author: "현우", rating: 5, date: "2026.03.20", content: "워싱감 진짜 예뻐요 색상별로 다 샀습니다", size: "L", height: "177", weight: "70" },
      { id: "r6", author: "지훈", rating: 5, date: "2026.03.14", content: "1+1이라 친구랑 나눠 샀어요 둘 다 만족!", size: "XL", height: "182", weight: "78" }
    ],
    stock: 200
  },
  {
    id: "4",
    name: "와이드 스트레이트 데님팬츠",
    price: 39900,
    originalPrice: 59000,
    description: "진짜 핏 하나는 보장합니다. 허벅지부터 자연스럽게 떨어지는 와이드 스트레이트 핏이라 다리 길어보이는 효과 있어요.",
    category: "하의",
    images: [
      "/images/products/product-4-1.webp",
      "/images/products/product-4-2.webp"
    ],
    sizes: ["S(28)", "M(30)", "L(32)", "XL(34)"],
    colors: ["인디고", "블랙", "라이트블루"],
    tags: ["BEST", "자체제작"],
    reviews: [
      { id: "r7", author: "상현", rating: 5, date: "2026.03.22", content: "드디어 찾던 핏 찾았어요 178/68 L사이즈 완벽", size: "L", height: "178", weight: "68" },
      { id: "r8", author: "우진", rating: 5, date: "2026.03.19", content: "색감 너무 이쁘고 허리 안 말려요 강추!!", size: "M", height: "175", weight: "65" }
    ],
    stock: 100
  },
  {
    id: "5",
    name: "[품절임박] 와이드 핀턱 슬랙스",
    price: 32900,
    originalPrice: 49000,
    description: "출근룩으로 매일 입는 슬랙스에요. 뒤쪽 밴딩이라 앉아있어도 편하고, 핀턱 디테일 덕분에 다리가 길어보여요.",
    category: "하의",
    images: [
      "/images/products/product-5-1.webp",
      "/images/products/product-5-2.webp"
    ],
    sizes: ["S(28)", "M(30)", "L(32)", "XL(34)"],
    colors: ["블랙", "차콜", "베이지"],
    tags: ["품절임박", "사무실룩"],
    reviews: [
      { id: "r9", author: "태민", rating: 5, date: "2026.03.25", content: "회사에서 맨날 입어요 편하고 깔끔해서 좋음", size: "M", height: "176", weight: "68" },
      { id: "r10", author: "준서", rating: 5, date: "2026.03.21", content: "핏도 좋고 밴딩이라 밥 먹어도 편해요 ㅋㅋ", size: "L", height: "180", weight: "75" }
    ],
    stock: 25
  },
  {
    id: "6",
    name: "트레이닝 조거팬츠",
    price: 24900,
    originalPrice: 39000,
    description: "집에서도 밖에서도 입는 만능 조거팬츠에요. 스판 들어있어서 운동할 때도 편해요. 핏도 예뻐서 편의점 정도는 그냥 나갈 수 있어요.",
    category: "하의",
    images: [
      "/images/products/product-6-1.webp",
      "/images/products/product-6-2.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["블랙", "그레이", "네이비"],
    tags: ["가성비"],
    reviews: [
      { id: "r11", author: "민재", rating: 5, date: "2026.03.17", content: "진짜 편해요 3개 샀습니다 ㅋㅋㅋ", size: "L", height: "179", weight: "73" },
      { id: "r12", author: "현석", rating: 5, date: "2026.03.13", content: "기모 따뜻하고 핏도 예뻐서 만족합니다!", size: "M", height: "174", weight: "66" }
    ],
    stock: 150
  },
  {
    id: "7",
    name: "데님 트러커 자켓",
    price: 59000,
    originalPrice: 89000,
    description: "클래식한 데님자켓이에요. 봄가을 간절기에 가볍게 걸치기 좋고, 청바지랑 입어도 데님온데님 스타일 예쁘게 나와요.",
    category: "아우터",
    images: [
      "/images/products/product-7-1.webp",
      "/images/products/product-7-2.webp"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["인디고", "라이트블루"],
    tags: ["빈티지", "봄신상"],
    reviews: [
      { id: "r13", author: "영훈", rating: 5, date: "2026.03.24", content: "데님자켓 하나쯤은 있어야죠 핏 좋아요", size: "L", height: "177", weight: "70" },
      { id: "r14", author: "성호", rating: 4, date: "2026.03.20", content: "클래식한 디자인이라 오래 입을 수 있을듯", size: "XL", height: "180", weight: "75" }
    ],
    stock: 50
  },
  {
    id: "8",
    name: "테일러드 싱글 자켓",
    price: 89000,
    originalPrice: 129000,
    description: "정장 느낌 없이 캐주얼하게 입을 수 있는 자켓이에요. 어깨 패드 적당히 들어있어서 핏 잡아주고, 청바지에도 슬랙스에도 다 어울립니다.",
    category: "아우터",
    images: [
      "/images/products/product-8-1.webp",
      "/images/products/product-8-2.webp"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["네이비", "블랙", "베이지"],
    tags: ["면접룩", "출근룩"],
    reviews: [
      { id: "r15", author: "도윤", rating: 5, date: "2026.03.23", content: "면접 때 입고 갔는데 합격했습니다 ㅎㅎ", size: "L", height: "178", weight: "72" },
      { id: "r16", author: "시우", rating: 5, date: "2026.03.18", content: "데이트할 때 입으니까 여친이 좋아하네요", size: "M", height: "175", weight: "67" }
    ],
    stock: 40
  },
  {
    id: "9",
    name: "[봄 신상] 코치 자켓",
    price: 49000,
    originalPrice: 79000,
    description: "가볍게 걸치기 좋은 코치자켓이에요. 바람막이 기능도 있고 캐주얼하게 입기 좋아요. 봄 간절기에 딱 좋습니다.",
    category: "아우터",
    images: [
      "/images/products/product-9-1.webp",
      "/images/products/product-9-2.webp"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["블랙", "네이비", "카키"],
    tags: ["봄신상"],
    reviews: [
      { id: "r17", author: "진우", rating: 5, date: "2026.03.26", content: "가벼워서 좋아요 간절기에 딱", size: "M", height: "170", weight: "63" },
      { id: "r18", author: "승민", rating: 4, date: "2026.03.22", content: "바람막이 기능 있어서 실용적이에요", size: "L", height: "176", weight: "69" }
    ],
    stock: 70
  },
  {
    id: "10",
    name: "데일리 니트 가디건",
    price: 39900,
    originalPrice: 59000,
    description: "환절기 필수템이에요. 얇은데 보온성 좋고, 단추 잠그면 니트처럼 입을 수 있어서 활용도 높아요.",
    category: "아우터",
    images: [
      "/images/products/product-10-1.webp",
      "/images/products/product-10-2.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["블랙", "아이보리", "그레이", "브라운"],
    tags: ["환절기"],
    reviews: [
      { id: "r19", author: "정훈", rating: 5, date: "2026.03.27", content: "사무실 냉방병 때문에 샀는데 너무 좋아요", size: "L", height: "179", weight: "72" },
      { id: "r20", author: "태영", rating: 5, date: "2026.03.24", content: "가격대비 괜찮아요 색상별로 하나씩 사도 될듯", size: "M", height: "174", weight: "66" }
    ],
    stock: 100
  },
  {
    id: "11",
    name: "오버핏 후드집업",
    price: 44900,
    originalPrice: 69000,
    description: "편하게 입을 수 있는 후드집업이에요. 오버핏이라 레이어드하기 좋고, 안감이 부드러워서 맨살에 입어도 편해요.",
    category: "아우터",
    images: [
      "/images/products/product-11-1.webp",
      "/images/products/product-11-2.webp"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["블랙", "그레이", "네이비"],
    tags: ["유니크"],
    reviews: [
      { id: "r21", author: "민규", rating: 5, date: "2026.03.28", content: "편하고 따뜻해요 매일 입고 다닙니다", size: "L", height: "177", weight: "70" },
      { id: "r22", author: "호준", rating: 4, date: "2026.03.25", content: "오버핏이라 레이어드 하기 좋아요", size: "M", height: "174", weight: "66" }
    ],
    stock: 80
  },
  {
    id: "12",
    name: "베이직 니트 스웨터",
    price: 34900,
    originalPrice: 49000,
    description: "가을에 입기 좋은 두께감의 니트 스웨터에요. 베이직한 디자인이라 어디에나 잘 어울리고, 보풀 적게 일어나는 소재라 오래 입을 수 있어요.",
    category: "상의",
    images: [
      "/images/products/product-12-1.webp",
      "/images/products/product-12-2.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["블랙", "아이보리", "그레이", "네이비", "브라운"],
    tags: ["가을신상", "베이직"],
    reviews: [
      { id: "r23", author: "성진", rating: 5, date: "2026.03.29", content: "색상별로 3개 샀어요 가성비 좋고 핏도 예쁨", size: "L", height: "178", weight: "71" },
      { id: "r24", author: "우빈", rating: 5, date: "2026.03.26", content: "보풀 진짜 안 생겨요 니트 찾으시면 이거로", size: "M", height: "175", weight: "68" }
    ],
    stock: 120
  }
];

export const categories = ["전체", "상의", "하의", "아우터"];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "전체") return products;
  return products.filter(p => p.category === category);
}
