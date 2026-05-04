    import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, FileText, PlusCircle, Pencil, Trash2,
  LogOut, Eye, Tag, Clock, User, ChevronRight, X, Check,
  BookOpen, ShoppingBag, Users, TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { blogPosts as initialPosts, BlogPost } from '@/data/blogPosts';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import blogImg1 from '@/assets/blog/champaran-handi-mutton-clay-pot.jpg';
import blogImg2 from '@/assets/blog/mutton-biryani-copper-pot-spices.jpg';

type AdminTab = 'dashboard' | 'blogs';

// Static in-memory blog store for admin (replace with Supabase later)
let adminBlogStore: BlogPost[] = [...initialPosts];

export default function Admin() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [posts, setPosts] = useState<BlogPost[]>(adminBlogStore);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [editTarget, setEditTarget] = useState<BlogPost | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // New post form state
  const [newPost, setNewPost] = useState({
    titleEn: '',
    titleHi: '',
    excerptEn: '',
    category: 'food',
    author: user?.name || 'Rohit Chauhan',
    readTime: 5,
  });

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleDelete = (id: string) => {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    adminBlogStore = updated;
    setDeleteTarget(null);
    toast.success('Blog post deleted');
  };

  const handleAddPost = () => {
    if (!newPost.titleEn.trim() || !newPost.excerptEn.trim()) {
      toast.error('Title and excerpt are required');
      return;
    }
    const slug = newPost.titleEn
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 80);

    const post: BlogPost = {
      id: `blog-${Date.now()}`,
      slug,
      titleEn: newPost.titleEn,
      titleHi: newPost.titleHi || newPost.titleEn,
      excerptEn: newPost.excerptEn,
      excerptHi: newPost.excerptEn,
      contentEn: `## ${newPost.titleEn}\n\n${newPost.excerptEn}\n\n*Full content coming soon...*`,
      contentHi: `## ${newPost.titleHi || newPost.titleEn}\n\n${newPost.excerptEn}`,
      image1: blogImg1,
      image2: blogImg2,
      image1Alt: newPost.titleEn,
      image2Alt: newPost.titleEn,
      category: newPost.category,
      tags: ['Champaran', 'Rafiganj', 'Bihar'],
      author: newPost.author,
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: newPost.readTime,
      seoKeywords: newPost.titleEn,
    };

    const updated = [post, ...posts];
    setPosts(updated);
    adminBlogStore = updated;
    setShowAddForm(false);
    setNewPost({ titleEn: '', titleHi: '', excerptEn: '', category: 'food', author: user?.name || 'Rohit Chauhan', readTime: 5 });
    toast.success('Blog post created! Add full content via code.');
  };

  const stats = [
    { label: 'Total Blog Posts', value: posts.length, icon: BookOpen, color: 'text-primary' },
    { label: 'Menu Items', value: 26, icon: ShoppingBag, color: 'text-secondary' },
    { label: 'Categories', value: 7, icon: Tag, color: 'text-accent-foreground' },
    { label: 'Visitors (Demo)', value: '1.2k', icon: TrendingUp, color: 'text-green-500' },
  ];

  const navItems: { id: AdminTab; label: string; icon: typeof LayoutDashboard }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'blogs', label: 'Blog Posts', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border/60 flex flex-col fixed h-full z-40 hidden md:flex">
        {/* Logo */}
        <div className="p-6 border-b border-border/60">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl shadow-lg">
              🍖
            </div>
            <div>
              <p className="font-bold text-sm text-foreground leading-tight">Purvi Champaran</p>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              {activeTab === id && <ChevronRight className="h-3 w-3 ml-auto" />}
            </button>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="p-4 border-t border-border/60">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="w-full gap-2 text-muted-foreground hover:text-destructive hover:border-destructive/50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64 p-6 md:p-8">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between mb-6 pb-4 border-b border-border/60">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍖</span>
            <span className="font-bold text-foreground">Admin</span>
          </div>
          <div className="flex gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                size="sm"
                variant={activeTab === id ? 'default' : 'outline'}
                onClick={() => setActiveTab(id)}
                className="gap-1 text-xs"
              >
                <Icon className="h-3 w-3" />
                {label}
              </Button>
            ))}
            <Button size="sm" variant="ghost" onClick={handleLogout} className="text-destructive">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* ── DASHBOARD TAB ── */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Welcome back, <span className="text-foreground font-medium">{user?.name}</span> 👋
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="bg-card border border-border/60 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-muted-foreground font-medium">{label}</p>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{value}</p>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => { setActiveTab('blogs'); setShowAddForm(true); }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <PlusCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">New Blog Post</p>
                    <p className="text-xs text-muted-foreground">Create & publish</p>
                  </div>
                </button>
                <Link
                  to="/menu"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">View Menu</p>
                    <p className="text-xs text-muted-foreground">See all dishes</p>
                  </div>
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">View Blog</p>
                    <p className="text-xs text-muted-foreground">Public blog page</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent posts preview */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Recent Blog Posts</h2>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab('blogs')} className="text-primary text-xs gap-1">
                  View all <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-3">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center gap-4 p-4 bg-card border border-border/50 rounded-xl">
                    <img src={post.image1} alt={post.titleEn} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{post.titleEn}</p>
                      <p className="text-xs text-muted-foreground">{post.publishedAt} · {post.readTime} min read</p>
                    </div>
                    <Badge variant="outline" className="text-xs capitalize hidden sm:flex">
                      {post.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── BLOGS TAB ── */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Blog Posts</h1>
                <p className="text-muted-foreground text-sm mt-1">{posts.length} posts total</p>
              </div>
              <Button
                onClick={() => setShowAddForm(true)}
                className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <PlusCircle className="h-4 w-4" />
                New Post
              </Button>
            </div>

            {/* Add post form */}
            {showAddForm && (
              <div className="bg-card border border-primary/30 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-semibold text-foreground">Create New Blog Post</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowAddForm(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Title (English) *</Label>
                    <Input
                      placeholder="Why Bihar's Champaran Food is Famous..."
                      value={newPost.titleEn}
                      onChange={(e) => setNewPost((p) => ({ ...p, titleEn: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Title (Hindi)</Label>
                    <Input
                      placeholder="बिहार का चम्पारण खाना क्यों प्रसिद्ध है..."
                      value={newPost.titleHi}
                      onChange={(e) => setNewPost((p) => ({ ...p, titleHi: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <Label>Excerpt / Summary *</Label>
                    <Input
                      placeholder="A short description of the blog post..."
                      value={newPost.excerptEn}
                      onChange={(e) => setNewPost((p) => ({ ...p, excerptEn: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Category</Label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost((p) => ({ ...p, category: e.target.value }))}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="food">Food & Recipe</option>
                      <option value="local-seo">Local Guide</option>
                      <option value="culture">Bihar Culture</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Read Time (minutes)</Label>
                    <Input
                      type="number"
                      min={1}
                      max={30}
                      value={newPost.readTime}
                      onChange={(e) => setNewPost((p) => ({ ...p, readTime: Number(e.target.value) }))}
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <Button onClick={handleAddPost} className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Check className="h-4 w-4" />
                    Create Post
                  </Button>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  💡 Full content (markdown body, images) can be added via <code className="bg-muted px-1 rounded">src/data/blogPosts.ts</code> after creation.
                </p>
              </div>
            )}

            {/* Posts table */}
            <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
              {posts.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-30" />
                  <p>No blog posts yet. Create your first one!</p>
                </div>
              ) : (
                <div className="divide-y divide-border/50">
                  {posts.map((post) => (
                    <div key={post.id} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                      <img
                        src={post.image1}
                        alt={post.titleEn}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0 hidden sm:block"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground truncate">{post.titleEn}</p>
                        <p className="text-xs text-muted-foreground truncate mt-0.5">{post.excerptEn}</p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />{post.readTime} min
                          </span>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <User className="h-3 w-3" />{post.author}
                          </span>
                          <Badge variant="outline" className="text-[11px] capitalize py-0">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Link to={`/blog/${post.slug}`} target="_blank">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => setDeleteTarget(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Delete confirmation dialog */}
      <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The post will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteTarget && handleDelete(deleteTarget)}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
