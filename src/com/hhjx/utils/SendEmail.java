package com.hhjx.utils;

import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;
import javax.servlet.http.HttpSession;

public class SendEmail {

	public void send(HttpSession session,String receiverEmail,String tempPassword) throws Exception { 

		String myEmailAccount = "1293154981@qq.com";  //我的邮箱账号
		String myEmailPassword="kzifvbnemnmchgcj";    //我的邮箱授权码
		
		String myStmpHost="smtp.qq.com";   //qq stmp服务器
		
		
		 
		

		
		Properties props = new Properties();                    // 参数配置
        props.setProperty("mail.transport.protocol", "smtp");   // 使用的协议（JavaMail规范要求）
        props.setProperty("mail.smtp.host", myStmpHost);   // 发件人的邮箱的 SMTP 服务器地址
        props.setProperty("mail.smtp.auth", "true");            // 需要请求认证
        
        final String smtpPort = "465";
        props.setProperty("mail.smtp.port", smtpPort);
        props.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.setProperty("mail.smtp.socketFactory.fallback", "false");
        props.setProperty("mail.smtp.socketFactory.port", smtpPort);
        
		
		//根据配置创建会话对象		
        Session hsession = Session.getInstance(props);
        hsession.setDebug(true);// 设置为debug模式, 可以查看详细的发送 log
		
		//创建邮件
        MimeMessage message = createMessage(session,hsession, myEmailAccount, receiverEmail,tempPassword);
		
		
        Transport transport = hsession.getTransport();   //根据 Session 获取邮件传输对象
        
        transport.connect(myEmailAccount, myEmailPassword);  //使用 邮箱账号 和 授权码 连接邮件服务器

        transport.sendMessage(message, message.getAllRecipients()); //发送邮件, getAllRecipients()发到所有的收件地址


        transport.close();  //关闭连接
		
	}
	
    public MimeMessage createMessage(HttpSession session,Session s,String sendMail, String receiverEmail,String newPass) throws Exception {
         //创建一封邮件
        MimeMessage message = new MimeMessage(s);  //创建邮件
        
        String path =this.getClass().getResource("/").getPath();
        
        String filePath = path+"../../excel/"+session.getAttribute("name")+"历史报价.xlsx";

        message.setFrom(new InternetAddress(sendMail, "深圳市华海金信科技有限公司", "UTF-8"));   //发件人

        message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receiverEmail, "系统用户", "UTF-8"));   //收件人

        message.setSubject("历史报价文件", "UTF-8");              //邮件标题
        
        Multipart multipart = new MimeMultipart();
        
        BodyPart bodyPart = new MimeBodyPart(); 
        
        bodyPart.setContent("您好，请查收！", "text/html;charset=UTF-8");
        
        multipart.addBodyPart(bodyPart);
        
		// 添加附件  
        if (filePath != null && !"".equals(filePath)) {  
            BodyPart attachmentBodyPart = new MimeBodyPart();  
            // 根据附件路径获取文件,  
            FileDataSource dataSource = new FileDataSource(filePath);  
            attachmentBodyPart.setDataHandler(new DataHandler(dataSource));  
            //MimeUtility.encodeWord可以避免文件名乱码  
            attachmentBodyPart.setFileName(MimeUtility.encodeWord(dataSource.getFile().getName()));  
            multipart.addBodyPart(attachmentBodyPart);  
        }  
 
        message.setContent(multipart);

        message.setSentDate(new Date());            //设置邮件发送时间

        message.saveChanges();         //保存设置

        return message;
    }
    
 
    
    

}