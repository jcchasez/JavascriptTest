var Button = function(element, type, text){
	this.element = element;
	this.type = type || 'default';
	this.text = text;
	this.init();
};

Button.prototype.init = function(){
	this.element.addClass('btn btn-' + this.type);
	if(this.text){
		this.element.text(this.text);
	}
};

var myButton = new Button(jQuery('#button'));