# ring_string

Convert a string `[a-zA-Z0-9]` to its Unicode ring counterparts - `Hello, world! 0123` becomes `Ⓗⓔⓛⓛⓞ, ⓦⓞⓡⓛⓓ! ⓪①②③`.





<br/><br/>

## ... what?

```javascript
$ node
Welcome to Node.js v13.6.0.
Type ".help" for more information.

> const rs = require('ring_string');
undefined

> rs.to_rings('abc, def');
'ⓐⓑⓒ, ⓓⓔⓕ'

> const longer = 'abc, def! ghi: 123 JKL';
undefined

> rs.to_rings(longer);
'ⓐⓑⓒ, ⓓⓔⓕ! ⓖⓗⓘ: ①②③ ⒿⓀⓁ'
```





<br/><br/>

## W... why?

![](https://camo.githubusercontent.com/d687eac63d3b75bdea39c1fc22d7d4dbde07bc1a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f314d39666d6f31574146564b302f67697068792e676966)

Well, my use case is simple.  I'm internationalizing a webpage.

It's hard to find all the strings, so I'm faking an alternate language by mass-converting them from English to something that looks really different which I can still read.

This way, since English is my definitive language, all I have to do is switch to the fake language, and look for text that isn't garbage.  Pow: there's a string I missed.

Also, this means that tooling like [playwright](https://github.com/microsoft/playwright) can look for missing things with regular expressions, so I can make a robot do it for me.  (Admittedly, that needs more tooling which is specific to your i18n kit, so I wrote [react-intl-miniparse](https://github.com/StoneCypher/react-intl-miniparse) also.)





<br/><br/>

## When would that even matter?

So let's say I'm doing the internationalization.  Over time, I need to not just add the new text that Marketing mailed me to
the site, but also keep that up to date over time.

And let's be honest, a lot of that's going to be at 3am.

It's surprisingly difficult to remember to not write in English, and instead to write in `{reference_notation}`.  Sooner or 
later, one gets into the page.

Worse still, it's hard to find them, because I have to go reconfigure your browser, then visit every page.  And the 
translation tooling isn't going to tell me, because I never told it that string existed in the first place, in the base
language, so it has no idea it's missing everywhere else too.  And it's not generally until two weeks later, when the 
modified string table is back from the professional translators, that I have something to test against, and now this one
string is something that I've long since forgotten about.

So I find out when my Hindi speaking customer wants to know why the fourth paragraph of the reset password instructions is
in German.





### So how does this solve first-language string auditing?

This allows me to instantly create a fake language that looks different, that I can read, and that's always up to date, so
that I can just open the site in the language `test-ring` and look for things that are "visually wrong."  Pow: there's a 
string that I haven't yet extracted to the string table.




<br/><br/>

## How does that help?

Sometimes an image (or two, here) speaks a thousand words.


### Spot the paragraph missing a translation.

<table>
  <tr>
    <td valign="top">
      <img src="./src/image%20webpage%20source/english%20screenshot.png">
    </td>
    <td valign="top">
      <img src="./src/image%20webpage%20source/translated%20with%20error%20screenshot.png">
    </td>
  </tr>
</table>
