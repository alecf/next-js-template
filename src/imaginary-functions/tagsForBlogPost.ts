import { imagineAppRoute } from "@imaginary-dev/nextjs-util";

/**
 * This function takes in a blog post text and returns at least 5 good tags for the blog post.
 * The tags should be generally applicable blog tags used to categorize blog posts.
 *
 * @param blogPostText - string with the blog post text
 * @returns an array of at least 5 good tags for the blog post.
 *
 * @imaginary
 */
declare function tagsForBlogPost(blogPostText: string): Promise<Array<string>>;

export default imagineAppRoute(tagsForBlogPost, "/api/tagsForBlogPost");
