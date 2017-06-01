const styles = `
  section h4 {
    display:flex;
    justify-content:space-between;
  }

  p { font-size: large !important; }
`;


module.exports = (lecture_name, title, slides, s=styles) => `
<!doctype html>
<html lang="en">
  <!--
       The MIT License (MIT)

       Copyright (c) 2015 Tom Panning

       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights
       to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       copies of the Software, and to permit persons to whom the Software is
       furnished to do so, subject to the following conditions:

       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
     -->
  <head>
    <meta charset="utf-8">
    <!-- https://cdnjs.com/libraries/reveal.js -->
    <title> ${lecture_name} </title>
    <meta name="author" content="Edgar Aroutiounian">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/css/reveal.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/css/theme/sky.css" id="theme">


    <!-- Printing and PDF exports -->
    <script>
     const link = document.createElement('link');
     link.rel = 'stylesheet';
     link.type = 'text/css';
     const pdf_css =
       'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/css/print/pdf.css';
     const paper_css =
       'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/css/print/paper.css';
     link.href = window.location.search.match(/print-pdf/gi) ? pdf_css : paper_css;
     document.getElementsByTagName('head')[0].appendChild(link);
    </script>
    <style>
     ${s}
    </style>

  </head>

  <body>

    <div class="reveal">
      <!-- Any section element inside of this container is displayed as a slide -->
      <div class="slides">
${title}
<!-- space -->
${slides}
<!-- space -->
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/lib/js/head.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/js/reveal.min.js"></script>
    <script>
     // Full list of configuration options available at:
     // https://github.com/hakimel/reveal.js#configuration
     Reveal.initialize({
       controls: true,
       progress: true,
       history: true,
       center: true,
       transitionSpeed:'slow',
       previewLinks:false,
       transition: 'fade', // none/fade/slide/convex/concave/zoom
       // Optional reveal.js plugins
       dependencies: [
	 { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/lib/js/classList.js',
	   condition: function() { return !document.body.classList; } },
	 { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/plugin/markdown/marked.js',
	   condition: function() { return !!document.querySelector('[data-markdown]'); } },
	 { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/plugin/markdown/markdown.min.js',
	   condition: function() { return !!document.querySelector('[data-markdown]'); } },
	 { src:
	 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/plugin/highlight/highlight.min.js',
	   async: true,
	   condition: function() { return !!document.querySelector( 'pre code' ); },
	   callback: function() { hljs.initHighlightingOnLoad(); } },
	 { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/plugin/zoom-js/zoom.min.js',
	   async: true },
	 { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.4.1/plugin/notes/notes.min.js',
	   async: true }
       ]
     });
    </script>
  </body>
</html>
`;