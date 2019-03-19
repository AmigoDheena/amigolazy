# AmigoLazy

#### How to use amigolazy

 - Add this js file to your webpage

```html
<script src="https://cdn.jsdelivr.net/gh/amigodheena/amigolazy@master/amigolazy.js"></script>
```
  - Add ``` class="amigo-lazy" ```

  -  ``` lazy="5000" ``` set your lazy time as millisecond

  - replace ``` src="" ``` as  ``` data-src="" ```

##### Image

```html
<img src="/wedding.jpg" style="width:100%"> 
<img class="amigo-lazy" lazy="5000" data-src="/wedding.jpg" style="width:100%">
```
##### Iframe
```html
<iframe width="949" height="534" src="https://www.youtube.com/embed/JvEvTcXF-4Q" frameborder="0" allowfullscreen></iframe>

<iframe class="amigo-lazy" width="949" lazy="5000" height="534" data-src="https://www.youtube.com/embed/JvEvTcXF-4Q" frameborder="0" allowfullscreen></iframe>
```
##### Preventing Content Reflow 

```css
  img[data-src]{
      display: block;
      min-height: 100px; /*as per your requirement*/
      background-color: #c0c0c0; /* optional */
  }
```
##### Before Lazyload
![before_amigolazy](/w3images/before_amigolazy.png "before_amigolazy")

##### After Lazyload
![before_amigolazy](/w3images/after_amigolazy.png "after_amigolazy")

#### Contributors
* **Munusamy**  - [Sadishsamy](https://github.com/sadishsamy)
* **Mohan**  - [moaj257](https://github.com/moaj257)

### With Special Thanks To!
<a href="https://www.askantech.com"><img alt="Askan" src="https://www.askantech.com/wp-content/uploads/2018/11/askan-trademark-logo.png"/></a>
