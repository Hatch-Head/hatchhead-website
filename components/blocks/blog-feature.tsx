import Link from "next/link";
import Image from 'next/image';
import { type Post } from "../../lib/service";
import AuthorComponent from "../Author";

type Props = {
    post: Post
};


export const FeaturedArticle = ({ post }: Props) => (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
        { post.banner &&
            <Image 
                src={post.banner} 
                alt={post.title} 
                width={1200} 
                height={800}             
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-10"
            />
        }
        <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
        >
            <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>
        <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
        >
            <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white ">{post.title}</h2>
                <p className="mt-6 text-sm leading-8 dark:text-gray-300">
                    {post.excerpt}
                </p>

                <div className="grid md:grid-cols-3  gap-8 mt-12">
                    <Link className="bg-primary dark:bg-gold flex justify-center space-x-3 items-center button text-white border-full px-4 py-2 rounded-full dark:hover:bg-gold-75 hover:bg-primary-75" key={post.slug} href={`/insights/${post.slug}`}>Continue Reading</Link>

                </div>
                <div className="gap-8 mt-8 text-white text-md">

                    <AuthorComponent
                        time="short read"
                        date={post.date}
                        author={post.author}
                    />
                </div>


            </div>

        </div>
    </div>
);
export default FeaturedArticle;