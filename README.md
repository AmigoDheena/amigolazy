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

### With Special Thanks To!
![Alt](https://www.askantech.com/wp-content/uploads/2018/11/askan-trademark-logo.png "Askan")
