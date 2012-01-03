bouncy_ball_js_teaching
=======================

Based on an idea from [@magnetised](http://magnetised.com), I set up a little framework
to help me introduce my kids to programming.
(I'd used hacketyhack before with them, but while that was intellectually stimulating,
didn't provide much visual satisfaction. Also, while some other languages are slightly 
more syntactically forgiving than javascript (e.g. ruby, python), the main advantage
of using javascript is... you can start.) 

NB: this doesn't help you learn good javascript, just get some basic steps in programming

In fact, it (each_frame.js) uses not very good javascript, to make it easier to programming: 
global variables (unscoped by var) and also avoids constructs like x = x +1 
(because lvalue vs rvalue difference of same variablis very confusing to novice programmers). 



How to use
----------

This are just my shared notes, so maybe not ready for use by others (see plans and fantasies below),
but just in case...

To use this to teach you need to:
(I'm assuming you know how to program (and use git, github, etc) yourself)

* get it locally (fork or clone it, or download a tarball)
* copy each_frame.js.template to each_frame.js
* open each_frame.js in a text editor / IDE (it does help to get syntax colouring)
* open ball.html in a modern browser with a javascript console (I use Chrome)
* open the javascript console for ball.html
* encourage the kids to try to make the ball do stuff!
  - firstly by interacting in the console (assigning x etc.)
  - secondly by commenting out lines within eachFrame.js (and saving and reloading)
  - thirdly by adding their own lines
* some things to do:
  - make y increase
  - start at the top right and make y decrease
  - bounce the x off the right hand side
  - bounce the x and y off all sides
  - change the colour when it bounces (a different colour for each side) 
  
Plans and fantasies
-------------------

* add buttons for the key functions
* add textareas to edit them
* add a grid on the canvas
* label the axes
* boxes (for start and eachFrame) to type in the code with no save and reload
* analyze start for variables and inject into html
* saves to web app maybe 
