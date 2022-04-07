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
      <td colspan="2" class="filename">third.js</td>
      <td colspan="2" class="filename">third.js&nbsp;(Working&nbsp;Tree)</td>
    </tr>
      <tr>
<td class="lineNumber">1</td><td class="changed"></td><td class="lineNumber">1</td><td class="changed">let&nbsp;a&nbsp;=&nbsp;10&nbsp;+&nbsp;10&nbsp;+&nbsp;&quot;10&quot;;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">2</td><td class="changed">//&nbsp;&#1057;&#1085;&#1072;&#1095;&#1072;&#1083;&#1072;&nbsp;&#1089;&#1082;&#1083;&#1072;&#1076;&#1099;&#1074;&#1072;&#1077;&#1090;&nbsp;10+10,&nbsp;&#1079;&#1072;&#1090;&#1077;&#1084;&nbsp;&#1087;&#1088;&#1077;&#1086;&#1073;&#1088;&#1072;&#1079;&#1091;&#1077;&#1090;&nbsp;&#1077;&#1075;&#1086;&nbsp;&#1074;&nbsp;&#1089;&#1090;&#1088;&#1086;&#1082;&#1091;&nbsp;&#1080;&nbsp;&#1089;&#1082;&#1083;&#1072;&#1076;&#1099;&#1074;&#1072;&#1077;&#1090;&nbsp;&#1089;&#1090;&#1088;&#1086;&#1082;&#1080;&nbsp;=&gt;&nbsp;2010</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">3</td><td class="changed">console.log(a);</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">4</td><td class="changed">a&nbsp;=&nbsp;10&nbsp;+&nbsp;&quot;10&quot;&nbsp;+&nbsp;10;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">5</td><td class="changed">//&nbsp;&#1055;&#1088;&#1077;&#1086;&#1073;&#1088;&#1072;&#1079;&#1091;&#1077;&#1090;&nbsp;&#1074;&#1089;&#1077;&nbsp;&#1074;&nbsp;&#1089;&#1090;&#1088;&#1086;&#1082;&#1080;&nbsp;&#1080;&nbsp;&#1089;&#1082;&#1083;&#1072;&#1076;&#1099;&#1074;&#1072;&#1077;&#1090;&nbsp;=&gt;101010</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">6</td><td class="changed">console.log(a);</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">7</td><td class="changed">a&nbsp;=&nbsp;10&nbsp;+&nbsp;10&nbsp;+&nbsp;+&quot;10&quot;;&nbsp;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">8</td><td class="changed">//&nbsp;10+10=20,&nbsp;&#1087;&#1086;&#1090;&#1086;&#1084;&nbsp;&#1089;&#1082;&#1083;&#1072;&#1076;&#1099;&#1074;&#1072;&#1077;&#1090;&#1089;&#1103;&nbsp;&#1089;&nbsp;&#1087;&#1088;&#1086;&#1073;&#1077;&#1083;&#1086;&#1084;,&nbsp;&#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1077;&#1090;&#1089;&#1103;&nbsp;'20',&nbsp;'20'+'10',&nbsp;&#1087;&#1088;&#1080;&nbsp;&#1085;&#1077;&nbsp;&#1089;&#1090;&#1088;&#1086;&#1075;&#1086;&#1081;&nbsp;&#1090;&#1080;&#1087;&#1080;&#1079;&#1072;&#1094;&#1080;&#1080;=&gt;&#1087;&#1088;&#1077;&#1086;&#1073;&#1088;&#1072;&#1079;&#1072;&#1102;&#1090;&#1089;&#1103;&nbsp;&#1074;&nbsp;&#1095;&#1080;&#1089;&#1083;&#1072;=<br>&gt;30</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">9</td><td class="changed">console.log(a);</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">10</td><td class="changed">a&nbsp;=&nbsp;10&nbsp;/&nbsp;-&quot;&quot;;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">11</td><td class="changed">//&nbsp;&#1055;&#1088;&#1077;&#1086;&#1073;&#1088;&#1072;&#1079;&#1091;&#1077;&#1090;&nbsp;&#1074;&nbsp;&#1073;&#1077;&#1089;&#1082;&#1086;&#1085;&#1077;&#1095;&#1085;&#1086;&#1089;&#1090;&#1100;&nbsp;&nbsp;&#1089;&#1086;&nbsp;&#1079;&#1085;&#1072;&#1082;&#1086;&#1084;&nbsp;&#1084;&#1080;&#1085;&#1091;&#1089;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">12</td><td class="changed">console.log(a);</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">13</td><td class="changed">a&nbsp;=&nbsp;10/&nbsp;+&quot;2,5&quot;;</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">14</td><td class="changed">//&#1073;&#1077;&#1089;&#1082;&#1086;&#1085;&#1077;&#1095;&#1085;&#1086;&#1089;&#1090;&#1100;&nbsp;&#1089;&#1082;&#1083;&#1072;&#1076;&#1099;&#1074;&#1072;&#1077;&#1090;&#1089;&#1103;&nbsp;&#1089;&#1086;&nbsp;&#1089;&#1090;&#1088;&#1086;&#1082;&#1086;&#1081;-&#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1077;&#1090;&#1089;&#1103;&nbsp;&#1085;&#1080;&nbsp;&#1089;&#1090;&#1088;&#1086;&#1082;&#1072;&nbsp;,&nbsp;&#1085;&#1080;&nbsp;&#1095;&#1080;&#1089;&#1083;&#1086;&nbsp;-NaN</td>
      </tr>
      <tr>
<td class="lineNumber"></td><td class="changed"></td><td class="lineNumber">15</td><td class="changed">console.log(a);</td>
      </tr>
  </table>
</body>
