const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shadow-event-toolhub.vercel.app';

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
    }
];

const redditPosts = [
    {
        subreddit: 'r/personalfinance',
        title: 'I built an ad-free loan calculator to help visualize interest costs',
        body: `Tired of cluttered finance sites, I made a clean tool to help people see their principal/interest breakdown. Hope it helps someone here! ${baseUrl}/tools/loan-calculator`
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
