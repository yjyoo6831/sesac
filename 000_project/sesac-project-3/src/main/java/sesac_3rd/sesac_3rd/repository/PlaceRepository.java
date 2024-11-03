package sesac_3rd.sesac_3rd.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sesac_3rd.sesac_3rd.dto.place.PlaceDTO;
import sesac_3rd.sesac_3rd.entity.Place;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
    // 장소 아이디로 조회
    Place findByPlaceId(Long placeId);

    // 전체 조회
    @Query("SELECT p FROM Place p JOIN FETCH p.placeCategory") // Fetch join을 사용하여 카테고리도 함께 가져옴
    Page<Place> getAllPlaceRepo(Pageable pageable);

    // 검색 - 위치(지역구)
    Page<Place> findByLocationContaining(String keyword, Pageable pageable);

    // 검색 - 장소명
    Page<Place> findByPlaceNameContaining(String keyword, Pageable pageable);

    // 장소 아이디 찾기


}
