/* eslint-disable react/prop-types */
import { useState } from "react";
import user from "../assets/image.png";

const FullComment = ({comment,comments,setComments, isComment}) => {
  const [enableReplay, setEnableReply] = useState(false);

  

  const formSubmit = (e) => {
    e.preventDefault();
   
  
   if(e.target.reply.value){
     const id = isComment
       ? comment.id
       : comments
           .map((c) => c.replies.find((r) => r.id === comment.id))
           .find((c) => c?.id === comment.id).id;

     
    const replies = comments.find((c) => c.id === comment.id)?.replies;
    const lastReply = replies[replies?.length-1]
    
      const submission = {
        commentId:
          lastReply?.commentId + 1 ||
          Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        id: id,
        user: "User",
        text: e.target.reply.value,
      };

     
      comments.find((c) => c.id === id)?.replies?.push(submission);
      const modifiedComment = comments.find((c) => c.id === id);
      const filteringOldComment = comments.filter((c) => c.id !== comment.id);

     filteringOldComment.splice(id+1,0,modifiedComment)
 

      setComments([...filteringOldComment]);
     
     setEnableReply(false);
   }

  };




  return (
    <div onClick={() => setEnableReply(false)} className="flex gap-5 w-96">
      <img className="w-10 h-10" src={user} alt="" />
      <div className="space-y-[1px]">
        <span className="font-light text-xs bg-black text-white px-2 py-1 rounded-md">{comment?.user}</span>
        <p>{comment.text}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setEnableReply(!enableReplay);
          }}
          className="text-blue-500 font-semibold"
        >
          Reply
        </button>
        {enableReplay && (
          <form
            onSubmit={formSubmit}
            onClick={(e) => e.stopPropagation()}
            className="space-x-2"
          >
            <input type="text" className="rounded-xl" name="reply" />
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded-xl text-white"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FullComment;
