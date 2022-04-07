<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
  <title>File Compare</title>
  <style type="text/css">
  #page {
    font-family: sans-serif;
  }
  table {
    border-collapse: collapse;
  }
  td {
    white-space: nowrap;
    font-family: monospace;
    font-size: x-small;
    vertical-align: top;
  }
  td.fileName {
    background: #E6E6E6;
    font-family: sans-serif;
    font-size: small;
  }
  td.lineNumber {
    text-align: right;
    background: #FFC800;
  }
  td.added {
    background: #BEF0BE;
  }
  td.removed {
    background: #C8C8FF;
  }
  td.changed {
    background: #FFC8C8;
  }
  td.equal {
    background: #FFFFFF;
  }
  td.empty {
    background: #F2F2F2;
  }
  </style>
  <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>
  <table>
    <tr>
      <td colspan="2" class="filename">second.js</td>
      <td colspan="2" class="filename">second.js&nbsp;(Working&nbsp;Tree)</td>
    </tr>
      <tr>
<td class="lineNumber">1</td><td class="changed"></td><td class="lineNumber">1</td><td class="changed">let&nbsp;admin;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">2</td><td class="changed">let&nbsp;name_new;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">3</td><td class="changed">name_new&nbsp;=&nbsp;'&#1042;&#1072;&#1089;&#1080;&#1083;&#1080;&#1081;';</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">4</td><td class="changed">alert(name_new);</td>
      </tr>
  </table>
</body>
