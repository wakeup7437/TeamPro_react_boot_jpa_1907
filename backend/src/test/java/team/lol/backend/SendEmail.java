package team.lol.backend;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Authenticator;

/**
 * SendEmail
 */
public class SendEmail {
     public static void main(String[] args) {
    
        String host               = "smtp.naver.com";
        final String user         = "cogudrnr9";
        final String password     = "Asd85201!@";              //보내는 쪽의 메일 설정부분.

        String to                 = "cogudrnr9@naver.com";     //받는 사람의 메일 주소.
        
        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.auth", "true");

        Session session = Session.getDefaultInstance(props,new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication(){
                return new PasswordAuthentication(user, password);
            }
        });

        // Compose
        try{
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            
            // Subject
            message.setSubject("[subject] Java Mail Test");   //  메일 제목

            // TEXT
            message.setText("Simple mail test..");   //메일 내용
        
            // send the message
            Transport.send(message);
            System.out.println("message sent successfully...");
        } catch (MessagingException e){
            e.printStackTrace();
        }
    }
}