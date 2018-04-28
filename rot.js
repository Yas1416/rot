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
    
    
    
    import javax.swing.*;
import java.awt.*;
public class Animation {
 JFrame frame;
 DrawPanel drawPanel;
 private int X = 7;
 private int Y = 7;
 boolean up = false;
 boolean down = true;
 boolean left = false;
 boolean right = true;
 public static void main(String[] args) {
 new Animation().go();
 }
 private void go() {
 frame = new JFrame("Animation");
 frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 drawPanel = new DrawPanel();
 frame.getContentPane().add(BorderLayout.CENTER, drawPanel);
 frame.setVisible(true);
 frame.setResizable(false);
 frame.setSize(300, 300);
 frame.setLocation(575, 55);
 moveIt();
 }
 class DrawPanel extends JPanel {
 public void paintComponent(Graphics g) {

 g.setColor(Color.RED);
 g.fillOval(X, Y, 20, 20);
 }
 }
 private void moveIt() {
 while(true){
 if(X >= 283){
 right = false;
 left = true;
 }
 if(X <= 7){
 right = true;
 left = false;
 }
 if(Y >= 259){
 up = true;
 down = false;
 }
 if(Y <= 7){
 up = false;
 down = true;
 }
 if(up){
 Y--;
 }
 if(down){
 Y++;
 }
 if(left){
 X--;
 }
 if(right){
 X++;
 }
 try{
 Thread.sleep(10);
 } catch (Exception e){}
 frame.repaint();
 }
 }

import java.awt.*;
import java.awt.geom.*;
public class ArcExampleColour extends Frame{
 ArcExampleColour()
 {
 addWindowListener(new MyFinishWindow());
 }
 public void paint(Graphics g)
 {
 Graphics2D g2d = (Graphics2D) g;
 g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASIN
 g2d.setStroke(bsThick);
 g2d.draw(arcOpen);
Rectangle2D.Double rect2 = new Rectangle2D.Double(300,50,200,100);
 g2d.setPaint(Color.black);
 g2d.setStroke(bsThin);
 g2d.draw(rect2);
Arc2D.Double arcPie = new Arc2D.Double(rect2,45,90,Arc2D.PIE);
 g2d.setPaint(Color.green);
 g2d.setStroke(bsThick);
 g2d.draw(arcPie);
Rectangle2D.Double rect3 = new Rectangle2D.Double(550,50,200,100);
 g2d.setPaint(Color.black);
 g2d.setStroke(bsThin);
 g2d.draw(rect3);
 Arc2D.Double arcChord = new Arc2D.Double(rect3,45,90,Arc2D.CHORD);
 g2d.setPaint(Color.blue);
 g2d.setStroke(bsThick);
 g2d.draw(arcChord);
 }
 public static void main(String[] args) {
 ArcExampleColour f = new ArcExampleColour();
 f.setTitle("Color Arcs");
 f.setSize(800,200);
 f.setVisible(true);
 }
 }
In the same project. Create New File MyFinishWindow and write the following code:
package arcexamplecolour;
import java.awt.event.*;
public class MyFinishWindow extends WindowAdapter{
 public void windowClosing(WindowEvent e)
 {
 System.exit(0);
 }
}
import java.awt.*;
import java.awt.geom.*;
public class AreaExample extends Frame{
 AreaExample()
 {
 //Enables the closing of the window
 addWindowListener(new MyFinishWindow());
 }
public void paint(Graphics g)
 {
 Graphics2D g2d = (Graphics2D) g;
 //Use of antialiasing to have nicer lines
g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,RenderingHints.VALUE_ANTIALIAS
_ON);
 //Radius of the circle
 int radius = 50;
 //Position of the circle
 int startx = 100;
 int starty = 100;
 //Size of the rectangle
 int width = 70;
 int height = 100;
 //Positioning of the rectangle relative to the circle
 int rectshiftx = -10;
 int rectshifty = 10;
 //Translation of the rectangle and the circle to the right,
 //when one of the set-theoretic operations is carried out.
 int xshift = 140;
 //Union: add
 //Generate a circle and a rectangle.
 Ellipse2D.Double circle1 = circleDouble(startx,starty,radius);
 Rectangle2D.Double rect1 = new Rectangle2D.Double(startx+rectshiftx,
 starty+rectshifty, wid
 g2d.fill(c2);
 //Difference
//Generate a circle and a rectangle (shifted to the right).
 Ellipse2D.Double circle3 = circleDouble(startx+2*xshift,starty,radius);
 Rectangle2D.Double rect3 = new Rectangle2D.Double(startx+rectshiftx+2*xshift,
 starty+rectshifty, width, height);
//Change the circle and the rectangle into Area objects.
 Area c3 = new Area(circle3);
 Area r3 = new Area(rect3);
 //Compute their difference.
 c3.subtract(r3);
 g2d.fill(c3);
 //Symmetric difference: XOR
 //Generate a circle and a rectangle (shifted to the right).
 Ellipse2D.Double circle4 = circleDouble(startx+3*xshift,starty,radius);
 Rectangle2D.Double rect4 = new Rectangle2D.Double(startx+rectshiftx+3*xshift,
 starty+rectshifty, width, height);
//Change the circle and the rectangle into Area objects.
 Area c4 = new Area(circle4);
 Area r4 = new Area(rect4);
 //Compute their symmetric difference.
 c4.exclusiveOr(r4);
 g2d.fill(c4);
 }
 public Ellipse2D.Double circleDouble(double x, double y, double radius)
 {
 return(new Ellipse2D.Double(x-radius,y-radius,2*radius,2*radius));
 }
 public static void main(String[] args) {
 AreaExample f = new AreaExample();
 f.setTitle("Operations for combining areas");
 f.setSize(600,250);
 f.setVisible(true);
 }
 }
Create new file MyFinishWindow and write the following code:
package areaexample;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.*;
public class MyFinishWindow extends WindowAdapter{
 public void windowClosing(WindowEvent e)
 {
 System.exit(0);
 }
} 
