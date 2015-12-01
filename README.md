naavi
=====

Naavi is an attempt to make nested dropdown menus suck less

It includes hover-intent, practically meaning a user's mouse can leave a nested menu without the menu dissapearing forcing the user to start their navigation journey all over again.

How it works

The script inserts a `<span class="more"></span>` before every nested dropdown and before the first menu level 

```html
<nav>
  <span class="more"></span>      <!-- this gets added -->
  <ul>
    <li>
      <a href="/products">products</a>
      <span class="more"></span>      <!-- this gets added -->
      <ul>...</ul>
    </li>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </ul>
</nav>
```




When a touch screen is detected 

Siblings close automatically when another sibling on the same level is opened


NOTE: the script only aids functionality, it only attaches classes, it does not attach styles 
