package com.jozsef.ui.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jozsef.ui.backend.model.ChartData;
import com.jozsef.ui.backend.util.DatesHelper;

@RestController
public class ChartDataController {
	
	@Autowired
	private RedisDataSource redisDataSource;
	
	@Autowired
	private DatesHelper helper;
	
	@CrossOrigin
	@RequestMapping("/chartData")
	public List<ChartData> getData(@RequestParam(name="days",defaultValue="60") int days) {
		List<String> dates = helper.getLastDates(days); // Gets list of timestamp values
 		List<ChartData> result = redisDataSource.getChartData(dates); // Gets redis values for those timestamps
		return result;
	}
}
