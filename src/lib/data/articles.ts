export interface Article {
    slug: string;
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readTime: string;
    category: string;
}

export const articles: Article[] = [
    {
        slug: "mortgage-rates-drop-6-month-low",
        title: "Mortgage Rates Drop to 6-Month Low: What It Means for Buyers",
        description: "With rates falling below 6.5% for the first time since summer, prospective homebuyers have a new window of opportunity. Here's what you need to know.",
        content: `
            <p class="lead">After months of elevated rates keeping many buyers on the sidelines, mortgage rates have finally dipped to their lowest point in six months. The average 30-year fixed rate fell to 6.35% this week, offering a glimmer of hope for those looking to purchase a home.</p>

            <h2>What's Driving the Drop?</h2>
            <p>Several factors have converged to push rates lower. The Federal Reserve's recent signals about potential rate cuts in 2025, combined with cooling inflation data, have given bond markets—and by extension, mortgage rates—room to breathe.</p>
            <p>"We're seeing a natural correction after rates spiked last fall," explains housing economist Sarah Chen. "The market is pricing in a more favorable economic outlook for the coming year."</p>

            <h2>What This Means for Your Monthly Payment</h2>
            <p>The difference might seem small on paper, but it adds up significantly over the life of a loan. On a $400,000 mortgage:</p>
            <ul>
                <li>At 7.0%: $2,661/month</li>
                <li>At 6.35%: $2,494/month</li>
                <li><strong>Monthly savings: $167</strong></li>
                <li><strong>Lifetime savings: Over $60,000</strong></li>
            </ul>

            <h2>Should You Lock Now?</h2>
            <p>The million-dollar question: will rates continue to fall, or is this the bottom? While no one can predict the market with certainty, most experts suggest that buyers who find the right home shouldn't wait for a "perfect" rate.</p>
            <p>"If you're financially ready and find a home you love, today's rates are historically reasonable," says mortgage advisor Michael Torres. "You can always refinance if rates drop further, but you can't go back in time to buy a house that's already sold."</p>

            <h2>How to Take Advantage</h2>
            <p>If you're considering buying, here's what to do now:</p>
            <ol>
                <li><strong>Get pre-approved:</strong> A pre-approval letter shows sellers you're serious and locks in your rate for 60-90 days.</li>
                <li><strong>Compare lenders:</strong> Even small rate differences can save thousands over time.</li>
                <li><strong>Consider points:</strong> Paying points upfront can lower your rate further if you plan to stay long-term.</li>
                <li><strong>Act decisively:</strong> In competitive markets, hesitation can cost you the home.</li>
            </ol>

            <p>The window of opportunity may not last forever. With spring buying season approaching, increased demand could put upward pressure on rates. Now might be the ideal time to make your move.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
        author: {
            name: "Emily Rodriguez",
            role: "Senior Mortgage Analyst",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        },
        publishedAt: "2025-01-15",
        readTime: "5 min read",
        category: "Market Update",
    },
    {
        slug: "first-time-homebuyer-guide-2025",
        title: "First-Time Homebuyer? 5 Things You Need to Know in 2025",
        description: "Navigating the housing market as a first-time buyer can be overwhelming. Here are the essential tips and programs that can help you succeed.",
        content: `
            <p class="lead">Buying your first home is one of the biggest financial decisions you'll ever make. The good news? 2025 brings new opportunities and programs designed specifically to help first-time buyers get into the market.</p>

            <h2>1. You Don't Need 20% Down</h2>
            <p>One of the biggest myths in real estate is that you need a 20% down payment. While putting down 20% helps you avoid private mortgage insurance (PMI), there are numerous programs that accept much less:</p>
            <ul>
                <li><strong>Conventional loans:</strong> As low as 3% down</li>
                <li><strong>FHA loans:</strong> 3.5% down with credit scores as low as 580</li>
                <li><strong>VA loans:</strong> 0% down for eligible veterans</li>
                <li><strong>USDA loans:</strong> 0% down in qualifying rural areas</li>
            </ul>
            <p>Many states and cities also offer down payment assistance programs that can cover part or all of your upfront costs.</p>

            <h2>2. Your Credit Score Matters—But It's Not Everything</h2>
            <p>While a higher credit score gets you better rates, you don't need perfect credit to buy a home. Here's a general breakdown:</p>
            <ul>
                <li><strong>760+:</strong> Best rates available</li>
                <li><strong>700-759:</strong> Very good rates</li>
                <li><strong>620-699:</strong> Conventional loans available</li>
                <li><strong>580-619:</strong> FHA loans available</li>
            </ul>
            <p>If your score needs work, even a few months of on-time payments and reducing credit utilization can make a significant difference.</p>

            <h2>3. Get Pre-Approved Before You Shop</h2>
            <p>Pre-approval isn't just about knowing your budget—it's a competitive advantage. In today's market, sellers often won't even consider offers from buyers who aren't pre-approved.</p>
            <p>The pre-approval process typically requires:</p>
            <ul>
                <li>Proof of income (pay stubs, W-2s, tax returns)</li>
                <li>Bank statements</li>
                <li>Employment verification</li>
                <li>Credit check</li>
            </ul>
            <p>Pro tip: Get pre-approved with multiple lenders to compare rates, but do it within a 45-day window so the credit inquiries count as one.</p>

            <h2>4. Budget for More Than Just the Mortgage</h2>
            <p>Your monthly housing cost includes more than principal and interest. Plan for:</p>
            <ul>
                <li><strong>Property taxes:</strong> Vary widely by location</li>
                <li><strong>Homeowner's insurance:</strong> Required by lenders</li>
                <li><strong>PMI:</strong> If putting down less than 20%</li>
                <li><strong>HOA fees:</strong> If applicable</li>
                <li><strong>Maintenance:</strong> Budget 1-2% of home value annually</li>
            </ul>
            <p>A good rule of thumb: keep total housing costs under 28% of your gross monthly income.</p>

            <h2>5. Don't Skip the Home Inspection</h2>
            <p>In competitive markets, some buyers waive inspections to make their offers more attractive. This is risky. A $500 inspection could save you from tens of thousands in unexpected repairs.</p>
            <p>At minimum, get inspections for:</p>
            <ul>
                <li>General home condition</li>
                <li>Roof and foundation</li>
                <li>HVAC systems</li>
                <li>Plumbing and electrical</li>
            </ul>
            <p>If major issues are found, you can negotiate repairs or price reductions—or walk away before it's too late.</p>

            <h2>Ready to Start?</h2>
            <p>The path to homeownership starts with a single step. Get pre-approved today to understand your buying power and begin your journey with confidence.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=630&fit=crop",
        author: {
            name: "James Mitchell",
            role: "First-Time Buyer Specialist",
            avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        publishedAt: "2025-01-10",
        readTime: "7 min read",
        category: "Guides",
    },
    {
        slug: "lock-best-mortgage-rate-spring",
        title: "How to Lock In the Best Mortgage Rate Before Spring",
        description: "Spring is the hottest season for home buying—and competition. Here's your strategic guide to securing the best possible rate before the rush.",
        content: `
            <p class="lead">Every year, the spring home buying season brings a surge of activity—and with it, increased competition for both homes and favorable mortgage rates. Smart buyers start preparing now to lock in the best possible terms.</p>

            <h2>Why Spring Rates Can Be Higher</h2>
            <p>It might seem counterintuitive, but mortgage rates often tick upward in spring. Here's why:</p>
            <ul>
                <li><strong>Increased demand:</strong> More buyers entering the market creates competition</li>
                <li><strong>Economic activity:</strong> Stronger economic data often pushes rates up</li>
                <li><strong>Fed policy:</strong> Spring often brings Fed meetings that impact rate expectations</li>
            </ul>
            <p>By acting now, you can potentially lock in today's lower rates for your spring purchase.</p>

            <h2>Step 1: Check Your Credit Now</h2>
            <p>Your credit score is the single biggest factor in your mortgage rate. Even a 20-point improvement can save you thousands.</p>
            <p><strong>Quick wins for the next 60-90 days:</strong></p>
            <ul>
                <li>Pay down credit card balances below 30% utilization</li>
                <li>Don't open new credit accounts</li>
                <li>Dispute any errors on your credit report</li>
                <li>Keep old accounts open (length of history matters)</li>
            </ul>

            <h2>Step 2: Get Pre-Approved Early</h2>
            <p>Don't wait until you find a house to start the mortgage process. Getting pre-approved now offers several advantages:</p>
            <ul>
                <li><strong>Rate locks:</strong> Many lenders offer 60-90 day rate locks with pre-approval</li>
                <li><strong>Buying power:</strong> Know exactly what you can afford</li>
                <li><strong>Competitive edge:</strong> Sellers prefer pre-approved buyers</li>
                <li><strong>Issue resolution:</strong> Time to address any problems before you're under contract</li>
            </ul>

            <h2>Step 3: Compare Multiple Lenders</h2>
            <p>Rate shopping is one of the most effective ways to save money. A difference of just 0.25% on a $400,000 loan means:</p>
            <ul>
                <li>$60/month in payment difference</li>
                <li>$21,600 over the life of the loan</li>
            </ul>
            <p>Get quotes from at least 3-4 lenders, including:</p>
            <ul>
                <li>Traditional banks</li>
                <li>Credit unions</li>
                <li>Online lenders</li>
                <li>Mortgage brokers</li>
            </ul>

            <h2>Step 4: Understand Rate Lock Timing</h2>
            <p>A rate lock guarantees your rate for a specific period, typically 30-60 days. Here's what to know:</p>
            <ul>
                <li><strong>Longer locks cost more:</strong> 60-day locks usually have slightly higher rates than 30-day</li>
                <li><strong>Float-down options:</strong> Some lenders offer the ability to lower your rate if rates drop</li>
                <li><strong>Lock expiration:</strong> If your lock expires before closing, you may get the current (potentially higher) rate</li>
            </ul>
            <p>Work with your lender to time your lock strategically based on your expected closing date.</p>

            <h2>Step 5: Consider Buying Points</h2>
            <p>Discount points let you "buy down" your rate by paying more upfront. One point (1% of loan amount) typically reduces your rate by 0.25%.</p>
            <p><strong>When points make sense:</strong></p>
            <ul>
                <li>You plan to stay in the home 5+ years</li>
                <li>You have extra cash after down payment and closing costs</li>
                <li>The break-even period works in your favor</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>The best time to prepare for spring buying is now. Start improving your credit, get pre-approved, and compare lenders while rates remain favorable. When that perfect home hits the market, you'll be ready to move fast with the best possible rate locked in.</p>
        `,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&fit=crop",
        author: {
            name: "Amanda Foster",
            role: "Rate Strategy Expert",
            avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
        publishedAt: "2025-01-05",
        readTime: "6 min read",
        category: "Strategy",
    },
];

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 2): Article[] {
    return articles.filter((article) => article.slug !== currentSlug).slice(0, limit);
}
