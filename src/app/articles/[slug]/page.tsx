import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/data/articles";

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Article Not Found - PurchaseRates.com",
        };
    }

    return {
        title: `${article.title} - PurchaseRates.com`,
        description: article.description,
    };
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getRelatedArticles(slug, 2);

    return (
        <div className="min-h-screen bg-primary">
            {/* Header */}
            <header className="border-b border-secondary bg-primary">
                <div className="mx-auto max-w-container px-4 py-4 md:px-8">
                    <Link
                        href="/articles"
                        className="inline-flex items-center gap-2 text-sm font-medium text-tertiary hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Articles
                    </Link>
                </div>
            </header>

            {/* Hero Image */}
            <div className="relative aspect-[3/1] w-full max-h-80 overflow-hidden bg-secondary">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Article Content */}
            <article className="py-12 sm:py-16">
                <div className="mx-auto max-w-3xl px-4 md:px-8">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge color="brand" size="sm">
                            {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-tertiary">
                            <Calendar className="size-4" />
                            {formatDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-tertiary">
                            <Clock className="size-4" />
                            {article.readTime}
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-semibold text-primary sm:text-display-sm md:text-display-md">
                        {article.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-xl text-tertiary leading-relaxed">
                        {article.description}
                    </p>

                    {/* Author */}
                    <div className="mt-8 flex items-center gap-4 pb-8 border-b border-secondary">
                        <img
                            src={article.author.avatarUrl}
                            alt={article.author.name}
                            className="size-14 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg font-semibold text-primary">
                                {article.author.name}
                            </p>
                            <p className="text-md text-tertiary">
                                {article.author.role}
                            </p>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div
                        className="mt-8 prose prose-lg max-w-none
                            prose-headings:font-semibold prose-headings:text-primary
                            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                            prose-p:text-secondary prose-p:leading-relaxed
                            prose-a:text-brand-secondary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-primary prose-strong:font-semibold
                            prose-ul:text-secondary prose-ol:text-secondary
                            prose-li:marker:text-brand-secondary
                            [&_.lead]:text-xl [&_.lead]:text-tertiary [&_.lead]:leading-relaxed [&_.lead]:mb-8"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-brand-section py-12 sm:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-2xl text-center text-white">
                        <h2 className="text-2xl font-semibold sm:text-display-sm">
                            Ready to Get Your Best Rate?
                        </h2>
                        <p className="mt-4 text-lg opacity-90">
                            Get pre-approved in minutes and see what you qualify for.
                        </p>
                        <div className="mt-8">
                            <Button size="xl" color="secondary" href="/get-started">
                                Get My Rate Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-12 sm:py-16 bg-secondary">
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                            {relatedArticles.map((relatedArticle) => (
                                <Link
                                    key={relatedArticle.slug}
                                    href={`/articles/${relatedArticle.slug}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-secondary bg-primary shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={relatedArticle.imageUrl}
                                            alt={relatedArticle.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <Badge color="brand" size="sm" className="self-start mb-3">
                                            {relatedArticle.category}
                                        </Badge>
                                        <h3 className="text-lg font-semibold text-primary line-clamp-2 group-hover:text-brand-secondary transition-colors">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-tertiary line-clamp-2">
                                            {relatedArticle.description}
                                        </p>
                                        <p className="mt-4 text-xs text-tertiary">
                                            {formatDate(relatedArticle.publishedAt)} · {relatedArticle.readTime}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
