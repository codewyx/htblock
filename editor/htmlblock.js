
function getQueryString(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");var r = window.location.search.substr(1).match(reg);if (r != null) return unescape(r[2]); return null;} 
if(getQueryString("lan")=="en"){
  var blan = new Array();
  blan['title001'] = "Define title";
  blan['title002'] = "Set the title of the page";
  blan['html_dingyi001'] = "Define HTML";
  blan['head001'] = "Define header";
  blan['html_code001'] = "HTML tags";
  blan['html_code002'] = "<p>Hello!<p>";
  blan['body001'] = "Define body";
  blan['top001'] = "Define web page";
  blan['top002'] = "The top priority of a web page";
  blan['texto001'] = "text";
  blan['texto002'] = "Text, essential";
}else{
  var blan = new Array();
  blan['title001'] = "定义标题";
  blan['title002'] = "设置网页的标题";
  blan['html_dingyi001'] = "定义HTML内容";
  blan['head001'] = "定义头部";
  blan['html_code001'] = "HTML标签";
  blan['html_code002'] = "<p>你好！<p>";
  blan['body001'] = "定义身体";
  blan['top001'] = "定义网页";
  blan['top002'] = "一个网页的重中之重";
  blan['texto001'] = "文本";
  blan['texto002'] = "文本，必不可少";
};
Blockly.Blocks['title'] = {
  init: function() {
    this.appendValueInput("title01")
        .setCheck(null)
        .appendField(blan['title001']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['title002']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['html_dingyi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['html_dingyi001']);
        this.appendStatementInput("html01")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['head'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['head001']);
        this.appendStatementInput("head01")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['html_code'] = {
  init: function() {
        this.appendDummyInput()
        .appendField(blan['html_code001'])
        .appendField(new Blockly.FieldTextInput(blan['html_code002']), "code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['body'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['body001']);
        this.appendStatementInput("body01")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['top'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['top001']);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(blan['top002']);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['texto'] = {
  init: function() {
        this.appendDummyInput()
            .appendField(" ")
            .appendField(new Blockly.FieldTextInput(blan['texto001']), "texto01")
            .appendField(" ");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip(blan['texto002']);
 this.setHelpUrl("");
  }
};



Blockly.Blocks['link'] = {
  init: function() {
        this.appendDummyInput()
        .appendField("连接外部资源");
    this.appendDummyInput()
        .appendField("网址：")
        .appendField(new Blockly.FieldTextInput("https://cdn.staticfile.org/twitter-bootstrap/5.1.1/css/bootstrap.min.css"), "link01");
    this.appendDummyInput()
        .appendField("连接关系：")
        .appendField(new Blockly.FieldTextInput("stylesheet"), "link02");
    this.appendDummyInput()
        .appendField("类型：")
        .appendField(new Blockly.FieldTextInput("text/css"), "link03");
        this.appendDummyInput()
            .appendField("备注(没有可不填)：")
            .appendField(new Blockly.FieldTextInput("text/css"), "link04");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("该标签作为HTML中所有的链接标签的默认链接");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['head1'] = {
  init: function() {
        this.appendDummyInput()
        .appendField("插入标题文字");
    this.appendDummyInput()
        .appendField("大小：（1-6）")
        .appendField(new Blockly.FieldTextInput("1"), "head00");
    this.appendDummyInput()
        .appendField("文字内容：")
        .appendField(new Blockly.FieldTextInput("stylesheet"), "head02");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("标题（Heading）是通过 <h1> - <h6> 标签进行定义的。<h1> 定义最大的标题。 <h6> 定义最小的标题。");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['p'] = {
  init: function() {
    this.appendValueInput("p01")
        .setCheck(null)
        .appendField("插入段落");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("一个小小的段落");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['hr'] = {
  init: function() {
     this.appendDummyInput()
        .appendField("插入水平线");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("一个小小的水平线");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['br'] = {
  init: function() {
     this.appendDummyInput()
        .appendField("插入换行符");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("一个小小的换行符");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['div'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("插入分区(div排版)");
        this.appendDummyInput()
        .appendField("CSS类（可不填）：")
        .appendField(new Blockly.FieldTextInput('""'), "div01");
         this.appendDummyInput()
        .appendField("JS id（可不填）：")
        .appendField(new Blockly.FieldTextInput('""'), "div02");
        this.appendStatementInput("div00")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['span'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("插入不占单独行分区(span排版)");
        this.appendDummyInput()
        .appendField("CSS类（可不填）：")
        .appendField(new Blockly.FieldTextInput('""'), "span01");
         this.appendDummyInput()
        .appendField("JS id（可不填）：")
        .appendField(new Blockly.FieldTextInput('""'), "span02");
        this.appendStatementInput("span00")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
