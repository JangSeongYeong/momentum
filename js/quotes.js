const quotes = [
    {
        quote: "내 적을 알아야 이길 수 있어.",
        author: "우즈마키 나루토 - 나루토",
    },
    {
        quote: "우리는 아무것도 모른다는 것만이 확실한 것이다.",
        author: "레비 아커만 - 진격의 거인",
    },
    {
        quote: "시작이 반은 성공이다.",
        author: "미도리야마 요스케 - 하이큐",
    },
    {
        quote: "사랑은 시간을 통해 자라는 것이다.",
        author: "미사키 유키노 - 너의 이름은",
    },
    {
        quote: "우리는 우리의 미래를 선택할 수 있다.",
        author: "키리토 - 소드아트 온라인",
    },
    {
        quote: "세상을 바꾸고 싶다면, 먼저 자신을 바꾸어라.",
        author: "가라다 에이지 - 나의 히어로 아카데미아",
    },
    {
        quote: "사람들은 가장 아름다운 떄에 가장 못생긴 것을 믿고 싶어 한다.",
        author: "토가무 - 도쿄 구울",
    },
    {
        quote: "우리 모두는 고통을 겪지만, 고통은 강함을 만든다.",
        author: "이치고 - 블리치",
    },
    {
        quote: "약점을 지닌 자만이 성장할 수 있다.",
        author: "이치고 - 블리치",
    },
    {
        quote: "인생은 짧으니까, 소중한 순간을 즐겨라.",
        author: "루피 - 원피스",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;