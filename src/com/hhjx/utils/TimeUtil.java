package com.hhjx.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;

public class TimeUtil {
	public static String getCurrentTimeString(String format) {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		return sdf.format(date);
	}
	
}
