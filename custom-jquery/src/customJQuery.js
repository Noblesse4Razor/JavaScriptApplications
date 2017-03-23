(function () {
    window.$ = function (DOM) {
        if(DOM.nodeName) return new JQ([DOM]);
        return new JQ(document.querySelectorAll(DOM));
    };
    function type(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }

    class JQ{
        constructor(DOM){
            this.DOM = DOM;
        }

        addClass(input) {
          if(type(input) == 'String' && input!='') return this.each(function(){
                var classes = this.className.split(/\s/);
                if (classes.indexOf(input) > -1) return;
                if (classes.length === 0) this.className = input;
                this.className += " " + input;
            });
          if(type(input) == 'Function')
              return this.each(function (index) {
                  $(this).addClass(input.call(this, index,this.getAttribute( "class" )));
              })
        };

        append(element){
            if(type(element)=="String") return this.each(function () {
                this.innerHTML+=element;
            });
            if(element.nodeName) return this.each(function () {
                let node=document.createElement(element.tagName);
                node.innerHTML=element.innerHTML;
                this.appendChild(node);
            });
        }
        html(htmlString){
            if(!htmlString) return this.DOM[0].innerHTML;
            if(type(htmlString)=='String') this.each(function () {
                this.innerHTML = htmlString;
            })
        }
        attr(attributeName, value ){
            return value
                ? this.each(x=>this.DOM[x].setAttribute(attributeName,value))
                : this.DOM[0].getAttribute(attributeName);
        }
        children(){
            throw new Error('Not implemented')
        }
        css(){
            throw new Error('Not implemented')
        }
        data(){
            throw new Error('Not implemented')
        }
        on(){
            throw new Error('Not implemented')
        }
        one(){
            throw new Error('Not implemented')
        }
        each(callback) {
            for (var i = 0; i < this.DOM.length; i++) {
                callback.call(this.DOM[i], i);
            }
            return this;
        }
        }
}());
