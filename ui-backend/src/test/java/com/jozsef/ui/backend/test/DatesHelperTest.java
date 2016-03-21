package com.jozsef.ui.backend.test;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.logging.Logger;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.jozsef.ui.backend.UiBackendApplication;
import com.jozsef.ui.backend.util.DatesHelper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(UiBackendApplication.class)
public class DatesHelperTest {
	
	@Autowired 
	private DatesHelper datesHelper;
	
	private final static Logger logger = Logger.getLogger(DatesHelperTest.class.getName()); 

	@Test
	public void testSize() {
		List<String> last10 = datesHelper.getLastDates(10);
		logger.info(last10.toString());
		assertEquals(10,last10.size());
		
	} 

}
