<section id="themes">
	<h2>Themes</h2>
		<p>
			Set your presentation theme: <br>
			<!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
                        <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/blood.css'); return false;">Blood</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
			<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
		</p>
</section>

H:

# Transformations

Jean Pierre Charalambos  
[Universidad Nacional de Colombia](https://unal.edu.co/)  
Presentation best seen [online](https://visualcomputing.github.io/Transformations/)  
See also the [source code](https://github.com/VisualComputing/Transformations)

H:

## Index

 1. Intro<!-- .element: class="fragment" data-fragment-index="1"-->
 2. Linear transformations<!-- .element: class="fragment" data-fragment-index="2"-->
    * Scaling, rotation & shearing
 3. Affine transformations<!-- .element: class="fragment" data-fragment-index="3"-->
    * Homogeneous space
    * Translation
    * Scaling, rotation & shearing revisited
    * Inversion
 4. Projections<!-- .element: class="fragment" data-fragment-index="4"-->
    * Orthographic
    * Perspective
 5. References<!-- .element: class="fragment" data-fragment-index="5"-->
 6. Annex: Matrix orthogonality<!-- .element: class="fragment" data-fragment-index="6"-->
 
H:

## Intro

* Affine transformations are key to develop:<!-- .element: class="fragment" data-fragment-index="1"-->
    * [SceneGraphs](https://github.com/VisualComputing/SceneGraphs)
    * [Shaders](https://github.com/VisualComputing/Shaders)
    * [Interactive virtual reality applications](https://github.com/VisualComputing/Interaction)
* Read carefully this presentation & these references if you need more detailed explanations:<!-- .element: class="fragment" data-fragment-index="2"-->
    * Affine transformations are found in [3D Math primer for Graphics and Game Development – chs. 8 & 9](https://tfetimes.com/wp-content/uploads/2015/04/F.Dunn-I.Parberry-3D-Math-Primer-for-Graphics-and-Game-Development.pdf)
    * Projections matrices are found in [OpenGL projection matrix](http://www.songho.ca/opengl/gl_projectionmatrix.html)
* 3D Rotations methods<!-- .element: class="fragment" data-fragment-index="3"-->
    * Euler angles (discussed here)
    * Matrix orthogonality (discussed here)
    * Quaternions (best method and the one supported in [nub](https://visualcomputing.github.io/nub-javadocs/nub/primitives/Quaternion.html), not yet included in this presentation but discussed in [3D Math primer for Graphics and Game Development – ch. 10](https://tfetimes.com/wp-content/uploads/2015/04/F.Dunn-I.Parberry-3D-Math-Primer-for-Graphics-and-Game-Development.pdf))

N:

* Standard = Canonical

H:

## Linear transformations: Notion

Property 1<!-- .element: class="fragment" data-fragment-index="1"-->
   $$F(a+b)= F(a)+ F(b)$$

Property 2<!-- .element: class="fragment" data-fragment-index="2"-->
   $$F(\lambda a) = \lambda F(a)\rightarrow F(0) = 0$$

Observation 1:<!-- .element: class="fragment" data-fragment-index="3"-->
   Matrix multiplication is always linear

Observation 2:<!-- .element: class="fragment" data-fragment-index="4"-->
   Translation is a nonlinear transformation
   
V:

## Linear transformations: 2d scaling

<div class="ulist">
    <img src="fig/image5.JPG" alt="2d scaling" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= sx*x$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'= sy*y$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        sx & 0 \cr
        0 & sy \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="4">
        $P'= S(sx,sy) \bullet P$
        </p>
    </ul>
</div>

N:

* mirroring and reflections are missed

V:

## Linear transformations: 3d scaling

<div class="ulist">
    <img src="fig/image17.JPG" alt="3d scaling" width="30%" style="float: left">
    <ul style="width: 65%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= sx*x$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'= sy*y$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$z'= sz*z$`
        </p>
        <p class="fragment" data-fragment-index="4">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        sx & 0 & 0 \cr
        0 & sy & 0 \cr
        0 & 0 & sz \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="5">
        $P'= S(sx,sy,sz) \bullet P$
        </p>
    </ul>
</div>

N:

* mirroring and reflections are missed

V:

## Linear transformations: 2d rotation

<div class="ulist">
    <img src="fig/image7.png" alt="2d rotations" width="38%" style="float: left">
    <ul style="width: 57%;">        
        <p class="fragment" data-fragment-index="1">
        $x = rcos \alpha$
        </p>
        <p class="fragment" data-fragment-index="2">
        $y= rsin \alpha$
        </p>
        <p class="fragment" data-fragment-index="3">
        $x'= rcos (\alpha+\beta)$
        $x'= rcos \alpha cos \beta - rsin \alpha sin \beta$
        </p>
        <p class="fragment" data-fragment-index="4">
        $y'= rsin (\alpha+\beta)$
        $y'= rcos \alpha sin \beta - rsin \alpha cos \beta$
        </p>
    </ul>
</div>

V:

## Linear transformations: 2d Rotation

<div class="ulist">
    <img src="fig/image7.png" alt="2d rotations" width="38%" style="float: left">
    <ul style="width: 57%;">        
        <p class="fragment" data-fragment-index="1">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        cos\beta & -sin \beta \cr
        sin\beta & cos \beta \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="2">
        $P'= R(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Linear transformations: 3d rotation
### Euler angles (respect to z-axis)

<div class="ulist">
    <img src="fig/image20.JPG" alt="z-axis rotation" width="28%" style="float: left">
    <ul style="width: 67%;">
        <p class="fragment" data-fragment-index="1">
        $z' = z$
        </p>
        <p class="fragment" data-fragment-index="2">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        cos\beta & -sin \beta & 0 \cr
        sin\beta & cos \beta & 0 \cr
        0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="3">
        $P'= R_z(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Linear transformations: 3d rotation
### Euler angles (respect to x-axis)

<div class="ulist">
    <img src="fig/image21.JPG" alt="z-axis rotation" width="28%" style="float: left">
    <ul style="width: 67%;">
        <p class="fragment" data-fragment-index="1">
        $x' = x$
        </p>
        <p class="fragment" data-fragment-index="2">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 & 0 \cr
        0 & cos\beta & -sin \beta \cr
        0 & sin\beta & cos \beta \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="3">
        $P'= R_x(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Linear transformations: 3d rotation
### Euler angles (respect to y-axis)

<div class="ulist">
    <img src="fig/image22.JPG" alt="z-axis rotation" width="28%" style="float: left">
    <ul style="width: 67%;">
        <p class="fragment" data-fragment-index="1">
        $y' = y$
        </p>
        <p class="fragment" data-fragment-index="2">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        cos\beta & 0 & sin \beta \cr
        0 & 1 & 0 \cr
        -sin\beta & 0 & cos \beta \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="3">
        $P'= R_y(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Linear transformations: 2d shearing

<div class="ulist">
    <img src="fig/shearing2d.png" alt="2d shearing" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= x + h*y$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'=y$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & h \cr
        0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="4">
        $P'= D_y(h) \bullet P$
        </p>
    </ul>
</div>

V:

## Linear transformations: 2d shearing

<div class="ulist">
    <img src="fig/shearing2dy.png" alt="2d y-shearing" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= x$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'=y + h*x$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 \cr
        h & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="4">
        $P'= D_x(h) \bullet P$
        </p>
    </ul>
</div>

V:

## Linear transformations: 3d shearing

<div class="ulist">
    <img src="fig/shearing_proscene.png" alt="3d shearing" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'=x+az$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'=y+bz$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$z'=z$`
        </p>
        <p class="fragment" data-fragment-index="4">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 & a \cr
        0 & 1 & b \cr
        0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="5">
        $P'= D_z(a,b) \bullet P$ (<a href="#/5/4">goto 2d translation</a>)
        </p>
    </ul>
</div>

V:

## Linear transformations: 3d shearing

...don't forget $P'= D_x(a,b) \bullet P$ and $P'= D_y(a,b) \bullet P$

H:

## Affine transformations
### Non-linearity of translation

<div class="ulist">
    <img src="fig/image4.JPG" alt="2d translation" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= x + dx$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'=y + dy$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        dx \cr
        dy \cr
        \end{bmatrix} + \begin{bmatrix} 
        x \cr 
        y \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="4">
        $P'= T(dx,dy) + P$
        </p>
    </ul>
</div>

V:

## Affine transformations: Notion

<p align ="center">
Linear transformations $+$ Translation $\rightarrow P' = M\ast P + T $
</p>

V:

## Affine transformations: Homogeneous space $\rightarrow$ 2d

<div class="ulist">
    <img src="fig/image9.JPG" alt="Homogeneous space" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        Homogeneous w-coordinate: $(x,y,w)$
        </p>
        <p class="fragment" data-fragment-index="2">
        Homogeneous space $\rightarrow$ 2d
        </p>
        <p class="fragment" data-fragment-index="3">
        $(x,y,1) \rightarrow (x,y)$, for $w=1$
        </p>
        <p class="fragment" data-fragment-index="4">
        In general: $(x,y,w) \rightarrow (x/w,y/w)$
        </p>
    </ul>
</div>

V:

## Affine transformations: Homogeneous space $\rightarrow$ 3d

<p class="fragment" data-fragment-index="1">
$(x,y,z,1) \rightarrow (x,y,z)$, for $w=1$
</p>
<p class="fragment" data-fragment-index="2">
In general: $(x,y,z,w) \rightarrow (x/w,y/w,z/w)$
</p>

V:

## Affine transformations: Translation

<div class="ulist">
    <img src="fig/image4.JPG" alt="2d translation" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= x + dx$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'=y + dy$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$w'=w=1$`
        </p>
        <p class="fragment" data-fragment-index="4">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 & dx \cr
        0 & 1 & dy \cr
        0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="5">
        $P'= T(dx,dy) \bullet P$ (<a href="#/4/10">goto 3d shearing</a>)
        </p>
    </ul>
</div>

V:

## Affine transformations: Translation

<div class="ulist">
    <img src="fig/image15.JPG" alt="3d translation" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p class="fragment" data-fragment-index="1">
        `$x'= x + dx$`
        </p>
        <p class="fragment" data-fragment-index="2">
        `$y'=y + dy$`
        </p>
        <p class="fragment" data-fragment-index="3">
        `$z'=z + dz$`
        </p>
        <p class="fragment" data-fragment-index="4">
        `$w'=w=1$`
        </p>
        <p class="fragment" data-fragment-index="5">
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 & 0 & dx \cr
        0 & 1 & 0 & dy \cr
        0 & 0 & 1 & dz \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="6">
        $P'= T(dx,dy,dz) \bullet P$
        </p>
    </ul>
</div>

V:

## Affine transformations: Shearing (r)

<div class="ulist">
    <img src="fig/shearing_proscene.png" alt="3d shearing" width="38%" style="float: left">
    <ul style="width: 57%;">
        <p>
        `$x'=x+az$`
        </p>
        <p>
        `$y'=y+bz$`
        </p>
        <p>
        `$z'=z$`
        </p>
        <p>
        `$w'=w=1$`
        </p>
        <p>
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 & a & 0 \cr
        0 & 1 & b & 0 \cr
        0 & 0 & 1 & 0 \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p>
        $P'= D_z(a,b) \bullet P$
        </p>
    </ul>
</div>

V:

## Affine transformations: Scaling (r)

<div class="ulist">
    <img src="fig/image17.JPG" alt="3d scaling" width="30%" style="float: left">
    <ul style="width: 65%;">
        <p>
        `$x'= sx*x$`
        </p>
        <p>
        `$y'= sy*y$`
        </p>
        <p>
        `$z'= sz*z$`
        </p>
        <p>
        `$w'=w=1$`
        </p>
        <p>
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        sx & 0 & 0 & 0 \cr
        0 & sy & 0 & 0 \cr
        0 & 0 & sz & 0 \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p>
        $P'= S(sx,sy,sz) \bullet P$
        </p>
    </ul>
</div>


V:

## Affine transformations: 3d rotation (r)
### Euler angles (respect to z-axis)

<div class="ulist">
    <img src="fig/image20.JPG" alt="z-axis rotation" width="28%" style="float: left">
    <ul style="width: 67%;">
        <p>
        $z' = z$
        </p>
        <p>
        `$w'=w=1$`
        </p>
        <p>
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        cos\beta & -sin \beta & 0 & 0 \cr
        sin\beta & cos \beta & 0 & 0 \cr
        0 & 0 & 1 & 0 \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p>
        $P'= R_z(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Affine transformations: 3d rotation (r)
### Euler angles (respect to x-axis)

<div class="ulist">
    <img src="fig/image21.JPG" alt="z-axis rotation" width="28%" style="float: left">
    <ul style="width: 67%;">
        <p>
        $x' = x$
        </p>
        <p>
        `$w'=w=1$`
        </p>
        <p>
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        1 & 0 & 0 & 0 \cr
        0 & cos\beta & -sin \beta & 0 \cr
        0 & sin\beta & cos \beta & 0 \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p>
        $P'= R_x(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Affine transformations: 3d rotation (r)
### Euler angles (respect to y-axis)

<div class="ulist">
    <img src="fig/image22.JPG" alt="z-axis rotation" width="28%" style="float: left">
    <ul style="width: 67%;">
        <p>
        $y' = y$
        </p>
        <p>
        `$w'=w=1$`
        </p>
        <p>
        `$\begin{bmatrix} 
        x' \cr 
        y' \cr
        z' \cr
        w' \cr
        \end{bmatrix}
        = 
        \begin{bmatrix}
        cos\beta & 0 & sin \beta & 0 \cr
        0 & 1 & 0 & 0 \cr
        -sin\beta & 0 & cos \beta & 0 \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix} \bullet \begin{bmatrix} 
        x \cr 
        y \cr
        z \cr
        w \cr
        \end{bmatrix}
        $`
        </p>
        <p>
        $P'= R_y(\beta) \bullet P$
        </p>
    </ul>
</div>

V:

## Affine transformations: Inversion
### Definition

Let $M$ be an affine transformation matrix such that:

$$P'=MP$$

<!-- .element: class="fragment" data-fragment-index="1"-->

Let $M^{-1}$ be the inverse of $M$. Observe that:

<!-- .element: class="fragment" data-fragment-index="2"-->

$$M^{-1}P'=M^{-1}MP=(M^{-1}M)P=IP=P$$

<!-- .element: class="fragment" data-fragment-index="3"-->

V:

## Affine transformations: Inversion
### Affine inverse matrices

| Transformation |    Direct     |      Inverted       |
|----------------|---------------|---------------------|
| Translation    | $T(dx,dy,dz)$ |   $T(-dx,-dy,-dz)$  |
| Shearing       |   $D_z(a,b)$  |     $D_z(-a,-b)$    |
| Scaling        | $S(sx,sy,sz)$ | $S(1/sx,1/sy,1/sz)$ |
| Rotation       |  $R_z(\beta)$ | $R_z(-\beta) (=R_z(\beta)^{T})$ |

H:

## Projections: Orthographic
### View volume: Eye and Clip spaces

<figure>
    <img height='400' src='fig/pimage6.png' />
    <figcaption>[Orthographic Volume and Normalized Device Coordinates (NDC)](http://www.songho.ca/opengl/gl_projectionmatrix.html#ortho)</figcaption>
</figure>

Let $P_e$ be a point in *eye* space and $P_c$ a point in clip space, we seek:

$$P_e = [x_e,y_e,z_e]\xrightarrow{\text{map}}P_c = [x_c,y_c,z_c]$$<!-- .element: class="fragment" data-fragment-index="1"-->

$$x_e \in [l,r] \rightarrow x_c \in [-1,1], y_e \in [b,t] \rightarrow y_c \in [-1,1], z_e \in [n,f] \rightarrow z_c \in [-1,1]$$<!-- .element: class="fragment" data-fragment-index="2"-->

V:

## Projections: Orthographic
### View volume: [Re-mapping a variable among ranges (general case)](http://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio)

                |---------------*---------|          ->           |-------------------*--------------|
               min              u        max                     min'                 u'            max'
    
The linear conversion is given by:

`$$u' = min'+(u-min)(\Delta u')/(\Delta u)$$`

where `$\Delta u=max-min$`, and `$\Delta u'=max'-min'$`

which may be re-written as:<!-- .element: class="fragment" data-fragment-index="1"-->

`$$u' = uS_u + T_u$$`<!-- .element: class="fragment" data-fragment-index="2"-->
`$$S_u=\Delta u'/\Delta u$$`<!-- .element: class="fragment" data-fragment-index="3"-->
`$$T_u=(min'\Delta u - min\Delta u')/\Delta u$$`<!-- .element: class="fragment" data-fragment-index="4"-->

V:

## Projections: Orthographic
### View volume: Re-mapping a variable among ranges (our case)

                |---------------*---------|          ->           |-------------------*--------------|
               min              u        max                     -1                   u'             1

`$$u' = uS_u + T_u$$`
`$$S_u=2/(max-min)$$`
`$$T_u=-(max+min)/(max-min)$$`

V:

## Projections: Orthographic
### Matrix form: formulation

<blockquote>
`$$u' = uS_u + T_u$$`
</blockquote>

<p class="fragment" data-fragment-index="1">
$$[x_e,y_e,z_e]\xrightarrow{\text{map}}[x_c,y_c,z_c]$$
$$x_e \in [l,r] \rightarrow x_c \in [-1,1], y_e \in [b,t] \rightarrow y_c \in [-1,1], z_e \in [n,f] \rightarrow z_c \in [-1,1]$$
</p>
        
<p class="fragment" data-fragment-index="2">
`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
S_{x_e} & 0       & 0       & T_{x_e} \cr
0       & S_{y_e} & 0       & T_{y_e} \cr
0       & 0       & S_{z_e} & T_{z_e} \cr
0       & 0       & 0       & 1  \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
</p>
<p class="fragment" data-fragment-index="3">
`$P_c = Ortho(S_{x_e/y_e/z_e},T_{x_e/y_e/z_e}) \bullet P_e$`
</p>

V:

## Projections: Orthographic
### Matrix form: solution

<blockquote>
`$$u' = uS_u + T_u$$`
`$$S_u=2/(max-min)$$`
`$$T_u=-(max+min)/(max-min)$$`
</blockquote>

<p class="fragment" data-fragment-index="1">
$$[x_e,y_e,z_e]\xrightarrow{\text{map}}[x_c,y_c,z_c]$$
$$x_e \in [l,r] \rightarrow x_c \in [-1,1], y_e \in [b,t] \rightarrow y_c \in [-1,1], z_e \in [n,f] \rightarrow z_c \in [-1,1]$$
</p>
        
<p class="fragment" data-fragment-index="2">
`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
2 \above 1pt (r-l) & 0                    & 0                   & -(r+l) \above 1pt (r-l) \cr
0                  & 2 \above 1pt (t-b) & 0                     & -(t+b) \above 1pt (t-b) \cr
0                  & 0                    & -2 \above 1pt (f-n) & -(f+n) \above 1pt (f-n) \cr
0                  & 0                    & 0                   & 1  \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
</p>
<p class="fragment" data-fragment-index="3">
`$P_c = Ortho(l,r,b,t,n,f) \bullet P_e$`
</p>

V:

## Projections: Orthographic
### Example

<div id='orthographic_id'></div>
Adapted from [ortho](https://p5js.org/reference/#/p5/ortho)

V:

## Projections: Orthographic
### Example [code](https://github.com/VisualComputing/Transformations/blob/gh-pages/sketches/orthographic.js)

```processing
var sketch = function( p ) {
    p.setup = function() {
      p.createCanvas(600, 600, p.WEBGL);
      // define an orthographic matrix projection
      p.ortho(-p.width / 2, p.width / 2, p.height / 2, -p.height / 2, 0, 1000);
    };

    p.draw = function() {
        p.background(100);
        p.orbitControl(); // interactively modifies the view matrix with the mouse
        p.strokeWeight(2);
        p.stroke(255, 0, 0);
        p.fill(0, 255, 255, 125);
        for (var i = -1; i < 2; i++) {
            for (var j = -2; j < 3; j++) {
                p.push(); // saves current matrix transform (ortho * view)
                p.translate(i * 160, 0, j * 160); // same as: ortho * view * translate
                p.box(80, 80, 80);
                p.pop(); // restores the top of the matrix stack: ortho * view
            }
        }
    };
};
```

V:

## Projections: Orthographic
### Matrix form: Symmetrical viewing volume (`$l=-r$` and `$b=-t$`)

<blockquote>
`$$u' = uS_u + T_u$$`
`$$S_u=2/(max-min)$$`
`$$T_u=-(max+min)/(max-min)$$`
</blockquote>

$$[x_e,y_e,z_e]\xrightarrow{\text{map}}[x_c,y_c,z_c]$$
$$x_e \in [-r,r] \rightarrow x_c \in [-1,1], y_e \in [-t,t] \rightarrow y_c \in [-1,1], z_e \in [n,f] \rightarrow z_c \in [-1,1]$$
        
`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
1 \above 1pt r & 0                    & 0                   & 0 \cr
0              & 1 \above 1pt t       & 0                   & 0 \cr
0              & 0                    & -2 \above 1pt (f-n) & -(f+n) \above 1pt (f-n) \cr
0              & 0                    & 0                   & 1  \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
</p>
<p class="fragment" data-fragment-index="2">
`$P_c= Ortho(r,t,n,f) \bullet P_e$`
</p>

V:

## Projections: Perspective
### View volume

<figure>
    <img height='400' src='fig/perspvolume.png' />
    <figcaption>[Perspective Frustum and Normalized Device Coordinates (NDC)](http://www.songho.ca/opengl/gl_projectionmatrix.html#perspective)</figcaption>
</figure>

Let $P_e$ be a point in *eye* space and $P_n$ a point in NDC, we seek:

$$P_e = [x_e,y_e,z_e,w_e(=1)]\xrightarrow{\text{map}}P_c = [x_c,y_c,z_c,w_c(\neq 1)]$$<!-- .element: class="fragment" data-fragment-index="1"-->

$$P_c = [x_c,y_c,z_c,w_c(\neq 1)]\xrightarrow[\text{divide}]{\text{perspective}}P_n = [x_n(=x_c/w_c),y_n(=y_c/w_c),z_n(=z_c/w_c),1]$$<!-- .element: class="fragment" data-fragment-index="2"-->

V:

## Projections: Perspective
### Near plane projection of `$x_e,y_e \xrightarrow {\text{onto}} x_p,y_p$`

<figure>
    <img height='400' src='fig/proj_x.png' />
    <figcaption>Top view of frustum</figcaption>
</figure>

`$${x_p\above 1pt x_e}= {-n\above 1pt z_e}$$`
`$$x_p= {nx_e\above 1pt -z_e}$$`<!-- .element: class="fragment" data-fragment-index="2"-->

V:

## Projections: Perspective
### Near plane projection of `$x_e,y_e \xrightarrow {\text{onto}} x_p,y_p$`

<figure>
    <img height='400' src='fig/proj_y.png' />
    <figcaption>Side view of frustum</figcaption>
</figure>

`$${y_p\above 1pt y_e}= {-n\above 1pt z_e}$$`
`$$y_p= {ny_e\above 1pt -z_e}$$`<!-- .element: class="fragment" data-fragment-index="2"-->

V:

## Projections: Perspective
### Near plane projection of `$x_e,y_e \xrightarrow {\text{onto}} x_p,y_p$`

<blockquote>
`$$x_p= {nx_e\above 1pt -z_e},y_p= {ny_e\above 1pt -z_e}$$`
</blockquote>

which means<!-- .element: class="fragment" data-fragment-index="1"--> `${\color{red} {w_c}}=-z_e$`<!-- .element: class="fragment" data-fragment-index="1"-->

`$$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
. & . & .  & . \cr
. & . & .  & . \cr
. & . & .  & . \cr
0 & 0 & {\color{red} {-1}} & 0 \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$$`
<!-- .element: class="fragment" data-fragment-index="2"-->

V:

## Projections: Perspective
### `$x_e$,$y_e$` coordinate mapping (using our ortho matrix)

<blockquote>
`$${\color{green} {x_p}}= {nx_e\above 1pt -z_e},{\color{green} {y_p}}= {ny_e\above 1pt -z_e},w_c=-z_e$$`
</blockquote>

`$$\begin{bmatrix} 
{\color{blue} {x_n}} \cr 
{\color{blue} {y_n}} \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
2 \above 1pt (r-l) & 0                  & 0 & -(r+l) \above 1pt (r-l) \cr
0                  & 2 \above 1pt (t-b) & 0 & -(t+b) \above 1pt (t-b) \cr
. & . & .  & . \cr
. & . & .  & . \cr
\end{bmatrix} \bullet \begin{bmatrix} 
{\color{green} {x_p}} \cr 
{\color{green} {y_p}} \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$$`

solving for <!-- .element: class="fragment" data-fragment-index="1"--> `${\color{blue} {x_n,y_n}}$` <!-- .element: class="fragment" data-fragment-index="1"--> we get:<!-- .element: class="fragment" data-fragment-index="1"-->
`${\color{blue} {x_n}}= {2{\color{green} {x_p}}\above 1pt r-l}-{r+l\above 1pt r-l},{\color{blue} {y_n}} = {2{\color{green} {y_p}}\above 1pt t-b}-{t+b\above 1pt t-b}$`
<!-- .element: class="fragment" data-fragment-index="2"-->

since <!-- .element: class="fragment" data-fragment-index="3"-->
`${\color{blue} {x_n}}={x_c\above 1pt w_c}$`<!-- .element: class="fragment" data-fragment-index="3"-->
and <!-- .element: class="fragment" data-fragment-index="3"-->
`${\color{blue} {y_n}}={y_c\above 1pt w_c}$`<!-- .element: class="fragment" data-fragment-index="3"-->
, solving for <!-- .element: class="fragment" data-fragment-index="3"-->
`${\color{red} {x_c,y_c}}$` <!-- .element: class="fragment" data-fragment-index="3"-->
in terms of <!-- .element: class="fragment" data-fragment-index="3"-->
`$x_e,y_e,z_e$` <!-- .element: class="fragment" data-fragment-index="3"-->
, we get: <!-- .element: class="fragment" data-fragment-index="3"-->
`${\color{red} {x_c}}= {2nx_e\above 1pt r-l}+{(r+l)z_e\above 1pt r-l},{\color{red} {y_c}}= {2ny_e\above 1pt t-b}+{(t+b)z_e\above 1pt t-b}$`<!-- .element: class="fragment" data-fragment-index="3"-->

V:

## Projections: Perspective
### `$x_e$,$y_e$` coordinate mapping

<blockquote>
`$${\color{red} {x_c}}= {2nx_e\above 1pt r-l}+{(r+l)z_e\above 1pt r-l},{\color{red} {y_c}}= {2ny_e\above 1pt t-b}+{(t+b)z_e\above 1pt t-b},w_c=-z_e$$`
</blockquote>

`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
2n \above 1pt r-l   & 0                 & r+l \above 1pt r-l    & 0                   \cr
0                   & 2n \above 1pt t-b & t+b \above 1pt t-b    & 0                   \cr
.                   & .                 & .                     & .                   \cr
0                   & 0                 & -1                    & 0                   \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`

V:

## Projections: Perspective
### `$z_e$` coordinate mapping

`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
2n \above 1pt r-l   & 0                 & r+l \above 1pt r-l    & 0                   \cr
0                   & 2n \above 1pt t-b & t+b \above 1pt t-b    & 0                   \cr
0                   & 0                 & {\color{green} A}     & {\color{green} B}   \cr
0                   & 0                 & -1                    & 0                   \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`

<p class="fragment" data-fragment-index="1">
`$z_n=z_c/w_c={Az_e+Bw_e\above 1pt -z_e}={Az_e+B\above 1pt -z_e}$`
</p>

<p class="fragment" data-fragment-index="2">
To find $A$ and $B$, use the map relation `$z_e \in [n,f] \rightarrow z_n \in [-1,1]$` and replace them above (twice)
</p>

V:

## Projections: Perspective
### `$z_e$` coordinate mapping

`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
2n \above 1pt r-l & 0                   & r+l \above 1pt r-l    & 0                   \cr
0                   & 2n \above 1pt t-b & t+b \above 1pt t-b    & 0                   \cr
0                   & 0                 & -(f+n) \above 1pt f-n & -2fn \above 1pt f-n \cr
0                   & 0                 & -1                    & 0                   \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
<p class="fragment" data-fragment-index="1">
`$P_c = Persp(l,r,b,t,n,f) \bullet P_e$`
</p>

V:

## Projections: Perspective
### Z-Fighting

<figure>
    <img height="400" src="fig/zfight.png">
    <figcaption>Comparison of Depth Buffer Precisions</figcaption>
</figure>

V:

## Projections: Perspective
### Alternative form: Symmetrical viewing volume (`$l=-r$` and `$b=-t$`)

<blockquote>
`$$l=-r$$`
`$$b=-t$$`
</blockquote>

<p class="fragment" data-fragment-index="1">
`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
n \above 1pt r & 0              & 0                     & 0                   \cr
0              & n \above 1pt t & 0                     & 0                   \cr
0              & 0              & -(f+n) \above 1pt f-n & -2fn \above 1pt f-n \cr
0              & 0              & -1                    & 0                   \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
</p>

<p class="fragment" data-fragment-index="2">
`$P_c = Persp(r,t,n,f) \bullet P_e$`
</p>

V:

## Projections: Perspective
### Alternative form: Symmetrical viewing volume (`$l=-r$` and `$b=-t$`)

<blockquote>
`$$l=-r$$`
`$$b=-t$$`
`$$n/t = 1/\tan(fov/2)$$`
</blockquote>

<figure>
    <img height="400" src="fig/fov.png">
    <figcaption>(Vertical) field-of-view (fov)</figcaption>
</figure>

V:

## Projections: Perspective
### Alternative form: Symmetrical viewing volume (`$l=-r$` and `$b=-t$`)

<blockquote>
`$$l=-r$$`
`$$b=-t$$`
`$$n/t = 1/\tan(fov/2)$$`
`$$n/r = 1/\tan(hfov/2)$$`
</blockquote>

<p class="fragment" data-fragment-index="1">
`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
1 \above 1pt \tan (hfov/2) & 0                          & 0                     & 0                   \cr
0                          & 1 \above 1pt \tan (fov/2)  & 0                     & 0                   \cr
0                          & 0                          & -(f+n) \above 1pt f-n & -2fn \above 1pt f-n \cr
0                          & 0                          & -1                    & 0                   \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
</p>

<p class="fragment" data-fragment-index="2">
`$P_c = Persp(hfov,fov,n,f) \bullet P_e$`
</p>

V:

## Projections: Perspective
### Alternative form: Symmetrical viewing volume (`$l=-r$` and `$b=-t$`)

<blockquote>
`$$l=-r$$`
`$$b=-t$$`
`$$aspectRatio=screenWidth/screenHeight$$`
`$$1/\tan(hfov/2) = 1/(\tan(fov/2) * aspectRatio)$$`
</blockquote>

<p class="fragment" data-fragment-index="1">
`$\begin{bmatrix} 
x_c \cr 
y_c \cr
z_c \cr
w_c \cr
\end{bmatrix}
= 
\begin{bmatrix}
1 \above 1pt \tan (fov/2) * aspectRatio & 0                           & 0                     & 0                   \cr
0                                     & 1 \above 1pt \tan (fov/2)  & 0                     & 0                   \cr
0                                     & 0                          & -(f+n) \above 1pt f-n & -2fn \above 1pt f-n \cr
0                                     & 0                          & -1                    & 0                   \cr
\end{bmatrix} \bullet \begin{bmatrix} 
x_e \cr 
y_e \cr
z_e \cr
w_e(=1) \cr
\end{bmatrix}
$`
</p>

<p class="fragment" data-fragment-index="2">
`$P_c = Persp(fov,aspectRatio,n,f) \bullet P_e$`
</p>

V:

## Projections: Perspective
### Alternative form: Symmetrical viewing volume (`$l=-r$` and `$b=-t$`)

<figure>
    <img height="400" src="fig/pimage10.JPG">
    <figcaption>Vertical field-of-view (fov)</figcaption>
</figure>

V:

## Projections: Perspective
### Example

<div id='perspective_id'></div>
Adapted from [perspective](https://p5js.org/reference/#/p5/perspective)

V:

## Projections: Perspective
### Example [code](https://github.com/VisualComputing/Transformations/blob/gh-pages/sketches/perspective.js)

```processing
var sketch = function( p ) {
    p.setup = function() {
      p.createCanvas(600, 600, p.WEBGL);
      var fov = 60 / 180 * p.PI;
      var cameraZ = p.height / 2.0 / p.tan(fov / 2.0);
      // define a perspective matrix projection
      p.perspective(60 / 180 * p.PI, p.width / p.height, cameraZ * 0.1, cameraZ * 10);
    };

    p.draw = function() {
        p.background(100);
        p.orbitControl(); // interactively modifies the view matrix with the mouse
        p.strokeWeight(2);
        p.stroke(0, 255, 0);
        p.fill(255, 0, 255, 125);
        for (var i = -1; i < 2; i++) {
            for (var j = -2; j < 3; j++) {
                p.push(); // saves current matrix transform (perspective * view)
                p.translate(i * 160, 0, j * 160); // same as: perspective * view * translate
                p.box(80, 80, 80);
                p.pop(); // restores the top of the matrix stack: perspective * view
            }
        }
    };
};
```

H:

## References

* [Math primer for graphics and game development](https://tfetimes.com/wp-content/uploads/2015/04/F.Dunn-I.Parberry-3D-Math-Primer-for-Graphics-and-Game-Development.pdf)
* [Proscene: A feature-rich framework for interactive environments](https://www.sciencedirect.com/science/article/pii/S235271101730002X?_rdoc=1&_fmt=high&_origin=gateway&_docanchor=&md5=b8429449ccfc9c30159a5f9aeaa92ffb)
* [Processing 2d transformations tutorial](https://www.processing.org/tutorials/transform2d/)
* [OpenGL projection matrix](http://www.songho.ca/opengl/gl_projectionmatrix.html)
* [The Perspective and Orthographic Projection Matrix](https://www.scratchapixel.com/lessons/3d-basic-rendering/perspective-and-orthographic-projection-matrix)

H:

## Annex: Matrix orthogonality
### Definition

A matrix `$$M = \begin{bmatrix}
        m_{11} & m_{12} & m_{13} \cr
        m_{21} & m_{22} & m_{33} \cr
        m_{31} & m_{32} & m_{33} \cr
\end{bmatrix}$$`

is orthogonal _iff_:

$$MM^{T} = I$$

This is equivalent to: <!-- .element: class="fragment" data-fragment-index="1"-->

$$M^{-1} = M^{T}$$ <!-- .element: class="fragment" data-fragment-index="1"-->

V:

## Annex: Matrix orthogonality
### Geometric Interpretation

Let

`$$r_{1} = \begin{bmatrix} m_{11} & m_{12} & m_{13} \end{bmatrix}$$`
`$$r_{2} = \begin{bmatrix} m_{21} & m_{22} & m_{23} \end{bmatrix}$$`
`$$r_{3} = \begin{bmatrix} m_{31} & m_{32} & m_{33} \end{bmatrix}$$`

then <!-- .element: class="fragment" data-fragment-index="1"-->

`$$r_{1} \cdot r_{1} = r_{2} \cdot r_{2} = r_{3} \cdot r_{3} = 1 $$`<!-- .element: class="fragment" data-fragment-index="1"-->
`$$r_{i} \cdot r_{j} = 0\ \ i=1,2,3 \ \ j=1,2,3 \ \ i\ne j$$`<!-- .element: class="fragment" data-fragment-index="1"-->

V:

## Annex: Matrix orthogonality
### Geometric Interpretation

We can conclude that:

* Each row of the matrix must be a unit vector
* The rows of the matrix must be mutually perpendicular
* Vectors  `$r_{1}, \,r_{2}, \,r_{3}$` are _orthonormals_

> Note 1: that $r_1$, $r_2$ and $r_3$ form a non-canonical basis<!-- .element: class="fragment" data-fragment-index="1"-->

> Note 2: that a rotation matrix is always orthogonal<!-- .element: class="fragment" data-fragment-index="2"-->

N:

* Orthogonality is used in both: euler angles (composition) and rodrigues formula

V:

## Annex: Matrix orthogonality
### Mnemonic 1 examples: 3D Rotation `$T(x_1,y_1,z_1) * R_u(\beta) * T(-x_1,-y_1,-z_1)$`
#### Using orthogonality to compute $R_y(\lambda) * R_x(\alpha)$

<figure>
    <img height="550" src="fig/rxry_overview.png">
    <figcaption>Suppose $u$ is part of a non-canonical basis $x', y', z'$</figcaption>
</figure>

V:

## Annex: Matrix orthogonality
### Mnemonic 1 examples: 3D Rotation `$T(x_1,y_1,z_1) * R_u(\beta) * T(-x_1,-y_1,-z_1)$`
#### Using orthogonality to compute $R_y(\lambda) * R_x(\alpha)$

<div class="ulist">
    <img src="fig/rxry.png" alt="3d rotation: rx-ry" width="40%" style="float: left">
    <ul style="width: 50%;">
        <p>
        `$
        R_y(\lambda) * R_x(\alpha)
        = 
        \begin{bmatrix}
        u_{x'1} & u_{x'2} & u_{x'3} & 0 \cr
        u_{y'1} & u_{y'2} & u_{y'3} & 0 \cr
        u_{z'1} & u_{z'2} & u_{z'3} & 0 \cr
        0 & 0 & 0 & 1 \cr
        \end{bmatrix}
        $`
        </p>
        <p class="fragment" data-fragment-index="1">
        where
        </p>
        <p class="fragment" data-fragment-index="1">
        `$u_{z'}=u$`
        </p>
        <p class="fragment" data-fragment-index="1">
        `$u_{x'}$` is _any_ orthogonal vector to `$u_{z'}$`
        </p>
        <p class="fragment" data-fragment-index="1">
        `$u_{y'} = u \times u_{x'}$`
        </p>
        
    </ul>
</div>

N:

missing:
1. Affine transformations: Rotation: use orthogonality to compute R_y(\lambda) * R_x(\alpha)
2. Affine transformations: Rotation: Quaternions magic
3. Affine transformations: Rotation: [Rodrigues' rotation formula](https://en.wikipedia.org/wiki/Rodrigues'_rotation_formula)

H:

## Acknowledgements

* Jean Pierre Alfonso, for formatting some [mathjax](https://www.mathjax.org/) formulas
