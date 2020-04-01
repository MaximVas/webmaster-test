/* List */
function DropDown(el) {
    this.dd = el;
    this.initEvents();
}

DropDown.prototype = {
    initEvents : function() {
        var obj = this; 
        obj.dd.on('click', function(event) {
            $(this).toggleClass('active');
            $('.wrapper-dropdown').toggleClass('open');
            $('.dropdown ul').toggleClass('scroll');
            event.stopPropagation();
        });
        $('.dropdown li').on('click', function(event) {
            var year = $(this).text();  
            $("#year").val(year);
            $(".txt-year").text(year);
        });
    }
}

$(function() {
    var dd = new DropDown( $('#dd') );
    $(document).click(function() {
        $('.wrapper-dropdown').removeClass('active');
        $('.wrapper-dropdown').removeClass('open');
        $('.dropdown ul').removeClass('scroll');
    });
});

/* Range Slider */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.text-1').onclick = function(){
        document.querySelector('#fader').value = '0';
        outputUpdate(0);
    };
    document.querySelector('.text-2').onclick = function(){
        document.querySelector('#fader').value = '1';
        outputUpdate(1);
    };
    document.querySelector('.text-3').onclick = function(){
        document.querySelector('#fader').value = '2';
        outputUpdate(2);
    };
    document.querySelector('.text-4').onclick = function(){
        document.querySelector('#fader').value = '4';
        outputUpdate(4);
    };

    var value = document.querySelector('#fader').value;
    var val = value * 25;
    var atrStep = document.querySelector("#fader");
    document.querySelector('#fader').style.background = '-webkit-linear-gradient(left ,#CCB1F1 0%,#435993 '+val+'%,#E8E8E8 '+val+'%, #E8E8E8 100%)';

    if(value == 0) {
        document.querySelector('.text-1').style.color = '#435993';
    } else if(value == 1) {
        document.querySelector('.text-2').style.color = '#435993';
    } else if(value == 2) {
        document.querySelector('.text-3').style.color = '#435993';
    } else if(value == 4) {
        document.querySelector('.text-4').style.color = '#435993';
    }
}, false);

function outputUpdate(val) {
    document.querySelector('.text-1').style.color = '#2E211C';
    document.querySelector('.text-2').style.color = '#2E211C';
    document.querySelector('.text-3').style.color = '#2E211C';
    document.querySelector('.text-4').style.color = '#2E211C';
    if(val == 0) {              
        document.querySelector('.text-1').style.color = '#435993';
    } else if(val == 1) {
        document.querySelector('.text-2').style.color = '#435993';
    } else if(val == 2) {
        document.querySelector('.text-3').style.color = '#435993';
    } else if(val == 4) {
        document.querySelector('.text-4').style.color = '#435993';
    }

    if(val > 1) {
        atrStep = document.querySelector("#fader");
        atrStep.setAttribute("step", "2");

        val = document.querySelector('#fader').value * 25;
        document.querySelector('#fader').style.background = '-webkit-linear-gradient(left ,#CCB1F1 0%,#435993 '+val+'%,#E8E8E8 '+val+'%, #E8E8E8 100%)';
    } else {
        atrStep = document.querySelector("#fader");
        atrStep.setAttribute("step", "1");

        val = document.querySelector('#fader').value * 25;
        document.querySelector('#fader').style.background = '-webkit-linear-gradient(left ,#CCB1F1 0%,#435993 '+val+'%,#E8E8E8 '+val+'%, #E8E8E8 100%)';
    }
}
