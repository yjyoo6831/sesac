import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 5;
  const observerRef = useRef();

  const fetchProducts = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/product/list?page=${page}&limit=${limit}`
      );
      const { productInfo, images, location, totalPages } = response.data;

      // images를 상태로 저장
      setImages((prevImages) => [...prevImages, ...images]);

      const productsWithImages = productInfo.map((product, index) => {
        return {
          ...product,
          image: images[index]?.[0]?.productImage, // 이미지 매칭
          location: location[index], // 위치 매칭
        };
      });

      setProducts((prevProducts) => [...prevProducts, ...productsWithImages]);
      setTotalPages(totalPages);
    } catch (error) {
      setError('상품을 가져오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting && !loading && currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(handleScroll);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, currentPage, totalPages]);

  return (
    <section className="container mx-auto">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link to={`/product/read?productId=${product.productId}`} key={product.productId}>
            <div className="bg-white border rounded shadow p-4">
              <img
                src={product.image || '/images/logo.png'} // 이미지가 없을 경우 대체 이미지
                alt={product.productName}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{product.productName}</h3>
              <p>{product.content}</p>
              <p>{product.price} 원</p>
              <p>
                {product.location
                  ? `${product.location.depth1} ${product.location.depth2} ${product.location.depth3}`
                  : '주소 정보가 없습니다.'}
              </p>
              <p>{new Date(product.updatedAt).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 스크롤 감지용 요소 */}
      <div ref={observerRef} style={{ height: '20px' }} />
    </section>
  );
};

export default ProductList;
