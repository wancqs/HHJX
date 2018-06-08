package com.hhjx.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Collection;
import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;

import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ExcelUtil {  

    @SuppressWarnings("unchecked")
	  

    // 创建excel文件函数  

    // src为待保存的文件路径,json为待保存的json数据  

    public static void parseJsonToExcel(String saveFileName,String sourceJson){  
        try{  
            File filewrite=new File(saveFileName);  
            filewrite.createNewFile();  
            OutputStream os = new FileOutputStream(filewrite);  
//            JSONObject jsonObject = JSONObject.fromObject(sourceJson);
            JSONArray jsonArray = JSONArray.fromObject(sourceJson);
            createExcel(os, jsonArray);  
        }catch (Exception e){  
            e.printStackTrace();  
        }  
    }  
  
    public static void createExcel(OutputStream os, JSONArray ja) throws WriteException,IOException {  
        //创建工作薄  
        WritableWorkbook workbook = Workbook.createWorkbook(os);  
        //创建新的一页  
        WritableSheet sheet = workbook.createSheet("First Sheet",0);  
//        JSONArray jsonArray = (JSONArray)apiJarInfos.get(rootNodeName);  
        JSONObject jsonObjectHeader = ja.getJSONObject(0);  
        createRealHeader(jsonObjectHeader, sheet);
        String[] headers = createTableHeader(jsonObjectHeader, sheet);
        int size =  ja.size();  
        for(int i=1; i<size; i++){  //修改
            JSONObject jsonObject = ja.getJSONObject(i);  
            int j = 0;  
            for (String key : headers){  
//            	System.out.println("key"+key);
            	if(!"".equals(key) && key!=null && key.length()>0 && !key.isEmpty()){
            		Label cellValue = new Label(j, i, jsonObject.get(key).toString());  
                    sheet.addCell(cellValue);  
                    j++;  
            	}
                
            }  
        }  
        //把创建的内容写入到输出流中，并关闭输出流  
        workbook.write();  
        workbook.close();  
        os.close();  
    }  
  
    public static String[] createTableHeader(JSONObject jsonObjectHeader, WritableSheet sheet) throws WriteException {  
        //遍历JSONObject中的key  
        Iterator iterable = jsonObjectHeader.keys();  
        String[] headers = new String[jsonObjectHeader.size()-1];  
        int i = 0;  //修改
        while (iterable.hasNext()){  
        	//去除空表头
        	String next = iterable.next().toString();
        	if(!"$$hashKey".equals(next)){
        		 //创建要显示的内容,创建一个单元格，第一个参数为列坐标，第二个参数为行坐标，第三个参数为内容  
                String headerName = next;  
//                System.out.println("headerName"+headerName);
//                Label cell = new Label(i, 0, headerName);  
//                sheet.addCell(cell);  
                headers[i] = headerName;  
                i++;  
        	}
        	}  
        return headers;  
    }  

    public static void createRealHeader(JSONObject jsonObjectHeader, WritableSheet sheet) throws WriteException {  
    //遍历JSONObject中的key  
    @SuppressWarnings("unchecked")
	Collection c = jsonObjectHeader.values();  
    int i = 0;  //修改
    Iterator iterator = c.iterator();
    while(iterator.hasNext()) { 
    	String next = iterator.next().toString();
    	if(!"".equals(next)||next.indexOf("object")!=-1){
        //创建要显示的内容,创建一个单元格，第一个参数为列坐标，第二个参数为行坐标，第三个参数为内容  
        String headerName = next;  
//        System.out.println(headerName);
        Label cell = new Label(i, 0, headerName);  
        sheet.addCell(cell);  
        i++;
    	}  
    }
    }

} 