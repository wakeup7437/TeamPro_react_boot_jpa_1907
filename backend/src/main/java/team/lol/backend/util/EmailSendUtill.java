package team.lol.backend.util;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Authenticator;


public class EmailSendUtill {
    
    public void send(String x,String y) {
       
            // String host               = "smtp.naver.com";
            // final String userName     = "계정";
            // final String password     = "비번";              //보내는 쪽의 메일 설정부분.
            // String to                 = x;                   //받는 사람의 메일 주소.
            
            // Properties props = new Properties();
            // props.put("mail.smtp.host", host);               //네이버용
            // props.put("mail.smtp.auth", "true");

            String host               = "smtp.gmail.com";
            final String userName     = "gckrgc";
            final String password     = "bitcamp123";             //보내는 쪽의 메일 설정부분.
            String to                 = x;                        //받는 사람의 메일 주소.
            
            Properties props = new Properties();
            props.put("mail.smtp.host", host);                    //구글용
            props.put("mail.smtp.port", 465); 
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.ssl.enable", "true");
            props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
            props.put("mail.smtp.socketFactory.port", "465");  
            props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");  
            props.put("mail.smtp.socketFactory.fallback", "false");
    
            Session session = Session.getDefaultInstance(props,new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication(){
                    return new PasswordAuthentication(userName, password);
                }
            });
    
            // Compose
            try{
                MimeMessage message = new MimeMessage(session);
                message.setFrom(new InternetAddress(userName));
                message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
                
                // Subject
                message.setSubject("GC.KR에서 임시 비밀번호를 보내드립니다.");   //  메일 제목
    
                // TEXT
                   message.setText("임시 비밀번호는 " + y + "입니다. 로그인 후 비밀 번호를 필히 변경해주세요.");
                // html태그 넣는법   
                // message.setContent( 
                //  "<img src='http://optimal.inven.co.kr/upload/2016/02/10/bbs/i12225589992.jpg'>"
                // +"<select class='form-control'>"
                // +"<option>1</option>"
                // +"<option>2</option>"
                // +"<option>3</option>"
                // +"<option>4</option>"
                // +"<option>6</option>"
                // +"<div style='color : red;'>안녕하세요"+ y + "</div>"
                // +"</select>","text/html; charset=utf-8");   
            
                // send the message
                Transport.send(message);
                System.out.println("message sent successfully...");
            } catch (MessagingException e){
                e.printStackTrace();
            }
    }
    
    
}