export interface SocialTemplate {
    platform: 'pinterest' | 'reddit';
    title: string;
    description: string;
    suggestedImages?: string[];
}

export const pinterestTemplates = {
    currency: (from: string, to: string, rate: number) => ({
        title: `Best Way to Convert ${from} to ${to} in 2026`,
        description: `Don't lose money on hidden bank fees! 💸 Check the real-time ${from} to ${to} mid-market rate today. Current: 1 ${from} = ${rate.toFixed(4)} ${to}. #forex #money #savings #finance`,
        overlayText: `1 ${from} = ${rate.toFixed(4)} ${to}`,
    }),
    crypto: (name: string, symbol: string, price: number) => ({
        title: `Is ${name} (${symbol}) a Buy Today?`,
        description: `Live ${name} price update! 🚀 Currently trading at $${price.toLocaleString()}. track all movements on Nevy.in. #crypto #bitcoin #investing #blockchain`,
        overlayText: `${symbol} @ $${price.toLocaleString()}`,
    }),
    optimizer: () => ({
        title: `Boost Your Site Speed for Free! ⚡`,
        description: `Optimize your images for USA SEO. Convert to WebP instantly and rank higher on Google. 100% Private. #seo #webdesign #speed #blogging`,
        overlayText: `90% Smaller Images. No Quality Loss.`,
    }),
};

export const redditTemplates = {
    finance: (from: string, to: string) => ({
        title: `Found a clean tool for real-time ${from}/${to} rates without the bank spread`,
        content: `Hey r/personalfinance, just wanted to share a tool I found for tracking ${from} to ${to} mid-market rates. It's super fast and doesn't require any login. Might be useful for those of you dealing with international transfers. \n\nCheck it out here: [Link to tool]`,
    }),
    crypto: (name: string) => ({
        title: `Live ${name} dashboard with institutional-grade metrics`,
        content: `If anyone is looking for a clean, non-bloated tracker for ${name} and other top 50 coins, this one is pretty solid. It updates every 5 mins and shows market cap ranks. \n\nLink: [Link to tool]`,
    })
};
