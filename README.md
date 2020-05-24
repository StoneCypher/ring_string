# ring_string

Convert a string `[a-zA-Z0-9]` to its Unicode ring counterparts - `Hello, world! 0123` becomes `Ⓗⓔⓛⓛⓞ, ⓦⓞⓡⓛⓓ! ⓪①②③`.





<br/><br/>

# W... why?

![](https://camo.githubusercontent.com/d687eac63d3b75bdea39c1fc22d7d4dbde07bc1a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f314d39666d6f31574146564b302f67697068792e676966)

Well, my use case is simple.

I'm internationalizing a webpage.  It's hard to find all the strings, so I'm faking an alternate language by mass-converting them from English to something that looks really different which I can still read.  Also, this means that tooling like [playwright](https://github.com/microsoft/playwright) can look for missing things with regular expressions.
