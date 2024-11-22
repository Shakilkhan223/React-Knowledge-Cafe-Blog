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
    <div className="mb-16">
      <img
        className="w-full"
        src={cover}
        alt={`Cover Picture of the Blog: ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
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
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtag.map((hash, idx) => (
          <span key={idx} className="ml-2">
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-800 font-bold underline"
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
