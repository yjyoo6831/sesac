import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const NewItemSection = (newItem) => {
    const newProductPriceRef = useRef(null); // 새상품 최저가
    const newProductReviewRef = useRef(null); // 거래후기
    console.log("newItem >> ",newItem.newItem);
    
    return (
        <div ref={newProductPriceRef} className="py-8">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-center p-2 text-gray-600 font-semibold w-1/4">판매처</th>
                            <th className="text-center p-2 text-gray-600 font-semibold w-1/4">상품명</th>
                            <th className="text-center p-2 text-gray-600 font-semibold w-1/4">가격</th>
                            <th className="text-center p-2 text-gray-600 font-semibold w-1/4">링크</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newItem.newItem && newItem.newItem.length > 0 ? (
                            newItem.newItem.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-800 w-1/4">
                                        {item.mallName}
                                        {item.npay ? (
                                            <span className="ml-2 bg-green-500 text-white px-2 py-1 text-xs rounded-full">
                                                Npay
                                            </span>
                                        ) : null}
                                    </td>
                                    <td className="p-4 text-gray-800 w-1/4">
                                        <span className="font-semibold block sm:whitespace-normal sm:overflow-visible whitespace-nowrap overflow-hidden text-ellipsis max-w-[10ch] sm:max-w-[15ch]">
                                            {item.title
                                                .split('<b>')
                                                .join('')
                                                .split('</b>')
                                                .join('')
                                                .split('&amp;')
                                                .join('')
                                                .split('&quot')
                                                .join('')}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-900 w-1/4 text-center">{item.lprice} 원</td>
                                    <td className="p-4 w-1/4">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-semibold"
                                        >
                                            사러가기
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4 text-gray-500">
                                    새 상품에 대한 정보가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewItemSection;
