export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  article_url: string;
  image_url?: string;
  published_utc: string;
  author?: string;
  publisher: {
    name: string;
    logo_url?: string;
    homepage_url?: string;
    favicon_url?: string;
  };
  tickers?: string[];
  insights?: Array<{
    sentiment: "positive" | "negative" | "neutral";
    sentiment_reasoning?: string;
    ticker?: string;
  }>;
  keywords?: string[];
}

export interface NewsResponse {
  count: number;
  next_url?: string;
  results: NewsArticle[];
  status: string;
  request_id?: string;
}

/**
 * Fetch news articles from the API
 * @param ticker - Optional ticker symbol to filter by
 * @param limit - Number of articles to fetch (default: 10)
 * @returns Promise with news articles
 */
export async function fetchNews(
  ticker?: string,
  limit: number = 10
): Promise<NewsArticle[]> {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  if (!apiKey) {
    console.error("Missing API key");
    return [];
  }

  try {
    // Build query parameters
    const params = new URLSearchParams({
      apiKey,
      limit: limit.toString(),
      order: "desc",
      sort: "published_utc",
    });

    // Add ticker if provided
    if (ticker) {
      params.append("ticker", ticker);
    }

    // Add date filter for recent news (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    params.append("published_utc.gte", thirtyDaysAgo.toISOString().split("T")[0]);

    const url = `https://api.polygon.io/v2/reference/news?${params.toString()}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Cache for 5 minutes to avoid rate limiting
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: NewsResponse = await response.json();

    if (data.status === "OK" && data.results) {
      return data.results;
    }

    return [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

/**
 * Get housing/mortgage related news
 * Fetches news for mortgage-related tickers
 */
export async function fetchHousingNews(limit: number = 10): Promise<NewsArticle[]> {
  // Try multiple mortgage/housing related tickers
  const housingTickers = ["RKT", "UWMC", "COMP"]; // Rocket Companies, UWM Holdings, Compass
  
  try {
    // Fetch news without ticker filter to get broader housing market news
    const articles = await fetchNews(undefined, limit);
    
    // Filter for housing/mortgage/real estate related keywords
    const housingKeywords = [
      "mortgage",
      "housing",
      "real estate",
      "home",
      "homebuyer",
      "interest rate",
      "fed",
      "federal reserve",
    ];
    
    const relevantArticles = articles.filter((article) => {
      const text = `${article.title} ${article.description}`.toLowerCase();
      return housingKeywords.some((keyword) => text.includes(keyword));
    });

    return relevantArticles.length > 0 ? relevantArticles : articles.slice(0, limit);
  } catch (error) {
    console.error("Error fetching housing news:", error);
    return [];
  }
}

/**
 * Format date for display
 */
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else if (diffInHours < 48) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
}


