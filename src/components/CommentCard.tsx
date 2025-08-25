import type { Comment } from "../types/Comment";

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 w-80 h-64 rounded-xl flex justify-between items-center flex-col">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-bold text-lg">{comment.name}</h3>
        <p className="text-gray-500">{comment.username}@</p>
      </div>
      <p className="text-lg">{comment.content}</p>
      <div className="w-full flex justify-between items-center">
        <span className="text-gray-600">{comment.date}</span>
        <span className="text-yellow-600">امتیاز : {comment.rating}</span>
      </div>
    </div>
  );
};
export default CommentCard;
