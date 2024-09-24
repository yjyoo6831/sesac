import React, { useState, useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

const StarSection = styled('div')`
    .star {
        color: orange;
        font-size: 40px;
        cursor: pointer;
    }
`;

const CommentForm = (data) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const product = data.info.product;
    // console.log('data > ', product);

    const token = localStorage.getItem('token');
    // console.log('token >> ', token);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/review/list/${product.sellerId}?type=seller`, {
                headers: {
                    Authorization: token,
                },
            });
            console.log('fetchComments > ', response.data.reviews);
            const totalReivews = response.data.totalReviews;
            setComments(response.data.reviews);
        } catch (error) {
            console.error(`${product.productId}번 후기 내역 불러오기 에러발생`, error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            alert('로그인을 먼저 해주세요!');
            setComment('');
            return;
        }
        if (!comment) {
            alert('거래 후기를 입력해주세요.');
            return;
        }

        try {
            await axios.post(
                'http://localhost:8000/review',
                {
                    productId: product.productId,
                    sellerId: product.sellerId,
                    reviewContent: comment,
                    reviewScore: starScore, // 데이터 수정하기
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            fetchComments(); // 댓글 목록 새로 고침
            setComment('');
            setStarScore(0);
        } catch (error) {
            console.error(`${product.productId}번 후기 작성시 에러발생`, error);
        }
    };
    const [starScore, setStarScore] = useState(0);
    const ratingStarHandler = () => {
        let result = [];
        for (let i = 1; i <= 5; i++) {
            result.push(
                <span key={i} onClick={() => setStarScore(i)}>
                    {i <= starScore ? <FaStar className="star" /> : <FaRegStar className="star" />}
                </span>
            );
        }
        console.log('starScore: ', starScore); // starScore: 2
        return result;
    };

    useEffect(() => {
        fetchComments();
    }, [product.productId, product.sellerId, token]);
    return (
        <div className="mt-4 bg-white rounded-lg shadow-md">
            {/* <h2 className="text-2xl font-semibold mb-4">댓글 작성</h2> */}
            <div>
                (총 <span className="font-bold">{comments.length}</span> 건)
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
                <StarSection className="flex text-right mb-4">{ratingStarHandler()}</StarSection>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="거래후기를 입력하세요. (거래후기는 수정 및 삭제가 불가능합니다.)"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="mt-2 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                >
                    거래 후기 작성
                </button>
            </form>
            <ul className="mt-4">
                {comments.length > 0
                    ? comments.map((c, index) => (
                    <li key={index} className="py-2 border-b border-gray-200 ">
                        <span className="font-bold">{c.Buyer.nickname}</span> : {c.reviewContent}
                        <div className="flex justify-end text-sm">
                            {Array.from({ length: 5 }).map((_, index) => {
                                if (index < c.reviewScore) {
                                    return <span>🌝</span>;
                                } else {
                                    return <span>🌚</span>;
                                }
                            })}
                            &nbsp;
                            <span>
                                {c.createdAt.split('T')[0]}&nbsp;
                                {c.createdAt.split('T')[1].split('.000Z')}
                            </span>
                        </div>
                    </li>
                    ))
                    : '거래 후기가 없습니다.'}
            </ul>
        </div>
    );
};

export default CommentForm;
