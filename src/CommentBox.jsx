import { useEffect, useState } from 'react';
import UserComment from './Components/UserComment';


const CommentBox = () => {

  

   
   const userComments = [
       {
        id: 1,
        user: "Alice",
        text: "This is a great post!",
        replies: [
          {
            commentId: 101,
            id: 1,
            user: "Bob",
            text: "Thanks, Alice!",
        },
    ],
},
]
 const [comments, setComments] = useState([...userComments]);



     const formSubmit = (e) => {
       e.preventDefault();
     
      if(e.target.comment.value){
         const prev = comments[comments.length - 1];

         const comment = {
           id: prev?.id + 1,
           user: "User",
           text: e.target.comment.value,
           replies: [],
         };

         
       
         setComments([...comments,comment])
         console.log(comments);
      }

     };

   


    return (
      <div className="bg-white p-10">
        <UserComment comments={comments} setComments={setComments} userComments={userComments} />

        <form
          onSubmit={formSubmit}
          onClick={(e) => e.stopPropagation()}
          className="space-y-2 mt-10"
        >
          <input type="text" className="rounded-xl w-full" name="comment" />
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-xl text-white"
          >
            Submit
          </button>
        </form>
      </div>
    );
};

export default CommentBox;