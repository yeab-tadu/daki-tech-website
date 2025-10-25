import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);

  return (
    <div className="pt-16">
      <header className="py-12 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="default">{post.category}</Badge>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-foreground/80">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <article className="prose prose-lg max-w-3xl mx-auto">
            {postImage && (
              <Image
                src={postImage.imageUrl}
                alt={post.title}
                width={800}
                height={500}
                className="rounded-lg object-cover w-full aspect-video mb-8"
                data-ai-hint={postImage.imageHint}
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </main>
    </div>
  );
}
