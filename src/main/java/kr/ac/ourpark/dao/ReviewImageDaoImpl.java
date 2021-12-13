package kr.ac.ourpark.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.ourpark.model.ReviewImage;

@Repository
public class ReviewImageDaoImpl implements ReviewImageDao {
	@Autowired
	SqlSession sql;

	@Override
	public void add(ReviewImage image) {
		sql.insert("review_image.add", image);
	}

	@Override
	public int countImg(String placeName) {
		return sql.selectOne("review_image.count_img", placeName);
	}

	@Override
	public List<ReviewImage> getImages(String placeName) {
		return sql.selectList("review_image.get_images", placeName);
	}

	@Override
	public void delete(int code) {
		sql.delete("review_image.delete", code);
		
	}


}
