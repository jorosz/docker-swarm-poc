package com.jozsef.ui.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import com.jozsef.ui.backend.model.ChartData;

@Service
public class RedisDataSource {

	@Autowired
	private StringRedisTemplate template;
	
	private final static Logger LOGGER = Logger.getLogger(RedisDataSource.class.getName()); 

	
	/**
	 * Requests chart data from Redis using the autowired String template for the dates supplied
	 * 
	 * @param dates List of date keys to fetch from Redis. Should be in the format of YYYYMMDDHHMMS (note: single digit second) 
	 */
	public List<ChartData> getChartData(List<String> dates) throws DataAccessException {
		List<ChartData> result = new ArrayList<ChartData>();
		
		try {
			LOGGER.log(Level.FINE,"Fetching data from Redis");
			// Get values from Redis for the keys using multiget
			List<String> redis = template.opsForValue().multiGet(dates); 
			
			// multiget should return same number of items with null when missing
			assert redis.size() == dates.size(); 
			
			// Transform values into result set format
			for (int i=0; i<dates.size(); i++) {
				result.add(new ChartData(dates.get(i), redis.get(i)));
				LOGGER.log(Level.FINEST,dates.get(i) + " --> "+redis.get(i));
			}
			
		} catch (Exception e) {
			LOGGER.log(Level.WARNING,"Exception when talking to Redis",e);
			throw e;
		}
		return result;
	}
}
