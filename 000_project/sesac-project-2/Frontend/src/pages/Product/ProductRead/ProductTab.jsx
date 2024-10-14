import React, { useRef } from 'react';
import CommentForm from './CommentForm';
import NewItemSection from './NewItemSection';

const ProductTab = (product) => {
  const userReviewRef = useRef(null); // 새상품 리뷰
  const newProductPriceRef = useRef(null); // 새상품 최저가
  const newProductReviewRef = useRef(null); // 거래후기
  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto">
      <hr />
      <div
        className="flex justify-evenly flex-wrap gap-5 sm:gap-10 px-5 sm:px-7 py-4 sm:py-8 mt-5 text-xl font-semibold sm:text-2xl text-black hover:text-[#f3b105]"
        onClick={() => handleScrollTo(newProductPriceRef)}
      >
        <div>새상품 최저가</div>
        <div
          onClick={() => handleScrollTo(userReviewRef)}
        >
          거래후기
        </div>
      </div>
      <div>
      <NewItemSection newItem={product.newItem} />
      </div>
      <hr className="mt-2" />
      <div ref={userReviewRef} className="py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          거래후기
        </h2>
      <CommentForm info={product} />
      
      </div>
    </div>
  );
};

export default ProductTab;
