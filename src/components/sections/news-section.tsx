"use client";

import { useEffect, useState } from "react";
import { NewsCard } from "./news-card";
import { type NewsArticle, fetchHousingNews } from "@/lib/api/news";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface NewsSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showCTA?: boolean;
  className?: string;
}

export const NewsSection = ({
  title = "Latest Housing Market News",
  subtitle = "Stay informed about mortgage rates, housing trends, and market updates",
  limit = 3,
  showCTA = true,
  className,
}: NewsSectionProps) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const news = await fetchHousingNews(limit);
        setArticles(news);
        setError(null);
      } catch (err) {
        setError("Unable to load news at this time");
        console.error("Error loading news:", err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [limit]);

  if (loading) {
    return (
      <section className={cx("bg-primary py-16 md:py-24", className)}>
        <div className="mx-auto max-w-container px-4 md:px-8">
          <div className="text-center">
            <div className="mx-auto h-8 w-48 animate-pulse rounded bg-secondary" />
            <div className="mx-auto mt-3 h-5 w-96 animate-pulse rounded bg-secondary" />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(limit)].map((_, i) => (
              <div key={i} className="h-96 animate-pulse rounded-xl bg-secondary" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || articles.length === 0) {
    return (
      <section className={cx("bg-primary py-16 md:py-24", className)}>
        <div className="mx-auto max-w-container px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
              {title}
            </h2>
            <p className="mt-3 text-tertiary">{error || "No news available at this time"}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cx("bg-primary py-16 md:py-24", className)}>
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-tertiary">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {showCTA && (
          <div className="mt-8 flex justify-center">
            <Button size="lg" color="secondary" href="/rates">
              View All Market News
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};


