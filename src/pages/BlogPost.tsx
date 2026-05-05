import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Clock, User, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { toast } from 'sonner';

// Simple markdown-like renderer for our content
function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-foreground mt-8 mb-3 pb-2 border-b border-border/50">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-foreground mt-6 mb-2">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <p key={key++} className="font-bold text-foreground mt-4 mb-1">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="ml-5 text-muted-foreground mb-1 list-disc">
          <span dangerouslySetInnerHTML={{ __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </li>
      );
    } else if (line.startsWith('| ') && line.includes('|')) {
      // Skip table header separator rows
      if (line.includes('---')) continue;
      const cells = line.split('|').filter((c) => c.trim() !== '');
      const isHeader = lines[i + 1]?.includes('---');
      elements.push(
        <tr key={key++} className={isHeader ? 'bg-muted/50 font-semibold' : 'border-b border-border/30 hover:bg-muted/20'}>
          {cells.map((cell, ci) => (
            isHeader
              ? <th key={ci} className="px-4 py-2 text-left text-sm text-foreground">{cell.trim()}</th>
              : <td key={ci} className="px-4 py-2 text-sm text-muted-foreground">{cell.trim()}</td>
          ))}
        </tr>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />);
    } else if (line.trim() !== '') {
      elements.push(
        <p
          key={key++}
          className="text-muted-foreground leading-relaxed mb-2"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>'),
          }}
        />
      );
    }
  }

  // Wrap consecutive <tr> elements in a table
  const wrapped: React.ReactNode[] = [];
  let tableRows: React.ReactNode[] = [];
  elements.forEach((el, idx) => {
    if ((el as any)?.type === 'tr') {
      tableRows.push(el);
    } else {
      if (tableRows.length > 0) {
        wrapped.push(
          <div key={`table-${idx}`} className="overflow-x-auto my-4 rounded-xl border border-border/50">
            <table className="w-full">{tableRows}</table>
          </div>
        );
        tableRows = [];
      }
      wrapped.push(el);
    }
  });
  if (tableRows.length > 0) {
    wrapped.push(
      <div key="table-end" className="overflow-x-auto my-4 rounded-xl border border-border/50">
        <table className="w-full">{tableRows}</table>
      </div>
    );
  }

  return wrapped;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: post.titleEn, url });
    } else {
      navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    }
  };

  const title = language === 'hi' ? post.titleHi : post.titleEn;
  const content = language === 'hi' ? post.contentHi : post.contentEn;
  const excerpt = language === 'hi' ? post.excerptHi : post.excerptEn;

  return (
    <div className="min-h-screen bg-background">

      {/* Hero image */}
      <div className="relative h-72 md:h-96 mt-16 overflow-hidden">
        <img
          src={post.image1}
          alt={post.image1Alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Badge className="mb-3 bg-primary/90 capitalize">
            {post.category === 'local-seo' ? 'Local Guide' : post.category === 'food' ? 'Food & Recipe' : post.category}
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
            {title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl">

        {/* Back + Share */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4 text-primary" />
            <strong className="text-foreground">{post.author}</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" />
            {post.readTime} min read
          </span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-IN', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4 mb-8 leading-relaxed">
          {excerpt}
        </p>

        {/* Main content */}
        <div className="prose-custom">
          {renderContent(content)}
        </div>

        {/* Second image */}
        <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-border/50">
          <img
            src={post.image2}
            alt={post.image2Alt}
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <p className="text-xs text-muted-foreground text-center py-2 px-4 bg-muted/30">
            {post.image2Alt}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA box */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center my-10">
          <div className="text-4xl mb-3">🍖</div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Ready to taste the real Champaran Handi?
          </h3>
          <p className="text-muted-foreground mb-5 text-sm">
            Visit us at Main Road, Rafiganj, Gaya District, Bihar — or order via WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
           
<Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Link to="/menu">
                <ArrowRight className="h-4 w-4" />
                Order Now
              </Link>
            </Button>
           
          </div>
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-foreground mb-6">More from our Blog</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <img
                    src={related.image1}
                    alt={related.image1Alt}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {related.titleEn}
                    </p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {related.readTime} min read
                    </span>
                    <span className="text-xs text-primary flex items-center gap-1 mt-1">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
