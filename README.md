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

```
Before:
```
```html
<img src="/wedding.jpg" style="width:100%"> 
```
```
After:
```
```html
<img class="amigo-lazy" lazy="5000" data-src="/wedding.jpg" style="width:100%">
```
##### Iframe

```
Before:
```
```html
<iframe width="949" height="534" src="https://www.youtube.com/embed/JvEvTcXF-4Q" frameborder="0" allowfullscreen></iframe>
```
After:
```html
<iframe class="amigo-lazy" width="949" lazy="5000" height="534" data-src="https://www.youtube.com/embed/JvEvTcXF-4Q" frameborder="0" allowfullscreen></iframe>
```
