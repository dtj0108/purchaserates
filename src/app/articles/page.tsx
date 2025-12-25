import Link from "next/link";
import { ArrowLeft } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { articles } from "@/lib/data/articles";

export const metadata = {
    title: "Articles - PurchaseRates.com",
    description: "Expert insights on mortgage rates, home buying tips, and market updates to help you make informed decisions.",
};

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default function ArticlesPage() {
    return (
        <div className="min-h-screen bg-primary">
            {/* Header */}
            <header className="border-b border-secondary bg-primary">
                <div className="mx-auto max-w-container px-4 py-4 md:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-tertiary hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-secondary_alt py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-3xl font-semibold text-primary sm:text-display-sm md:text-display-md">
                            Articles & Insights
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            Expert analysis on mortgage rates, market trends, and home buying strategies to help you make confident decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/articles/${article.slug}`}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-secondary bg-primary shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={article.imageUrl}
                                        alt={article.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    {/* Category Badge */}
                                    <Badge color="brand" size="sm" className="self-start mb-3">
                                        {article.category}
                                    </Badge>

                                    {/* Title */}
                                    <h2 className="text-xl font-semibold text-primary line-clamp-2 group-hover:text-brand-secondary transition-colors">
                                        {article.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-2 text-md text-tertiary line-clamp-2 flex-1">
                                        {article.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-6 flex items-center gap-3 pt-4 border-t border-secondary">
                                        <img
                                            src={article.author.avatarUrl}
                                            alt={article.author.name}
                                            className="size-10 rounded-full object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-primary truncate">
                                                {article.author.name}
                                            </p>
                                            <p className="text-xs text-tertiary">
                                                {formatDate(article.publishedAt)} · {article.readTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-section py-12 sm:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto max-w-2xl text-center text-white">
                        <h2 className="text-2xl font-semibold sm:text-display-sm">
                            Ready to Get Started?
                        </h2>
                        <p className="mt-4 text-lg opacity-90">
                            Get pre-approved today and find out exactly what rate you qualify for.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Button size="xl" color="secondary" href="/get-started">
                                Get My Rate
                            </Button>
                            <Button size="xl" color="tertiary" href="/rates" className="text-white hover:bg-white/10">
                                View Current Rates
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
