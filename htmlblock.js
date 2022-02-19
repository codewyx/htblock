
Blockly.Blocks['title'] = {
  init: function() {
    this.appendValueInput("title01")
        .setCheck(null)
        .appendField("定义标题");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("设置网页的标题");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['html_dingyi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("定义HTML内容");
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
            .appendField("定义头部");
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
        .appendField("HTML标签")
        .appendField(new Blockly.FieldTextInput("<p>你好</p>"), "code");
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
            .appendField("定义身体");
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
            .appendField("定义网页");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("一个网页的重中之重");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['texto'] = {
  init: function() {
        this.appendDummyInput()
            .appendField(" ")
            .appendField(new Blockly.FieldTextInput("文本"), "texto01")
            .appendField(" ");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("文本，必不可少");
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
