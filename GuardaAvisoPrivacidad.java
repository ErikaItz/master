import java.sql.*;
public class guarda aviso privacidad {
 Connection con;
 Statement st;
 ResultSet rs;
public void guarda aviso privacidad() {
 try {
 String userName=”root”;
 String password=”admin”;
 String url="jdbc:mysql://localhost/DatosCoches";
 Class.forName("com.mysql.jdbc.Driver").newInstance();
 con = DriverManager.getConnection(url, userName, password);
 System.out.println("Conexión a la BD");
 }
 catch (Exception e) {
 System.out.println("Error en conexión ");
 }
 }

 //Para cerrar la conexión una vez terminadas las consultas
 public void cerrarConexion() {
 try {
 con.close();
 System.out.println("Conexión cerrada");
 }
 catch (SQLException e) {
 System.out.println("Error al cerrar conexión");
 }
 }
}