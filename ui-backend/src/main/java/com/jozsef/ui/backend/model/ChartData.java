package com.jozsef.ui.backend.model;

public class ChartData {

	private final String date;
	private final String tps;
	
	public ChartData(String date, String tps) {
		this.date = date;
		this.tps = tps;
	}

	public String getDate() {
		return date;
	}

	public String getTps() {
		return tps;
	}
	
}
