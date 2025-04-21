import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config/firebase'; 
import { doc, getDoc } from 'firebase/firestore';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPost = async () => {
     
      if (!id) {
        setError('Invalid post ID');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
          setPost(docSnap.data()); 
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to fetch post');
      } finally {
        setLoading(false); 
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>{error}</p>; 


  return (
    <div className="post">
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;
