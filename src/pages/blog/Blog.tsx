import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";

export default function Blog() {
  return (
    <div className="p-5">
      <CreateBlog></CreateBlog>
      <BlogList></BlogList>
    </div>
  );
}
