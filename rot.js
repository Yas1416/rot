import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;
class Surface extends JPanel {
 private void doDrawing(Graphics g) {
     Graphics2D g2d = (Graphics2D) g;
 g2d.setColor(new Color(150, 150, 150));
 
        g2d.fillRect(20, 20, 80, 50);
        g2d.translate(180, -50);
        g2d.rotate(Math.PI/4);
        g2d.fillRect(80, 80, 80, 50);
            }
  public void paintComponent(Graphics g) {
        super.paintComponent(g);
        doDrawing(g);
    }
}
public class Rotation extends JFrame {
      public Rotation() {
           initUI();
    }
    
    private void initUI() {
           setTitle("Rotation");
 add(new Surface());
  setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);        
    }
public static void main(String[] args) {
   SwingUtilities.invokeLater(new Runnable() {
 public void run() {
  Rotation rt = new Rotation();
                rt.setVisible(true);        
            }
        });                    
    }
