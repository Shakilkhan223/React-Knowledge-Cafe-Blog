import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author_img,
    posted_date,
    author,
    hashtag,
  } = blog;
  return (
    <div className="mb-5 p-3 border-2 border-gray-100 rounded-2xl">
      <img
        className="w-full h-[400px] rounded-2xl object-center object-cover mb-8"
        src={cover}
        alt={`Cover Picture of the Blog: ${title}`}
      />
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-6">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-base text-gray-500">Posted on: {posted_date}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-red-400 hover:text-red-600 duration-500"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-500 my-6">
        {hashtag.map((hash, idx) => (
          <span key={idx} className="mr-2">
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-white font-bold bg-red-400 border py-2 px-4 rounded-2xl"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
