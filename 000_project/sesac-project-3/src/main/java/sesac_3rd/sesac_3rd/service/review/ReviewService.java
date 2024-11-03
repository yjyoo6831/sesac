package sesac_3rd.sesac_3rd.service.review;

import org.springframework.stereotype.Service;
import sesac_3rd.sesac_3rd.dto.review.ReviewDTO;
import sesac_3rd.sesac_3rd.dto.review.ReviewFormDTO;
import sesac_3rd.sesac_3rd.dto.review.ReviewListDTO;
import sesac_3rd.sesac_3rd.entity.Review;
import sesac_3rd.sesac_3rd.entity.User;

import java.util.List;

@Service
public interface ReviewService {

    // 리뷰 작성
    public Review createReview(ReviewFormDTO reviewformDTO, User user);

    // 장소별 리뷰 목록 조회
    ReviewListDTO getAllReviewByPlaceId(Long placeId);

    // 리뷰 단건 조회
    ReviewDTO getReviewById(Long reviewId);

    // 리뷰 수정
    public ReviewFormDTO updateReview(Long reviewId, ReviewFormDTO reviewformDTO);

    // 리뷰 삭제
    public boolean deleteReview(Long reviewId);

}
