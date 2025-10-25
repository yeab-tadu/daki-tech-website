'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/types';

const categories = ['All', 'Tech Trends', 'Web Development', 'Design', 'Cloud', 'Training'];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const pageHeaderImage = PlaceHolderImages.find((p) => p.id === 'blog-hero');

  return (
    <div>
      <PageHeader
        title="Blog & Insights"
        description="Stay Ahead with the Latest Tech Insights. Explore articles on web development, design, cloud, and more."
        image={pageHeaderImage}
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input
              type="search"
              placeholder="Search articles..."
              className="flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredBlogPosts.length === 0 && (
            <div className="text-center py-16">
                <h2 className="font-headline text-2xl font-bold">No posts found</h2>
                <p className="text-foreground/80 mt-2">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const BlogCard = ({ post }: { post: BlogPost }) => {
    const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
    return (
        <Card className="overflow-hidden group">
            <Link href={`/blog/${post.slug}`}>
                <CardContent className="p-0">
                    <div className="relative">
                        {postImage && (
                            <Image
                                src={postImage.imageUrl}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="object-cover aspect-[3/2] w-full transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={postImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="p-6">
                        <Badge variant="outline" className="mb-2">{post.category}</Badge>
                        <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="mt-2 text-sm text-foreground/80 h-20 overflow-hidden">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-foreground/60 mt-4">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-4">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Link>
        </Card>
    )
}
