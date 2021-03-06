package kr.ac.ourpark.dao;

import java.util.List;

import kr.ac.ourpark.model.ReviewImage;

public interface ReviewImageDao {

	void add(ReviewImage image);

	int countImg(String placeId);

	List<ReviewImage> getImage(String placeId);

	void delete(int review);

}