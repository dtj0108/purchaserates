import { Badge } from "@/components/base/badges/badges";
import { type NewsArticle, formatNewsDate } from "@/lib/api/news";
import { cx } from "@/utils/cx";

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
}

export const NewsCard = ({ article, className }: NewsCardProps) => {
  const sentiment = article.insights?.[0]?.sentiment || "neutral";
  
  const sentimentColors = {
    positive: "success",
    negative: "error",
    neutral: "gray",
  } as const;

  return (
    <a
      href={article.article_url}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "group flex flex-col overflow-hidden rounded-xl border border-secondary bg-primary shadow-xs transition-all hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {/* Thumbnail */}
      {article.image_url && (
        <div className="relative aspect-video w-full overflow-hidden bg-secondary">
          <img
            src={article.image_url}
            alt={article.title}
            className="size-full object-cover transition-transform group-hover:scale-105"
          />
          {sentiment && (
            <div className="absolute top-3 right-3">
              <Badge color={sentimentColors[sentiment]} size="sm" type="modern">
                {sentiment === "positive" ? "📈 Positive" : sentiment === "negative" ? "📉 Negative" : "Neutral"}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold text-primary group-hover:text-brand-secondary transition-colors">
          {article.title}
        </h3>
        
        <p className="line-clamp-3 text-sm text-tertiary">
          {article.description}
        </p>

        {/* Meta Info */}
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-secondary pt-3">
          {article.publisher?.favicon_url && (
            <img
              src={article.publisher.favicon_url}
              alt={article.publisher.name}
              className="size-4 rounded"
            />
          )}
          <span className="text-xs font-medium text-secondary">
            {article.publisher?.name}
          </span>
          <span className="text-xs text-tertiary">•</span>
          <span className="text-xs text-tertiary">
            {formatNewsDate(article.published_utc)}
          </span>
        </div>

        {/* Tickers */}
        {article.tickers && article.tickers.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {article.tickers.slice(0, 3).map((ticker) => (
              <Badge key={ticker} color="gray" size="sm">
                {ticker}
              </Badge>
            ))}
            {article.tickers.length > 3 && (
              <Badge color="gray" size="sm">
                +{article.tickers.length - 3}
              </Badge>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

