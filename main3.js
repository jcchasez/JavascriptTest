var Button = function(element, type, text) {
    this.element = element;
    this.type = type || 'default';
    this.text = text;
    this.init();
};

Button.prototype.init = function() {
    this.element.addClass('btn btn-' + this.type);
    if (this.text) {
        this.element.text(this.text);
    }
};

var DangerButton = function(element, text) {
    Button.call(this, element, 'danger', text);
};

DangerButton.prototype = Object.create(Button.prototype);
DangerButton.prototype.constructor = DangerButton;

var CrazyButton = function(element) {
    DangerButton.call(this, element, 'Touch me if you dare!');
};

CrazyButton.prototype = Object.create(DangerButton.prototype);
CrazyButton.prototype.constructor = CrazyButton;
CrazyButton.prototype.init = function() {
    Button.prototype.init.call(this);
    this.element.mouseover(function() {
        this.element.css({
            marginLeft: Math.floor(Math.random() * 500),
            marginTop: Math.floor(Math.random() * 500)
        });
    }.bind(this));
};

var myButton = new CrazyButton(jQuery('#button'));