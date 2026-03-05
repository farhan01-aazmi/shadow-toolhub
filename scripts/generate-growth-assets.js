const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shadow-toolhub2-pkkbzn3qe-farhan01-aazmis-projects.vercel.app';

const pins = [
    {
        title: "Stop Overpaying: Instant USD to EUR Converter",
        description: "Banks hide their fees in the spread. Our converter shows you the real mid-market rate so you can plan your transfers with confidence. #FinanceTips #TravelHacks #ShadowToolHub",
        link: `${baseUrl}/tools/currency-converter/usd-eur`
    },
    {
        title: "Crypto Market Clarity: Live BTC Dashboard",
        description: "Track Bitcoin with 'Market Insight' instead of market noise. Real-time volume, market cap, and rank to help you stay ahead. #Bitcoin #Crypto #Investing",
        link: `${baseUrl}/tools/crypto-tracker/bitcoin`
    },
    {
        title: "Mortgage Stress? Plan Better with our Loan Tool",
        description: "Visualize your principal vs interest breakdown instantly. We built this to help you take control of your financial future. #RealEstate #Mortgage #Savings",
        link: `${baseUrl}/tools/loan-calculator`
    },
    {
        title: "Writing for SEO? Use our Professional Word Counter",
        description: "Analyze reading time, character density, and word count with architectural precision. 100% private. #ContentCreation #SEO #WritingTools",
        link: `${baseUrl}/tools/word-counter`
    },
    {
        title: "Rank #1 on Google: Meta Tag Generator 2026",
        description: "Generate clean, high-performance meta tags optimized for the latest search algorithms. #MarketingTips #SEO #WebDev",
        link: `${baseUrl}/tools/meta-generator`
    }
];

const redditPosts = [
    {
        subreddit: 'r/personalfinance',
        title: 'I built an ad-free loan calculator to help visualize interest costs',
        body: `Tired of cluttered finance sites, I made a clean tool to help people see their principal/interest breakdown. Hope it helps someone here! ${baseUrl}/tools/loan-calculator`
    },
    {
        subreddit: 'r/webdev',
        title: 'Showoff Saturday: A minimalist toolhub for developers and finance folks',
        body: `I was tired of generic, ad-heavy tools, so I built Shadow ToolHub. Includes an image optimizer, meta generator, and currency trackers. No tracking, just utility. ${baseUrl}`
    },
    {
        subreddit: 'r/SEO',
        title: 'Free tool to generate 2026 optimized Meta Tags',
        body: `Created a simple utility for my own projects to handle meta tags with CTR previews. Shared it here if anyone needs a fast, ad-free alternative. ${baseUrl}/tools/meta-generator`
    }
];

const outputDir = path.join(process.cwd(), 'automation_output');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.writeFileSync(
    path.join(outputDir, 'pinterest_pins.json'),
    JSON.stringify(pins, null, 2)
);

fs.writeFileSync(
    path.join(outputDir, 'reddit_templates.json'),
    JSON.stringify(redditPosts, null, 2)
);

console.log('✅ Traffic assets generated in /automation_output');
