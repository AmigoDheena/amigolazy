# AmigoLazy
AmigoLazy is a JS Script to add Lazyload to an Iframe. Mostly Iframes are load data from an external site, so its contain lot of resources form external sites, we are unable to control that resources but we can prevent by lazyloading Iframe.

#### How to use amigolazy

 - Add this js file to your webpage

```html
<script src="https://cdn.jsdelivr.net/gh/amigodheena/amigolazy@master/amigolazy.js"></script>
```
  - Add ``` class="amigolazy" ```

  -  ``` lazy="5000" ``` set your lazy time as millisecond

  - replace ``` src="" ``` as  ``` data-src="" ```

##### Image

```html
<img src="/wedding.jpg" style="width:100%"> 
<img class="amigolazy" lazy="5000" data-src="/wedding.jpg" style="width:100%">
```
##### Iframe
```html
<iframe width="949" height="534" src="https://www.youtube.com/embed/JvEvTcXF-4Q" frameborder="0" allowfullscreen></iframe>

<iframe class="amigolazy" width="949" lazy="5000" height="534" data-src="https://www.youtube.com/embed/JvEvTcXF-4Q" frameborder="0" allowfullscreen></iframe>
```
##### Preventing Content Reflow 

```css
  img[data-src]{
      display: block;
      min-height: 100px; /*as per your requirement*/
      background-color: #c0c0c0; /* optional */
  }
```

#### Contributors
* **[Munusamy](https://github.com/sadishsamy)**
* **[Mohan](https://github.com/moaj257)**
