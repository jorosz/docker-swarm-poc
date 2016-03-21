package com.jozsef.ui.backend.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DatesHelper {
	
	/** Returns the last 'n' dates of 10 second intervals in YYYYMMDDHHMMS format
	 * 
	 * @param number number of timestamps to go back from 'now'
	 * @return List of strings with timestamp of intervals in YYMMDDHHMMS format (10 seconds)
	 */
	public List<String> getLastDates(int number) {
		List<String> result = new ArrayList<String>();
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
		Date date = new Date();
		for (int i=1; i<=number; i++) {
			String timestamp = format.format(date).substring(0,13); // chip off last digit
			result.add(timestamp);
			date.setTime(date.getTime()-10000); // Skip back 10 seconds
		}
		
		return result;
	}
	
}
