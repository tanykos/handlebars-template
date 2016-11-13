var category_template, animals_template, alltype_template;

var current_category = animals_data.category[0];
var current_animals = current_category.animals[0];

function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

$(document).ready(function(){

	var category_tab = $("#category-tab");

	var source = $("#category-template").html();
	category_template = Handlebars.compile(source);
	
	source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

	source = $("#alltype-template").html();
	alltype_template = Handlebars.compile(source);
  
	category_tab.click(function(){

		showTemplate(category_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		category_tab.addClass("active");

		$(".image").click(function (){
			var index = $(this).data("id");
			current_category = animals_data.category[index];
			showTemplate(animals_template, current_category);
		});
	});

	$("#animals-tab").click(function(){
		showTemplate(alltype_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		$("#animals-tab").addClass("active");
	});

	$('.nav-tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
	category_tab.click();
});