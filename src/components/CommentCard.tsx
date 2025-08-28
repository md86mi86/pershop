import type { Comment } from "../types/Comment";
import { motion } from "framer-motion";

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3, once: false }}
      className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 max-w-sm w-full rounded-xl flex flex-col justify-between items-start shadow-md"
    >
      <div className="w-full flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{comment.name}</h3>
        <p className="text-gray-500">{comment.username}@</p>
      </div>
      <p className="text-base text-gray-800 line-clamp-4">{comment.content}</p>
      <div className="w-full flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm">{comment.date}</span>
        <span className="text-yellow-600 font-medium">
          ⭐ امتیاز : {comment.rating}
        </span>
      </div>
    </motion.div>
  );
};

export default CommentCard;
