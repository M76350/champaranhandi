import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';
import { blogPosts, blogCategories } from '@/data/blogPosts';
import { Clock, User, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-4">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Food Stories & Local Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Recipes, food stories, and the best places to eat near Gaya, Aurangabad &amp; Rafiganj.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {blogCategories.map((cat) => (
              <Button
                key={cat.id}
                size="sm"
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full ${activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border-primary/30 hover:bg-primary/10'}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Blog grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>No posts in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filtered.map((post) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image1}
                      alt={post.image1Alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground capitalize">
                      {post.category === 'local-seo' ? 'Local Guide' : post.category === 'food' ? 'Food & Recipe' : post.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.titleEn}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerptEn}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          <Tag className="h-2.5 w-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more */}
                    <Link to={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/40 hover:bg-primary/10 hover:border-primary group/btn"
                      >
                        Read Full Post
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Coming soon note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-muted/60 border border-border/50 rounded-2xl px-8 py-6 max-w-md">
              <span className="text-3xl mb-3 block">✍️</span>
              <p className="font-semibold text-foreground mb-1">More posts coming soon!</p>
              <p className="text-sm text-muted-foreground">
                We're writing about Bihar food culture, local guides, and traditional recipes. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
