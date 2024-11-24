import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 py-4 rounded-2xl ml-4 mt-4 p-4">
      <div className="mb-5">
        <h3 className="text-2xl font-bold bg-[#6047EC]/10 border-2 border-[#6047EC] p-4 rounded-xl text-center ">
          Spent time on read: {readingTime}
        </h3>
      </div>
      <div className="bg-[#111111]/5 p-7 rounded-xl">
        <h2 className="text-xl font-bold mb-4">
          BookMarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
