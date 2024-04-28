import React, { useEffect, useState } from 'react';

import FullComment from './FullComment';

const UserComment = ({ userComments, comments, setComments }) => {
  

  return (
    <div className="h-96 overflow-y-scroll">
      {comments?.map((comment) => (
        <div key={comment?.id} className="space-y-2">
          <FullComment
            isComment={true}
            comment={comment}
            comments={comments}
            setComments={setComments}
          />
          <div className="pl-16">
            {comment?.replies?.map((reply) => (
              <FullComment
                key={reply?.commentId}
                isComment={false}
                comment={reply}
                comments={comments}
                setComments={setComments}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserComment;