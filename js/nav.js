function nav2() {
	$('#nav li').hover(
        function () {
            //show its submenu
            $('ul:first', this).slideDown(100);
 
        }, 
        function () {
            //hide its submenu
            $('ul', this).slideUp(100);         
        }
    );
}



